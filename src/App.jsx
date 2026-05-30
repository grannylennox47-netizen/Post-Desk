const toneNotes = {
  calm: "steady, measured, and practical",
  straightforward: "plainspoken, specific, and to the point",
  practical: "useful, local, and focused on the next step",
  direct: "clear, firm, and not wordy",
  neighbourly: "local, friendly, and plain English",
};

const toneDescriptions = {
  calm: "calm and practical",
  straightforward: "plain English",
  practical: "focused on what happens next",
  direct: "clear and firm",
  neighbourly: "local and friendly",
};

const formatLabels = {
  "Facebook post": "Facebook post",
  "reel script": "30-second reel script",
  caption: "caption",
  "reply to comment": "reply to comment",
};

const defaultProfile = {
  publicTone: "Calm, local, practical, non-tribal, and community-focused.",
  candidateStyle:
    "Earnest community-focused young Conservative candidate in a traditional Tory ward facing a Reform challenge.",
  strongestQualities:
    "Earnest, hard-working, visible locally, listens carefully, focused on everyday services.",
  localStrengths:
    "Visible on local streets, practical about council basics, willing to listen before arguing.",
  knownWeaknesses:
    "Can risk sounding too polished, too party-led, or too careful if the wording is not specific.",
  voterGroupsToReassure:
    "Long-standing Conservative voters, Reform-curious residents, older homeowners, parents, and small business owners.",
  avoidList:
    "National rows, party point-scoring, attacks on Reform voters, smug party language, abstract ideology.",
  phrasesToAvoid:
    "This matters, standing up for residents, working hard, delivering change, hardworking families, local people deserve better.",
  naturalPhrases:
    "I have asked for the details, I will chase the answer, tell me the exact spot, no party row, just a local fix.",
  typicalIssues:
    "Roads and pavements, bins, street lighting, antisocial behaviour, GP access, local shops, buses, parking.",
  audienceType:
    "Traditional Tory ward with pragmatic residents, older homeowners, families, small business owners, and some voters tempted by Reform.",
  politicalRiskNotes:
    "Needs to sound firm on local concerns without sounding angry, dismissive, or tribal. Should not lecture Reform-leaning voters or imply their concerns are unreasonable.",
  preferredWordingStyle:
    "Short sentences, plain English, specific local examples, first person singular, practical asks, no slogans.",
};

const contentTemplates = [
  {
    id: "councillor-powers",
    name: "What can a councillor actually do?",
    requiredFields: [
      "Local issue",
      "What the council controls",
      "What the councillor can ask for",
      "What residents can send in",
      "Call to action",
    ],
    example:
      "A councillor cannot personally fix every broken street light. But they can report it, chase the right team, ask for a clear timescale, and keep residents updated.\n\nOn the lights near Riverside station, I am asking for three things: a proper inspection, a repair date, and an explanation if there is a delay.\n\nIf you know another light that has been out for weeks, send me the exact location.",
  },
  {
    id: "issue-explainer",
    name: "Local issue explainer",
    requiredFields: [
      "Issue",
      "Where it is happening",
      "Who is affected",
      "Why it matters locally",
      "Next practical step",
    ],
    example:
      "The broken lights near Riverside station are not just annoying. They change how people feel walking home after work or school.\n\nParents have told me they avoid that stretch after dark. Commuters have said the crossing feels less safe.\n\nI am asking for the repair history, the current fault report, and a date for the fix.",
  },
  {
    id: "thanking-endorser",
    name: "Thanking an endorser",
    requiredFields: [
      "Endorser name",
      "How they know the area",
      "What they said",
      "Shared local priority",
      "Low-key thanks",
    ],
    example:
      "Thank you to Priya Patel for her kind words this week.\n\nPriya runs a small business on the High Street and knows how much the basics matter: parking, clean streets, safe crossings, and support for local shops.\n\nI am grateful for the support, and I will keep focusing on the practical things residents raise with me.",
  },
  {
    id: "responding-criticism",
    name: "Responding to criticism",
    requiredFields: [
      "Criticism",
      "What is fair in it",
      "Correction or context",
      "Calm response",
      "Next action",
    ],
    example:
      "A few people have asked why this was not sorted sooner. That is a fair question.\n\nThe short answer is that the first report did not lead to a repair, so I am now asking for the fault history and a clear timescale.\n\nI am not interested in a row about it. I just want residents to know what is happening and when it will be fixed.",
  },
  {
    id: "doorstep-update",
    name: "Doorstep update",
    requiredFields: [
      "Street or area",
      "Main issue heard",
      "Second issue heard",
      "One resident quote or detail",
      "Follow-up action",
    ],
    example:
      "Good conversations on Oak Avenue this afternoon.\n\nThe two things that came up most were missed bin collections and the uneven pavement near the bus stop.\n\nOne resident told me the pavement has been patched twice but still collects water after rain. I am going to raise both points and report back when I have an update.",
  },
  {
    id: "community-event",
    name: "Community event",
    requiredFields: [
      "Event name",
      "Date and time",
      "Location",
      "Who it is for",
      "What people can expect",
    ],
    example:
      "I will be at Riverside Library on Saturday from 10am to 12pm for a local drop-in.\n\nNo speeches and no appointment needed. Just come along if there is something you want to raise about the ward.\n\nI am especially keen to hear about roads, parking, lighting, bins, and anything that is making daily life harder than it needs to be.",
  },
  {
    id: "myth-vs-reality",
    name: "Myth vs reality",
    requiredFields: [
      "Myth",
      "Reality",
      "Local example",
      "Why the confusion exists",
      "Practical takeaway",
    ],
    example:
      "Myth: Nothing can be done about the broken lights near the station.\n\nReality: It can be reported, chased, and checked against the repair schedule.\n\nThe useful thing is to be specific. If you send the column number or exact location, it is much easier to get a straight answer.",
  },
  {
    id: "before-after",
    name: "Before/after local problem",
    requiredFields: [
      "Problem before",
      "What changed",
      "Who helped",
      "Remaining issue",
      "Thanks or next step",
    ],
    example:
      "Before: the crossing by Riverside station was poorly lit and residents were avoiding it after dark.\n\nAfter: two of the broken lights have now been repaired.\n\nThank you to everyone who sent locations and photos. I am still chasing the remaining light by the bus stop and will update residents when I hear back.",
  },
  {
    id: "calm-opponent-challenge",
    name: "Calm challenge to opponent",
    requiredFields: [
      "Opponent claim",
      "Your calm correction",
      "Local evidence",
      "Shared resident concern",
      "Challenge or question",
    ],
    example:
      "I understand why people are frustrated about the state of the roads. I am frustrated too.\n\nBut residents deserve more than slogans. The question is simple: which roads need urgent attention, what has already been reported, and when will the work happen?\n\nI am happy to work with anyone who wants to get those answers for Riverside.",
  },
  {
    id: "reel-hook-body-close",
    name: "Reel script with hook, body, close",
    requiredFields: [
      "Hook line",
      "Location shot",
      "Issue in one sentence",
      "Human example",
      "Close or call to action",
    ],
    example:
      "Hook: \"If you walk home through Riverside station, you may already know this spot.\"\n\nBody: \"The lights near the crossing have been out, and residents have told me it feels unsafe after dark. I am asking for the repair history and a date for the fix.\"\n\nClose: \"Send me the exact places I should check next, and I will keep raising them.\"",
  },
];

const complianceItems = [
  "Check factual claims",
  "Avoid personal attacks",
  "Avoid attacking voters",
  "Avoid misleading images",
  "Include election imprint where required",
  "Confirm permissions for photos",
  "Avoid implying powers councillors do not have",
  "Distinguish local council issues from national policy",
  "Check whether this sounds like a national campaign rather than a local issue",
  "Check whether this post overpromises",
];

const visualTemplates = {
  square: {
    name: "Square Facebook graphic",
    width: 1080,
    height: 1080,
    note: "Good for Facebook and Instagram feeds.",
  },
  story: {
    name: "Story/reel title card",
    width: 1080,
    height: 1920,
    note: "Tall card for reels, stories, and short video covers.",
  },
  issue: {
    name: "Local issue card",
    width: 1200,
    height: 900,
    note: "Simple card for one local problem.",
  },
  endorsement: {
    name: "Endorsement card",
    width: 1200,
    height: 900,
    note: "Use only with permission from the endorser.",
  },
  beforeAfter: {
    name: "Before/after local problem card",
    width: 1200,
    height: 900,
    note: "Show the problem and the practical next step.",
  },
  leaflet: {
    name: "Simple A5 leaflet",
    width: 1240,
    height: 1748,
    note: "One-page printable leaflet layout.",
  },
  asking: {
    name: "What I’m asking for card",
    width: 1200,
    height: 900,
    note: "A calm card with one clear ask.",
  },
};

const initialVisual = {
  template: "square",
  headline: "",
  subhead: "",
  priorities: "",
  callToAction: "",
  primaryColor: "#1c3f35",
  backgroundColor: "#fffdf8",
  imageData: "",
  imageAlt: "",
  imageFocusX: 50,
  imageFocusY: 50,
  realPhotosOnly: true,
};

const locationTagOptions = ["Barrow", "Walney", "Ulverston", "Dalton", "Askam", "Furness"];

const issueTagOptions = [
  "transport",
  "roads",
  "potholes",
  "crossings",
  "community groups",
  "coast",
  "erosion",
  "library",
  "market",
  "environment",
  "litter",
  "parks",
  "regeneration",
  "youth",
  "health",
];

const smartImageRules = [
  {
    words: ["coastal erosion", "erosion", "coast", "sea wall", "walney"],
    locations: ["Walney"],
    tags: ["coast", "erosion", "environment"],
    reason: "Coastal or erosion wording usually wants real Walney/coast images.",
  },
  {
    words: ["transport", "bus", "road", "roads", "crossing", "crossings", "pothole", "potholes"],
    locations: [],
    tags: ["transport", "roads", "crossings", "potholes"],
    reason: "Transport wording works best with buses, roads, crossings, or street-level images.",
  },
  {
    words: ["community", "volunteer", "volunteers", "group", "groups", "event"],
    locations: [],
    tags: ["community groups", "market", "parks", "youth"],
    reason: "Community wording should use real people, groups, or local event images where permission is clear.",
  },
];

const workflowSteps = [
  { id: "candidate-setup", number: 1, label: "Ground it" },
  { id: "issue-briefing", number: 2, label: "Add detail" },
  { id: "content-drafting", number: 3, label: "Draft it" },
  { id: "tone-refinement", number: 4, label: "Improve it" },
  { id: "visuals-assets", number: 5, label: "Add photos" },
];

const blankBrief = {
  candidateName: "",
  ward: "",
  party: "",
  issue: "",
  localExample: "",
  whoAffected: "",
  whyItMatters: "",
  practicalNextStep: "",
  callToAction: "",
  tone: "neighbourly",
  format: "Facebook post",
  avoid: "",
  imprintReminder: "",
  profile: defaultProfile,
  templateId: contentTemplates[0].id,
};

const sampleBrief = {
  ...blankBrief,
  candidateName: "Sam Taylor",
  ward: "Riverside",
  party: "Conservative",
  issue: "broken street lights near the station",
  localExample:
    "Parents and commuters have told me the path feels unsafe after 6pm, especially by the zebra crossing.",
  whoAffected: "Parents, commuters, pupils walking home, and residents using the station path after dark.",
  whyItMatters: "It changes whether people feel comfortable walking that route in the evening.",
  practicalNextStep: "Ask for the repair history, the responsible team, and a clear timescale.",
  callToAction: "Send me the exact location and when you noticed it",
  avoid: "party slogans, council-report wording, fake outrage",
  imprintReminder: "Promoted by Sam Taylor, Riverside Community Campaign.",
};

const initialBrief = blankBrief;

function hasStarterDetails(brief) {
  return Boolean(
    brief.candidateName?.trim() ||
      brief.ward?.trim() ||
      brief.party?.trim() ||
      brief.issue?.trim() ||
      brief.localExample?.trim(),
  );
}

function makeHooks(brief) {
  const place = brief.ward || "our area";
  const issue = brief.issue || "this local issue";

  return [
    {
      type: "Everyday impact",
      text: `If you use this part of ${place}, you may already have noticed ${issue}.`,
    },
    {
      type: "Quiet frustration",
      text: `It is frustrating when a basic local problem like ${issue} keeps being left.`,
    },
    {
      type: "Practical fix",
      text: `The useful question is simple: who is responsible for ${issue}, and when will residents get an update?`,
    },
    {
      type: "Resident question",
      text: `Have you seen the same problem near you in ${place}?`,
    },
    {
      type: "Local pride",
      text: `${place} should feel looked after in the everyday places people use most.`,
    },
    {
      type: "Low-drama challenge",
      text: `No shouting about ${issue}. Just the details, the responsible team, and a clear next step.`,
    },
  ];
}

