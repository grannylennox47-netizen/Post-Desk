import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = new URL(".", import.meta.url).pathname;
const port = Number(process.env.PORT || 4173);
const openAiModel = process.env.OPENAI_MODEL || "gpt-5.2";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jsx": "text/babel; charset=utf-8",
  ".png": "image/png",
};

function getOpenAiApiKey() {
  return (process.env.OPENAI_API_KEY || "")
    .trim()
    .replace(/^["'“”‘’]+/, "")
    .replace(/["'“”‘’]+$/, "");
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;

      if (body.length > 1_000_000) {
        request.destroy();
        reject(new Error("Request body too large"));
      }
    });

    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

function collectText(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(collectText).filter(Boolean).join("\n");
  if (typeof value === "object") {
    if (typeof value.output_text === "string") return value.output_text;
    if (typeof value.text === "string") return value.text;
    if (value.content) return collectText(value.content);
    if (value.output) return collectText(value.output);
  }

  return "";
}

function parseModelJson(text) {
  const trimmed = text.trim().replace(/^```json\s*/i, "").replace(/```$/i, "").trim();
  const start = trimmed.indexOf("{");
  const end = trimmed.lastIndexOf("}");

  if (start === -1 || end === -1) {
    throw new Error("No JSON object found in model response");
  }

  return JSON.parse(trimmed.slice(start, end + 1));
}

function buildPrompt(payload) {
  return `Create local political campaign content for Local Voice Studio.

Return only valid JSON with these exact keys:
{
  "title": "string",
  "primary": "string",
  "facebookPost": "string",
  "reelScript": "string",
  "caption": "string",
  "replyToComment": "string",
  "hooks": [
    { "type": "Everyday impact", "text": "string" },
    { "type": "Quiet frustration", "text": "string" },
    { "type": "Practical fix", "text": "string" },
    { "type": "Resident question", "text": "string" },
    { "type": "Local pride", "text": "string" },
    { "type": "Low-drama challenge", "text": "string" }
  ],
  "humanRewrite": "string",
  "humaniseBefore": "string",
  "humaniseAfter": "string",
  "neighbourTone": "string",
  "moreSpecific": "string",
  "shorterVersion": "string"
}

Rules:
- Plain English.
- Calm civic feel.
- Sound like a normal local person.
- Short sentences.
- One clear point per post.
- Local issue first, national politics only if directly relevant.
- No Westminster language.
- No council-report wording.
- No grandiose or AI-like phrases.
- No outrage bait, voter attacks, or culture-war language.
- No generic filler such as "working hard", "deliver real change", or "standing up for residents".
- Avoid: "this matters", "the heart of it", "in today's society", "constructive discourse".
- Do not invent facts, achievements, quotes, photos, endorsements, dates, or legal claims.
- Never invent evidence, locations, complaints, resident concerns, responsible organisations, or council powers.
- Do not imply councillors have powers they do not have.
- If a detail is missing, use a bracketed prompt such as [add exact location] instead of filling the gap.
- Keep the draft narrower than the evidence supplied.
- Prefer "I have asked", "I will chase", "I will update residents", not "I will fix".
- In moreSpecific, add bracketed prompts where facts are missing, such as [add exact location], [add date reported], [add reporting reference if known].
- Include the imprint reminder as a reminder line only.
- Keep copy suitable for editing before posting.

Brief and profile:
${JSON.stringify(payload, null, 2)}`;
}

async function handleGenerate(request, response) {
  try {
    const openAiApiKey = getOpenAiApiKey();

    if (!openAiApiKey) {
      response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      response.end(
        JSON.stringify({
          ok: false,
          fallback: true,
          message: "OPENAI_API_KEY is not set. Using local placeholder generation.",
        }),
      );
      return;
    }

    const payload = await readJson(request);
    const apiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openAiApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: openAiModel,
        instructions:
          "You are a careful UK local political communications assistant. Use only supplied local facts. Never invent evidence, locations, complaints, resident concerns, responsible organisations, or council powers. Use bracketed prompts where details are missing. Write grounded, human, platform-native drafts and avoid legal advice.",
        input: buildPrompt(payload),
      }),
    });

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      console.error("OpenAI request failed:", data.error?.message || data);
      response.writeHead(apiResponse.status, { "Content-Type": "application/json; charset=utf-8" });
      response.end(
        JSON.stringify({
          ok: false,
          message: data.error?.message || "OpenAI request failed.",
        }),
      );
      return;
    }

    const text = collectText(data);
    const draft = parseModelJson(text);

    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ ok: true, draft, model: openAiModel }));
  } catch (error) {
    console.error("Generation endpoint failed:", error.message || error);
    response.writeHead(500, { "Content-Type": "application/json; charset=utf-8" });
    response.end(
      JSON.stringify({
        ok: false,
        message: error.message || "Could not generate content.",
      }),
    );
  }
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://localhost:${port}`);

    if (request.method === "POST" && url.pathname === "/api/generate") {
      await handleGenerate(request, response);
      return;
    }

    const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
    const filePath = normalize(join(root, requestedPath));

    if (!filePath.startsWith(root)) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": types[extname(filePath)] || "application/octet-stream",
    });
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Local Voice Studio is running at http://localhost:${port}`);
});
