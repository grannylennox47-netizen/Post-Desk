# Local Voice Studio

A simple single-page React app for drafting local campaign content.

## Run locally

```bash
node server.mjs
```

Then open:

```text
http://localhost:4173
```

The app includes local placeholder generation in `src/App.jsx` and an optional server-side AI generation endpoint.

## Real AI generation

The app now has a server endpoint at:

```text
POST /api/generate
```

To use real generation, set these environment variables before starting the server:

```bash
export OPENAI_API_KEY="your_api_key_here"
export OPENAI_MODEL="gpt-5.2"
node server.mjs
```

If `OPENAI_API_KEY` is not set, the app keeps working with the local placeholder draft logic.

The brief includes an editable candidate profile. The default profile is for an earnest, community-focused young Conservative candidate in a traditional Tory ward facing a Reform challenge.

The app also includes reusable local political content templates. Each template defines required fields, an example output, and a placeholder draft structure.

A compliance checklist is shown beside generated output as a visible reminder before copying or exporting. It is not legal advice.

Export actions let you copy the Facebook post, reel script, or caption, download a `.txt` file, and save drafts in browser storage without login.

Saved drafts are stored locally in the browser under `localVoiceDrafts`. There is no login yet.

The visual template generator can create simple square graphics, story/reel title cards, local issue cards, endorsement cards, and A5 leaflet layouts. It only uses real uploaded images from the user and can export PNG or PDF files.
