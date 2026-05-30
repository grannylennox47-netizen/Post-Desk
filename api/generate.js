const openAiModel = process.env.OPENAI_MODEL || "gpt-5.2";

function getOpenAiApiKey() {
  return (process.env.OPENAI_API_KEY || "")
    .trim()
    .replace(/^["'“”‘’]+/, "")
    .replace(/["'“”‘’]+$/, "");
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
  return `Create local political campaign content for Post Desk.

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

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(405).json({ ok: false, message: "Method not allowed." });
    return;
  }

  try {
    const openAiApiKey = getOpenAiApiKey();

    if (!openAiApiKey) {
      response.status(200).json({
        ok: false,
        fallback: true,
        message: "OPENAI_API_KEY is not set. Using local placeholder generation.",
      });
      return;
    }

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
        input: buildPrompt(request.body || {}),
      }),
    });

    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      response.status(apiResponse.status).json({
        ok: false,
        message: data.error?.message || "OpenAI request failed.",
      });
      return;
    }

    const text = collectText(data);
    const draft = parseModelJson(text);

    response.status(200).json({ ok: true, draft, model: openAiModel });
  } catch (error) {
    response.status(500).json({
      ok: false,
      message: error.message || "Could not generate content.",
    });
  }
}