function stripBannedPhrases(text) {
  return text
    .replaceAll("this matters", "")
    .replaceAll("This matters", "")
    .replaceAll("the heart of it", "the point")
    .replaceAll("The heart of it", "The point")
    .replaceAll("in today's society", "now")
    .replaceAll("In today's society", "Now")
    .replaceAll("constructive discourse", "a proper conversation")
    .replaceAll("Constructive discourse", "A proper conversation")
    .replaceAll("deeply committed to", "focused on")
    .replaceAll("I am focused on practical local answers, not shouting matches.", "I want to get this sorted properly.")
    .replaceAll("This needs checking properly and sorting sensibly.", "It needs checking and sorting.");
}

function antiWaffleText(text) {
  const fillerPatterns = [
    /\bworking hard to\b/gi,
    /\bstanding up for (local )?residents\b/gi,
    /\bdelivering real change\b/gi,
    /\bhardworking families\b/gi,
    /\blong[- ]term plan\b/gi,
    /\bclear plan for change\b/gi,
    /\bI am deeply committed to\b/gi,
    /\bI am committed to\b/gi,
    /\bat the heart of our community\b/gi,
    /\bin Westminster\b/gi,
    /\bnational conversation\b/gi,
    /\bresidents deserve better\b/gi,
    /\bnow more than ever\b/gi,
  ];

  const seen = new Set();
  const lines = stripBannedPhrases(text)
    .split("\n")
    .map((line) => {
      let cleaned = line;
      fillerPatterns.forEach((pattern) => {
        cleaned = cleaned.replace(pattern, "");
      });
      return cleaned.replace(/\s{2,}/g, " ").trim();
    })
    .filter((line) => {
      if (!line) return false;
      const key = line.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

  return lines.join("\n\n").replace(/\n{3,}/g, "\n\n").trim();
}

function specificPrompts(brief) {
  const details = [];

  details.push(brief.localExample ? brief.localExample : "[add who is affected and what they have seen]");
  details.push(brief.ward ? `Area: ${brief.ward}` : "Area: [add ward or estate]");
  details.push("Exact spot: [add exact street, junction, column number, stop, or doorway]");
  details.push("Nearby landmark: [add nearby school, shop, station, park, or crossing]");
  details.push("When it happens: [add time of day or date noticed]");
  details.push("Reported already: [add date reported]");
  details.push("Reference: [add reporting reference if known]");

  return details;
}

function makeMoreSpecificText(brief, sourceText) {
  const issue = brief.issue || "[add local issue]";
  const action = brief.callToAction || "send me the exact details";
  const detailLines = specificPrompts(brief).map((detail) => `- ${detail}`).join("\n");
  const base = antiWaffleText(sourceText).split("\n\n").slice(0, 2).join("\n\n");

  return antiWaffleText(
    `${base}\n\nTo make this stronger, add the local facts before posting:\n${detailLines}\n\nThe ask: ${action}.\n\nKeep the point narrow: ${issue}. Do not add claims unless they have been checked.`,
  );
}

function makeShorterText(brief, sourceText) {
  const issue = brief.issue || "this local issue";
  const ward = brief.ward || "our area";
  const example =
    brief.localExample || "[add what has been seen or reported]";
  const imprint = brief.imprintReminder || "Check imprint before publishing.";

  return antiWaffleText(
    `${issue} in ${ward} needs a practical answer.\n\n${example}\n\nI am asking who is responsible, what has already been reported, and when residents will get an update.\n\nIf you have seen it too, send me the exact location.\n\nImprint reminder: ${imprint}`,
  );
}

function makeReplyToComment(brief) {
  const ward = brief.ward || "the area";
  const issue = brief.issue || "this";
  const example =
    brief.localExample || "[add the specific concern raised in the comment]";
  const imprint = brief.imprintReminder || "Check imprint before publishing.";

  return antiWaffleText(
    `Thanks for raising this. I want to get the details right before saying more about ${issue} in ${ward}.\n\n${example}\n\nI do not want to turn it into a party row. The useful thing is to get the exact details and ask the responsible team for a clear answer.\n\nIf you can, send me the exact spot and whether it has already been reported.\n\nImprint reminder: ${imprint}`,
  );
}

function buildRealityCheck(brief) {
  const issue = `${brief.issue || ""} ${brief.localExample || ""}`.toLowerCase();
  const cta = brief.callToAction || "send me the exact details";
  let likelyBody = "Check who owns this before posting: local council, county council, town/parish council, police, NHS, utility company, or national government.";

  if (/(bin|rubbish|litter|fly.?tip|street clean)/.test(issue)) {
    likelyBody = "This is likely a local council service, but still check the exact team before naming responsibility.";
  } else if (/(pothole|road|pavement|street light|lighting|crossing|traffic|parking|bus stop)/.test(issue)) {
    likelyBody = "This may sit with the district, county, unitary, or highways authority. Check before saying the council can fix it directly.";
  } else if (/(crime|antisocial|anti-social|police|speeding)/.test(issue)) {
    likelyBody = "This may involve the police, council community safety team, or highways. Avoid implying a councillor can personally enforce it.";
  } else if (/(gp|doctor|hospital|nhs|ambulance|dentist)/.test(issue)) {
    likelyBody = "This may be NHS or national policy rather than a council power. Keep the wording careful and local.";
  }

  return [
    {
      label: "Who controls it?",
      text: likelyBody,
    },
    {
      label: "Power check",
      text: "Safer wording: report, ask, chase, request a timescale, and update residents. Avoid saying you will fix it personally.",
    },
    {
      label: "Realistic action",
      text: cta
        ? `The ask is: ${cta}. Make sure it asks residents for something they can actually send.`
        : "Add one clear ask, such as exact locations, photos with permission, dates, or report references.",
    },
    {
      label: "Clarity",
      text: brief.localExample
        ? "Good: there is a local example. Add exact locations or dates if you have them."
        : "Add a real local example before posting. Do not fill the gap with a generic political line.",
    },
  ];
}

function humaniseText(brief, sourceText) {
  const name = brief.candidateName || "I";
  const ward = brief.ward || "the area";
  const issue = brief.issue || "this";
  const example =
    brief.localExample ||
    "[add what has been seen or reported]";
  const imprint = brief.imprintReminder || "Check imprint before publishing.";

  const cleaned = stripBannedPhrases(sourceText)
    .replace(/\bI have been hearing from people\b/g, "People have told me")
    .replace(/\bI am interested in getting the basics right locally:[^\n.]+[.]/g, "")
    .replace(/\bThe useful test is simple:[^\n.]+[.]/g, "")
    .replace(/\bLocal examples help make the case stronger[.]/g, "Specific examples help.")
    .replace(/\bIf this is affecting you too, tell me where and when you have seen it[.]/g, "If you have seen it too, tell me where.")
    .replace(/\bI know some people feel politics has stopped listening, and I take that seriously[.]/g, "")
    .replace(/\bI am listening carefully to what people are seeing day to day[.]/g, "")
    .replace(/\bThis does not need to become a national row or a party shouting match[.]/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const imprintLine = cleaned.includes("Imprint reminder:")
    ? cleaned.slice(cleaned.indexOf("Imprint reminder:"))
    : `Imprint reminder: ${imprint}`;

  if (brief.format === "reel script") {
    return antiWaffleText(
      `Opening: "If you use this part of ${ward}, you may know this already."\n\nShot 1: ${issue}.\n\nShot 2: ${example}\n\nShot 3: "${name} here. I want this checked and sorted, without the usual political shouting."\n\nClose: "Tell me where else I should look."\n\n${imprintLine}`,
    );
  }

  if (brief.format === "reply to comment") {
    return antiWaffleText(
      `Thanks for raising this. I want to get the details right before saying more.\n\n${example}\n\nI do not want to turn it into a party row. I want the details, then I want it sorted.\n\nIf you can, send me the exact spot.\n\n${imprintLine}`,
    );
  }

  if (brief.format === "caption") {
    return antiWaffleText(
      `${issue} in ${ward} needs sorting.\n\n${example}\n\nIf you have seen the same thing nearby, send me the details.\n\n${imprintLine}`,
    );
  }

  return antiWaffleText(
    `A local issue to check in ${ward}: ${issue}.\n\n${example}\n\nI do not want to turn this into a party row. I want it checked and sorted.\n\nIf you have seen it too, tell me where.\n\n${imprintLine}`,
  );
}

function generateTemplateDraft(brief, context) {
  const { name, ward, partyLine, issue, example, imprint, selectedTemplate } = context;

  const drafts = {
    "councillor-powers": `A councillor cannot personally fix every local problem. But they can report it, chase the right team, ask for a clear timescale, and keep residents updated.\n\nOn ${issue} in ${ward}, I am asking for three things: what has already been reported, who is responsible for the fix, and when residents can expect an answer.\n\n${example}\n\nIf you know another example nearby, send me the exact location.\n\nImprint reminder: ${imprint}`,
    "issue-explainer": `${issue} in ${ward} is not just a line on a report.\n\n${example}\n\nThe practical question is simple: who is responsible, what has been reported, and when will it be fixed?\n\nI am asking for those answers and will share what I hear back.\n\nImprint reminder: ${imprint}`,
    "thanking-endorser": `Thank you to everyone in ${ward} who has taken the time to speak to me and offer support.\n\nThe point that keeps coming up is simple: people want the basics done well. ${issue} is one example.\n\n${example}\n\nI am grateful for the encouragement, and I will keep focusing on practical local issues.\n\nImprint reminder: ${imprint}`,
    "responding-criticism": `A fair question about ${issue}: what has happened so far, and what can be checked next?\n\n${example}\n\nI am not interested in pretending this is simple if it is not. I am asking for the facts, the timescale, and who is responsible for the next step.\n\nPeople deserve a straight answer.\n\nImprint reminder: ${imprint}`,
    "doorstep-update": `A local issue to check in ${ward}: ${issue}.\n\n${example}\n\nI am going to raise this and report back when I have an update. If it is affecting your street too, send me the details.\n\nImprint reminder: ${imprint}`,
    "community-event": `I will be out in ${ward} speaking with residents about local issues, including ${issue}.\n\nNo speeches and no appointment needed. Just come over if there is something you want to raise.\n\n${example}\n\nI am especially keen to hear practical details: the exact place, when it happens, and what has already been reported.\n\nImprint reminder: ${imprint}`,
    "myth-vs-reality": `Myth: Nothing can be done about ${issue}.\n\nReality: It can be reported, chased, checked, and kept on the agenda until residents get a proper answer.\n\nLocal example: ${example}\n\nThe useful thing is to be specific. Send the exact location, any dates, and what you have already been told.\n\nImprint reminder: ${imprint}`,
    "before-after": `Before: ${issue} in ${ward}.\n\nWhat we know: ${example}\n\nAfter: this is the part I want to update clearly. Has it been fixed, partly fixed, or left as it was?\n\nIf you have seen a change on the ground, good or bad, send me the details so I can follow it up properly.\n\nImprint reminder: ${imprint}`,
    "calm-opponent-challenge": `${issue} needs a clear answer without turning it into a row.\n\nThe question is simple: what has been reported, who is responsible, and when will people in ${ward} get an answer?\n\nI am happy to work with anyone who wants to get that sorted.\n\nImprint reminder: ${imprint}`,
    "reel-hook-body-close": `Hook: "If you live in ${ward}, you may already know this problem."\n\nBody: "${issue}. ${example} I am ${name}, your ${partyLine}, and I am asking for a clear, practical answer."\n\nClose: "Tell me where else I should check, and I will keep raising it."\n\nImprint reminder: ${imprint}`,
  };

  return drafts[selectedTemplate.id] || "";
}

function generateDraft(brief) {
  const name = brief.candidateName || "your local candidate";
  const ward = brief.ward || "the ward";
  const partyLine = brief.party ? `${brief.party} candidate` : "local candidate";
  const issue = brief.issue || "the issue";
  const example =
    [
      brief.localExample ||
        "[add what has been seen or reported]",
      brief.whoAffected ? `Who is affected: ${brief.whoAffected}` : "",
      brief.whyItMatters ? `Why it matters locally: ${brief.whyItMatters}` : "",
      brief.practicalNextStep ? `Practical next step: ${brief.practicalNextStep}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  const selectedTone = toneNotes[brief.tone] || "clear and local";
  const profile = brief.profile || defaultProfile;
  const imprint = brief.imprintReminder || "Check imprint before publishing.";
  const typicalIssues = profile.typicalIssues || "everyday local services";
  const profileText = Object.values(profile).join(" ").toLowerCase();
  const avoidText = `${brief.avoid} ${profile.avoidList}`.toLowerCase();
  const localStance = `I am interested in getting the basics right locally: ${typicalIssues}.`;
  const qualitiesLine = profileText.includes("listen")
    ? "I am listening carefully to what people are seeing day to day."
    : "I am looking at the detail and trying to be useful.";
  const audienceLine = profileText.includes("reform")
    ? "I know some people feel politics has stopped listening, and I take that seriously."
    : "I know people are frustrated, and they deserve to be heard properly.";
  const avoidLine = avoidText.includes("culture")
    ? "This does not need to become a national row or a party shouting match."
    : "This does not need to become a party shouting match.";
  const wordingLine = profileText.includes("plain english")
    ? "The useful test is simple: what is happening, where it is happening, and what needs to change."
    : `The voice should stay ${selectedTone}.`;
  const selectedTemplate =
    contentTemplates.find((template) => template.id === brief.templateId) || contentTemplates[0];

  const base = {
    "Facebook post": `A local issue to check in ${ward}: ${issue}.\n\n${example}\n\nI am ${name}, standing as a ${partyLine}. ${localStance}\n\n${avoidLine} ${wordingLine} This needs checking properly and sorting sensibly.\n\nIf this is affecting you too, tell me where and when you have seen it. Local examples help make the case stronger.\n\nImprint reminder: ${imprint}`,
    "reel script": `Opening: "If you use this part of ${ward}, you may already know the problem."\n\nShot 1: Stand near the location and name the issue: ${issue}.\n\nShot 2: Use the local example: ${example}\n\nShot 3: "I am ${name}, your ${partyLine}. I am focused on practical local issues, not political shouting."\n\nShot 4: "${audienceLine} The answer is to listen, check the details, and get it sorted."\n\nClose: "Comment or message me with the places I should check next."\n\nImprint reminder: ${imprint}`,
    caption: `${issue} in ${ward} needs a clear answer. ${example} I am focused on practical local answers, not shouting matches. If you have seen the same thing nearby, send me the details so I can keep pushing for a fix.\n\nImprint reminder: ${imprint}`,
    "reply to comment": `Thanks for raising this. I want to get the details right before saying more about ${issue} in ${ward}. ${example}\n\n${avoidLine} The useful thing is to get the details right and press for a sensible answer.\n\nIf you are happy to, send me the exact spot and time it tends to happen. Specific examples make a real difference.\n\nImprint reminder: ${imprint}`,
  };

  const templateDraft = generateTemplateDraft(brief, {
    name,
    ward,
    partyLine,
    issue,
    example,
    imprint,
    selectedTemplate,
  });
  const primary = antiWaffleText(templateDraft || base[brief.format] || base["Facebook post"]);
  const facebookPost = antiWaffleText(
    brief.format === "Facebook post" ? primary : templateDraft || base["Facebook post"],
  );
  const reelScript = antiWaffleText(
    selectedTemplate.id === "reel-hook-body-close" ? templateDraft : base["reel script"],
  );
  const caption = antiWaffleText(brief.format === "caption" ? primary : base.caption);
  const humanRewrite = antiWaffleText(primary
    .replace("I want our local updates to sound like real life, not a council PDF.", "I want to talk about it in normal language.")
    .replace("This needs a practical fix and a clear answer for residents.", "It needs sorting, and people deserve a straight answer.")
    .replace("The more local detail we have, the harder it is to ignore.", "Specific examples make a real difference.")
    .replaceAll("practical answer", "sensible answer")
    .replaceAll("Profile guide:", "Keep in mind:"));
  const neighbourTone = humaniseText(brief, primary);
  const moreSpecific = makeMoreSpecificText(brief, primary);
  const shorterVersion = makeShorterText(brief, primary);

  return {
    title: selectedTemplate?.name || formatLabels[brief.format] || "Generated draft",
    primary,
    facebookPost,
    reelScript,
    caption,
    replyToComment: makeReplyToComment(brief),
    hooks: makeHooks(brief),
    humanRewrite,
    humaniseBefore: primary,
    humaniseAfter: neighbourTone,
    neighbourTone,
    moreSpecific,
    shorterVersion,
    realityCheck: buildRealityCheck(brief),
  };
}

function Field({ label, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}

function buildVoiceSummary(brief) {
  const ward = brief.ward || "Not set yet";
  const tone = brief.tone || "neighbourly";
  const issue = brief.issue || "No issue yet";
  const profile = brief.profile || defaultProfile;
  const risk = profile.politicalRiskNotes || "";
  const riskText = risk.toLowerCase();
  const toneLabel = tone.charAt(0).toUpperCase() + tone.slice(1);
  const needsFirmness = riskText.includes("reform") || riskText.includes("angry") || riskText.includes("tribal");
  const needsPlainness = `${profile.preferredWordingStyle} ${profile.phrasesToAvoid}`.toLowerCase().includes("plain");
  const hasLocalExample = Boolean(brief.localExample?.trim());
  const hasIssue = Boolean(brief.issue?.trim());
  const toneDescription = toneDescriptions[tone] || "plain and useful";
  const nextMove =
    brief.callToAction?.trim() ||
    (hasLocalExample
      ? "Ask residents for the exact location and when they noticed it."
      : "Add the exact street, estate, junction, shop, stop, or hall before posting.");

  return {
    kicker: "Current brief",
    ward,
    issue,
    tone: `${toneLabel}${needsPlainness ? ", plain English" : ""}`,
    reminder: !hasIssue
      ? "Start with a real place, a real problem, and one thing that can be checked."
      : needsFirmness
      ? "Keep it local. Do not turn frustration into a row. Stick to what can be checked or chased."
      : "Stick to what can be checked, chased, or reported. Do not make it bigger than it is.",
  };
}

function EmotionalAnchor({ brief }) {
  const summary = buildVoiceSummary(brief);
  const hasBriefInfo = Boolean(brief.ward?.trim() || brief.issue?.trim());
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (hasBriefInfo) {
      setIsOpen(true);
    }
  }, [hasBriefInfo]);

  return (
    <details
      className="emotional-anchor brief-collapsible"
      open={isOpen}
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
    >
      <summary>
        <span>{summary.kicker}</span>
        <small>{hasBriefInfo ? "View current notes" : "Open once you have something to summarise"}</small>
      </summary>
      <dl className="working-note-list">
        <div>
          <dt>Ward</dt>
          <dd>{summary.ward}</dd>
        </div>
        <div>
          <dt>Current issue</dt>
          <dd>{summary.issue}</dd>
        </div>
        <div>
          <dt>Tone mode</dt>
          <dd>{summary.tone}</dd>
        </div>
        <div className="brief-reminder">
          <dt>Reminder</dt>
          <dd>{summary.reminder}</dd>
        </div>
      </dl>
    </details>
  );
}

function ExamplePrompt({ onLoad }) {
  return (
    <aside className="example-prompt-card" aria-label="Try an example">
      <div>
        <span>Try an example</span>
        <h3>Want to see how Post Desk works?</h3>
        <p>Load a sample local issue, then follow the same steps as you would with your own post.</p>
      </div>
      <button className="copy-button" type="button" onClick={onLoad}>
        Load example
      </button>
    </aside>
  );
}

function buildGroundingChecks(brief) {
  const issueText = `${brief.issue || ""} ${brief.localExample || ""}`;
  const hasPlace = /\b(near|outside|opposite|by|at|around|next to|junction|road|street|station|school|park|library|market|crossing|estate|avenue|lane|close|drive|high street)\b/i.test(issueText);
  const hasEvidence = (brief.localExample || "").trim().length > 45;
  const hasChase = Boolean((brief.practicalNextStep || brief.callToAction || "").trim());

  return [
    {
      label: "Place",
      ok: hasPlace,
      text: hasPlace
        ? "Specific enough to picture."
        : "Add the street, junction, stop, shop, or landmark.",
    },
    {
      label: "Evidence",
      ok: hasEvidence,
      text: hasEvidence
        ? "There is a real example to work from."
        : "Add what someone saw, said, or sent you.",
    },
    {
      label: "Chase",
      ok: hasChase,
      text: hasChase
        ? "There is something practical to ask for."
        : "Decide what can be checked, chased, or reported.",
    },
  ];
}

const claimCategories = {
  "local-problem": {
    label: "Local problem",
    note: "Pin down the place, the evidence, and what can actually be chased.",
  },
  "opinion-proposal": {
    label: "Opinion or proposal",
    note: "Separate the opinion from the evidence. Name the practical proposal and any trade-offs.",
  },
  update: {
    label: "Local update",
    note: "Check the source, the timing, and whether the change can be verified.",
  },
  celebration: {
    label: "Celebration or thanks",
    note: "Keep the praise specific. Name what happened, where, and who should be credited.",
  },
  consultation: {
    label: "Consultation",
    note: "Say who is asking, what decision is being made, and how people can respond.",
  },
  hearsay: {
    label: "Rumour or hearsay",
    note: "Pause before posting. Identify the source and confirm what can actually be verified.",
  },
};

function classifyTopic(brief) {
  const text = `${brief.issue || ""} ${brief.localExample || ""}`.toLowerCase();

  if (/\b(rumou?r|apparently|supposedly|someone said|i heard|hearsay|unconfirmed)\b/.test(text)) {
    return "hearsay";
  }

  if (/\b(consultation|consulting|survey|have your say|feedback|views on|respond by)\b/.test(text)) {
    return "consultation";
  }

  if (/\b(thank|thanks|congratulations|well done|opened|reopened|award|celebrat)\b/.test(text)) {
    return "celebration";
  }

  if (/\b(update|now fixed|repaired|completed|closed|reopened|latest|work has started)\b/.test(text)) {
    return "update";
  }

  if (/\b(i think|should|could|proposal|propose|idea|would like|nowadays|in general)\b/.test(text)) {
    return "opinion-proposal";
  }

  return "local-problem";
}

function assessTopicGrounding(brief) {
  const category = classifyTopic(brief);
  const issue = (brief.issue || "").trim();
  const localExample = (brief.localExample || "").trim();
  const practicalNextStep = (brief.practicalNextStep || "").trim();
  const callToAction = (brief.callToAction || "").trim();
  const whyItMatters = (brief.whyItMatters || "").trim();
  const combined = `${issue} ${localExample}`.toLowerCase();
  const placePattern =
    /\b(near|outside|opposite|beside|by|at|around|next to|junction|road|street|station|school|park|library|market|crossing|estate|avenue|lane|close|drive|high street|square|hall|stop|ward|village|town)\b/i;
  const localServicePattern =
    /\b(bin|rubbish|litter|fly.?tip|pothole|road|pavement|street light|lighting|crossing|traffic|parking|bus stop|bus|library|park|playground|drain|flood|graffiti|antisocial|anti-social|speeding|police|nhs|gp|doctor|hospital|school|housing|landlord|utility|council|highways|authority|service|team)\b/i;
  const evidencePattern =
    /\b(report|reported|reference|incident|near miss|complaint|photo|residents?|parents?|commuters?|businesses?|noticed|seen|sent|source|confirmed|this month|this week|since|after \d|before \d|\d+)\b/i;
  const datePattern =
    /\b(today|yesterday|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday|january|february|march|april|may|june|july|august|september|october|november|december|\d{1,2}[/-]\d{1,2}|\d{1,2}(st|nd|rd|th))\b/i;
  const actionPattern =
    /\b(check|chase|report|request|ask|inspect|inspection|repair|review|timescale|date|reference|update|enforce|clear|clean|replace|fix|respond|reply|send|survey|consult)\b/i;
  const hasPlace = placePattern.test(combined) || Boolean(brief.ward?.trim());
  const hasEvidence = localExample.length >= 24 || evidencePattern.test(combined);
  const hasResponsibleRoute =
    localServicePattern.test(combined) ||
    /\b(council|police|nhs|landlord|utility|authority|service|team|organisation|highways)\b/i.test(
      practicalNextStep,
    );
  const hasAction =
    actionPattern.test(`${practicalNextStep} ${callToAction}`) ||
    (hasEvidence && localServicePattern.test(combined));
  const hasTimeline = datePattern.test(combined) || datePattern.test(practicalNextStep);

  const checksByCategory = {
    "local-problem": [
      { label: "A specific place", ok: hasPlace },
      { label: "Evidence or reported incidents", ok: hasEvidence },
      { label: "A council service or organisation responsible", ok: hasResponsibleRoute },
      { label: "A practical action that could be requested", ok: hasAction },
    ],
    "opinion-proposal": [
      { label: "A clear claim or proposal", ok: issue.length >= 16 },
      { label: "Evidence supporting the claim", ok: hasEvidence },
      { label: "Trade-offs or alternatives considered", ok: whyItMatters.length >= 20 },
      { label: "A practical next step", ok: hasAction },
    ],
    update: [
      { label: "A source for the update", ok: hasEvidence },
      { label: "A clear timeline or date", ok: hasTimeline },
      { label: "Something that can be verified", ok: hasEvidence && (hasPlace || hasResponsibleRoute) },
    ],
    celebration: [
      { label: "A specific person, group, or event", ok: issue.length >= 12 },
      { label: "A real place", ok: hasPlace },
      { label: "A checkable detail", ok: hasEvidence },
    ],
    consultation: [
      { label: "The decision or proposal", ok: issue.length >= 16 },
      { label: "The organisation responsible", ok: hasResponsibleRoute },
      { label: "A deadline or timeline", ok: hasTimeline },
      { label: "How people can respond", ok: Boolean(callToAction) },
    ],
    hearsay: [
      { label: "The original source", ok: hasEvidence },
      { label: "A way to verify the claim", ok: Boolean(practicalNextStep) },
      { label: "The organisation responsible", ok: hasResponsibleRoute },
    ],
  };

  const checks = checksByCategory[category];

  return {
    category,
    categoryInfo: claimCategories[category],
    checks,
    passed: checks.every((check) => check.ok),
  };
}

function TopicGroundingDesk({ brief, onChange }) {
  const result = assessTopicGrounding(brief);

  return (
    <div className="topic-grounding-desk">
      <label className="topic-entry-field">
        <span>What would you like to write about?</span>
        <textarea
          value={brief.issue}
          onChange={(event) => onChange("issue", event.target.value)}
          placeholder="Describe the issue, update, idea, event, or question in your own words."
        />
      </label>
      <p className="topic-examples">
        A local problem · an idea · an update · an event · a question · something you noticed
      </p>
      {brief.issue.trim() && (
        <aside className={`topic-assessment ${result.passed ? "passed" : ""}`}>
          <div className="topic-assessment-heading">
            <span>Grounding check</span>
            <strong>{result.categoryInfo.label}</strong>
          </div>
          <p>{result.categoryInfo.note}</p>
          <ul>
            {result.checks.map((check) => (
              <li className={check.ok ? "ok" : ""} key={check.label}>
                <b>{check.ok ? "✓" : "□"}</b>
                {check.label}
              </li>
            ))}
          </ul>
          <small>
            {result.passed
              ? "This is grounded enough to build on."
              : "That is fine. Add the missing detail on the next screen before drafting."}
          </small>
        </aside>
      )}
    </div>
  );
}

function GroundingCheck({ brief }) {
  const result = assessTopicGrounding(brief);

  return (
    <div className="grounding-check" aria-label="Grounding check">
      <p><strong>Keep it grounded:</strong> do not make the issue bigger than the evidence.</p>
      <div className="grounding-items">
        {result.checks.map((check) => (
          <span className={check.ok ? "grounding-item ok" : "grounding-item"} key={check.label}>
            <b>{check.label}</b>
            {check.ok ? "Covered." : "Add this before drafting."}
          </span>
        ))}
      </div>
    </div>
  );
}

function assessDraftGrounding(brief) {
  return assessTopicGrounding(brief);
}

function DraftGroundingGate({ result }) {
  const gateHeading =
    result.category === "hearsay"
      ? "⚠ This needs checking before it becomes a post."
      : result.category === "opinion-proposal"
        ? "⚠ This looks more like an opinion or proposal than a grounded post."
        : "⚠ This needs more grounding before it becomes a post.";

  return (
    <section className="draft-grounding-gate" aria-label="Grounding check">
      <p className="gate-kicker">Grounding check</p>
      <h3>{gateHeading}</h3>
      <p>Post Desk cannot identify:</p>
      <ul>
        {result.checks.map((check) => (
          <li className={check.ok ? "ok" : ""} key={check.label}>
            <span>{check.ok ? "✓" : "□"}</span>
            {check.label}
          </li>
        ))}
      </ul>
      <p className="gate-close">
        Please add more detail before drafting. It is fine not to write the post yet.
      </p>
    </section>
  );
}

function DraftWaitingPanel() {
  return (
    <section className="draft-waiting-panel" aria-label="Draft waiting">
      <p className="gate-kicker">Draft area</p>
      <h3>Your grounded draft will appear here.</h3>
      <p>Start with the local facts. Post Desk will only write once the issue holds up.</p>
    </section>
  );
}

function draftSections(text) {
  const labels = ["Problem", "Why it matters", "What I’m asking", "What residents can send"];
  const body = String(text || "").split(/\n\s*Imprint reminder:/i)[0];

  return body
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, 4)
    .map((part, index) => ({
      label: /^who is affected:/i.test(part)
        ? "Who is affected"
        : /^why it matters/i.test(part)
          ? "Why it matters"
          : labels[index] || "Note",
      text: part,
    }));
}

function draftImprint(text) {
  const match = String(text || "").match(/Imprint reminder:\s*([\s\S]*)/i);
  return match?.[1]?.trim() || "";
}

function DraftReader({ text }) {
  const imprint = draftImprint(text);

  return (
    <div className="draft-reader" aria-label="Draft preview">
      {draftSections(text).map((section) => (
        <article className="draft-reader-section" key={section.label}>
          <span>{section.label}</span>
          <p>{section.text}</p>
        </article>
      ))}
      {imprint && (
        <footer className="draft-imprint">
          <span>Campaign imprint</span>
          <p>{imprint}</p>
        </footer>
      )}
    </div>
  );
}

function OutputBox({ title, value, onChange, onCopy, className = "" }) {
  const isGeneratedDraft = className.includes("generated-draft-box");

  return (
    <section className={`output-box ${className}`}>
      <div className="output-heading">
        <h2>{title}</h2>
        <button className="copy-button" type="button" onClick={onCopy}>
          Copy
        </button>
      </div>
      {isGeneratedDraft && <DraftReader text={value} />}
      {isGeneratedDraft ? (
        <details className="plain-text-draft">
          <summary>Plain text version</summary>
          <textarea value={value} onChange={(event) => onChange(event.target.value)} />
        </details>
      ) : (
        <textarea value={value} onChange={(event) => onChange(event.target.value)} />
      )}
    </section>
  );
}

function FinalApprovedDraft({ draft, onCopy }) {
  const checks = [
    "Place named",
    "Powers not overstated",
    "One clear ask",
    "Plain wording",
  ];

  return (
    <section className="output-box final-draft-box">
      <div className="output-heading">
        <div>
          <p className="approval-kicker">Checked post</p>
          <h2>Grounded draft</h2>
          <p>Use this once the local facts look right.</p>
        </div>
      </div>
      <div className="approval-checks">
        {checks.map((item) => (
          <span key={item}>✓ {item}</span>
        ))}
      </div>
      <div className="approved-copy">
        {(draft.neighbourTone || draft.facebookPost || "").split("\n").slice(0, 4).join("\n")}
      </div>
      <button className="copy-button hero-copy-button" type="button" onClick={() => onCopy("Facebook post", draft.neighbourTone || draft.facebookPost)}>
        Copy Facebook post
      </button>
    </section>
  );
}

function RefinementTabs({ activeTab, onTabChange, draft, setDraft, onCopy, onRunNeighbourTone, onRunMoreSpecific }) {
  const tabs = [
    { id: "neighbour", label: "Local tone" },
    { id: "specific", label: "Add detail" },
    { id: "shorter", label: "Shorter" },
    { id: "reply", label: "Reply to comment" },
    { id: "hooks", label: "More direct" },
  ];

  return (
    <section className="output-box refinement-box">
      <div className="output-heading">
        <div>
          <h2>Local tone</h2>
          <p>Plain, local, and less like a leaflet.</p>
        </div>
        <button className="copy-button" type="button" onClick={onRunNeighbourTone}>
          Try another
        </button>
      </div>

      <div className="tab-row" role="tablist" aria-label="Refinement tools">
        {tabs.map((tab) => (
          <button
            className={activeTab === tab.id ? "tab-button active" : "tab-button"}
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "neighbour" && (
        <div className="comparison-grid hero-refinement">
          <label className="compare-panel">
            <span>Original draft</span>
            <textarea
              value={draft.humaniseBefore}
              onChange={(event) =>
                setDraft((current) => ({
                  ...current,
                  humaniseBefore: event.target.value,
                }))
              }
            />
          </label>
          <label className="compare-panel after-panel">
            <div className="compare-label-row">
              <span>Local tone</span>
              <button className="copy-button" type="button" onClick={() => onCopy("Local tone", draft.neighbourTone || draft.humaniseAfter)}>
                Copy
              </button>
            </div>
            <textarea
              value={draft.neighbourTone || draft.humaniseAfter}
              onChange={(event) =>
                setDraft((current) => ({
                  ...current,
                  humaniseAfter: event.target.value,
                  neighbourTone: event.target.value,
                }))
              }
            />
          </label>
        </div>
      )}

      {activeTab === "specific" && (
        <div className="tab-output">
          <div className="compare-label-row">
            <span>Add detail</span>
            <button className="copy-button" type="button" onClick={() => onCopy("Add detail", draft.moreSpecific)}>
              Copy
            </button>
          </div>
          <textarea value={draft.moreSpecific} onChange={(event) => setDraft((current) => ({ ...current, moreSpecific: event.target.value }))} />
          <button className="secondary-button full-width-button" type="button" onClick={onRunMoreSpecific}>
            Try another detailed version
          </button>
        </div>
      )}

      {activeTab === "shorter" && (
        <div className="tab-output">
          <div className="compare-label-row">
            <span>Shorter version</span>
            <button className="copy-button" type="button" onClick={() => onCopy("Shorter version", draft.shorterVersion)}>
              Copy
            </button>
          </div>
          <textarea value={draft.shorterVersion} onChange={(event) => setDraft((current) => ({ ...current, shorterVersion: event.target.value }))} />
        </div>
      )}

      {activeTab === "reply" && (
        <div className="tab-output">
          <div className="compare-label-row">
            <span>Reply to comment</span>
            <button className="copy-button" type="button" onClick={() => onCopy("Reply to comment", draft.replyToComment)}>
              Copy
            </button>
          </div>
          <textarea value={draft.replyToComment} onChange={(event) => setDraft((current) => ({ ...current, replyToComment: event.target.value }))} />
        </div>
      )}

      {activeTab === "hooks" && (
        <details className="advanced-details hooks-details" open>
          <summary>More direct openings</summary>
          <div className="hooks hook-groups">
            {draft.hooks.map((hook, index) => (
              <label className="hook-card" key={`${hook.type || "hook"}-${index}`}>
                <span>{hook.type || "Hook"}</span>
                <textarea
                  value={hook.text || hook}
                  onChange={(event) => {
                    const hooks = [...draft.hooks];
                    hooks[index] = { ...(typeof hook === "string" ? { type: "Hook" } : hook), text: event.target.value };
                    setDraft((current) => ({ ...current, hooks }));
                  }}
                />
              </label>
            ))}
          </div>
          <button
            className="copy-button full-width-button"
            type="button"
            onClick={() =>
              onCopy(
                "More direct",
                draft.hooks.map((hook) => `${hook.type || "Hook"}: ${hook.text || hook}`).join("\n"),
              )
            }
          >
            Copy openings
          </button>
        </details>
      )}
    </section>
  );
}

function normaliseDraft(brief, incomingDraft = {}) {
  const base = generateDraft(brief);
  const merged = { ...base, ...incomingDraft };
  const primary = antiWaffleText(merged.primary || base.primary);
  const hooks = Array.isArray(merged.hooks)
    ? merged.hooks.map((hook, index) =>
        typeof hook === "string"
          ? { type: base.hooks[index]?.type || "Hook", text: hook }
          : hook,
      )
    : base.hooks;
  const neighbourTone = antiWaffleText(
    merged.neighbourTone || merged.humaniseAfter || humaniseText(brief, primary),
  );
  const moreSpecific = antiWaffleText(
    merged.moreSpecific || makeMoreSpecificText(brief, primary),
  );
  const shorterVersion = antiWaffleText(
    merged.shorterVersion || makeShorterText(brief, primary),
  );

  return {
    ...merged,
    primary,
    facebookPost: antiWaffleText(merged.facebookPost || base.facebookPost),
    reelScript: antiWaffleText(merged.reelScript || base.reelScript),
    caption: antiWaffleText(merged.caption || base.caption),
    replyToComment: antiWaffleText(merged.replyToComment || base.replyToComment),
    hooks,
    humanRewrite: antiWaffleText(merged.humanRewrite || neighbourTone),
    humaniseBefore: merged.humaniseBefore || primary,
    humaniseAfter: neighbourTone,
    neighbourTone,
    moreSpecific,
    shorterVersion,
    realityCheck: buildRealityCheck(brief),
  };
}

function RealityCheckPanel({ items }) {
  return (
    <details className="quiet-checks reality-box">
      <summary>Does this hold up?</summary>
      <div className="reality-list">
        {(items || []).map((item) => (
          <article className="reality-item" key={item.label}>
            <strong>{item.label}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </details>
  );
}

function ComplianceChecklist({ checkedItems, onToggle }) {
  const coreChecks = [
    {
      source: "Check factual claims",
      label: "Are the factual claims right?",
    },
    {
      source: "Avoid personal attacks",
      label: "Does this avoid personal attacks?",
    },
    {
      source: "Check whether this post overpromises",
      label: "Am I promising more than can be delivered?",
    },
    {
      source: "Avoid misleading images",
      label: "Could any image mislead people?",
    },
    {
      source: "Distinguish local council issues from national policy",
      label: "Is this clearly local, not a national row?",
    },
  ];
  const groupedChecks = [
    {
      label: "Accuracy",
      items: [
        ["Check factual claims", "Are the factual claims right?"],
        ["Check whether this post overpromises", "Am I promising more than can be delivered?"],
      ],
    },
    {
      label: "Tone",
      items: [
        ["Avoid personal attacks", "Does this avoid personal attacks?"],
        ["Avoid attacking voters", "Does this avoid having a go at voters?"],
      ],
    },
    {
      label: "Powers & responsibility",
      items: [
        ["Avoid implying powers councillors do not have", "Am I asking for something the council can actually do?"],
        ["Distinguish local council issues from national policy", "Is this clearly local, not a national row?"],
        ["Check whether this sounds like a national campaign rather than a local issue", "Does this still sound like a local issue?"],
      ],
    },
    {
      label: "Images & imprint",
      items: [
        ["Avoid misleading images", "Could any image mislead people?"],
        ["Confirm permissions for photos", "Do I have permission for photos?"],
        ["Include election imprint where required", "Is the imprint included where needed?"],
      ],
    },
  ];

  return (
    <details className="quiet-checks compliance-box">
      <summary className="compliance-heading">
        <div>
          <span>Before posting</span>
          <small>Worth checking. Not legal advice.</small>
        </div>
      </summary>

      <div className="checklist core-checklist">
        {coreChecks.map((item) => (
          <label className="check-item" key={item.source}>
            <input
              type="checkbox"
              checked={Boolean(checkedItems[item.source])}
              onChange={() => onToggle(item.source)}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>

      <details className="full-checklist">
        <summary>Show full pre-post checklist</summary>
        <div className="check-groups">
          {groupedChecks.map((group) => (
            <section className="check-group" key={group.label}>
              <h3>{group.label}</h3>
              {group.items.map(([source, label]) => (
                <label className="check-item" key={source}>
                  <input
                    type="checkbox"
                    checked={Boolean(checkedItems[source])}
                    onChange={() => onToggle(source)}
                  />
                  <span>{label}</span>
                </label>
              ))}
            </section>
          ))}
        </div>
      </details>
    </details>
  );
}

function buildExportText(brief, draft) {
  return [
    "Local Voice Studio draft",
    "",
    `Candidate: ${brief.candidateName}`,
    `Ward: ${brief.ward}`,
    `Party: ${brief.party}`,
    `Issue: ${brief.issue}`,
    `Template: ${draft.title}`,
    "",
    "Facebook post",
    draft.facebookPost,
    "",
    "Reel script",
    draft.reelScript,
    "",
    "Caption",
    draft.caption,
    "",
    "Reply to comment",
    draft.replyToComment,
    "",
    "Local tone",
    draft.neighbourTone || draft.humaniseAfter,
    "",
    "Add detail",
    draft.moreSpecific,
    "",
    "Shorter version",
    draft.shorterVersion,
  ].join("\n");
}

async function requestGeneratedDraft(brief, selectedTemplate) {
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      brief,
      selectedTemplate,
      complianceItems,
    }),
  });
  const data = await response.json();

  if (!data.ok) {
    throw new Error(data.message || "Generation unavailable");
  }

  return data.draft;
}

function loadLocalDrafts() {
  try {
    return JSON.parse(localStorage.getItem("localVoiceDrafts") || "[]");
  } catch {
    return [];
  }
}

function loadImageLibrary() {
  try {
    return JSON.parse(localStorage.getItem("localVoiceImageLibrary") || "[]");
  } catch {
    return [];
  }
}

function saveImageLibrary(images) {
  localStorage.setItem("localVoiceImageLibrary", JSON.stringify(images));
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Could not read image"));
    reader.readAsDataURL(file);
  });
}

function normaliseTags(value) {
  if (Array.isArray(value)) return value.map((tag) => String(tag).trim()).filter(Boolean);
  return String(value || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function imageSearchText(image) {
  return [
    image.title,
    image.description,
    image.locationTag,
    image.photographerCredit,
    ...(image.issueTags || []),
  ]
    .join(" ")
    .toLowerCase();
}

function getSmartImageSuggestions(brief, images) {
  const text = [brief.issue, brief.localExample, brief.ward].join(" ").toLowerCase();
  const matchedRules = smartImageRules.filter((rule) =>
    rule.words.some((word) => text.includes(word)),
  );

  if (matchedRules.length === 0) return [];

  return images.filter((image) => {
    const imageTags = (image.issueTags || []).map((tag) => tag.toLowerCase());
    const location = String(image.locationTag || "").toLowerCase();

    return matchedRules.some((rule) => {
      const hasTag = rule.tags.some((tag) => imageTags.includes(tag));
      const hasLocation = rule.locations.some((place) => location === place.toLowerCase());
      return hasTag || hasLocation;
    });
  });
}

function getSmartImageReason(brief) {
  const text = [brief.issue, brief.localExample, brief.ward].join(" ").toLowerCase();
  const rule = smartImageRules.find((item) => item.words.some((word) => text.includes(word)));
  return rule?.reason || "Suggestions will appear when the issue matches your local photo tags.";
}

function imagePreserveAspectRatio(visual) {
  const x = Number(visual.imageFocusX || 50);
  const y = Number(visual.imageFocusY || 50);
  const xAlign = x < 35 ? "xMin" : x > 65 ? "xMax" : "xMid";
  const yAlign = y < 35 ? "YMin" : y > 65 ? "YMax" : "YMid";
  return `${xAlign}${yAlign} slice`;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function wrapLines(text, maxChars, maxLines = 4) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const next = line ? `${line} ${word}` : word;

    if (next.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  });

  if (line) lines.push(line);

  if (lines.length > maxLines) {
    return [...lines.slice(0, maxLines - 1), `${lines[maxLines - 1]}...`];
  }

  return lines;
}

function textBlock(text, x, y, options = {}) {
  const {
    color = "#17211c",
    size = 48,
    weight = 700,
    maxChars = 28,
    maxLines = 4,
    lineHeight = 1.12,
    anchor = "start",
  } = options;

  return `<text x="${x}" y="${y}" fill="${color}" font-family="Inter, Arial, sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}">${wrapLines(text, maxChars, maxLines)
    .map((line, index) => `<tspan x="${x}" dy="${index === 0 ? 0 : size * lineHeight}">${escapeHtml(line)}</tspan>`)
    .join("")}</text>`;
}

function priorityPills(priorities, x, y, width, primaryColor, options = {}) {
  const { balanced = false, height = 38, fontSize = 18, opacity = 0.13, gap = 12 } = options;
  const items = String(priorities || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 3);

  if (balanced && items.length > 0) {
    const pillWidth = (width - gap * (items.length - 1)) / items.length;

    return items
      .map((item, index) => {
        const currentX = x + index * (pillWidth + gap);
        return `<rect x="${currentX}" y="${y}" width="${pillWidth}" height="${height}" rx="${height / 2}" fill="${primaryColor}" fill-opacity="${opacity}"/><text x="${currentX + pillWidth / 2}" y="${y + height / 2 + fontSize * 0.34}" fill="#17211c" fill-opacity="0.9" font-family="Inter, Arial, sans-serif" font-size="${fontSize}" font-weight="740" text-anchor="middle">${escapeHtml(item)}</text>`;
      })
      .join("");
  }

  let currentX = x;
  let currentY = y;

  return items
    .map((item) => {
      const pillWidth = Math.min(width, Math.max(164, item.length * 12 + 40));

      if (currentX + pillWidth > x + width) {
        currentX = x;
        currentY += height + 12;
      }

      const output = `<rect x="${currentX}" y="${currentY}" width="${pillWidth}" height="${height}" rx="${height / 2}" fill="${primaryColor}" fill-opacity="${opacity}"/><text x="${currentX + 19}" y="${currentY + height / 2 + fontSize * 0.34}" fill="#17211c" fill-opacity="0.9" font-family="Inter, Arial, sans-serif" font-size="${fontSize}" font-weight="740">${escapeHtml(item)}</text>`;
      currentX += pillWidth + gap;

      return output;
    })
    .join("");
}

function buildVisualSvg(brief, visual) {
  const template = visualTemplates[visual.template] || visualTemplates.square;
  const { width, height } = template;
  const isStory = visual.template === "story";
  const isLeaflet = visual.template === "leaflet";
  const isEndorsement = visual.template === "endorsement";
  const isBeforeAfter = visual.template === "beforeAfter";
  const isAsking = visual.template === "asking";
  const isSquare = visual.template === "square";
  const margin = Math.round(width * (isStory ? 0.08 : isLeaflet ? 0.075 : isSquare ? 0.065 : 0.08));
  const imageHeight = isStory ? Math.round(height * 0.39) : isLeaflet ? Math.round(height * 0.28) : isSquare ? Math.round(height * 0.285) : Math.round(height * 0.32);
  const hasImage = Boolean(visual.imageData);
  const imageAreaHeight = hasImage ? imageHeight : isStory ? 190 : isLeaflet ? 180 : isSquare ? 220 : 150;
  const headline = visual.headline || brief.issue;
  const subhead = visual.subhead || brief.localExample;
  const imprint = brief.imprintReminder || "Add imprint where required.";
  const authorityLine = `${brief.candidateName || "Candidate"} · ${brief.party || "Local campaign"} · ${brief.ward || "Local area"}`;
  const textStart = margin + imageAreaHeight + (hasImage ? (isSquare ? 50 : 70) : isSquare ? 46 : 64);
  const headlineSize = isLeaflet ? 74 : isStory ? 82 : isSquare ? 54 : 66;
  const subheadSize = isLeaflet ? 31 : isStory ? 32 : isSquare ? 25 : 28;
  const ctaY = isSquare ? Math.round(height * 0.705) : height - margin - (isStory ? 190 : 150);
  const titleMax = isStory ? 20 : isLeaflet ? 24 : isSquare ? 31 : 23;
  const headlineLineHeight = isSquare ? 1.04 : 1.02;
  const subheadLineHeight = isSquare ? 1.28 : 1.26;
  const headlineLines = wrapLines(headline, titleMax, isStory ? 5 : 4).length;
  const subheadLines = wrapLines(subhead, isStory ? 30 : isLeaflet ? 48 : isSquare ? 55 : 43, isLeaflet ? 5 : 3).length;
  const subheadY = textStart + headlineSize * headlineLineHeight * headlineLines + (isSquare ? 28 : 34);
  const detailY = subheadY + subheadSize * subheadLineHeight * subheadLines + (isSquare ? 34 : 44);
  const neutral = "#f7f4ed";
  const muted = "#6b716d";
  const hairline = "#e5dfd2";
  const photo = hasImage
    ? `<clipPath id="photoClip"><rect x="${margin}" y="${margin}" width="${width - margin * 2}" height="${imageAreaHeight}" rx="18"/></clipPath><image href="${visual.imageData}" x="${margin}" y="${margin}" width="${width - margin * 2}" height="${imageAreaHeight}" preserveAspectRatio="${imagePreserveAspectRatio(visual)}" clip-path="url(#photoClip)"/><rect x="${margin}" y="${margin}" width="${width - margin * 2}" height="${imageAreaHeight}" rx="18" fill="none" stroke="${hairline}" stroke-width="1"/>`
    : `<rect x="${margin}" y="${margin}" width="${width - margin * 2}" height="${imageAreaHeight}" rx="18" fill="${neutral}"/><text x="${width / 2}" y="${margin + imageAreaHeight / 2 - 8}" fill="${muted}" font-family="Inter, Arial, sans-serif" font-size="${isStory ? 24 : 21}" font-weight="650" text-anchor="middle">Upload a real local or candidate photo</text><text x="${width / 2}" y="${margin + imageAreaHeight / 2 + 28}" fill="${muted}" fill-opacity="0.72" font-family="Inter, Arial, sans-serif" font-size="${isStory ? 18 : 15}" font-weight="500" text-anchor="middle">No fake campaign images</text>`;

  const endorsementMark =
    isEndorsement
      ? `<text x="${margin}" y="${textStart - 24}" fill="${visual.primaryColor}" fill-opacity="0.16" font-family="Georgia, serif" font-size="128" font-weight="700">"</text>`
      : "";
  const priorityItems = String(visual.priorities || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 3);
  const beforeAfterSection = isBeforeAfter
    ? `<g>
        <rect x="${margin}" y="${ctaY - 230}" width="${(width - margin * 2 - 22) / 2}" height="154" rx="18" fill="#f7f4ed"/>
        <rect x="${margin + (width - margin * 2 + 22) / 2}" y="${ctaY - 230}" width="${(width - margin * 2 - 22) / 2}" height="154" rx="18" fill="${visual.primaryColor}" fill-opacity="0.08"/>
        <text x="${margin + 26}" y="${ctaY - 184}" fill="${muted}" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="800">BEFORE</text>
        <text x="${margin + 26}" y="${ctaY - 142}" fill="#17211c" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="760">${escapeHtml(priorityItems[0] || "Problem raised")}</text>
        <text x="${margin + (width - margin * 2 + 22) / 2 + 26}" y="${ctaY - 184}" fill="${muted}" font-family="Inter, Arial, sans-serif" font-size="18" font-weight="800">NEXT</text>
        <text x="${margin + (width - margin * 2 + 22) / 2 + 26}" y="${ctaY - 142}" fill="#17211c" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="760">${escapeHtml(priorityItems[1] || "Clear update requested")}</text>
      </g>`
    : "";
  const askingSection = isAsking
    ? `<g>${priorityItems
        .map((item, index) => {
          const y = ctaY - 215 + index * 58;
          return `<circle cx="${margin + 19}" cy="${y - 7}" r="16" fill="${visual.primaryColor}" fill-opacity="0.1"/><text x="${margin + 19}" y="${y}" fill="${visual.primaryColor}" font-family="Inter, Arial, sans-serif" font-size="17" font-weight="850" text-anchor="middle">${index + 1}</text><text x="${margin + 52}" y="${y}" fill="#17211c" font-family="Inter, Arial, sans-serif" font-size="26" font-weight="720">${escapeHtml(item)}</text>`;
        })
        .join("")}</g>`
    : "";
  const detailSection = isLeaflet
    ? `<line x1="${margin}" y1="${height * 0.64}" x2="${width - margin}" y2="${height * 0.64}" stroke="${hairline}" stroke-width="2"/><text x="${margin}" y="${height * 0.69}" fill="${muted}" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="800" letter-spacing="2">LOCAL PRIORITIES</text>${priorityPills(visual.priorities, margin, height * 0.72, width - margin * 2, visual.primaryColor)}`
    : isBeforeAfter
      ? beforeAfterSection
      : isAsking
        ? askingSection
        : priorityPills(visual.priorities, margin, isSquare ? ctaY - 74 : ctaY - 70, width - margin * 2, visual.primaryColor, {
            balanced: isSquare,
            height: isSquare ? 44 : 38,
            fontSize: isSquare ? 19 : 18,
            opacity: isSquare ? 0.16 : 0.13,
          });
  const ctaHeight = isStory ? 86 : isSquare ? 56 : 68;
  const footerY = height - margin - (isSquare ? 28 : 36);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="${width}" height="${height}" fill="${visual.backgroundColor}"/>
  <circle cx="${width - margin}" cy="${margin}" r="${Math.round(width * 0.16)}" fill="${visual.primaryColor}" fill-opacity="0.035"/>
  <text x="${margin}" y="${margin - 22}" fill="${muted}" font-family="Inter, Arial, sans-serif" font-size="0">.</text>
  ${photo}
  ${endorsementMark}
  ${textBlock(headline, margin, textStart, {
    color: "#12362d",
    size: headlineSize,
    weight: 920,
    maxChars: titleMax,
    maxLines: isStory ? 5 : 4,
    lineHeight: headlineLineHeight,
  })}
  ${textBlock(subhead, margin, subheadY, {
    color: "#323b36",
    size: subheadSize,
    weight: 520,
    maxChars: isStory ? 30 : isLeaflet ? 48 : isSquare ? 55 : 43,
    maxLines: isLeaflet ? 5 : 3,
    lineHeight: subheadLineHeight,
  })}
  ${detailSection}
  <rect x="${margin}" y="${ctaY}" width="${width - margin * 2}" height="${ctaHeight}" rx="${ctaHeight / 2}" fill="${visual.primaryColor}"/>
  <text x="${width / 2}" y="${ctaY + ctaHeight / 2 + (isStory ? 10 : isSquare ? 7 : 8)}" fill="#ffffff" font-family="Inter, Arial, sans-serif" font-size="${isStory ? 28 : isSquare ? 20 : 22}" font-weight="760" text-anchor="middle">${escapeHtml(visual.callToAction || "Get in touch")}</text>
  <line x1="${margin}" y1="${footerY - 38}" x2="${width - margin}" y2="${footerY - 38}" stroke="${hairline}" stroke-width="1"/>
  <text x="${margin}" y="${footerY}" fill="${muted}" font-family="Inter, Arial, sans-serif" font-size="${isStory ? 25 : isSquare ? 22 : 20}" font-weight="800">${escapeHtml(authorityLine)}</text>
  <text x="${margin}" y="${footerY + 33}" fill="${muted}" fill-opacity="${isSquare ? 0.86 : 0.76}" font-family="Inter, Arial, sans-serif" font-size="${isStory ? 19 : isSquare ? 16 : 14}">${escapeHtml(imprint)}</text>
</svg>`;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function svgToPngDataUrl(svg, width, height) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, width, height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/png"));
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not render visual preview"));
    };

    image.src = url;
  });
}

function dataUrlToBytes(dataUrl) {
  const binary = atob(dataUrl.split(",")[1]);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function makePdfBlob(jpegDataUrl, width, height) {
  const encoder = new TextEncoder();
  const imageBytes = dataUrlToBytes(jpegDataUrl);
  const parts = [];
  const offsets = [];
  let length = 0;

  function add(part) {
    parts.push(part);
    length += typeof part === "string" ? encoder.encode(part).length : part.length;
  }

  function object(id, body) {
    offsets[id] = length;
    add(`${id} 0 obj\n${body}\nendobj\n`);
  }

  add("%PDF-1.4\n");
  object(1, "<< /Type /Catalog /Pages 2 0 R >>");
  object(2, "<< /Type /Pages /Kids [3 0 R] /Count 1 >>");
  object(
    3,
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`,
  );
  offsets[4] = length;
  add(`4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imageBytes.length} >>\nstream\n`);
  add(imageBytes);
  add("\nendstream\nendobj\n");
  const contentStream = `q\n${width} 0 0 ${height} 0 0 cm\n/Im0 Do\nQ`;
  object(5, `<< /Length ${encoder.encode(contentStream).length} >>\nstream\n${contentStream}\nendstream`);
  const xrefStart = length;
  add(`xref\n0 6\n0000000000 65535 f \n${[1, 2, 3, 4, 5]
    .map((id) => `${String(offsets[id]).padStart(10, "0")} 00000 n `)
    .join("\n")}\ntrailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`);

  return new Blob(parts, { type: "application/pdf" });
}

function LocalImageLibrary({ images, onImagesChange }) {
  const [pendingImage, setPendingImage] = React.useState(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [librarySearch, setLibrarySearch] = React.useState("");
  const [libraryFilter, setLibraryFilter] = React.useState("");
  const [form, setForm] = React.useState({
    title: "",
    description: "",
    locationTag: "",
    issueTags: "",
    photographerCredit: "",
    focusX: 50,
    focusY: 50,
  });

  const filteredImages = images.filter((image) => {
    const matchesSearch = !librarySearch || imageSearchText(image).includes(librarySearch.toLowerCase());
    const matchesFilter =
      !libraryFilter ||
      image.locationTag === libraryFilter ||
      (image.issueTags || []).includes(libraryFilter);

    return matchesSearch && matchesFilter;
  });

  async function stageFile(file) {
    if (!file || !["image/jpeg", "image/png", "image/webp"].includes(file.type)) return;
    const dataUrl = await fileToDataUrl(file);
    setPendingImage({ dataUrl, name: file.name, type: file.type });
    setForm((current) => ({
      ...current,
      title: current.title || file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
    }));
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    stageFile(event.dataTransfer.files?.[0]);
  }

  function toggleIssueTag(tag) {
    const current = normaliseTags(form.issueTags);
    const next = current.includes(tag)
      ? current.filter((item) => item !== tag)
      : [...current, tag];
    setForm((value) => ({ ...value, issueTags: next.join(", ") }));
  }

  function savePendingImage() {
    if (!pendingImage) return;

    const record = {
      id: crypto.randomUUID(),
      dataUrl: pendingImage.dataUrl,
      fileName: pendingImage.name,
      title: form.title || "Untitled local image",
      description: form.description,
      locationTag: form.locationTag,
      issueTags: normaliseTags(form.issueTags),
      photographerCredit: form.photographerCredit,
      focusX: Number(form.focusX || 50),
      focusY: Number(form.focusY || 50),
      uploadedAt: new Date().toISOString(),
    };
    const nextImages = [record, ...images].slice(0, 80);
    saveImageLibrary(nextImages);
    onImagesChange(nextImages);
    setPendingImage(null);
    setForm({
      title: "",
      description: "",
      locationTag: "",
      issueTags: "",
      photographerCredit: "",
      focusX: 50,
      focusY: 50,
    });
  }

  function removeImage(id) {
    const nextImages = images.filter((image) => image.id !== id);
    saveImageLibrary(nextImages);
    onImagesChange(nextImages);
  }

  return (
    <section className="output-box image-library-box" id="image-library">
      <div className="output-heading">
        <div>
          <h2>Local photo shelf</h2>
          <p>Keep useful ward photos here: streets, crossings, noticeboards, cafes, events, and problem spots.</p>
        </div>
      </div>

      <div
        className={`image-dropzone ${isDragging ? "is-dragging" : ""}`}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <strong>Drop a local photo here</strong>
        <span>JPG, PNG, or WebP. Mobile camera roll works too.</span>
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={(event) => stageFile(event.target.files?.[0])}
        />
      </div>

      {pendingImage && (
        <div className="image-editor">
          <div
            className="image-editor-preview"
            style={{
              backgroundImage: `url(${pendingImage.dataUrl})`,
              backgroundPosition: `${form.focusX}% ${form.focusY}%`,
            }}
            aria-label="Crop preview"
          />
          <div className="image-editor-fields">
            <Field label="Title">
              <input value={form.title} onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))} />
            </Field>
            <Field label="Description">
              <textarea value={form.description} onChange={(event) => setForm((current) => ({ ...current, description: event.target.value }))} />
            </Field>
            <Field label="Location tag">
              <select value={form.locationTag} onChange={(event) => setForm((current) => ({ ...current, locationTag: event.target.value }))}>
                <option value="">Choose location</option>
                {locationTagOptions.map((tag) => (
                  <option key={tag}>{tag}</option>
                ))}
              </select>
            </Field>
            <Field label="Issue tags">
              <input value={form.issueTags} onChange={(event) => setForm((current) => ({ ...current, issueTags: event.target.value }))} placeholder="roads, crossings, community groups" />
            </Field>
            <div className="tag-grid">
              {issueTagOptions.map((tag) => (
                <button
                  className={normaliseTags(form.issueTags).includes(tag) ? "tag-button selected" : "tag-button"}
                  key={tag}
                  type="button"
                  onClick={() => toggleIssueTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <Field label="Photographer credit">
              <input value={form.photographerCredit} onChange={(event) => setForm((current) => ({ ...current, photographerCredit: event.target.value }))} />
            </Field>
            <div className="two-column">
              <Field label="Horizontal crop">
                <input type="range" min="0" max="100" value={form.focusX} onChange={(event) => setForm((current) => ({ ...current, focusX: event.target.value }))} />
              </Field>
              <Field label="Vertical crop">
                <input type="range" min="0" max="100" value={form.focusY} onChange={(event) => setForm((current) => ({ ...current, focusY: event.target.value }))} />
              </Field>
            </div>
            <div className="action-grid">
              <button className="copy-button" type="button" onClick={savePendingImage}>
                Save to library
              </button>
              <button className="secondary-button" type="button" onClick={() => setPendingImage(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="library-toolbar">
        <input
          value={librarySearch}
          onChange={(event) => setLibrarySearch(event.target.value)}
          placeholder="Search by place, issue, title, or credit"
        />
        <select value={libraryFilter} onChange={(event) => setLibraryFilter(event.target.value)}>
          <option value="">All tags</option>
          {locationTagOptions.map((tag) => (
            <option key={tag}>{tag}</option>
          ))}
          {issueTagOptions.map((tag) => (
            <option key={tag}>{tag}</option>
          ))}
        </select>
      </div>

      {filteredImages.length === 0 ? (
        <p className="empty-note">
          No local photos yet. Add real places, people, and issue photos you have permission to use.
        </p>
      ) : (
        <div className="image-library-grid">
          {filteredImages.map((image) => (
            <article className="library-image-card" key={image.id}>
              <div
                className="library-thumb"
                style={{
                  backgroundImage: `url(${image.dataUrl})`,
                  backgroundPosition: `${image.focusX || 50}% ${image.focusY || 50}%`,
                }}
              />
              <div>
                <strong>{image.title}</strong>
                <span>
                  {[image.locationTag, ...(image.issueTags || [])].filter(Boolean).join(" · ") ||
                    "Untagged"}
                </span>
                {image.photographerCredit && <small>Credit: {image.photographerCredit}</small>}
              </div>
              <button className="secondary-button small-button" type="button" onClick={() => removeImage(image.id)}>
                Remove
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function ImagePicker({ brief, images, onChoose }) {
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("");
  const suggestions = getSmartImageSuggestions(brief, images);
  const suggestionIds = new Set(suggestions.map((image) => image.id));
  const filteredImages = images.filter((image) => {
    const matchesSearch = !search || imageSearchText(image).includes(search.toLowerCase());
    const matchesFilter =
      !filter ||
      image.locationTag === filter ||
      (image.issueTags || []).includes(filter);
    return matchesSearch && matchesFilter;
  });
  const shownImages = filteredImages.sort((a, b) => {
    if (suggestionIds.has(a.id) && !suggestionIds.has(b.id)) return -1;
    if (!suggestionIds.has(a.id) && suggestionIds.has(b.id)) return 1;
    return 0;
  });

  return (
    <div className="image-picker">
      <div className="image-picker-heading">
        <strong>Choose from library</strong>
        <span>{getSmartImageReason(brief)}</span>
      </div>
      <div className="library-toolbar">
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search photos" />
        <select value={filter} onChange={(event) => setFilter(event.target.value)}>
          <option value="">All tags</option>
          {locationTagOptions.map((tag) => (
            <option key={tag}>{tag}</option>
          ))}
          {issueTagOptions.map((tag) => (
            <option key={tag}>{tag}</option>
          ))}
        </select>
      </div>
      {shownImages.length === 0 ? (
        <p className="empty-note">No matching local photos yet.</p>
      ) : (
        <div className="picker-grid">
          {shownImages.slice(0, 8).map((image) => (
            <button className="picker-thumb" key={image.id} type="button" onClick={() => onChoose(image)}>
              <span
                style={{
                  backgroundImage: `url(${image.dataUrl})`,
                  backgroundPosition: `${image.focusX || 50}% ${image.focusY || 50}%`,
                }}
              />
              <strong>{image.title}</strong>
              {suggestionIds.has(image.id) && <em>Suggested</em>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function VisualTemplateGenerator({ brief, images }) {
  const [visual, setVisual] = React.useState(() => ({
    ...initialVisual,
    headline: brief.issue || "",
    subhead: brief.localExample || "",
    callToAction: brief.callToAction || "",
  }));
  const [exportNote, setExportNote] = React.useState("");
  const previousBriefVisual = React.useRef({
    issue: brief.issue || "",
    localExample: brief.localExample || "",
    callToAction: brief.callToAction || "",
  });
  const template = visualTemplates[visual.template] || visualTemplates.square;
  const svg = buildVisualSvg(brief, visual);
  const filenameBase = `local-voice-${(brief.ward || "local").toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${visual.template}`;

  React.useEffect(() => {
    const previous = previousBriefVisual.current;
    setVisual((current) => ({
      ...current,
      headline:
        !current.headline || current.headline === previous.issue
          ? brief.issue || ""
          : current.headline,
      subhead:
        !current.subhead || current.subhead === previous.localExample
          ? brief.localExample || ""
          : current.subhead,
      callToAction:
        !current.callToAction || current.callToAction === previous.callToAction
          ? brief.callToAction || ""
          : current.callToAction,
    }));
    previousBriefVisual.current = {
      issue: brief.issue || "",
      localExample: brief.localExample || "",
      callToAction: brief.callToAction || "",
    };
  }, [brief.issue, brief.localExample, brief.callToAction]);

  function updateVisual(field, value) {
    setVisual((current) => ({ ...current, [field]: value }));
  }

  function chooseLibraryImage(image) {
    setVisual((current) => ({
      ...current,
      imageData: image.dataUrl,
      imageAlt: image.title,
      imageFocusX: image.focusX || 50,
      imageFocusY: image.focusY || 50,
    }));
  }

  function handleImageUpload(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setVisual((current) => ({
        ...current,
        imageData: reader.result,
        imageAlt: file.name,
        imageFocusX: 50,
        imageFocusY: 50,
      }));
    };
    reader.readAsDataURL(file);
  }

  async function downloadPng() {
    setExportNote("Preparing PNG...");
    const pngDataUrl = await svgToPngDataUrl(svg, template.width, template.height);
    downloadBlob(new Blob([dataUrlToBytes(pngDataUrl)], { type: "image/png" }), `${filenameBase}.png`);
    setExportNote("PNG downloaded.");
  }

  async function downloadPdf() {
    setExportNote("Preparing PDF...");
    const pngDataUrl = await svgToPngDataUrl(svg, template.width, template.height);
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = template.width;
      canvas.height = template.height;
      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0);
      downloadBlob(makePdfBlob(canvas.toDataURL("image/jpeg", 0.92), template.width, template.height), `${filenameBase}.pdf`);
      setExportNote("PDF downloaded.");
    };
    image.src = pngDataUrl;
  }

  return (
    <section className="output-box visual-box">
      <div className="output-heading visual-heading">
        <div>
          <p className="approval-kicker">Make graphic</p>
          <h2>Simple local graphic</h2>
          <p>Use one real photo, one clear headline, and a plain next step.</p>
        </div>
      </div>

      <div className="visual-workspace">
        <div className="visual-preview-wrap">
          <div
            className={`visual-preview visual-${visual.template}`}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </div>

        <div className="visual-controls">
          <Field label="Real local photo">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            <small className="field-hint">{visual.imageAlt ? `Using ${visual.imageAlt}` : "Use a photo you have permission to use."}</small>
          </Field>
          <Field label="Headline">
            <input value={visual.headline} onChange={(event) => updateVisual("headline", event.target.value)} />
          </Field>

          <Field label="Supporting text">
            <textarea value={visual.subhead} onChange={(event) => updateVisual("subhead", event.target.value)} />
          </Field>

          <Field label="What should residents do?">
            <input value={visual.callToAction} onChange={(event) => updateVisual("callToAction", event.target.value)} />
          </Field>

          <div className="visual-export-row">
            <button className="copy-button" type="button" onClick={downloadPng}>
              Download graphic
            </button>
          </div>
          {exportNote && <p className="generation-note">{exportNote}</p>}

          <details className="more-export-options visual-advanced-options">
            <summary>Advanced options</summary>
            <ImagePicker brief={brief} images={images} onChoose={chooseLibraryImage} />

            <Field label="Graphic type">
              <select value={visual.template} onChange={(event) => updateVisual("template", event.target.value)}>
                {Object.entries(visualTemplates).map(([id, item]) => (
                  <option key={id} value={id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <small className="field-hint">{template.note}</small>
            </Field>

            <Field label="Extra line">
              <input value={visual.priorities} onChange={(event) => updateVisual("priorities", event.target.value)} />
            </Field>

            <div className="colour-grid">
              <Field label="Main colour">
                <input type="color" value={visual.primaryColor} onChange={(event) => updateVisual("primaryColor", event.target.value)} />
              </Field>
              <Field label="Background">
                <input type="color" value={visual.backgroundColor} onChange={(event) => updateVisual("backgroundColor", event.target.value)} />
              </Field>
            </div>

            <label className="toggle-row">
              <input
                type="checkbox"
                checked={visual.realPhotosOnly}
                onChange={(event) => updateVisual("realPhotosOnly", event.target.checked)}
              />
              <span>Use real uploaded photos only</span>
            </label>
            {!visual.realPhotosOnly && (
              <p className="empty-note">For campaign photos, use real uploaded images.</p>
            )}

            {visual.imageData && (
              <div className="two-column">
                <Field label="Photo horizontal crop">
                  <input type="range" min="0" max="100" value={visual.imageFocusX} onChange={(event) => updateVisual("imageFocusX", event.target.value)} />
                </Field>
                <Field label="Photo vertical crop">
                  <input type="range" min="0" max="100" value={visual.imageFocusY} onChange={(event) => updateVisual("imageFocusY", event.target.value)} />
                </Field>
              </div>
            )}

            <button className="secondary-button text-utility-button" type="button" onClick={downloadPdf}>
              Download PDF
            </button>
          </details>
        </div>
      </div>
    </section>
  );
}

function ExportActions({ brief, draft, onCopy, onSaved }) {
  function downloadTxt() {
    const text = buildExportText(brief, draft);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const safeWard = (brief.ward || "local").toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const safeIssue = (brief.issue || "draft").toLowerCase().replace(/[^a-z0-9]+/g, "-");

    link.href = url;
    link.download = `local-voice-${safeWard}-${safeIssue}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function saveLocalDraft() {
    const savedDrafts = loadLocalDrafts();
    const record = {
      id: crypto.randomUUID(),
      savedAt: new Date().toISOString(),
      brief,
      draft,
    };

    localStorage.setItem("localVoiceDrafts", JSON.stringify([record, ...savedDrafts].slice(0, 25)));
    onSaved(record);
  }

  return (
    <section className="output-box export-box">
      <div className="action-grid">
        <button className="copy-button" type="button" onClick={() => onCopy("Facebook post", draft.facebookPost)}>
          Copy Facebook post
        </button>
        <button className="copy-button" type="button" onClick={() => onCopy("Reel script", draft.reelScript)}>
          Copy reel script
        </button>
      </div>

      <div className="save-draft-row">
        <button className="copy-button save-button" type="button" onClick={saveLocalDraft}>
          Save draft locally
        </button>
      </div>

      <details className="more-export-options">
        <summary>Other versions</summary>
        <div className="action-grid secondary-action-grid">
          <button className="secondary-button" type="button" onClick={() => onCopy("Caption", draft.caption)}>
            Copy caption
          </button>
          <button className="secondary-button" type="button" onClick={() => onCopy("Reply to comment", draft.replyToComment)}>
            Copy reply
          </button>
          <button className="secondary-button" type="button" onClick={() => onCopy("Shorter version", draft.shorterVersion)}>
            Copy shorter
          </button>
          <button className="secondary-button" type="button" onClick={() => onCopy("Add detail", draft.moreSpecific)}>
            Copy added detail
          </button>
          <button className="secondary-button text-utility-button" type="button" onClick={downloadTxt}>
            Download .txt
          </button>
        </div>
      </details>
    </section>
  );
}

function SavedDraftsPanel({ drafts, onLoad, onClear }) {
  return (
    <section className="output-box saved-box">
      <div className="output-heading">
        <div>
          <h2>Saved drafts</h2>
          <p>Stored in this browser only.</p>
        </div>
        {drafts.length > 0 && (
          <button className="secondary-button small-button" type="button" onClick={onClear}>
            Clear
          </button>
        )}
      </div>

      {drafts.length === 0 ? (
        <p className="empty-note">No saved drafts yet.</p>
      ) : (
        <div className="saved-list">
          {drafts.slice(0, 4).map((savedDraft) => (
            <article className="saved-item" key={savedDraft.id}>
              <div>
                <strong>{savedDraft.brief.issue || "Untitled draft"}</strong>
                <span>
                  {savedDraft.brief.ward || "Local area"} ·{" "}
                  {new Date(savedDraft.savedAt).toLocaleDateString()}
                </span>
              </div>
              <button className="secondary-button small-button" type="button" onClick={() => onLoad(savedDraft)}>
                Load
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function StepControls({ activeStep, onStepChange }) {
  const currentIndex = workflowSteps.findIndex((step) => step.id === activeStep);
  const previousStep = workflowSteps[currentIndex - 1];
  const nextStep = workflowSteps[currentIndex + 1];

  return (
    <div className="step-controls">
      <button
        className="secondary-button"
        type="button"
        disabled={!previousStep}
        onClick={() => previousStep && onStepChange(previousStep.id)}
      >
        Back
      </button>
      <span>
        Step {currentIndex + 1} of {workflowSteps.length}
      </span>
      <button
        className="copy-button"
        type="button"
        disabled={!nextStep}
        onClick={() => nextStep && onStepChange(nextStep.id)}
      >
        {nextStep ? `Next: ${nextStep.label}` : "Finished"}
      </button>
    </div>
  );
}

function App() {
  const [brief, setBrief] = React.useState(initialBrief);
  const [draft, setDraft] = React.useState(() => generateDraft(initialBrief));
  const [copied, setCopied] = React.useState("");
  const [checkedCompliance, setCheckedCompliance] = React.useState({});
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [generationNote, setGenerationNote] = React.useState("");
  const [draftGroundingResult, setDraftGroundingResult] = React.useState(null);
  const [hasGeneratedDraft, setHasGeneratedDraft] = React.useState(false);
  const [savedDrafts, setSavedDrafts] = React.useState(() => loadLocalDrafts());
  const [imageLibrary, setImageLibrary] = React.useState(() => loadImageLibrary());
  const [activeStep, setActiveStep] = React.useState("candidate-setup");
  const [activeRefinementTab, setActiveRefinementTab] = React.useState("neighbour");
  const selectedTemplate =
    contentTemplates.find((template) => template.id === brief.templateId) || contentTemplates[0];

  function updateBrief(field, value) {
    setBrief((current) => ({ ...current, [field]: value }));
    setDraftGroundingResult(null);
    setHasGeneratedDraft(false);
  }

  function updateProfile(field, value) {
    setBrief((current) => ({
      ...current,
      profile: {
        ...current.profile,
        [field]: value,
      },
    }));
  }

  async function regenerate(event) {
    event.preventDefault();
    setCopied("");
    setCheckedCompliance({});
    setGenerationNote("");

    const groundingResult = assessDraftGrounding(brief);
    setDraftGroundingResult(groundingResult);

    if (!groundingResult.passed) {
      setHasGeneratedDraft(false);
      setGenerationNote("Add the missing local detail before drafting.");
      return;
    }

    setIsGenerating(true);

    try {
      const generatedDraft = await requestGeneratedDraft(brief, selectedTemplate);
      setDraft(normaliseDraft(brief, generatedDraft));
      setHasGeneratedDraft(true);
      setGenerationNote("Grounded draft ready.");
    } catch (error) {
      setDraft(generateDraft(brief));
      setHasGeneratedDraft(true);
      setGenerationNote(
        `Using built-in wording because the server was unavailable.`,
      );
    } finally {
      setIsGenerating(false);
    }
  }

  function runNeighbourTone() {
    setDraft((current) => ({
      ...current,
      humaniseBefore: current.primary,
      humaniseAfter: humaniseText(brief, current.primary),
      neighbourTone: humaniseText(brief, current.primary),
      humanRewrite: humaniseText(brief, current.primary),
    }));
    setCopied("");
  }

  function runMoreSpecific() {
    setDraft((current) => ({
      ...current,
      moreSpecific: makeMoreSpecificText(brief, current.primary),
    }));
    setCopied("");
  }

  async function copyText(label, text) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error("Clipboard API unavailable");
      }
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }

    setCopied(label);
    window.setTimeout(() => setCopied(""), 1600);
  }

  function toggleCompliance(item) {
    setCheckedCompliance((current) => ({
      ...current,
      [item]: !current[item],
    }));
  }

  function loadSavedDraft(savedDraft) {
    setBrief(savedDraft.brief);
    setDraft(savedDraft.draft);
    setCheckedCompliance({});
    setDraftGroundingResult(null);
    setHasGeneratedDraft(true);
    setCopied("Draft loaded");
    window.setTimeout(() => setCopied(""), 1600);
  }

  function clearSavedDrafts() {
    localStorage.removeItem("localVoiceDrafts");
    setSavedDrafts([]);
  }

  function changeStep(stepId) {
    setActiveStep(stepId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function startNewDraft() {
    setBrief(initialBrief);
    setDraft(generateDraft(initialBrief));
    setCopied("");
    setCheckedCompliance({});
    setGenerationNote("");
    setDraftGroundingResult(null);
    setHasGeneratedDraft(false);
    setActiveStep("candidate-setup");
  }

  function loadExampleBrief() {
    setBrief(sampleBrief);
    setDraft(generateDraft(sampleBrief));
    setCopied("Example loaded");
    setCheckedCompliance({});
    setGenerationNote("");
    setDraftGroundingResult(null);
    setHasGeneratedDraft(false);
    setActiveStep("issue-briefing");
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.setTimeout(() => setCopied(""), 1600);
  }

  const activeWorkflowStep =
    workflowSteps.find((step) => step.id === activeStep) || workflowSteps[0];
  const showExamplePrompt = !hasStarterDetails(brief);

  return (
    <main className="app-shell">
      <header className="desk-masthead">
        <div className="topbar">
          <div className="topbar-main">
            <p className="eyebrow brand-kicker">
              <img src="./assets/post-desk-logo.png" alt="" aria-hidden="true" />
              <span>Local Voice Studio</span>
            </p>
            <h1>Post desk</h1>
            <p className="lede">
              Before you post, know what you are claiming.
            </p>
          </div>
          <div className="topbar-actions">
            <button
              className="secondary-button"
              type="button"
              onClick={startNewDraft}
            >
              Start over
            </button>
          </div>
        </div>

        <section className="editorial-thesis" aria-label="Ward note">
          <EmotionalAnchor brief={brief} />
        </section>

        <nav className="flow-strip section-nav" aria-label="Local Voice Studio steps">
          {workflowSteps.map((step) => (
            <button
              className={activeStep === step.id ? "active" : ""}
              key={step.id}
              type="button"
              onClick={() => changeStep(step.id)}
              aria-current={activeStep === step.id ? "step" : undefined}
              data-label={step.label}
            >
              <strong>{step.number}</strong>
              {step.label}
            </button>
          ))}
        </nav>
        <p className="mobile-step-label">
          Step {activeWorkflowStep.number}: {activeWorkflowStep.label}
        </p>
      </header>

      <form className="editor-flow" onSubmit={regenerate}>
        <section className="panel workflow-section" id="candidate-setup" hidden={activeStep !== "candidate-setup"}>
          <div className="section-heading">
            <p className="step-label">Claim desk</p>
            <h2>Ground your post</h2>
            <p>Start with the thing you want to say. Post Desk will help you work out what needs checking.</p>
          </div>

          <TopicGroundingDesk brief={brief} onChange={updateBrief} />
          <StepControls activeStep={activeStep} onStepChange={changeStep} />

          {showExamplePrompt && <ExamplePrompt onLoad={loadExampleBrief} />}

          <details className="advanced-details identity-settings">
            <summary>Optional drafting details</summary>
            <p className="details-intro">Add these when you want Post Desk to shape the wording for a particular person or area.</p>
            <div className="setup-brief">
              <div className="setup-fields">
                <div className="two-column">
                  <Field label="Name for post perspective (optional)">
                    <input value={brief.candidateName} onChange={(event) => updateBrief("candidateName", event.target.value)} />
                    <small className="field-hint">Used only for first-person wording and imprint examples.</small>
                  </Field>
                  <Field label="Area or ward (optional)">
                    <input value={brief.ward} onChange={(event) => updateBrief("ward", event.target.value)} />
                  </Field>
                </div>
                <div className="two-column">
                  <Field label="Party or group (optional)">
                    <input value={brief.party} onChange={(event) => updateBrief("party", event.target.value)} />
                  </Field>
                  <Field label="Tone">
                    <select value={brief.tone} onChange={(event) => updateBrief("tone", event.target.value)}>
                      <option>calm</option>
                      <option>straightforward</option>
                      <option>practical</option>
                      <option>direct</option>
                      <option>neighbourly</option>
                    </select>
                    <small className="field-hint">{toneDescriptions[brief.tone]}</small>
                  </Field>
                </div>
              </div>
            </div>
          </details>

          <aside className="reality-reminder-card">
            <strong>Before you post</strong>
            <p>Do not make the issue bigger than the evidence.</p>
            <span>Specific. Evidenced. Actionable.</span>
          </aside>

          <details className="advanced-details wording-settings">
            <summary>Optional wording notes</summary>
            <div className="setup-notes-details" aria-label="Wording notes">
              <details className="setup-note-accordion sounds-natural-card">
                <summary>Sounds natural</summary>
                <p>“{brief.profile.naturalPhrases}”</p>
              </details>
              <details className="setup-note-accordion avoid-wording-card">
                <summary>Avoid wording</summary>
                <textarea value={brief.profile.phrasesToAvoid || ""} onChange={(event) => updateProfile("phrasesToAvoid", event.target.value)} />
              </details>
              <details className="setup-note-accordion preferred-style-card">
                <summary>Preferred wording style</summary>
                <textarea value={brief.profile.preferredWordingStyle} onChange={(event) => updateProfile("preferredWordingStyle", event.target.value)} />
              </details>
            </div>
          </details>
        </section>

        <section className="panel workflow-section" id="issue-briefing" hidden={activeStep !== "issue-briefing"}>
          <div className="section-heading">
            <p className="step-label">Evidence desk</p>
            <h2>Add the real-world detail</h2>
            <p>What can somebody actually see, hear, report, or verify?</p>
          </div>

          <div className="issue-desk">
            <div className="issue-core-flow">
              <div className="issue-working-title">
                <span>Current topic</span>
                <p>{brief.issue || "Add your topic on the first screen."}</p>
              </div>
              <label className="issue-evidence-field">
                <span>What is the evidence?</span>
                <textarea
                  value={brief.localExample}
                  onChange={(event) => updateBrief("localExample", event.target.value)}
                  placeholder="Add what was seen, reported, confirmed, or sent to you. Do not fill gaps with assumptions."
                />
              </label>
              <GroundingCheck brief={brief} />
            </div>

            <details className="advanced-details issue-details">
              <summary>Useful context if it helps</summary>
              <div className="issue-detail-grid">
                <Field label="People affected">
                  <textarea value={brief.whoAffected || ""} onChange={(event) => updateBrief("whoAffected", event.target.value)} />
                </Field>
                <Field label="Why it matters">
                  <textarea value={brief.whyItMatters || ""} onChange={(event) => updateBrief("whyItMatters", event.target.value)} />
                </Field>
                <Field label="What can be chased?">
                  <textarea value={brief.practicalNextStep || ""} onChange={(event) => updateBrief("practicalNextStep", event.target.value)} />
                </Field>
                <Field label="What should residents send?">
                  <input value={brief.callToAction} onChange={(event) => updateBrief("callToAction", event.target.value)} />
                </Field>
              </div>
            </details>
          </div>

          <StepControls activeStep={activeStep} onStepChange={changeStep} />
        </section>

        <section className="panel workflow-section" id="content-drafting" hidden={activeStep !== "content-drafting"}>
          <div className="section-heading output-title-row">
            <div>
              <p className="step-label">Section 3</p>
              <h2>Draft the post</h2>
              <p>Write it, then check who can deal with it and what you are asking for.</p>
            </div>
            {copied && <span className="copied">{copied} copied</span>}
          </div>

          <div className="drafting-grid">
            <div className="draft-controls">
              <Field label="Format">
                <select value={brief.format} onChange={(event) => updateBrief("format", event.target.value)}>
                  <option>Facebook post</option>
                  <option>reel script</option>
                  <option>caption</option>
                  <option>reply to comment</option>
                </select>
              </Field>
              <Field label="Template">
                <select value={brief.templateId} onChange={(event) => updateBrief("templateId", event.target.value)}>
                  {contentTemplates.map((template) => (
                    <option key={template.id} value={template.id}>
                      {template.name}
                    </option>
                  ))}
                </select>
              </Field>
              <button className="primary-button" type="submit" disabled={isGenerating}>
                {isGenerating ? "Writing..." : "Write grounded draft"}
              </button>
              <p className="generation-note">{generationNote}</p>

              <details className="advanced-details campaign-settings">
                <summary>Campaign settings</summary>
                <Field label="Things to avoid">
                  <textarea value={brief.avoid} onChange={(event) => updateBrief("avoid", event.target.value)} />
                </Field>
                <Field label="Imprint reminder">
                  <textarea value={brief.imprintReminder} onChange={(event) => updateBrief("imprintReminder", event.target.value)} />
                </Field>
                <div className="template-card">
                  <div>
                    <h3>{selectedTemplate.name}</h3>
                    <p>Template notes</p>
                  </div>
                  <div className="field-list">
                    {selectedTemplate.requiredFields.map((field) => (
                      <span key={field}>{field}</span>
                    ))}
                  </div>
                  <label className="example-output">
                    <span>Example output</span>
                    <textarea readOnly value={selectedTemplate.example} />
                  </label>
                </div>
              </details>
            </div>

            <div className="draft-output-stack">
              {draftGroundingResult && !draftGroundingResult.passed ? (
                <DraftGroundingGate result={draftGroundingResult} />
              ) : !hasGeneratedDraft ? (
                <DraftWaitingPanel />
              ) : (
                <>
                  <OutputBox
                    title={draft.title}
                    value={draft.primary}
                    onChange={(value) => setDraft((current) => ({ ...current, primary: value }))}
                    onCopy={() => copyText(draft.title, draft.primary)}
                    className="generated-draft-box"
                  />
                  <RealityCheckPanel items={draft.realityCheck} />
                  <ComplianceChecklist checkedItems={checkedCompliance} onToggle={toggleCompliance} />
                </>
              )}
            </div>
          </div>

          <StepControls activeStep={activeStep} onStepChange={changeStep} />
        </section>

        <section className="panel workflow-section" id="tone-refinement" hidden={activeStep !== "tone-refinement"}>
          <div className="section-heading">
            <p className="step-label">Section 4</p>
            <h2>Improve the wording</h2>
            <p>Make it sound like something you would actually post.</p>
          </div>

          <FinalApprovedDraft draft={draft} onCopy={copyText} />

          <RefinementTabs
            activeTab={activeRefinementTab}
            onTabChange={setActiveRefinementTab}
            draft={draft}
            setDraft={setDraft}
            onCopy={copyText}
            onRunNeighbourTone={runNeighbourTone}
            onRunMoreSpecific={runMoreSpecific}
          />

          <details className="advanced-details">
            <summary>Export and save</summary>
            <ExportActions
              brief={brief}
              draft={draft}
              onCopy={copyText}
              onSaved={(record) => {
                setSavedDrafts((current) => [record, ...current].slice(0, 25));
                setCopied("Draft saved locally");
                window.setTimeout(() => setCopied(""), 1600);
              }}
            />
            <SavedDraftsPanel drafts={savedDrafts} onLoad={loadSavedDraft} onClear={clearSavedDrafts} />
          </details>

          <StepControls activeStep={activeStep} onStepChange={changeStep} />
        </section>

        <section className="panel workflow-section visuals-section" id="visuals-assets" hidden={activeStep !== "visuals-assets"}>
          <div className="section-heading">
            <p className="step-label">Section 5</p>
            <h2>Make a simple graphic</h2>
            <p>Use a real local photo, keep the wording short, then download it.</p>
          </div>

          <details className="advanced-details photo-library-details">
            <summary>Add photos to library</summary>
            <LocalImageLibrary images={imageLibrary} onImagesChange={setImageLibrary} />
          </details>

          <VisualTemplateGenerator brief={brief} images={imageLibrary} />

          <StepControls activeStep={activeStep} onStepChange={changeStep} />
        </section>
      </form>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
