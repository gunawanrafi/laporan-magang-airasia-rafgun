/* ==================================================================
   ALL WEBSITE CONTENT LIVES HERE.

   Edit this one file to make the site yours — no component needs to
   be touched. Add or remove items from any array and the pages,
   navigation and detail routes update themselves.

   Images: drop files into `public/images/` and reference them with
   asset('your-file.jpg').
================================================================== */

const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`;

/* ---------------------------------------------------------------- */
/* 1. SITE + IDENTITY                                                */
/* ---------------------------------------------------------------- */

export const site = {
  brand: "AirAsia Intern Portfolio",
  logo: asset("logo-airasia.png"),
  reportTitle: "AirAsia Internship Report",
  year: 2026,
  // Where the internship actually took place. Referenced throughout the
  // copy below — change it here rather than in each sentence.
  company: "AirAsia Indonesia",
  office: "Red House",
  location: "Tangerang",
  // Used by the "Contact" button and the About page.
  email: "gunawanrafi9@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-rafi-gunawan-625189265/",
  github: "https://github.com/gunawanrafi",
};

export const owner = {
  name: "Rafi",
  fullName: "Muhammad Rafi Gunawan",
  role: "Network Engineering Intern",
  photo: asset("fotoairasia.jpeg"),
  // Optional: put a real PDF in public/ and set e.g. './resume.pdf'.
  // Leave null and the button falls back to the browser print dialog.
  resumeUrl: null,
};

/* ---------------------------------------------------------------- */
/* 2. NAVIGATION                                                     */
/* ---------------------------------------------------------------- */

export const nav = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Courses", to: "/courses" },
  { label: "Documentation", to: "/documentation" },
  { label: "About Me", to: "/about" },
];

/* ---------------------------------------------------------------- */
/* 3. HOME                                                           */
/* ---------------------------------------------------------------- */

export const home = {
  hero: {
    // The FortiGate 90G I configured — cropped to a wide band from the
    // original photo so the ports and status LEDs survive the hero crop.
    image: asset("hero-fortigate.jpg"),
    imageAlt: "FortiGate 90G firewall powered on, patch leads in the LAN and WAN ports",
    title: "Internship Journey at AirAsia",
    subtitle:
      "Network engineering at Red House — AirAsia Indonesia's office in Tangerang, July 27 to September 11, 2026. I configured a FortiGate next-generation firewall for the user segment, automated the ICT daily compliance report end to end, and presented an internal seminar on running device automation from an AI CLI.",
    // Opens the browser print dialog — "Save as PDF" produces the report.
    primaryCta: { label: "Download Report" },
    secondaryCta: { label: "View Projects", to: "/projects" },
  },

  // Quick numbers under the hero. Keep to 3–4 for a clean row.
  stats: [
    { value: "1.5", label: "Months on site", icon: "calendar" },
    { value: "3", label: "Projects delivered", icon: "briefcase" },
    { value: "1", label: "Seminar presented", icon: "quote" },
    { value: "1", label: "Certification earned", icon: "school" },
  ],

  skills: [
    "Fortinet FortiGate",
    "Firewall Policy & NAT",
    "VLAN & Router on a Stick",
    "Static Routing",
    "Web Filtering",
    "Python & Playwright",
    "Gemini & Gmail API",
    "HashiCorp Vault",
    "AI CLI Automation",
    "Network Monitoring",
  ],

  documentationTeaser: {
    image: asset("project-ict-dashboard.jpg"),
    imageAlt: "ICT Automation dashboard with browser profile, Gmail API and Gemini AI readiness cards",
    title: "Internship Documentation",
    body: "The evidence behind the write-ups — the appliance on the bench, the screens I configured it on, the dashboard I built, and the traffic log that proves each rule did what it was meant to do.",
    cta: { label: "View Full Gallery", to: "/documentation" },
  },
};

/* ---------------------------------------------------------------- */
/* 4. PROJECTS                                                       */
/*    `slug` becomes the URL: /projects/<slug>                       */
/* ---------------------------------------------------------------- */

export const projects = [
  {
    slug: "ai-automation-training-n8n",
    title: "AI & Automation Training — Automatic Minutes with n8n",
    shortTitle: "AI & Automation Training",
    summary:
      "Designed and delivered a full-day AI & Automation training for the ICT team: AI/ML/LLM fundamentals, the trigger-process-output pattern behind workflow automation, and a live n8n case study that turns raw meeting transcripts into structured, routed minutes using the Gemini API.",
    description:
      "A full-day knowledge-sharing session built from scratch and delivered to the ICT Support & Operation team. The day ran in three parts: an AI fundamentals block (how LLMs work, tokens and context windows, training versus inference, hallucination and non-determinism, prompt engineering, deployment tiers and data classification); an automation block covering the trigger-process-output pattern, data transformation, control flow, binary handling and error handling in n8n; and a hands-on case study where a thirteen-node n8n workflow reads transcripts from a local folder, has Gemini write the minutes as strict JSON, validates the output, and files each result by urgency into one of three folders.",
    period: "September 2026",
    status: "Completed",
    tags: [
      "AI Fundamentals",
      "n8n",
      "Workflow Automation",
      "Prompt Engineering",
      "Google Gemini",
      "AI Safety",
      "Knowledge Sharing",
    ],

    metrics: [
      { value: "43", label: "Slides presented", icon: "gallery" },
      { value: "3", label: "Sessions across one day", icon: "clock" },
      { value: "13", label: "n8n nodes in the workflow", icon: "workflow" },
      { value: "7", label: "Node types used", icon: "layers" },
    ],

    gallery: {
      image: asset("rafipresentasi.jpeg"),
      alt: "Presenting the AI & Automation training to the ICT team at AirAsia Indonesia",
      caption: "Delivering the session to the ICT team",
      items: [
        {
          src: asset("rafipresentasi.jpeg"),
          alt: "Presenting the AI & Automation training in front of the ICT team",
          label: "Presenting",
          caption:
            "Walking the team through the AI fundamentals block — how an LLM predicts the next token, and why that makes data classification and strict prompts matter.",
        },
        {
          src: asset("fotobareng1.jpeg"),
          alt: "Group photo of the ICT team after the AI & Automation training",
          label: "The team",
          fit: "contain",
          caption:
            "The ICT Support & Operation team after the session — the audience the workflow was built for.",
        },
        {
          src: asset("fotobareng2.jpeg"),
          alt: "Second group photo with the training participants",
          label: "Group photo",
          fit: "contain",
          caption:
            "A second group shot at the end of the day, after the live n8n workflow demo.",
        },
      ],
    },

    impact: {
      body: "Turned a topic the team was curious but cautious about into a working pattern they can reuse. The day ended with a running n8n workflow — and, more importantly, a shared understanding of which AI to use for which data, and what controls make it acceptable: credentials out of prompts, an agent that never holds a secret, and every output validated before it is trusted.",
      chip: "Pattern shared with the ICT team",
    },

    architecture: {
      body: "Thirteen n8n nodes chained into one workflow. A schedule trigger polls the input folder, new transcripts are read and de-duplicated, each one is extracted to text and looped through a strict LLM chain backed by Gemini, the response is parsed and validated, converted back to a file, routed by urgency into one of three folders, then the loop advances to the next transcript.",
      flow: [
        { label: "Schedule Trigger (1 min)", icon: "clock" },
        { label: "Read + de-duplicate transcripts", icon: "server" },
        { label: "Extract binary to text", icon: "note" },
        { label: "LLM Chain + Gemini", icon: "sparkles", highlight: true },
        { label: "Parse + validate JSON", icon: "code" },
        { label: "Switch by urgency", icon: "route" },
        { label: "Write Markdown minutes", icon: "layers" },
      ],
      diagram: {
        title: "Workflow Architecture — Thirteen Nodes, One Path",
        caption:
          "The full n8n workflow. Each node does one job and passes JSON to the next; the three write nodes loop back so every transcript in the batch is processed.",
        definition: `flowchart LR
    SCHED["<b>Schedule Trigger</b><br/>every 1 minute"]
    READ["<b>Read Files From Disk</b><br/>*.txt &middot; binary"]
    DEDUP["<b>Code (JS)</b><br/>skip already-processed"]
    EXTRACT["<b>Extract from File</b><br/>binary to text"]
    LOOP["<b>Loop Over Items</b><br/>batch size 1"]
    LLM["<b>Basic LLM Chain</b><br/>strict JSON prompt"]
    GEM["<b>Google Gemini</b><br/>gemini-2.5-flash"]
    PARSE["<b>Parse (JS)</b><br/>try-catch &middot; validate"]
    CONV["<b>Convert to File</b><br/>text to .md binary"]
    SW{"<b>Switch</b><br/>by urgency"}
    U["<b>Write File</b><br/>hasil-urgent/"]
    B["<b>Write File</b><br/>hasil-biasa/"]
    C["<b>Write File</b><br/>hasil-perlu-cek/"]

    SCHED --> READ --> DEDUP --> EXTRACT --> LOOP --> LLM --> GEM --> PARSE --> CONV --> SW
    SW -->|"urgen"| U
    SW -->|"biasa"| B
    SW -->|"perlu-cek"| C
    U -->|"next item"| LOOP
    B -->|"next item"| LOOP
    C -->|"next item"| LOOP

    classDef trig fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#3b0764
    classDef io fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef ai fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
    classDef logic fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d
    classDef out fill:#ffe4e6,stroke:#e11d48,stroke-width:2px,color:#881337

    class SCHED trig
    class READ,EXTRACT,CONV io
    class LLM,GEM,PARSE ai
    class DEDUP,LOOP,SW logic
    class U,B,C out`,
      },
      alt: "Diagram of the n8n workflow: schedule trigger, read files, de-duplicate, extract, loop, LLM chain with Gemini, parse, convert to file, switch by urgency, then three write-file outputs looping back",
    },

    sequence: {
      title: "One Transcript, Start to Finish",
      caption:
        "What happens between a transcript landing in the folder and its minutes being filed. The loop repeats this sequence for every new file.",
      definition: `sequenceDiagram
    autonumber
    participant SCH as Schedule Trigger
    participant RD as Read Files
    participant CD as Dedupe
    participant EX as Extract from File
    participant LP as Loop Over Items
    participant LLM as LLM Chain
    participant GEM as Gemini API
    participant PS as Parse
    participant SW as Switch
    participant WR as Write File

    SCH->>RD: Folder check every 1 minute
    RD-->>CD: .txt files as binary
    CD->>EX: Only files not seen before
    EX->>LP: Transcript text
    LP->>LLM: One transcript at a time
    LLM->>GEM: Strict prompt plus transcript
    GEM-->>LLM: JSON minutes
    LLM->>PS: Raw JSON string
    PS->>PS: Parse, validate, format Markdown
    PS->>SW: Structured minutes
    SW->>WR: Route by urgency
    WR->>LP: Return for the next file`,
    },

    stack: {
      title: "The Stack, and Why Each Piece Is There",
      body: "Every component was chosen so the workflow runs unattended on a Windows workstation with no paid orchestration platform.",
      columns: ["Layer", "Technology", "Role in the workflow"],
      rows: [
        ["Trigger", "n8n Schedule Trigger", "Polls the input folder every minute — a local folder cannot push an event."],
        ["Automation", "n8n (self-hosted)", "Orchestrates all thirteen nodes; JavaScript where real logic is needed."],
        ["AI", "Google Gemini API", "gemini-2.5-flash turns each transcript into structured JSON — Tier 3, inference-only."],
        ["Input", "Windows filesystem", "Reads .txt transcripts with binary mode and a restricted folder allow-list."],
        ["Validation", "JavaScript (Parse node)", "Strips code fences, parses JSON in try-catch, forces an unknown urgency to perlu-cek."],
        ["Output", "Windows filesystem", "Writes Markdown minutes into hasil-urgent, hasil-biasa or hasil-perlu-cek."],
      ],
    },

    artifacts: {
      title: "Where the Minutes Land",
      body: "One run produces one Markdown file per transcript, filed by the urgency the model assigned and re-checked by the validation node.",
      items: [
        { name: "hasil-urgent/", desc: "Minutes flagged urgent — the folder the team checks first.", icon: "trending" },
        { name: "hasil-biasa/", desc: "Routine minutes, stored for the normal record.", icon: "note" },
        { name: "hasil-perlu-cek/", desc: "Anything the model could not classify with confidence, or that failed to parse — held for human review.", icon: "check" },
        { name: "Input-notulen/", desc: "The watched folder. Drop a .txt transcript here and the trigger picks it up within a minute.", icon: "server" },
        { name: "N8N env config", desc: "Binary data mode and folder access are restricted through environment variables.", icon: "terminal" },
        { name: "Markdown output", desc: "Minutes are written as .md — readable by people and clean to diff between meetings.", icon: "code" },
      ],
    },

    steps: [
      {
        title: "AI Fundamentals",
        body: "Opened with the concepts the rest of the day depends on: AI, ML, DL and LLMs, how a model predicts the next token, tokens and context windows, training versus inference, why models are stateless, hallucination and non-determinism, the six components of a good prompt, deployment tiers and data classification.",
        tags: ["LLM", "Prompt Engineering", "Data Classification"],
      },
      {
        title: "Automation Fundamentals",
        body: "Moved from theory to the mechanics of automation: the trigger-process-output pattern, event versus schedule triggers, input and permission challenges, data transformation, control flow, binary data handling, integrating an LLM into a workflow, and the error-handling patterns that keep a run from dying halfway.",
        tags: ["n8n", "Control Flow", "Error Handling"],
      },
      {
        title: "Live Case Study",
        body: "Built and demonstrated the automatic-minutes workflow node by node — from the schedule trigger and duplicate filter, through the Gemini LLM chain and the parse safety net, to the switch that files each result by urgency. The team watched a transcript become structured minutes in under a minute.",
        tags: ["n8n", "Gemini API", "Live Demo"],
      },
    ],

    deck: {
      title: "The Deck",
      body: "All forty-three slides as presented, across the three sessions. Use the arrows or the filmstrip to move through them; click a slide to open it full size.",
      downloadUrl: `${import.meta.env.BASE_URL}ai-automation-training.pdf`,
      downloadLabel: "Download the deck (PDF)",
      slides: [
        { src: asset("ai-automation-training/slide-01.jpg"), title: "Title", note: "AI & Automation Training — a hands-on session on automatic meeting minutes with n8n and AI, presented with Ammara Dalia Irna Putri to the ICT team." },
        { src: asset("ai-automation-training/slide-02.jpg"), title: "Fundamental AI", note: "Part one: what AI, ML, DL and LLMs actually are, and how a language model produces an answer. 10:00 – 11:15." },
        { src: asset("ai-automation-training/slide-03.jpg"), title: "AI / ML / DL / LLM", note: "AI is the umbrella, machine learning learns from data, deep learning adds complex neural networks, and the LLM is the layer this training uses." },
        { src: asset("ai-automation-training/slide-04.jpg"), title: "How an LLM Works", note: "A language model is a next-word prediction machine: the prompt is tokenised, and each following word is predicted from everything before it." },
        { src: asset("ai-automation-training/slide-05.jpg"), title: "Token & Context Window", note: "A token is the smallest unit a model processes; the context window is the maximum it can hold at once — 128K tokens for Gemini 1.5 Flash." },
        { src: asset("ai-automation-training/slide-06.jpg"), title: "Training vs Inference", note: "Training is where the model learns and can cost millions; inference is where it answers and costs per token. The API is inference-only." },
        { src: asset("ai-automation-training/slide-07.jpg"), title: "Stateless Models", note: "The model remembers nothing between calls — the application resends the whole history, so each meeting file is a brand-new conversation." },
        { src: asset("ai-automation-training/slide-08.jpg"), title: "Hallucination & Confident-Wrong", note: "A model can answer confidently and wrongly because it predicts plausible words, not verified facts — hence the strict prompt rules and parse safety net." },
        { src: asset("ai-automation-training/slide-09.jpg"), title: "Non-Determinism", note: "The same prompt can produce different outputs; the parse node validates the result so an unexpected answer is caught rather than trusted." },
        { src: asset("ai-automation-training/slide-10.jpg"), title: "Prompt Engineering Basics", note: "Six components make a good prompt: role, task, format, rules, data and an output marker — all six appear in the case-study prompt." },
        { src: asset("ai-automation-training/slide-11.jpg"), title: "Deployment Tiers", note: "Six tiers from consumer apps to self-hosted models. The Gemini API sits at Tier 3: inference-only, data not used for training." },
        { src: asset("ai-automation-training/slide-12.jpg"), title: "Data Classification", note: "Meeting minutes are Internal data, which needs Tier 2 or above — the Gemini API at Tier 3 is the right fit." },
        { src: asset("ai-automation-training/slide-13.jpg"), title: "AI Agents", note: "An agent can act, not just talk. The 'lethal trifecta' is private data, untrusted content and outbound communication at once — this workflow is a simple chain, not an agent." },
        { src: asset("ai-automation-training/slide-14.jpg"), title: "Fundamental Automation", note: "Part two: the trigger → process → output pattern and an n8n deep dive. 11:15 – 12:00." },
        { src: asset("ai-automation-training/slide-15.jpg"), title: "What is Workflow Automation?", note: "The manual routine took about five minutes per file; automating it takes about ten seconds and is consistent, scalable and auditable." },
        { src: asset("ai-automation-training/slide-16.jpg"), title: "The Core Pattern", note: "Every automation follows trigger → process → output: something starts it, something transforms the data, and something saves or sends the result." },
        { src: asset("ai-automation-training/slide-17.jpg"), title: "Trigger: Event vs Schedule", note: "Event triggers fire instantly; schedule triggers poll. A local Windows folder has no event, so the workflow polls every minute." },
        { src: asset("ai-automation-training/slide-18.jpg"), title: "Input / Data Source", note: "Getting data in is the hard part: format differences, filesystem permissions, and the fact that an LLM cannot read binary directly." },
        { src: asset("ai-automation-training/slide-19.jpg"), title: "Data Transformation", note: "Each arrow is one n8n node: text is extracted, sent to the LLM, parsed into structured JSON, converted to a file, then written to disk." },
        { src: asset("ai-automation-training/slide-20.jpg"), title: "Control Flow", note: "Conditional routing, looping one item at a time, try-catch error handling and a fallback route — the four control patterns the workflow uses." },
        { src: asset("ai-automation-training/slide-21.jpg"), title: "AI Inside the Automation", note: "The LLM chain is the bridge: the previous node's text is placed into the prompt, sent to Gemini, and the response returns to the workflow." },
        { src: asset("ai-automation-training/slide-22.jpg"), title: "Output / Persistence", note: "Results can go to a file system, a database or a notification. This case study writes Markdown into three folders by urgency." },
        { src: asset("ai-automation-training/slide-23.jpg"), title: "What is n8n?", note: "A workflow automation tool that is self-hostable, code-first, open source and connects to over a hundred integrations." },
        { src: asset("ai-automation-training/slide-24.jpg"), title: "Node Types in n8n", note: "Seven node categories are used: trigger, action, transform, logic, AI/ML, plus the integration types available." },
        { src: asset("ai-automation-training/slide-25.jpg"), title: "Data Flow in n8n", note: "The full path: schedule → read → dedupe → extract → loop → LLM → parse → convert → switch → write, with expressions pulling fields from earlier nodes." },
        { src: asset("ai-automation-training/slide-26.jpg"), title: "Binary Data Handling", note: "Binary is read, converted to text for the LLM, converted back to a file, then written — with binary mode and folder restrictions configured on the server." },
        { src: asset("ai-automation-training/slide-27.jpg"), title: "Error Handling Patterns", note: "Try-catch around the parse, output validation, duplicate detection via static data, and a switch fallback so the workflow never dies mid-run." },
        { src: asset("ai-automation-training/slide-28.jpg"), title: "Recap: AI + Automation", note: "The session recap: tokens, context, training vs inference, prompting, tiers, data classes and agents, plus the automation fundamentals." },
        { src: asset("ai-automation-training/slide-29.jpg"), title: "Case Study", note: "Part three: an n8n automation that turns transcripts in a local folder into structured minutes with AI. 13:00 – 15:00." },
        { src: asset("ai-automation-training/slide-30.jpg"), title: "Node 1 — Schedule Trigger", note: "Checks the input folder every minute, because a local folder cannot notify the workflow when a file arrives." },
        { src: asset("ai-automation-training/slide-31.jpg"), title: "Node 2 — Read Files From Disk", note: "Reads every .txt transcript from the input folder as binary data, with binary mode and folder access configured." },
        { src: asset("ai-automation-training/slide-32.jpg"), title: "Node 3 — Code (JS)", note: "Filters out files already processed using workflow static data, so nothing is summarised twice." },
        { src: asset("ai-automation-training/slide-33.jpg"), title: "Node 4 — Extract from File", note: "Turns the binary transcript into text, because the language model cannot read a binary file directly." },
        { src: asset("ai-automation-training/slide-34.jpg"), title: "Node 5 — Loop Over Items", note: "Processes one file at a time to avoid mixing files, respect API rate limits, and make any error traceable to a single file." },
        { src: asset("ai-automation-training/slide-35.jpg"), title: "Node 6 — Basic LLM Chain", note: "The heart of the workflow: sends the transcript with a strict prompt that asks for JSON only." },
        { src: asset("ai-automation-training/slide-36.jpg"), title: "Node 7 — Google Gemini Chat Model", note: "The model that answers: gemini-2.5-flash through a Gemini API key — Tier 3, inference-only, data not used for training." },
        { src: asset("ai-automation-training/slide-37.jpg"), title: "Node 8 — Parse (JavaScript)", note: "The safety net: strips code fences, parses the JSON in a try-catch, and forces an unknown urgency to perlu-cek." },
        { src: asset("ai-automation-training/slide-38.jpg"), title: "Node 9 — Convert to File", note: "Converts the Markdown text back into a binary file, because the write node expects binary data." },
        { src: asset("ai-automation-training/slide-39.jpg"), title: "Node 10 — Switch", note: "Routes the file by urgency into one of three outputs, with a fallback for anything unexpected." },
        { src: asset("ai-automation-training/slide-40.jpg"), title: "Nodes 11–13 — Write File to Disk", note: "Three write nodes save the Markdown into hasil-urgent, hasil-biasa or hasil-perlu-cek, then connect back to the loop." },
        { src: asset("ai-automation-training/slide-41.jpg"), title: "Full Workflow Demo", note: "Drop three transcripts in the input folder, wait for the trigger, follow the data from node to node, and find the results in the three output folders." },
        { src: asset("ai-automation-training/slide-42.jpg"), title: "Q&A", note: "Long transcripts, sensitive data, local models and email delivery — the questions raised at the end of the session." },
        { src: asset("ai-automation-training/slide-43.jpg"), title: "Thank You", note: "Don't be afraid to use AI — just use it correctly: which AI, for what data, with what controls. Happy automating!" },
      ],
    },
  },

  {
    slug: "device-monitoring-report-automation",
    title: "Automated Device Monitoring Report",
    shortTitle: "Monitoring Report Automation",
    summary:
      "Built the internal ICT monitoring dashboard for network endpoints, then automated the whole reporting loop: a scheduled job signs into the dashboard, captures it, extracts the compliance metrics, has the Gemini API write the analysis, and mails the finished report — without anyone opening a browser.",
    description:
      "Device monitoring reports used to mean opening the internal dashboard, reading the panels, and writing the summary by hand every morning. I built the dashboard and then automated the routine end to end: Windows Task Scheduler fires a Python orchestrator at 09:00, Playwright drives a headless Chromium through the login and captures both a screenshot and a structured JSON dataset, the Gemini API turns those metrics into an executive summary, and a report generator emits HTML, Markdown and PDF before Gmail delivers the report and Google Drive archives it.",
    period: "July 27 – September 11, 2026",
    status: "Completed",
    tags: [
      "Python",
      "Playwright",
      "Gemini AI API",
      "Gmail API",
      "Network Monitoring",
      "Report Automation",
    ],

    /* Headline figures for the detail page. */
    metrics: [
      { value: "09:00", label: "Runs daily, unattended", icon: "clock" },
      { value: "6", label: "Pipeline layers, fully scripted", icon: "layers" },
      { value: "3", label: "Report formats per run", icon: "code" },
      { value: "~2 h", label: "Manual work saved each week", icon: "trending" },
    ],

    gallery: {
      image: asset("project-ict-dashboard.jpg"),
      alt: "ICT Automation dashboard showing browser profile, Gmail API and Gemini AI readiness with the Run Pipeline control",
      caption: "ICT Automation dashboard — pipeline control",
      items: [
        {
          src: asset("project-ict-dashboard.jpg"),
          alt: "ICT Automation dashboard showing browser profile, Gmail API and Gemini AI readiness with the Run Pipeline control",
          label: "Dashboard",
          caption:
            "The operator view. Three readiness cards confirm the browser profile, the Gmail API and the Gemini API key are available before Pipeline Control will run the job — so a failed run is diagnosed at a glance instead of in the logs.",
        },
        {
          src: asset("project-ict-email-report.jpg"),
          alt: "Delivered ICT Daily Endpoint Compliance Report email with the AirAsia-branded HTML report body",
          label: "Delivered report",
          caption:
            "The output as the team receives it: an AirAsia-branded HTML email, ICT Daily Endpoint Compliance Report, generated and sent automatically on 06 August 2026.",
        },
      ],
    },

    impact: {
      body: "Turned a manual, repeated dashboard check into a scheduled job. The compliance report now reaches the ICT Support & Operation inbox on its own — already summarised, already archived — removing roughly two hours of routine work per week and taking the human error out of a daily copy-and-paste task.",
      chip: "Manual reporting removed",
    },

    architecture: {
      body: "Six layers, each one scripted. Scheduling triggers orchestration; orchestration drives a headless browser that acquires both a screenshot and a structured dataset; the dataset plus prompt configuration go to Gemini for analysis; the report generator emits three formats; delivery mails the report and archives it to Drive.",
      // The highlighted node is the one I personally owned.
      flow: [
        { label: "Task Scheduler (09:00)", icon: "clock" },
        { label: "Python Orchestrator", icon: "terminal", highlight: true },
        { label: "Playwright Capture", icon: "layers" },
        { label: "Gemini AI Analysis", icon: "sparkles" },
        { label: "Report Generator", icon: "code" },
        { label: "Gmail + Drive", icon: "mail" },
      ],
      diagram: {
        title: "System Architecture — ICT Daily Report Automation Framework",
        caption:
          "The full pipeline, from the 09:00 trigger to the archived report. Configuration and output storage sit alongside the flow; no credential is held in the diagram or the repository.",
        definition: `flowchart TD
    SCHED["<b>Windows Task Scheduler</b><br/>Daily schedule — 09:00 AM"]

    subgraph ORCHL["2 &middot; Orchestration"]
      ORCH["<b>Python Orchestrator</b><br/>run_daily.py"]
    end

    subgraph ACQ["3 &middot; Data Acquisition"]
      PW["<b>Playwright + Chromium</b><br/>Headless browser automation"]
      DASH["<b>ICT Monitoring Dashboard</b><br/>Endpoint compliance source"]
      SHOT["<b>Dashboard Screenshot</b><br/>output/screenshots/*.png"]
      JSON["<b>JSON Dataset</b><br/>output/json/*.json"]
    end

    subgraph AIL["4 &middot; Processing &amp; AI Analysis"]
      SJSON["<b>Structured JSON</b><br/>Normalised compliance metrics"]
      GEM["<b>Google Gemini API</b><br/>AI analysis service"]
      AIOUT["<b>Analysis Result</b><br/>Summary &middot; KPI &middot; Key findings"]
    end

    subgraph GENL["5 &middot; Report Generation"]
      RGEN["<b>Report Generator</b><br/>Analysed data to structured reports"]
      HTML["<b>.html</b><br/>output/html/"]
      MD["<b>.md</b><br/>output/reports/"]
      PDF["<b>.pdf</b><br/>output/pdf/"]
    end

    subgraph DELL["6 &middot; Delivery &amp; Storage"]
      EMAILGEN["<b>Email Report Generator</b><br/>Builds the formatted HTML email"]
      GMAIL["<b>Gmail delivery</b><br/>ICT Support &amp; Operation"]
      DRIVE["<b>Google Drive</b><br/>Central archive"]
    end

    CONFIG["<b>Configuration</b><br/>gemini_api.env &middot; prompt_*.txt<br/>email_config.json &middot; token"]

    SCHED -->|"09:00 daily trigger"| ORCH
    ORCH -->|"start workflow"| PW
    PW <-->|"login &middot; dashboard data"| DASH
    PW -->|"capture"| SHOT
    PW -->|"extract"| JSON
    JSON -->|"normalise"| SJSON
    SJSON -->|"metrics"| GEM
    GEM -->|"AI output"| AIOUT
    AIOUT -->|"analysis result"| RGEN
    RGEN --> HTML
    RGEN --> MD
    RGEN --> PDF
    HTML -->|"report body"| EMAILGEN
    SHOT -->|"inline screenshot"| EMAILGEN
    EMAILGEN -->|"daily delivery"| GMAIL
    HTML --> DRIVE
    MD --> DRIVE
    PDF -->|"archive"| DRIVE
    CONFIG -.->|"load config"| ORCH
    CONFIG -.->|"API credentials"| GEM

    classDef sched fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#3b0764
    classDef orch fill:#fee2e2,stroke:#dc2626,stroke-width:2px,color:#7f1d1d
    classDef acq fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef ai fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
    classDef gen fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d
    classDef del fill:#ffe4e6,stroke:#e11d48,stroke-width:2px,color:#881337
    classDef cfg fill:#f1f5f9,stroke:#94a3b8,stroke-width:1px,color:#334155,stroke-dasharray:4 3

    class SCHED sched
    class ORCH orch
    class PW,DASH,SHOT,JSON acq
    class SJSON,GEM,AIOUT ai
    class RGEN,HTML,MD,PDF gen
    class EMAILGEN,GMAIL,DRIVE del
    class CONFIG cfg`,
      },
      alt: "Six-layer pipeline: Task Scheduler to Python orchestrator, Playwright capture, Gemini analysis, report generation, then Gmail delivery and Google Drive archive",
    },

    /* What actually happens on a single 09:00 run, in order. */
    sequence: {
      title: "One Daily Run, Step by Step",
      caption:
        "The ten steps the orchestrator performs between the 09:00 trigger and the archived report. Every arrow is scripted — no operator input at any point.",
      definition: `sequenceDiagram
    autonumber
    participant TS as Task Scheduler
    participant OR as run_daily.py
    participant PW as Playwright
    participant DB as ICT Dashboard
    participant GE as Gemini API
    participant RG as Report Generator
    participant GM as Gmail
    participant GD as Google Drive

    TS->>OR: Trigger at 09:00
    OR->>OR: Load config and credentials
    OR->>PW: Launch headless Chromium
    PW->>DB: Sign in with the saved browser profile
    DB-->>PW: Endpoint compliance data
    PW->>PW: Capture screenshot and extract JSON
    OR->>GE: Structured metrics plus prompt files
    GE-->>OR: Executive summary, KPI, key findings
    OR->>RG: Analysis result
    RG->>RG: Render HTML, Markdown and PDF
    RG->>GM: HTML body plus inline screenshot and PDF
    GM-->>OR: Delivery confirmed
    RG->>GD: Archive all three formats
    OR->>TS: Exit 0 — run complete`,
    },

    /* Rendered as a labelled table on the detail page. */
    stack: {
      title: "Technology Stack",
      body: "Every component was chosen so the job can run unattended on a Windows workstation without a server, a queue, or a paid orchestration platform.",
      columns: ["Layer", "Technology", "Role in the pipeline"],
      rows: [
        ["Scheduling", "Windows Task Scheduler", "Fires the job at 09:00 every day; no daemon to keep alive."],
        ["Orchestration", "Python — run_daily.py", "Loads configuration, sequences all six layers, exits with a status code."],
        ["Acquisition", "Playwright + Chromium", "Headless sign-in and navigation, screenshot capture, DOM extraction."],
        ["Analysis", "Google Gemini API", "Turns the normalised metrics into an executive summary and key findings."],
        ["Generation", "Report generator (HTML / MD / PDF)", "One analysis result rendered into three distribution formats."],
        ["Delivery", "Gmail API", "Sends the branded HTML report to ICT Support & Operation."],
        ["Storage", "Google Drive", "Central archive so any past day can be retrieved."],
      ],
    },

    /* Mirrors the repository layout, minus anything sensitive. */
    artifacts: {
      title: "Run Output",
      body: "A single run writes a complete, self-contained record of the day — the raw evidence, the analysis, and the three distributed formats.",
      items: [
        { name: "output/screenshots/", desc: "Timestamped PNG of the dashboard as it looked at capture time — the visual evidence embedded in the email.", icon: "gallery" },
        { name: "output/json/", desc: "Raw extraction, then the normalised compliance metrics fed to Gemini.", icon: "code" },
        { name: "output/html/", desc: "The rendered report; doubles as the email body.", icon: "layers" },
        { name: "output/reports/", desc: "Markdown copy, kept because it diffs cleanly between days.", icon: "note" },
        { name: "output/pdf/", desc: "Print-ready attachment for the compliance record.", icon: "download" },
        { name: "config/", desc: "API keys, prompt files and recipient configuration — kept outside version control.", icon: "server" },
      ],
    },

    steps: [
      {
        title: "Dashboard Build",
        body: "Built the internal ICT monitoring dashboard the team actually watches: endpoint compliance status, plus readiness cards for the browser profile, the Gmail API and the Gemini key so a failed run is obvious before it starts.",
        tags: ["Dashboard", "Endpoint Compliance"],
      },
      {
        title: "Scheduling & Orchestration",
        body: "Wrapped the routine in run_daily.py and registered it with Windows Task Scheduler for 09:00. The orchestrator loads credentials from config/, sequences every stage, and exits with a status code so a failure is visible in the scheduler history.",
        tags: ["Python", "Task Scheduler"],
      },
      {
        title: "Headless Capture",
        body: "Playwright drives Chromium through the dashboard sign-in using a saved browser profile, captures the panels as a screenshot, and extracts the underlying values as JSON — no manual clicking, and the data arrives structured rather than as pixels.",
        tags: ["Playwright", "Screenshot", "Data Extraction"],
      },
      {
        title: "Normalisation & AI Analysis",
        body: "The raw extraction is normalised into a consistent metrics schema, then sent to the Gemini API together with versioned prompt files. Keeping the prompts in config/ means the report wording can be tuned without touching the pipeline code.",
        tags: ["Gemini AI API", "Prompt Engineering"],
      },
      {
        title: "Report Generation",
        body: "One analysis result is rendered into three formats: HTML for the email body, Markdown for the archive, and PDF as the attachment for the compliance record.",
        tags: ["Reporting", "HTML / PDF"],
      },
      {
        title: "Delivery & Archive",
        body: "The email generator assembles the AirAsia-branded HTML with the dashboard screenshot inline, the executive summary and the PDF attached; Gmail delivers it to ICT Support & Operation and Google Drive keeps all three formats.",
        tags: ["Gmail API", "Google Drive"],
      },
    ],
  },

  {
    slug: "fortigate-vlan-internet-access",
    title: "FortiGate NGFW — VLAN, Routing & Web Filtering",
    shortTitle: "FortiGate NGFW & VLAN",
    summary:
      "Brought a FortiGate 90G up from an unconfigured unit to a working next-generation firewall: LAN and WAN interfaces, a default static route, DHCP for the user segment, the firewall policy that lets laptops reach the internet, VLAN segmentation with router-on-a-stick, and a FortiGuard web filter enforced on that policy.",
    description:
      "Hands-on next-generation firewall work on a FortiGate 90G. I configured the interfaces and addressing so user laptops get an address and a gateway, added the default static route out of the WAN port, and wrote the firewall policy — named Internetan — that permits the segment outbound with NAT. On top of that base I built VLAN segmentation using router-on-a-stick, then attached a FortiGuard web filter profile with a static URL blocklist and verified every decision in the forward traffic log.",
    period: "July 27 – September 11, 2026",
    status: "Completed",
    tags: [
      "Fortinet FortiGate",
      "NGFW",
      "VLAN",
      "Router on a Stick",
      "Static Routing",
      "Firewall Policy",
      "Web Filtering",
      "NAT",
    ],

    metrics: [
      { value: "90G", label: "FortiGate model configured", icon: "server" },
      { value: "3", label: "Configuration tasks delivered", icon: "route" },
      { value: "95", label: "FortiGuard categories filtered", icon: "layers" },
      { value: "UTM", label: "Blocks confirmed in the traffic log", icon: "check" },
    ],

    gallery: {
      image: asset("fortigate-90g-unit.jpg"),
      alt: "FortiGate 90G desktop firewall powered on with copper patch leads in the LAN and WAN ports",
      caption: "The FortiGate 90G I configured",
      items: [
        {
          src: asset("fortigate-90g-unit.jpg"),
          alt: "FortiGate 90G desktop firewall powered on with copper patch leads in the LAN and WAN ports",
          label: "Hardware",
          caption:
            "The unit itself — a FortiGate 90G. Power and status LEDs green, the white lead into the shared X1 port carrying the WAN uplink and the blue lead into the switched LAN ports.",
        },
        {
          src: asset("fortigate-interfaces.jpg"),
          alt: "FortiGate interface list showing the fortilink aggregate, physical interfaces x1 and x2, and the lan VLAN switch with its DHCP range",
          label: "Interfaces",
          caption:
            "Network > Interfaces after configuration. X1 carries the WAN address 10.42.0.145/8; the lan VLAN switch groups port1–port4 behind 192.168.1.99/24 and hands out 192.168.1.110–192.168.1.210 by DHCP.",
        },
        {
          src: asset("fortigate-webfilter-profile.jpg"),
          alt: "FortiGuard category based filter inside the Web-Test web filter profile with the Potentially Liable categories set to monitor",
          label: "Web filter profile",
          caption:
            "The Web-Test profile, flow-based, with the FortiGuard category filter switched on. The twelve Potentially Liable categories are set to Monitor so the traffic is classified and logged before anything is blocked outright.",
        },
        {
          src: asset("fortigate-url-filter-list.jpg"),
          alt: "Static URL filter list with three wildcard entries set to block and enabled",
          label: "URL blocklist",
          caption:
            "The static URL filter sits in front of the category engine. Three wildcard entries, all Block and Enable — one of them my own site, used as a control so a block could be proven rather than assumed.",
        },
        {
          src: asset("fortigate-url-entry.jpg"),
          alt: "Single static URL filter entry showing URL, type wildcard, action block and status enable",
          label: "URL entry",
          caption:
            "One entry in detail. Wildcard rather than Simple so every host under the domain is matched, Action Block, Status Enable.",
        },
        {
          src: asset("fortigate-policy-security-profiles.jpg"),
          alt: "Firewall policy showing NAT enabled with outgoing interface address and the Web-Test web filter with certificate inspection attached",
          label: "Policy binding",
          caption:
            "Where the profile takes effect. NAT is on using the outgoing interface address, the Web-Test profile is attached to the policy, and SSL inspection is set to certificate-inspection so HTTPS can be classified by its certificate without full decryption.",
        },
        {
          src: asset("fortigate-traffic-log.jpg"),
          alt: "FortiGate forward traffic log showing UTM blocked denials alongside accepted sessions under the Internetan policy",
          label: "Verification",
          caption:
            "Proof the policy behaves as designed. Client 192.168.1.111 under policy Internetan: Deny (UTM Blocked) against the filtered domains, Accept for everything permitted, and DNS resolving cleanly to 10.42.0.1 throughout.",
        },
      ],
    },

    impact: {
      body: "A bare appliance became a working internet edge for the user segment. Laptops pull an address by DHCP and reach the internet through an explicit policy rather than a flat, unfiltered path — and because the web filter is bound to that same policy, every session is classified, logged and attributable to a client IP instead of disappearing into untracked traffic.",
      chip: "Segmented, filtered edge",
    },

    architecture: {
      body: "User ports are switched behind one LAN interface that acts as their gateway and DHCP server. Everything outbound matches a single policy, which applies NAT, certificate-based SSL inspection and the web filter before handing the session to the WAN interface and out through the upstream gateway.",
      // The highlighted node is the one I personally owned.
      flow: [
        { label: "User laptops (DHCP)", icon: "smartphone" },
        { label: "LAN switch — 192.168.1.99/24", icon: "server" },
        { label: "Policy 'Internetan' + NAT", icon: "route", highlight: true },
        { label: "Web filter 'Web-Test'", icon: "check" },
        { label: "WAN x1 — 10.42.0.145", icon: "api" },
        { label: "Internet", icon: "workflow" },
      ],
      diagram: {
        title: "Deployed Topology — Edge as Configured",
        caption:
          "The path a user packet actually takes, with the addressing taken from the interface list and the traffic log. The upstream gateway 10.42.0.1 also serves DNS for the segment.",
        definition: `flowchart LR
    subgraph USERS["User segment"]
      PC1["<b>Laptop</b><br/>192.168.1.111<br/><i>DHCP .110 – .210</i>"]
      PC2["<b>Laptop</b><br/>DHCP client"]
    end

    subgraph FGT["FortiGate 90G"]
      LAN["<b>lan — VLAN switch</b><br/>port1 &middot; port2 &middot; port3 &middot; port4<br/>192.168.1.99/24 &middot; DHCP server"]
      POL["<b>Firewall policy &quot;Internetan&quot;</b><br/>action accept &middot; NAT enable<br/>schedule always &middot; service ALL"]
      UTM["<b>UTM inspection</b><br/>Web filter: Web-Test<br/>SSL: certificate-inspection"]
      RT["<b>Static route</b><br/>0.0.0.0/0 via 10.42.0.1<br/>device x1"]
      WAN["<b>x1 — WAN</b><br/>10.42.0.145/8"]
    end

    UP(("Upstream gateway<br/>10.42.0.1<br/>+ DNS"))
    NET(("Internet"))

    PC1 --> LAN
    PC2 --> LAN
    LAN -->|"policy lookup"| POL
    POL -->|"inspect"| UTM
    UTM -->|"allowed"| RT
    UTM -.->|"Deny: UTM Blocked"| PC1
    RT --> WAN
    WAN --> UP --> NET

    classDef user fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef lan fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d
    classDef pol fill:#fee2e2,stroke:#dc2626,stroke-width:2px,color:#7f1d1d
    classDef utm fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
    classDef wan fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#3b0764
    classDef ext fill:#f1f5f9,stroke:#94a3b8,stroke-width:2px,color:#334155

    class PC1,PC2 user
    class LAN lan
    class POL,RT pol
    class UTM utm
    class WAN wan
    class UP,NET ext`,
      },
      alt: "Topology: user laptops on the LAN switch, through the Internetan policy and web filter, out of WAN x1 to the upstream gateway",
    },

    sequence: {
      heading: "How a Request Is Decided",
      title: "Web Filter Decision Path",
      caption:
        "The order the FortiGate evaluates a session in. The static URL filter is consulted before the FortiGuard category engine, which is why a wildcard entry blocks a site even when its category is only set to Monitor.",
      definition: `flowchart TD
    REQ["<b>Client requests a site</b><br/>192.168.1.111 &rarr; HTTPS"]
    MATCH{"Matches policy<br/><b>Internetan</b>?"}
    DROP["<b>Implicit deny</b><br/>no policy, no session"]
    SSL["<b>certificate-inspection</b><br/>read SNI / certificate CN"]
    URLF{"Static URL filter<br/>wildcard match?"}
    BLOCK["<b>Deny: UTM Blocked</b><br/>block page returned &middot; logged"]
    CAT{"FortiGuard category<br/>action?"}
    MON["<b>Monitor</b><br/>allowed, classified, logged"]
    NAT["<b>NAT</b><br/>source rewritten to x1"]
    OUT["<b>Accept</b><br/>forwarded via 10.42.0.1"]

    REQ --> MATCH
    MATCH -->|"no"| DROP
    MATCH -->|"yes"| SSL
    SSL --> URLF
    URLF -->|"block"| BLOCK
    URLF -->|"no match"| CAT
    CAT -->|"block"| BLOCK
    CAT -->|"monitor / allow"| MON
    MON --> NAT --> OUT

    classDef start fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef check fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
    classDef deny fill:#fee2e2,stroke:#dc2626,stroke-width:2px,color:#7f1d1d
    classDef pass fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d

    class REQ start
    class SSL,MON check
    class DROP,BLOCK deny
    class NAT,OUT pass`,
    },

    /* The three tasks, each written up so it can be repeated. */
    guides: {
      title: "Configuration Walkthrough",
      body: "The three tasks I was given, in the order they have to be done — an interface has no use without a route, a route has no use without a policy, and a web filter has nothing to attach to until the policy exists. Each step lists the GUI path I used and the equivalent CLI, so the build can be repeated or audited from the console.",
      items: [
        {
          id: "ngfw-base",
          label: "01",
          title: "Configure the NGFW — LAN, WAN, Static Route, Policy",
          objective:
            "Get a user laptop from an unconfigured port to a working internet connection: address, gateway, route, and permission to leave.",
          topics: ["LAN", "WAN", "DHCP", "Static Routing", "Firewall Policy", "NAT"],
          image: {
            src: asset("fortigate-interfaces.jpg"),
            alt: "FortiGate interface list showing x1 as the WAN interface and the lan VLAN switch with its DHCP range",
            caption:
              "The finished interface list. X1 holds the WAN address; the lan VLAN switch is the user gateway and DHCP server.",
          },
          steps: [
            {
              title: "Address the WAN interface",
              path: "Network > Interfaces > x1",
              body: "Set the uplink address — here 10.42.0.145/255.0.0.0 — and restrict administrative access to what is actually needed. PING, HTTPS and SSH are enough; leaving everything on gives the untrusted side more surface than it should have.",
            },
            {
              title: "Build the LAN and its DHCP scope",
              path: "Network > Interfaces > lan",
              body: "Group the user ports behind one interface and give it the gateway address 192.168.1.99/24, then enable the DHCP server with the range 192.168.1.110–192.168.1.210. Keeping the pool well clear of the gateway leaves room for anything that needs a static address later.",
            },
            {
              title: "Add the default static route",
              path: "Network > Static Routes > Create New",
              body: "Point 0.0.0.0/0 at the upstream gateway 10.42.0.1 out of device x1. Without this the firewall knows both networks but has nowhere to send anything it does not own — the single most common reason a correctly addressed laptop still cannot browse.",
            },
            {
              title: "Write the outbound policy",
              path: "Policy & Objects > Firewall Policy > Create New",
              body: "Source lan, destination x1, service ALL, schedule always, action ACCEPT, and NAT enabled using the outgoing interface address. This is the policy named Internetan that every later screenshot refers to. Until it exists the implicit deny at the bottom of the table drops everything.",
            },
            {
              title: "Verify from the client",
              path: "Log & Report > Forward Traffic",
              body: "From the laptop, confirm it holds an address in the pool, that DNS resolves, and that sessions appear in the forward traffic log under the right policy. A ping that works while the log stays empty means traffic is taking a different path than intended.",
            },
          ],
          cli: {
            title: "CLI equivalent",
            lines: [
              "# WAN interface",
              "config system interface",
              '    edit "x1"',
              "        set mode static",
              "        set ip 10.42.0.145 255.0.0.0",
              "        set allowaccess ping https ssh",
              "        set role wan",
              "    next",
              "end",
              "",
              "# Default route out of the WAN",
              "config router static",
              "    edit 1",
              "        set dst 0.0.0.0 0.0.0.0",
              "        set gateway 10.42.0.1",
              '        set device "x1"',
              "    next",
              "end",
              "",
              "# Outbound policy with NAT",
              "config firewall policy",
              "    edit 1",
              '        set name "Internetan"',
              '        set srcintf "lan"',
              '        set dstintf "x1"',
              '        set srcaddr "all"',
              '        set dstaddr "all"',
              "        set action accept",
              '        set schedule "always"',
              '        set service "ALL"',
              "        set nat enable",
              "    next",
              "end",
            ],
          },
        },
        {
          id: "vlan-roas",
          label: "02",
          title: "VLAN Segmentation — Router on a Stick",
          objective:
            "Carry several VLANs to the firewall over one physical link and let it route between them, instead of burning a port per segment.",
          topics: ["VLAN", "802.1Q Trunk", "Sub-interfaces", "Inter-VLAN Routing"],
          diagram: {
            title: "Router on a Stick",
            caption:
              "One tagged link, one sub-interface per VLAN. The firewall is the gateway for all three segments, so every packet between them is a policy decision rather than a switching decision.",
            definition: `flowchart LR
    subgraph ACCESS["Access ports — untagged"]
      A10["<b>VLAN 10</b><br/>Staff"]
      A20["<b>VLAN 20</b><br/>Guest"]
      A30["<b>VLAN 30</b><br/>IoT"]
    end

    SW["<b>Access switch</b><br/>ports tagged into<br/>one 802.1Q trunk"]

    subgraph FGT["FortiGate — one physical port"]
      T["<b>Trunk port</b><br/>tagged frames in"]
      S10["<b>VLAN 10 sub-if</b><br/>192.168.10.1/24"]
      S20["<b>VLAN 20 sub-if</b><br/>192.168.20.1/24"]
      S30["<b>VLAN 30 sub-if</b><br/>192.168.30.1/24"]
      P["<b>Inter-VLAN policies</b><br/>explicit allow only"]
    end

    WAN(("WAN / Internet"))

    A10 --> SW
    A20 --> SW
    A30 --> SW
    SW ==>|"802.1Q tagged<br/>single link"| T
    T --> S10
    T --> S20
    T --> S30
    S10 --> P
    S20 --> P
    S30 --> P
    P --> WAN

    classDef v10 fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef v20 fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d
    classDef v30 fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
    classDef infra fill:#f1f5f9,stroke:#64748b,stroke-width:2px,color:#334155
    classDef pol fill:#fee2e2,stroke:#dc2626,stroke-width:2px,color:#7f1d1d

    class A10,S10 v10
    class A20,S20 v20
    class A30,S30 v30
    class SW,T,WAN infra
    class P pol`,
          },
          steps: [
            {
              title: "Tag the VLANs on the switch",
              path: "Switch configuration",
              body: "Each access port is untagged in exactly one VLAN; the uplink to the firewall is tagged in all of them. A device stays unaware it is on a VLAN — the tag is added on the way up the trunk and stripped on the way back down.",
            },
            {
              title: "Create a sub-interface per VLAN",
              path: "Network > Interfaces > Create New > Interface",
              body: "Each sub-interface sits on the same physical port, carries its own VLAN ID, and takes the gateway address for its subnet. One cable, three logical interfaces, three broadcast domains that never see each other's frames.",
            },
            {
              title: "Give every VLAN its own DHCP scope",
              path: "Network > Interfaces > (VLAN) > DHCP Server",
              body: "A scope per sub-interface, each handing out its own gateway. Clients then land in the right segment automatically instead of needing manual addressing per port.",
            },
            {
              title: "Write policies for the traffic you want",
              path: "Policy & Objects > Firewall Policy",
              body: "This is the point of the exercise. Because the firewall is the gateway, VLAN-to-VLAN traffic is a policy decision — Guest can be given internet and nothing else, Staff can be allowed to reach internal services, and everything unstated is denied by default.",
            },
          ],
          cli: {
            title: "CLI equivalent",
            lines: [
              "# One sub-interface per VLAN, all on the same trunk port",
              "config system interface",
              '    edit "VLAN10"',
              '        set interface "port5"',
              "        set vlanid 10",
              "        set ip 192.168.10.1 255.255.255.0",
              "        set allowaccess ping",
              "        set role lan",
              "    next",
              '    edit "VLAN20"',
              '        set interface "port5"',
              "        set vlanid 20",
              "        set ip 192.168.20.1 255.255.255.0",
              "        set allowaccess ping",
              "        set role lan",
              "    next",
              "end",
              "",
              "# DHCP scope for VLAN 10",
              "config system dhcp server",
              "    edit 1",
              '        set interface "VLAN10"',
              "        set default-gateway 192.168.10.1",
              "        set netmask 255.255.255.0",
              "        set dns-service default",
              "        config ip-range",
              "            edit 1",
              "                set start-ip 192.168.10.110",
              "                set end-ip 192.168.10.210",
              "            next",
              "        end",
              "    next",
              "end",
            ],
          },
        },
        {
          id: "web-filtering",
          label: "03",
          title: "Web Filtering — FortiGuard Categories & URL Blocklist",
          objective:
            "Control and record what the segment is allowed to reach, using both a category engine and an explicit blocklist, then prove the result in the log.",
          topics: ["FortiGuard", "Static URL Filter", "SSL Inspection", "UTM Logging"],
          image: {
            src: asset("fortigate-url-filter-list.jpg"),
            alt: "Static URL filter with three wildcard entries set to block",
            caption:
              "The static URL filter. Wildcard entries match every host under a domain, and are evaluated before the category engine.",
          },
          steps: [
            {
              title: "Create the web filter profile",
              path: "Security Profiles > Web Filter > Create New",
              body: "Name it — mine is Web-Test — and choose Flow-based, which inspects in the kernel path and keeps latency down compared with proxy-based inspection. Then switch on the FortiGuard Category Based Filter.",
            },
            {
              title: "Set the category actions",
              path: "FortiGuard Category Based Filter",
              body: "Start the Potentially Liable group on Monitor rather than Block. Monitor still classifies and logs every session, so you learn what the segment actually reaches before you take anything away — turning categories off in a working network is a fast way to break something nobody told you about.",
            },
            {
              title: "Add the static URL entries",
              path: "Static URL Filter > URL Filter > Create New",
              body: "Enter the domain, set Type to Wildcard so subdomains and CDN hosts are caught too, Action to Block, Status to Enable. Simple would match only the literal string, which a modern site routes around within one page load.",
            },
            {
              title: "Attach the profile to the policy",
              path: "Policy & Objects > Firewall Policy > (policy) > Security Profiles",
              body: "A profile does nothing on its own. Enable Web Filter on the policy, select Web-Test, and set SSL inspection to certificate-inspection — without it HTTPS is opaque and the filter can only see the destination IP, not the site.",
            },
            {
              title: "Prove it in the log",
              path: "Log & Report > Forward Traffic",
              body: "Browse to a blocked domain and to an allowed one, then read the log. Deny (Deny: UTM Blocked) against the filtered hosts and Accept elsewhere, all under policy Internetan, is the evidence that the profile is bound to the right policy and matching the right traffic.",
            },
          ],
          cli: {
            title: "CLI equivalent",
            lines: [
              "# Static URL blocklist",
              "config webfilter urlfilter",
              "    edit 1",
              '        set name "Blocked-Sites"',
              "        config entries",
              "            edit 1",
              '                set url "www.youtube.com"',
              "                set type wildcard",
              "                set action block",
              "                set status enable",
              "            next",
              "        end",
              "    next",
              "end",
              "",
              "# Profile: category filter + the blocklist above",
              "config webfilter profile",
              '    edit "Web-Test"',
              "        set feature-set flow",
              "        config web",
              "            set urlfilter-table 1",
              "        end",
              "    next",
              "end",
              "",
              "# Bind the profile to the policy",
              "config firewall policy",
              "    edit 1",
              "        set utm-status enable",
              '        set webfilter-profile "Web-Test"',
              '        set ssl-ssh-profile "certificate-inspection"',
              "    next",
              "end",
            ],
          },
        },
      ],
    },

    stack: {
      title: "Configuration Reference",
      body: "The values this build actually runs on, read from the interface list and confirmed against the forward traffic log.",
      columns: ["Element", "Setting", "Where it is defined"],
      rows: [
        ["WAN interface", "x1 — 10.42.0.145/255.0.0.0, admin access PING / HTTPS / SSH", "Network > Interfaces"],
        ["LAN interface", "lan VLAN switch — port1 to port4, 192.168.1.99/255.255.255.0", "Network > Interfaces"],
        ["DHCP scope", "192.168.1.110 – 192.168.1.210", "Network > Interfaces > lan"],
        ["Default route", "0.0.0.0/0 via 10.42.0.1, device x1", "Network > Static Routes"],
        ["Firewall policy", "Internetan (ID 1) — accept, NAT, schedule always, service ALL", "Policy & Objects > Firewall Policy"],
        ["NAT mode", "Use outgoing interface address, preserve source port", "Firewall policy > NAT"],
        ["Web filter", "Web-Test — flow-based, FortiGuard categories on Monitor", "Security Profiles > Web Filter"],
        ["URL filter", "3 wildcard entries, action block, status enable", "Web-Test > Static URL Filter"],
        ["SSL inspection", "certificate-inspection", "Firewall policy > Security Profiles"],
        ["FortiLink", "802.3ad aggregate reserved for FortiSwitch, 10.255.1.0/24", "Network > Interfaces"],
      ],
    },

    steps: [
      {
        title: "Interface & Addressing",
        body: "Brought the FortiGate 90G up from default: addressed X1 as the WAN uplink, grouped the user ports behind the lan VLAN switch as their gateway, and enabled the DHCP scope so a laptop gets an address the moment it is plugged in.",
        tags: ["WAN", "LAN", "DHCP"],
      },
      {
        title: "Routing & Policy",
        body: "Added the default static route out of X1 to 10.42.0.1, then wrote the Internetan policy with NAT so the segment could actually leave — the two pieces that turn a correctly addressed interface into working internet access.",
        tags: ["Static Routing", "Firewall Policy", "NAT"],
      },
      {
        title: "VLAN Segmentation",
        body: "Applied router-on-a-stick: VLANs tagged over a single 802.1Q trunk, one sub-interface per VLAN on the firewall, each acting as its subnet's gateway so inter-VLAN traffic becomes an explicit policy decision.",
        tags: ["VLAN", "Router on a Stick", "Inter-VLAN Routing"],
      },
      {
        title: "Web Filter Profile",
        body: "Built the Web-Test flow-based profile with the FortiGuard category filter enabled and the Potentially Liable group on Monitor, so traffic was classified and logged before anything was denied outright.",
        tags: ["FortiGuard", "Web Filtering"],
      },
      {
        title: "URL Blocklist & Binding",
        body: "Added wildcard static URL entries ahead of the category engine, attached the profile to the Internetan policy, and set SSL inspection to certificate-inspection so HTTPS sessions could be classified rather than passed through blind.",
        tags: ["URL Filter", "SSL Inspection"],
      },
      {
        title: "Testing & Verification",
        body: "Verified from a client at 192.168.1.111: address from the pool, DNS resolving to 10.42.0.1, Accept for permitted destinations and Deny (UTM Blocked) for filtered ones — every decision traced in the forward traffic log rather than assumed.",
        tags: ["Troubleshooting", "Traffic Log"],
      },
    ],
  },

  {
    slug: "ai-cli-network-automation-seminar",
    title: "AI CLI for Device & VM Automation — Internal Seminar",
    shortTitle: "AI CLI Automation Seminar",
    summary:
      "Designed and presented an internal seminar at AirAsia on driving network devices and VMs from an AI CLI — and on doing it safely, with every credential held in HashiCorp Vault instead of a plaintext file.",
    description:
      "A knowledge-sharing session I built and delivered for the team: how an AI coding CLI can carry out device and VM management, and what has to be true before you let it near production credentials. The deck runs as a hands-on guide — routing free model providers through 9router, wiring them into the opencode CLI, describing the estate in an inventory file, and then replacing the .env password file with HashiCorp Vault so the agent authenticates without a secret ever being printed, logged, or written to disk.",
    period: "Presented during the internship • Deck dated September 4, 2026",
    status: "Completed",
    tags: [
      "AI CLI",
      "Network Automation",
      "HashiCorp Vault",
      "Docker",
      "Secrets Management",
      "Netmiko",
      "Knowledge Sharing",
    ],

    metrics: [
      { value: "17", label: "Slides presented", icon: "gallery" },
      { value: "3", label: "Hands-on setup stages", icon: "workflow" },
      { value: "5", label: "Tools in the stack", icon: "layers" },
      { value: "0", label: "Passwords in plaintext", icon: "check" },
    ],

    gallery: {
      image: asset("seminar/slide-01.jpg"),
      alt: "Seminar title slide — Implementasi AI CLI untuk Otomatisasi Manajemen dan Konfigurasi Device dan VM",
      caption: "Seminar title slide",
      items: [
        {
          src: asset("seminar/slide-03.jpg"),
          alt: "Tech stack slide listing 9router, Opencode, IDE, HashiCorp Vault and Docker",
          label: "Tech stack",
          caption:
            "Five tools, each with a job: 9router aggregates free model providers, opencode is the agent CLI, Docker runs Vault, and Vault holds every credential the agent is allowed to use.",
        },
        {
          src: asset("seminar/slide-11.jpg"),
          alt: "Slide showing the intruksi.md agent rules beside a generated VM audit report",
          label: "Agent rules",
          caption:
            "The instruction file that constrains the agent, next to a real audit report it produced. The host address has been redacted for publication.",
        },
        {
          src: asset("seminar/slide-16.jpg"),
          alt: "Slide showing the Vault-integrated agent SOP with strict security rules",
          label: "Vault SOP",
          caption:
            "The final operating procedure: read the inventory, never print a password, pull it from Vault with hvac, connect with Netmiko, then drop the secret from memory.",
        },
      ],
    },

    impact: {
      body: "Gave the team a working pattern rather than a demo. The session showed that an AI CLI can audit and configure real infrastructure, and — more usefully — showed the guardrails that make it acceptable: credentials in Vault, an agent explicitly forbidden from reading the secret file, and every command's output written to disk before any conclusion is drawn.",
      chip: "Pattern shared with the team",
    },

    architecture: {
      body: "The agent never holds a password of its own. It reads an inventory that names each device and the Vault path for its credential, pulls the secret at connect time through hvac, opens the session with Netmiko or pyserial, writes the raw output to a file, and only then summarises.",
      flow: [
        { label: "9router — model providers", icon: "api" },
        { label: "opencode CLI agent", icon: "terminal", highlight: true },
        { label: "inventory.yaml", icon: "note" },
        { label: "HashiCorp Vault (Docker)", icon: "server" },
        { label: "Netmiko / pyserial session", icon: "route" },
        { label: "Audit report on disk", icon: "code" },
      ],
      diagram: {
        title: "How the Agent Reaches a Device Without Holding a Secret",
        caption:
          "The Vault path — the version presented as the recommended pattern. The dashed line is the one the SOP forbids: the agent is never allowed to read the credential file directly.",
        definition: `flowchart LR
    subgraph MODELS["Model access"]
      NR["<b>9router</b><br/>localhost:20128<br/>aggregates free providers"]
    end

    subgraph AGENT["Agent layer"]
      OC["<b>opencode CLI</b><br/>configured via opencode.json"]
      INSTR["<b>intruksi.md</b><br/>SOP &middot; hard rules"]
      INV["<b>inventory.yaml</b><br/>ip &middot; user &middot; vault_path"]
    end

    subgraph SECRETS["Secrets"]
      VAULT["<b>HashiCorp Vault</b><br/>KV v2 &middot; Docker &middot; :8200"]
      ENVF["<b>.env</b><br/><i>plaintext — superseded</i>"]
    end

    subgraph TARGETS["Managed estate"]
      RTR["<b>Router / NGFW</b><br/>SSH &middot; serial"]
      VM["<b>Linux VM</b><br/>SSH"]
    end

    OUT["<b>Audit report</b><br/>written to disk<br/>before any summary"]

    NR -->|"model responses"| OC
    INSTR -->|"constrains"| OC
    INV -->|"targets + vault_path"| OC
    OC -->|"hvac read_secret_version"| VAULT
    VAULT -->|"password in memory only"| OC
    OC -->|"netmiko"| RTR
    OC -->|"netmiko"| VM
    RTR --> OUT
    VM --> OUT
    OC -.->|"forbidden by SOP"| ENVF

    classDef model fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#3b0764
    classDef agent fill:#fee2e2,stroke:#dc2626,stroke-width:2px,color:#7f1d1d
    classDef vault fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
    classDef banned fill:#f1f5f9,stroke:#94a3b8,stroke-width:1px,color:#64748b,stroke-dasharray:4 3
    classDef target fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef out fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d

    class NR model
    class OC,INSTR,INV agent
    class VAULT vault
    class ENVF banned
    class RTR,VM target
    class OUT out`,
      },
      alt: "Diagram: 9router and opencode driven by an instruction file and inventory, pulling credentials from HashiCorp Vault to reach routers and VMs over SSH",
    },

    /* The presented deck, shown in the viewer on the project page. */
    deck: {
      title: "The Deck",
      body: "All seventeen slides as presented. Use the arrows or the filmstrip to move through them; click a slide to open it full size.",
      downloadUrl: `${import.meta.env.BASE_URL}seminar-ai-cli-automation.pdf`,
      downloadLabel: "Download the deck (PDF)",
      slides: [
        { src: asset("seminar/slide-01.jpg"), title: "Title", note: "Implementasi AI CLI untuk Otomatisasi Manajemen dan Konfigurasi Device dan VM — presented at AirAsia Indonesia." },
        { src: asset("seminar/slide-02.jpg"), title: "Background", note: "Three reasons for the session: AI adoption is accelerating, traditional network management is laborious, and passwords were still living in plaintext." },
        { src: asset("seminar/slide-03.jpg"), title: "Tech Stack", note: "9router, opencode, the IDE, HashiCorp Vault and Docker — the five pieces the rest of the talk assembles." },
        { src: asset("seminar/slide-04.jpg"), title: "Install 9router", note: "npm install -g 9router, run it, and reach the GUI at localhost:20128." },
        { src: asset("seminar/slide-05.jpg"), title: "Install opencode", note: "npm i -g opencode-ai, plus the session commands — list, --continue, and --session <id> — for resuming earlier work." },
        { src: asset("seminar/slide-06.jpg"), title: "Setup #1 — Providers", note: "Choosing from the providers 9router exposes and building the model combo the agent will call." },
        { src: asset("seminar/slide-07.jpg"), title: "Setup #1 — API Key", note: "Generating the 9router API key and connecting opencode to it. The keys shown are masked by the tool itself." },
        { src: asset("seminar/slide-08.jpg"), title: "Setup #1 — opencode.json", note: "The provider block pointing opencode at the local 9router endpoint, including the explorer subagent definition." },
        { src: asset("seminar/slide-09.jpg"), title: "Setup #1 — Running in the IDE", note: "With the config in place the agent is usable directly from the editor." },
        { src: asset("seminar/slide-10.jpg"), title: "Setup #2 — .env & Inventory", note: "The first approach: credentials in .env, and inventory.yml describing each router, NGFW and VM. Host address redacted for publication." },
        { src: asset("seminar/slide-11.jpg"), title: "Setup #2 — Rules & Audit", note: "intruksi.md constrains the agent — read the inventory, never read .env, fetch passwords via python-dotenv, use Netmiko for SSH, always write output to a file first. Beside it, a real audit report." },
        { src: asset("seminar/slide-12.jpg"), title: "Setup #3 — Vault in Docker", note: "The docker-compose service for Vault, with IPC_LOCK so it can lock memory, and the initialisation screen at localhost:8200." },
        { src: asset("seminar/slide-13.jpg"), title: "Setup #3 — Unseal", note: "Unsealing with the generated key shares and signing in with the root token." },
        { src: asset("seminar/slide-14.jpg"), title: "Setup #3 — KV Engine", note: "Enabling the KV key-value secrets engine and setting the secret path with a maximum of two versions." },
        { src: asset("seminar/slide-15.jpg"), title: "Setup #3 — Store the Secret", note: "Writing the password into Vault, then pointing inventory.yml at the vault path rather than at an environment variable. Host address redacted for publication." },
        { src: asset("seminar/slide-16.jpg"), title: "Setup #3 — Vault SOP", note: "The final instruction set: never print or log a password, read it from Vault with hvac, connect via Netmiko, then clear it from memory and report." },
        { src: asset("seminar/slide-17.jpg"), title: "Questions & Discussion", note: "Closing slide." },
      ],
    },

    stack: {
      title: "The Stack, and Why Each Piece Is There",
      body: "Every tool in the deck earns its place by removing a specific risk or a specific piece of manual work.",
      columns: ["Tool", "Role", "What it removes"],
      rows: [
        ["9router", "Local proxy aggregating model providers at localhost:20128", "Being locked to one paid provider for the agent's model access."],
        ["opencode", "The AI CLI that plans and executes the work, in terminal or IDE", "Hand-writing the same audit and configuration scripts per device."],
        ["inventory.yaml", "Declares each router, NGFW and VM with its user and credential path", "The agent guessing at addresses, or credentials being pasted into a prompt."],
        ["intruksi.md", "Standing SOP the agent must follow on every task", "Ad-hoc prompting, and the agent improvising around security rules."],
        ["HashiCorp Vault", "KV v2 secrets engine, run in Docker, read through hvac", "Passwords sitting in a plaintext .env on the workstation."],
        ["Netmiko / pyserial", "SSH and serial transport to network devices", "Fragile hand-rolled connection handling per device type."],
      ],
    },

    steps: [
      {
        title: "Framing the Problem",
        body: "Opened on why the session existed: AI tooling is being adopted quickly, traditional device management does not scale by hand, and the credentials for that work were still stored as plaintext — a problem worth solving before automating on top of it.",
        tags: ["Background", "Secrets Management"],
      },
      {
        title: "Model Access via 9router",
        body: "Walked through installing 9router, choosing providers, building a model combo and generating the API key, so the CLI has model access without being tied to a single vendor.",
        tags: ["9router", "Model Providers"],
      },
      {
        title: "Wiring the opencode CLI",
        body: "Installed opencode, wrote the opencode.json provider block pointing at the local 9router endpoint, defined an explorer subagent, and demonstrated the session commands for resuming earlier work.",
        tags: ["opencode", "CLI Configuration"],
      },
      {
        title: "Describing the Estate",
        body: "Built inventory.yaml — each router, FortiGate and VM with its address, transport, user and credential reference — and intruksi.md, the standing rules the agent follows: never read the secret file, always write raw output to disk before drawing a conclusion.",
        tags: ["Inventory", "Agent SOP", "Netmiko"],
      },
      {
        title: "HashiCorp Vault in Docker",
        body: "Replaced the plaintext approach: a Vault service in docker-compose with IPC_LOCK so it can lock memory, initialised and unsealed, then a KV v2 engine with a bounded version history holding each device credential.",
        tags: ["Docker", "HashiCorp Vault", "KV v2"],
      },
      {
        title: "The Secure Pattern",
        body: "Closed on the operating procedure that ties it together — inventory names a vault_path, the agent reads the secret through hvac at connect time, uses it in memory for the Netmiko session, and clears it afterwards, so no password is ever printed, logged or written to disk.",
        tags: ["hvac", "Secure Automation"],
      },
    ],
  },
];

/* ---------------------------------------------------------------- */
/* 5. COURSES                                                        */
/*    `sections` accepts these block types:                          */
/*      { type: 'text',    body }                                    */
/*      { type: 'image',   src, alt, caption }                       */
/*      { type: 'list',    title, items: [{ term, body }] }          */
/*      { type: 'code',    title, lines: [] }                        */
/*      { type: 'gallery', items: [{ src, alt, label }] }            */
/* ---------------------------------------------------------------- */

export const courses = [
  {
    slug: "comptia-network-plus",
    title: "CompTIA Network+ (N10-009)",
    provider: "CompTIA",
    date: "September 2026",
    hours: "40 Hours",
    status: "Completed",
    summary:
      "Comprehensive networking certification covering network infrastructure, operations, security, and troubleshooting — foundational knowledge for network professionals.",

    modules: [
      { id: "network-fundamentals", label: "1. Network Fundamentals" },
      { id: "osi-model", label: "2. OSI Model" },
      { id: "ports-protocols", label: "3. Ports and Protocols" },
      { id: "media-connectors", label: "4. Media and Connectors" },
      { id: "distribution-systems", label: "5. Distribution Systems" },
      { id: "wireless-networks", label: "6. Wireless Networks" },
      { id: "ethernet-switching", label: "7. Ethernet Switching" },
      { id: "ip-addressing", label: "8. IP Addressing" },
      { id: "routing", label: "9. Routing" },
    ],

    sections: [
      {
        id: "network-fundamentals",
        icon: "layers",
        accent: true,
        title: "1. Network Fundamentals",
        blocks: [
          /* ---------- 1.1 Network Fundamentals ---------- */
          {
            type: "text",
            lead: true,
            body: "A computer network is a collection of interconnected endpoints, appliances, and transmission media that exchange data through standardised protocols. Networking is described through layered reference models: each layer solves one problem, exposes a service to the layer above it, and stays independent of the layers below — which is what allows a Cisco switch, a Fortinet firewall, and a Linux server from three different vendors to interoperate on the same segment.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1564457461758-8ff96e439e83?w=1200&h=600&fit=crop&q=85",
            alt: "Server room with rows of black and white network cabinets interconnected by blue patch cables",
            caption: "Enterprise network infrastructure — structured cabling between switching cabinets",
          },
          {
            type: "list",
            title: "OSI Reference Model (7 Layers)",
            items: [
              {
                term: "Layer 1 — Physical",
                body: "Bits on the wire. Copper (Cat 5e/6/6a), fibre (single-mode/multimode), and RF. Concerns signalling, pinouts, and connectors. PDU: bit.",
              },
              {
                term: "Layer 2 — Data Link",
                body: "MAC addressing, framing, and error detection (FCS). Switches, bridges, and 802.1Q VLAN tagging operate here. PDU: frame.",
              },
              {
                term: "Layer 3 — Network",
                body: "Logical IPv4/IPv6 addressing, routing, and fragmentation. Routers and Layer 3 switches forward here using the routing table. PDU: packet.",
              },
              {
                term: "Layer 4 — Transport",
                body: "End-to-end delivery and port addressing. TCP provides ordered, acknowledged, connection-oriented delivery; UDP provides connectionless best-effort. PDU: segment (TCP) / datagram (UDP).",
              },
              {
                term: "Layer 5 — Session",
                body: "Establishes, maintains, and tears down dialogues between applications. Handles checkpointing and reconnection.",
              },
              {
                term: "Layer 6 — Presentation",
                body: "Data representation: character encoding, serialisation, compression, and TLS encryption/decryption.",
              },
              {
                term: "Layer 7 — Application",
                body: "The interface consumed by software: HTTP/HTTPS, DNS, SMTP, SSH, and SNMP. PDU: data.",
              },
            ],
          },
          {
            type: "list",
            title: "TCP/IP Model and Encapsulation",
            items: [
              {
                term: "Four-layer stack",
                body: "Link (OSI 1-2), Internet (OSI 3), Transport (OSI 4), and Application (OSI 5-7). TCP/IP is the model actually implemented by the internet; OSI remains the vocabulary used for troubleshooting and exam questions.",
              },
              {
                term: "Encapsulation",
                body: "Each layer prepends its own header as data descends the stack — application data gains a TCP header, then an IP header, then an Ethernet header and trailer. The receiving host reverses the process (de-encapsulation).",
              },
              {
                term: "Why layering matters",
                body: "Faults can be isolated layer by layer. No link light is Layer 1; a wrong VLAN is Layer 2; an unreachable gateway is Layer 3; a blocked port is Layer 4.",
              },
            ],
          },

          /* ---------- OBJ 1.2 Network Components ---------- */
          {
            type: "text",
            body: "Objective 1.2 — Networking appliances. Appliances may be deployed as dedicated physical hardware or as virtual instances on a hypervisor; the function is identical, but virtual appliances scale elastically and are provisioned by code rather than by a rack visit.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1750711158632-5273ec9b9b86?w=1200&h=600&fit=crop&q=85",
            alt: "Wireless router and managed network switch positioned side by side",
            caption: "Edge appliances — a wireless router alongside a managed switch",
          },
          {
            type: "list",
            title: "Core Appliances (OBJ 1.2)",
            items: [
              {
                term: "Switch (Layer 2)",
                body: "Forwards frames using a MAC address table populated by source-address learning. Floods unknown unicast, broadcast, and multicast. Each port is its own collision domain; each VLAN is its own broadcast domain.",
              },
              {
                term: "Router (Layer 3)",
                body: "Forwards packets between distinct IP networks using the longest-prefix match in its routing table. Runs static routes or dynamic protocols (OSPF, EIGRP, BGP), terminates broadcast domains, and typically performs NAT at the edge.",
              },
              {
                term: "Access Point (Layer 1-2)",
                body: "Bridges 802.11 wireless clients onto the wired LAN. Advertises an SSID, negotiates authentication (WPA2/WPA3-PSK or 802.1X Enterprise), and is centrally managed by a wireless LAN controller in campus deployments.",
              },
              {
                term: "Firewall (Layer 3-4, NGFW to Layer 7)",
                body: "Enforces policy between security zones. Stateful inspection tracks each flow in a state table so return traffic is permitted implicitly. Next-generation firewalls add application awareness, user identity, and TLS inspection.",
              },
              {
                term: "IDS / IPS",
                body: "An IDS monitors a copy of traffic out-of-band and alerts. An IPS sits inline and can drop malicious traffic. Both detect using signatures or behavioural anomaly baselines.",
              },
              {
                term: "Load balancer",
                body: "Distributes client sessions across a server pool using round-robin, least-connections, or weighted algorithms. Provides health checks, session persistence, and TLS offload.",
              },
              {
                term: "Proxy",
                body: "Terminates and re-originates sessions on behalf of clients. A forward proxy applies egress filtering and caching; a reverse proxy fronts servers for security and offload.",
              },
            ],
          },

          /* ---------- OBJ 1.2 Network Resources ---------- */
          {
            type: "text",
            body: "Objective 1.2 — Network resources. Resources are the services and storage that endpoints consume across the network, centralising data so it can be backed up, secured, and audited in one place rather than on individual workstations.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?w=1200&h=600&fit=crop&q=85",
            alt: "Rows of black server racks housing compute and storage nodes in a data centre",
            caption: "Centralised compute and storage resources in a data centre hall",
          },
          {
            type: "list",
            title: "Servers, Storage, and Endpoints",
            items: [
              {
                term: "Web server",
                body: "Serves HTTP on TCP/80 and HTTPS on TCP/443, terminating TLS and returning static or dynamically generated content.",
              },
              {
                term: "File server",
                body: "Shares directories over SMB/CIFS (TCP/445) for Windows estates or NFS (TCP/2049) for UNIX and Linux, applying share and NTFS/POSIX permissions.",
              },
              {
                term: "Database server",
                body: "Hosts relational engines such as PostgreSQL (TCP/5432), MySQL (TCP/3306), or MS SQL Server (TCP/1433), guaranteeing ACID transactional integrity.",
              },
              {
                term: "NAS — file-level storage",
                body: "A self-contained appliance that presents shared folders over the existing Ethernet LAN using SMB or NFS. The NAS owns its own filesystem; clients request files, not disk blocks. Simple to deploy and ideal for departmental shares and backup targets.",
              },
              {
                term: "SAN — block-level storage",
                body: "A dedicated high-speed storage fabric presenting raw LUNs to hosts over Fibre Channel or iSCSI (TCP/3260). The host formats the LUN with its own filesystem, so the volume appears as a locally attached disk. Used for virtualisation clusters and databases that need low latency.",
              },
              {
                term: "Endpoints",
                body: "Workstations, laptops, thin clients, VoIP handsets, printers, and IoT devices — the clients that consume the services above and represent the largest attack surface on the network.",
              },
            ],
          },

          /* ---------- OBJ 1.6 Network Geography ---------- */
          {
            type: "text",
            body: "Objective 1.6 — Network types by geography. The scope of a network dictates who owns the transmission medium, what bandwidth is economically available, and how much latency the design must tolerate. Ownership is the key distinction: LAN media are privately owned, WAN circuits are leased from a service provider.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1728426340279-9962ac86f5e7?w=1200&h=600&fit=crop&q=85",
            alt: "Telecommunications tower carrying cellular antennas against a clear blue sky",
            caption: "Carrier infrastructure — the provider transport that underpins WAN connectivity",
          },
          {
            type: "list",
            title: "Network Geography (OBJ 1.6)",
            items: [
              {
                term: "PAN — Personal Area Network",
                body: "Roughly 10 metres or less, centred on a single user. Bluetooth, USB, NFC, and Zigbee. Example: a headset and smartwatch paired to a phone.",
              },
              {
                term: "LAN — Local Area Network",
                body: "A single building or floor, privately owned, with 100 m copper runs per Ethernet segment. Delivers 1-10 Gbps at sub-millisecond latency over 802.3 Ethernet and 802.11 Wi-Fi.",
              },
              {
                term: "CAN — Campus Area Network",
                body: "Several adjacent buildings under one owner, interconnected by privately owned fibre. Typical of universities, hospitals, business parks, and airport estates.",
              },
              {
                term: "MAN — Metropolitan Area Network",
                body: "City-scale, roughly 25 miles, usually provider-operated metro Ethernet or dark fibre. Bridges the gap between campus and wide-area scope.",
              },
              {
                term: "WAN — Wide Area Network",
                body: "Links geographically separated sites across regions or continents over leased lines, MPLS, broadband, or VPN overlays. Bandwidth costs more and latency rises to tens or hundreds of milliseconds.",
              },
              {
                term: "SD-WAN",
                body: "Software-defined WAN abstracts the control plane from the underlying transport. Its defining traits are transport agnosticism (MPLS, broadband, and LTE/5G used interchangeably), application-aware dynamic path selection, centralised policy, and zero-touch provisioning of branch devices.",
              },
              {
                term: "SDN",
                body: "Software-defined networking separates the control plane from the data plane and drives forwarding decisions from a central controller through an API — the architectural principle SD-WAN applies to wide-area links.",
              },
            ],
          },

          /* ---------- OBJ 1.6 Wired Topology ---------- */
          {
            type: "text",
            body: "Objective 1.6 — Wired topologies. Distinguish the physical topology (how cable is actually run) from the logical topology (how frames actually flow). Modern Ethernet is almost universally a physical star that behaves logically as a point-to-point switched fabric.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=1200&h=600&fit=crop&q=85",
            alt: "Dense bundle of blue network patch cables terminated in a structured cabling system",
            caption: "Structured cabling — the physical star that underpins most wired LANs",
          },
          {
            type: "list",
            title: "Wired Topologies (OBJ 1.6)",
            items: [
              {
                term: "Star / hub-and-spoke",
                body: "Every node homes back to a central switch. Dominant in modern LANs: a single cable fault isolates one host, troubleshooting is straightforward, but the central switch is a single point of failure unless it is stacked or redundant.",
              },
              {
                term: "Mesh",
                body: "Nodes interconnect with multiple redundant paths. A full mesh of n nodes requires n(n-1)/2 links, so cost and configuration complexity grow quadratically. Partial mesh is the practical compromise for WAN cores.",
              },
              {
                term: "Ring",
                body: "Nodes form a closed loop with data circulating in one direction. Legacy Token Ring and FDDI; still seen in provider metro rings, where a dual counter-rotating ring wraps around a break to survive a single cut.",
              },
              {
                term: "Bus",
                body: "All nodes share one common backbone terminated at both ends. Legacy 10BASE2/10BASE5. Minimal cabling, but the shared medium is one collision domain and a single break can bring down the segment.",
              },
              {
                term: "Point-to-point",
                body: "A dedicated link between exactly two endpoints — a switch uplink, a leased circuit, or a wireless bridge between buildings. No contention, deterministic performance.",
              },
              {
                term: "Hybrid",
                body: "Any combination of the above, which is what real networks are: a star-of-stars access layer riding on a partially meshed core.",
              },
            ],
          },

          /* ---------- OBJ 2.3 Wireless Topology ---------- */
          {
            type: "text",
            body: "Objective 2.3 — Wireless network types. Wireless shares an unlicensed half-duplex medium, so all stations in range contend for airtime using CSMA/CA. Design revolves around non-overlapping channel plans (1, 6, 11 in 2.4 GHz), appropriate band selection, and controlled cell overlap for roaming.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1745847768408-b7b83796cae6?w=1200&h=600&fit=crop&q=85",
            alt: "Close-up of a wireless access point with external antennas",
            caption: "Wireless access point — the hub of an infrastructure-mode BSS",
          },
          {
            type: "list",
            title: "Wireless Topologies (OBJ 2.3)",
            items: [
              {
                term: "Infrastructure mode",
                body: "Clients associate to an AP, which bridges them to the wired distribution system. One AP and its clients form a BSS identified by a BSSID; multiple APs sharing an SSID form an ESS, enabling roaming. The default enterprise design.",
              },
              {
                term: "Ad hoc (IBSS)",
                body: "Peer-to-peer association with no AP and no distribution system. Fast to stand up for a temporary file transfer, but it does not scale, offers weak security, and provides no roaming.",
              },
              {
                term: "Wireless mesh",
                body: "APs relay traffic for one another over a wireless backhaul, so only a subset need a wired uplink. Self-forming and self-healing; ideal for warehouses, outdoor sites, and heritage buildings where cabling is impractical.",
              },
              {
                term: "Point-to-point",
                body: "Two directional (Yagi or parabolic) antennas aimed at each other to bridge buildings over distance. Requires line of sight and correct Fresnel zone clearance.",
              },
              {
                term: "Frequency bands",
                body: "2.4 GHz travels furthest and penetrates walls but offers only three non-overlapping 20 MHz channels and suffers heavy interference. 5 GHz offers far more channels at shorter range. 6 GHz (Wi-Fi 6E) adds clean spectrum with the widest channels and the shortest range.",
              },
              {
                term: "Modern standards",
                body: "802.11ax (Wi-Fi 6/6E) introduces OFDMA for uplink and downlink multi-user scheduling, MU-MIMO spatial streams, and target wake time — collectively raising efficiency in high-density environments rather than just raw peak rate.",
              },
            ],
          },

          /* ---------- OBJ 1.6 Datacenter Topology ---------- */
          {
            type: "text",
            body: "Objective 1.6 — Data centre architectures. Traffic patterns drive the design. Classic client-server generates north-south traffic between users and servers; virtualisation, clustering, and microservices generate far more east-west traffic between servers inside the data centre, which is precisely what the older hierarchy handles poorly.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=1200&h=600&fit=crop&q=85",
            alt: "Rack of data centre servers and top-of-rack switching equipment",
            caption: "Top-of-rack switching — the leaf layer of a modern spine-and-leaf fabric",
          },
          {
            type: "list",
            title: "Data Centre Topologies (OBJ 1.6)",
            items: [
              {
                term: "Three-tier hierarchical model",
                body: "Core, distribution, and access layers. Access ports connect servers, distribution aggregates and applies policy and inter-VLAN routing, and the core provides high-speed backbone transit. Predictable and well-understood, with clear fault domains.",
              },
              {
                term: "Collapsed core",
                body: "The core and distribution layers merge into a single tier, leaving two layers. Lower cost and complexity for small and medium sites that do not need a dedicated core.",
              },
              {
                term: "Spine and leaf",
                body: "A two-tier Clos fabric. Every leaf connects to every spine, and spines never connect to one another. Servers attach only to leaves, so any server-to-server path is a consistent two hops — leaf to spine to leaf — giving deterministic latency.",
              },
              {
                term: "Why spine-leaf wins",
                body: "Uniform latency regardless of which racks communicate, full bisectional bandwidth via ECMP across all spines, and horizontal scale — add a leaf for more ports, add a spine for more bandwidth, without redesigning the fabric. This is the hyperscale cloud standard.",
              },
              {
                term: "Three-tier limitations",
                body: "Spanning Tree blocks redundant links to prevent loops, leaving capacity idle. East-west traffic between access switches must traverse the distribution or core layer, so latency varies by path and the aggregation layer becomes a bottleneck.",
              },
              {
                term: "Traffic flows",
                body: "North-south traffic moves between the data centre and the outside world, crossing tiers. East-west traffic moves server to server within the fabric and now dominates virtualised workloads.",
              },
            ],
          },

          /* ---------- Performance metrics ---------- */
          {
            type: "list",
            title: "Performance Metrics",
            items: [
              {
                term: "Bandwidth",
                body: "The theoretical maximum data rate of a link, in Mbps or Gbps — the width of the pipe, not the water flowing through it.",
              },
              {
                term: "Throughput",
                body: "The data rate actually achieved under real traffic. Always lower than bandwidth once protocol overhead, contention, and retransmission are accounted for.",
              },
              {
                term: "Latency",
                body: "One-way delay in milliseconds. Interactive voice and video degrade noticeably beyond roughly 150 ms of end-to-end latency.",
              },
              {
                term: "Jitter",
                body: "Variation in latency between successive packets. Real-time media tolerates steady delay far better than inconsistent delay; jitter buffers absorb only a limited amount.",
              },
              {
                term: "Packet loss",
                body: "The percentage of packets that never arrive. TCP retransmits and slows down; UDP media simply drops audio or video frames, so even 1-2 percent is audible.",
              },
              {
                term: "QoS",
                body: "Classification, marking (DSCP), and queuing that prioritise latency-sensitive traffic such as voice over bulk transfers when a link is congested.",
              },
            ],
          },
        ],
      },

      {
        id: "osi-model",
        icon: "route",
        accent: true,
        title: "2. OSI Model",
        blocks: [
          {
            type: "text",
            lead: true,
            body: "Published by the ISO in 1984 as standard 7498-1, the Open Systems Interconnection model decomposes network communication into seven abstraction layers. No production stack implements OSI literally — the internet runs on TCP/IP — but OSI remains the lingua franca of network engineering: it is how faults are localised, how vendors scope their products, and how CompTIA phrases Objective 1.1. Each layer consumes the service of the layer beneath it and presents a service to the layer above, so a change in cabling never forces a change in HTTP.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1541906048747-3152ddb5f0ec?w=1200&h=600&fit=crop&q=85",
            alt: "Illuminated fibre optic strands carrying light, representing data in transit across a network medium",
            caption: "Light pulses on fibre — the physical reality beneath every abstraction in the OSI stack",
          },
          {
            type: "mermaid",
            title: "The Seven Layers and Their PDUs",
            caption: "Diagram 1 — the OSI stack from Layer 7 down to Layer 1, with the protocol data unit produced at each layer.",
            definition: `flowchart TD
    L7["<b>Layer 7 &middot; Application</b><br/>HTTP &middot; HTTPS &middot; DNS &middot; SMTP &middot; SSH<br/><i>PDU: Data</i>"]
    L6["<b>Layer 6 &middot; Presentation</b><br/>TLS &middot; SSL &middot; JPEG &middot; MPEG &middot; ASCII<br/><i>PDU: Data</i>"]
    L5["<b>Layer 5 &middot; Session</b><br/>NetBIOS &middot; RPC &middot; SMB &middot; PPTP<br/><i>PDU: Data</i>"]
    L4["<b>Layer 4 &middot; Transport</b><br/>TCP &middot; UDP<br/><i>PDU: Segment / Datagram</i>"]
    L3["<b>Layer 3 &middot; Network</b><br/>IPv4 &middot; IPv6 &middot; ICMP &middot; OSPF &middot; BGP<br/><i>PDU: Packet</i>"]
    L2["<b>Layer 2 &middot; Data Link</b><br/>Ethernet &middot; 802.11 &middot; ARP &middot; STP<br/><i>PDU: Frame</i>"]
    L1["<b>Layer 1 &middot; Physical</b><br/>Copper &middot; Fibre &middot; RF &middot; Connectors<br/><i>PDU: Bit</i>"]

    L7 --> L6 --> L5 --> L4 --> L3 --> L2 --> L1

    classDef app fill:#fee2e2,stroke:#ef4444,stroke-width:2px,color:#7f1d1d
    classDef pre fill:#ffedd5,stroke:#f97316,stroke-width:2px,color:#7c2d12
    classDef ses fill:#fef3c7,stroke:#f59e0b,stroke-width:2px,color:#78350f
    classDef tra fill:#dcfce7,stroke:#22c55e,stroke-width:2px,color:#14532d
    classDef net fill:#dbeafe,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    classDef dat fill:#e0e7ff,stroke:#6366f1,stroke-width:2px,color:#312e81
    classDef phy fill:#ede9fe,stroke:#8b5cf6,stroke-width:2px,color:#4c1d95

    class L7 app
    class L6 pre
    class L5 ses
    class L4 tra
    class L3 net
    class L2 dat
    class L1 phy`,
          },

          {
            type: "list",
            title: "Layer 1 — Physical",
            items: [
              {
                term: "Function",
                body: "Transmits an unstructured bit stream over the medium. Defines voltage levels, line coding, timing, modulation, pin assignments, and the mechanical shape of connectors. It has no concept of addressing and no idea what the bits mean.",
              },
              {
                term: "PDU",
                body: "Bit.",
              },
              {
                term: "Standards and media",
                body: "1000BASE-T and 10GBASE-T over Cat 5e/6/6a copper, 1000BASE-LX over single-mode fibre, 802.11 radio, RS-232, DSL, and DOCSIS. Connectors include RJ45, LC, SC, and MPO.",
              },
              {
                term: "Devices",
                body: "Cabling, patch panels, transceivers (SFP/QSFP), media converters, repeaters, and legacy hubs. A hub is a pure Layer 1 device: it repeats every incoming bit out of every other port.",
              },
              {
                term: "Typical faults",
                body: "No link light, excessive attenuation on an over-long run, bent or dirty fibre, EMI from adjacent power cable, duplex or speed mismatch, and TX/RX pairs crossed.",
              },
            ],
          },
          {
            type: "list",
            title: "Layer 2 — Data Link",
            items: [
              {
                term: "Function",
                body: "Packages bits into frames for delivery across a single link, provides physical addressing, and detects corrupted frames. Formally split into the LLC sublayer, which interfaces upward to Layer 3, and the MAC sublayer, which governs access to the shared medium.",
              },
              {
                term: "PDU",
                body: "Frame.",
              },
              {
                term: "Addressing",
                body: "48-bit MAC addresses written as twelve hexadecimal digits. The first 24 bits are the OUI identifying the vendor; the remaining 24 bits identify the interface. Scope is strictly local — a MAC address never crosses a router.",
              },
              {
                term: "Protocols",
                body: "Ethernet (802.3), Wi-Fi (802.11), ARP for resolving IP to MAC, STP/RSTP (802.1D/802.1w) for loop prevention, 802.1Q VLAN tagging, and LACP (802.3ad) for link aggregation.",
              },
              {
                term: "Error detection",
                body: "A 4-byte Frame Check Sequence trailer carries a CRC-32. A frame failing the check is silently discarded — Layer 2 detects errors but does not correct them; recovery is left to Layer 4 or the application.",
              },
              {
                term: "Devices",
                body: "Switches and bridges, plus wireless access points bridging 802.11 to 802.3.",
              },
            ],
          },
          {
            type: "list",
            title: "Layer 3 — Network",
            items: [
              {
                term: "Function",
                body: "Provides logical addressing and end-to-end path determination across multiple links. This is the first layer whose addressing is globally meaningful, which is what makes internetworking possible.",
              },
              {
                term: "PDU",
                body: "Packet.",
              },
              {
                term: "Addressing",
                body: "32-bit IPv4 addresses in dotted decimal with a subnet mask, or 128-bit IPv6 addresses in hexadecimal. The mask splits every address into a network portion and a host portion, which is how a router decides whether a destination is local or remote.",
              },
              {
                term: "Forwarding logic",
                body: "The router consults its routing table and selects the longest prefix match. It decrements the TTL (IPv4) or Hop Limit (IPv6) on every hop and discards the packet at zero, which is precisely the mechanism traceroute exploits.",
              },
              {
                term: "Protocols",
                body: "IPv4 and IPv6 for addressing; ICMP and ICMPv6 for diagnostics and error signalling; OSPF, EIGRP, and BGP for dynamic routing; IPsec for encrypted tunnels.",
              },
              {
                term: "Devices",
                body: "Routers and Layer 3 switches, which perform hardware-accelerated inter-VLAN routing.",
              },
            ],
          },
          {
            type: "list",
            title: "Layer 4 — Transport",
            items: [
              {
                term: "Function",
                body: "Delivers data end to end between processes rather than between hosts, using port numbers to multiplex many conversations across one IP address. It also handles segmentation, flow control, and — for TCP — reliability.",
              },
              {
                term: "PDU",
                body: "Segment for TCP, datagram for UDP.",
              },
              {
                term: "TCP — connection-oriented",
                body: "Establishes a session with the three-way handshake (SYN, SYN-ACK, ACK) and closes it with FIN/ACK exchanges. Guarantees ordered delivery through sequence numbers, retransmits unacknowledged data, and throttles the sender via a sliding window and congestion control. Header is 20 bytes minimum.",
              },
              {
                term: "UDP — connectionless",
                body: "An 8-byte header, no handshake, no acknowledgement, no ordering, and no retransmission. The low overhead and absence of head-of-line blocking make it correct for DNS queries, DHCP, VoIP media, and streaming, where a late packet is worse than a lost one.",
              },
              {
                term: "Port ranges",
                body: "Well-known 0-1023, registered 1024-49151, and dynamic or ephemeral 49152-65535. The pairing of source IP, source port, destination IP, and destination port forms the socket that uniquely identifies a flow.",
              },
              {
                term: "Devices",
                body: "Stateful firewalls and load balancers, which make decisions on port numbers and connection state.",
              },
            ],
          },
          {
            type: "list",
            title: "Layer 5 — Session",
            items: [
              {
                term: "Function",
                body: "Establishes, manages, synchronises, and gracefully terminates the dialogue between two applications. Where Layer 4 maintains a connection, Layer 5 maintains a conversation that may span several connections.",
              },
              {
                term: "PDU",
                body: "Data.",
              },
              {
                term: "Services",
                body: "Dialogue control (simplex, half-duplex, or full-duplex), session checkpointing so a long transfer can resume from the last marker rather than restarting, and orderly teardown that ensures both parties agree the exchange is finished.",
              },
              {
                term: "Protocols",
                body: "NetBIOS session service, RPC, SMB session setup, PPTP and L2TP tunnel control, SIP for establishing VoIP calls, and H.245.",
              },
              {
                term: "In practice",
                body: "In the TCP/IP model this layer has no independent existence — its responsibilities are absorbed into the application. It is retained in OSI because the distinction between a transport connection and an application dialogue is genuinely useful when reasoning about failures.",
              },
            ],
          },
          {
            type: "list",
            title: "Layer 6 — Presentation",
            items: [
              {
                term: "Function",
                body: "Translates between the application's data representation and a common wire format, so that two hosts with different internal encodings can still understand one another. Often called the syntax layer.",
              },
              {
                term: "PDU",
                body: "Data.",
              },
              {
                term: "Translation",
                body: "Character-set conversion between ASCII, EBCDIC, and Unicode; byte-order normalisation; and serialisation formats such as XML, JSON, and ASN.1.",
              },
              {
                term: "Compression",
                body: "Reduces payload size before transmission — GZIP and Brotli for text, and codec-level compression for JPEG, GIF, PNG, MPEG, and H.264 media.",
              },
              {
                term: "Encryption",
                body: "TLS and its predecessor SSL are conventionally mapped here, since cipher negotiation and the encryption of the payload are a transformation of representation rather than of transport. In implementation terms TLS straddles Layers 5 and 6.",
              },
            ],
          },
          {
            type: "list",
            title: "Layer 7 — Application",
            items: [
              {
                term: "Function",
                body: "The layer that user-facing software actually talks to. It does not mean the application itself — a browser is not Layer 7; the HTTP the browser speaks is. It defines the request and response semantics the two endpoints share.",
              },
              {
                term: "PDU",
                body: "Data.",
              },
              {
                term: "Web and mail",
                body: "HTTP (TCP/80) and HTTPS (TCP/443); SMTP (TCP/25, submission on 587) for sending mail; POP3 (TCP/110) and IMAP (TCP/143) for retrieving it.",
              },
              {
                term: "Infrastructure services",
                body: "DNS (UDP/53, TCP/53 for zone transfers and large responses), DHCP (UDP/67 and 68), NTP (UDP/123), SNMP (UDP/161, traps on 162), and LDAP (TCP/389, LDAPS 636).",
              },
              {
                term: "File transfer and remote access",
                body: "FTP (TCP/20 data, 21 control), SFTP and SSH (TCP/22), Telnet (TCP/23, unencrypted and deprecated), RDP (TCP/3389), and SMB (TCP/445).",
              },
              {
                term: "Devices",
                body: "Next-generation firewalls, web application firewalls, reverse proxies, and application-aware load balancers all inspect at this layer.",
              },
            ],
          },

          {
            type: "text",
            body: "Encapsulation and decapsulation. Data does not travel sideways between peer layers — it travels down the sender's stack and up the receiver's. On the way down, each layer prepends its own header (and, at Layer 2, appends a trailer) to whatever it received from above, treating that entire unit as an opaque payload. This is why a single HTTP GET leaves the sender wrapped in a TCP header, an IP header, and an Ethernet header and trailer. On the way up the receiver reverses the process exactly, each layer stripping and acting on its own header before handing the remainder upward.",
          },
          {
            type: "mermaid",
            title: "Encapsulation and Decapsulation Flow",
            caption: "Diagram 2 — headers are added descending the sender's stack and stripped ascending the receiver's, so each layer only ever reads the header its peer wrote.",
            definition: `flowchart LR
    subgraph TX["SENDER &mdash; Encapsulation"]
        direction TB
        T7["<b>L7-L5 Application</b><br/>User data is generated<br/><i>Data</i>"]
        T4["<b>L4 Transport</b><br/>Add TCP or UDP header<br/>source and destination ports<br/><i>Segment</i>"]
        T3["<b>L3 Network</b><br/>Add IP header<br/>source and destination IP<br/><i>Packet</i>"]
        T2["<b>L2 Data Link</b><br/>Add MAC header plus FCS trailer<br/><i>Frame</i>"]
        T1["<b>L1 Physical</b><br/>Encode as signals<br/><i>Bits</i>"]
        T7 --> T4 --> T3 --> T2 --> T1
    end

    subgraph RX["RECEIVER &mdash; Decapsulation"]
        direction TB
        R1["<b>L1 Physical</b><br/>Recover signals<br/><i>Bits</i>"]
        R2["<b>L2 Data Link</b><br/>Verify FCS, strip MAC header<br/><i>Frame</i>"]
        R3["<b>L3 Network</b><br/>Strip IP header, confirm destination<br/><i>Packet</i>"]
        R4["<b>L4 Transport</b><br/>Strip TCP or UDP header<br/>reorder and acknowledge<br/><i>Segment</i>"]
        R7["<b>L7-L5 Application</b><br/>Data delivered to the process<br/><i>Data</i>"]
        R1 --> R2 --> R3 --> R4 --> R7
    end

    T1 -- "transmission medium" --> R1

    classDef enc fill:#dbeafe,stroke:#3b82f6,stroke-width:2px,color:#1e3a8a
    classDef dec fill:#dcfce7,stroke:#22c55e,stroke-width:2px,color:#14532d

    class T7,T4,T3,T2,T1 enc
    class R1,R2,R3,R4,R7 dec

    style TX fill:#f8fafc,stroke:#cbd5e1,stroke-width:1px,color:#0f172a
    style RX fill:#f8fafc,stroke:#cbd5e1,stroke-width:1px,color:#0f172a`,
          },
          {
            type: "list",
            title: "What Each Header Actually Adds",
            items: [
              {
                term: "Transport header — 20 bytes (TCP)",
                body: "Source and destination ports, sequence and acknowledgement numbers, window size, and flags. UDP adds only 8 bytes: ports, length, and checksum.",
              },
              {
                term: "Network header — 20 bytes (IPv4)",
                body: "Source and destination IP addresses, TTL, protocol number identifying the Layer 4 payload, and a header checksum. IPv6 uses a fixed 40-byte header with no checksum.",
              },
              {
                term: "Data Link header and trailer — 18 bytes (Ethernet)",
                body: "A 14-byte header carrying destination MAC, source MAC, and EtherType, plus a 4-byte FCS trailer. An 802.1Q VLAN tag adds a further 4 bytes.",
              },
              {
                term: "Rewritten at every hop",
                body: "The Layer 2 header is stripped and rebuilt by each router along the path, because MAC addressing is only locally significant. The Layer 3 header persists end to end, with only the TTL and checksum changing.",
              },
            ],
          },
          {
            type: "list",
            title: "MTU, Fragmentation, and Jumbo Frames",
            items: [
              {
                term: "MTU",
                body: "The Maximum Transmission Unit is the largest Layer 3 payload a link will carry. Standard Ethernet is 1500 bytes, giving a 1518-byte frame once the header and trailer are counted.",
              },
              {
                term: "Fragmentation",
                body: "An IPv4 packet exceeding the next link's MTU is split into fragments and reassembled by the destination host, at a cost in CPU and throughput. IPv6 forbids fragmentation in transit — the router drops the packet and returns ICMPv6 Packet Too Big, leaving the source to adjust.",
              },
              {
                term: "Path MTU Discovery",
                body: "The sender sets the Don't Fragment bit and lowers its segment size in response to ICMP errors. Firewalls that blanket-block ICMP break this mechanism, producing the classic fault where small packets succeed and large transfers hang.",
              },
              {
                term: "Jumbo frames",
                body: "MTUs up to roughly 9000 bytes, used on storage and virtualisation networks to cut per-packet overhead. Every device in the path must agree; a single mismatched hop causes silent drops.",
              },
            ],
          },
          {
            type: "list",
            title: "Exam Notes and Memory Aids",
            items: [
              {
                term: "Layer order, top down",
                body: "All People Seem To Need Data Processing — Application, Presentation, Session, Transport, Network, Data Link, Physical.",
              },
              {
                term: "Layer order, bottom up",
                body: "Please Do Not Throw Sausage Pizza Away — Physical, Data Link, Network, Transport, Session, Presentation, Application.",
              },
              {
                term: "PDU sequence",
                body: "Data, Data, Data, Segment, Packet, Frame, Bit — descending from Layer 7 to Layer 1. Layers 7, 6, and 5 all produce data.",
              },
              {
                term: "Mapping to TCP/IP",
                body: "OSI 7-6-5 collapse into the TCP/IP Application layer, OSI 4 becomes Transport, OSI 3 becomes Internet, and OSI 2-1 become the Link layer.",
              },
              {
                term: "Troubleshooting direction",
                body: "Work bottom-up. Confirm the link light, then the VLAN and MAC table, then IP reachability and the default gateway, then the TCP port, and only then blame the application.",
              },
            ],
          },
        ],
      },

      {
        id: "ports-protocols",
        icon: "api",
        accent: true,
        title: "3. Ports and Protocols",
        blocks: [
          {
            type: "text",
            lead: true,
            body: "A port number is a 16-bit identifier that lets a single IP address host many simultaneous conversations. The IP address answers the question of which machine; the port answers the question of which process on that machine. Without ports, a server could offer exactly one service. IANA divides the 65,536 available numbers into well-known ports 0-1023, registered ports 1024-49151, and dynamic or ephemeral ports 49152-65535 — the last range being what a client draws from when it opens an outbound connection.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1691435828932-911a7801adfb?w=1200&h=600&fit=crop&q=85",
            alt: "Close-up of a network device with numerous cables connected to its numbered ports",
            caption: "Physical ports carry the traffic; logical port numbers decide which service receives it",
          },
          {
            type: "list",
            title: "Sockets and the Four-Tuple",
            items: [
              {
                term: "The socket",
                body: "A connection is uniquely identified by four values: source IP, source port, destination IP, and destination port. This is why one browser can hold six simultaneous connections to the same web server — each uses a different ephemeral source port.",
              },
              {
                term: "Listening versus connecting",
                body: "A server binds to a fixed well-known port and waits. A client picks an unused ephemeral port for itself and targets the server's known port. Only the destination port is predictable, which is precisely what makes port scanning possible.",
              },
              {
                term: "Ports are not security",
                body: "Running a service on a non-standard port is obscurity, not protection. A scanner that fingerprints service banners will identify SSH on port 2222 as readily as on port 22.",
              },
            ],
          },
          {
            type: "list",
            title: "TCP versus UDP — Choosing a Transport",
            items: [
              {
                term: "TCP is connection-oriented",
                body: "A three-way handshake (SYN, SYN-ACK, ACK) establishes state before any data moves. Sequence and acknowledgement numbers guarantee that bytes arrive in order and that loss is retransmitted. A sliding window and congestion control throttle the sender to what the path can absorb. Minimum header is 20 bytes.",
              },
              {
                term: "UDP is connectionless",
                body: "An 8-byte header carrying source port, destination port, length, and checksum — then the payload. No handshake, no acknowledgement, no ordering, no retransmission, no congestion control. The application must supply whatever reliability it needs.",
              },
              {
                term: "When TCP is correct",
                body: "Anything where completeness matters more than timeliness: web pages, email, file transfer, database queries, remote shells. A missing byte in a downloaded archive corrupts the file, so waiting for a retransmission is the right trade.",
              },
              {
                term: "When UDP is correct",
                body: "Anything where a late packet is worthless: VoIP audio, live video, online gaming, and telemetry. It is also correct for short request-response exchanges such as DNS and DHCP, where a handshake would cost more than simply re-asking. UDP avoids head-of-line blocking entirely.",
              },
              {
                term: "Head-of-line blocking",
                body: "Because TCP guarantees order, one lost segment stalls every byte queued behind it until the retransmission arrives. For a voice call this produces a freeze followed by a burst — far worse than dropping the lost audio and continuing, which is what UDP does.",
              },
            ],
          },
          {
            type: "table",
            title: "Common Ports Reference (OBJ 1.4)",
            caption: "Default port assignments. The transport column marks which protocol the service uses; secure variants are listed alongside their plaintext originals.",
            columns: ["Protocol", "Full name", "Port", "Transport", "Purpose"],
            rows: [
              ["FTP", "File Transfer Protocol", "20 / 21", "TCP", "Port 21 carries commands, port 20 carries data. Credentials and payload travel in plaintext."],
              ["SSH", "Secure Shell", "22", "TCP", "Encrypted remote shell. The transport that SFTP and SCP are tunnelled over."],
              ["SFTP", "SSH File Transfer Protocol", "22", "TCP", "File transfer inside an SSH session. Unrelated to FTPS, which is FTP wrapped in TLS."],
              ["Telnet", "Telnet", "23", "TCP", "Plaintext remote terminal. Deprecated — every keystroke, including the password, is readable on the wire."],
              ["SMTP", "Simple Mail Transfer Protocol", "25", "TCP", "Server-to-server mail relay. Port 587 is the modern authenticated submission port."],
              ["DNS", "Domain Name System", "53", "TCP/UDP", "UDP for ordinary lookups; TCP for zone transfers and responses too large for a datagram."],
              ["DHCP", "Dynamic Host Configuration Protocol", "67 / 68", "UDP", "Server listens on 67, client on 68. Automates address, mask, gateway, and DNS assignment."],
              ["TFTP", "Trivial File Transfer Protocol", "69", "UDP", "Minimal transfer with no authentication. Used for network boot and switch firmware images."],
              ["HTTP", "Hypertext Transfer Protocol", "80", "TCP", "Plaintext web traffic. Anything sensitive belongs on 443."],
              ["POP3", "Post Office Protocol v3", "110", "TCP", "Downloads mail and traditionally deletes it from the server. Single-device model."],
              ["NTP", "Network Time Protocol", "123", "UDP", "Clock synchronisation. Kerberos authentication and log correlation both fail when clocks drift."],
              ["IMAP", "Internet Message Access Protocol", "143", "TCP", "Keeps mail on the server and synchronises state across devices. The multi-device model."],
              ["SNMP", "Simple Network Management Protocol", "161 / 162", "UDP", "Polling on 161, unsolicited traps on 162. Use v3 — v1 and v2c send community strings in plaintext."],
              ["LDAP", "Lightweight Directory Access Protocol", "389", "TCP/UDP", "Directory queries against Active Directory and comparable stores."],
              ["HTTPS", "HTTP Secure", "443", "TCP", "HTTP inside TLS. Provides confidentiality, integrity, and server authentication."],
              ["SMB", "Server Message Block", "445", "TCP", "Windows file and printer sharing. Should never be exposed to the internet."],
              ["Syslog", "Syslog", "514", "UDP", "Centralised log collection from network devices to a collector or SIEM."],
              ["SMTPS", "SMTP Submission", "587", "TCP", "Authenticated client mail submission with STARTTLS. The correct port for mail clients."],
              ["LDAPS", "LDAP over SSL", "636", "TCP", "LDAP wrapped in TLS so directory credentials are not exposed."],
              ["IMAPS", "IMAP over SSL", "993", "TCP", "TLS-encrypted IMAP."],
              ["POP3S", "POP3 over SSL", "995", "TCP", "TLS-encrypted POP3."],
              ["RDP", "Remote Desktop Protocol", "3389", "TCP", "Microsoft graphical remote desktop. A frequent ransomware entry point when internet-facing."],
              ["SIP", "Session Initiation Protocol", "5060 / 5061", "TCP/UDP", "Sets up and tears down VoIP calls. 5061 is the TLS-protected variant. Media itself rides RTP."],
            ],
          },
          {
            type: "list",
            title: "Web and Email Ports in Context",
            items: [
              {
                term: "HTTP 80 and HTTPS 443",
                body: "HTTPS is not a different protocol but HTTP carried inside a TLS session. The handshake negotiates a cipher suite and validates the server certificate before any request is sent, which is why a certificate name mismatch breaks the connection before the page is ever requested.",
              },
              {
                term: "SMTP is send-only",
                body: "SMTP moves mail outward and between servers. It does not retrieve mail. A client that can send but not receive has an SMTP path that works and a POP3 or IMAP path that does not.",
              },
              {
                term: "POP3 versus IMAP",
                body: "POP3 downloads and removes, leaving one authoritative copy on the client — poor for multiple devices. IMAP leaves the message on the server and synchronises flags, folders, and read state, so a message opened on a phone shows as read on a laptop.",
              },
              {
                term: "FTP versus SFTP versus FTPS",
                body: "FTP is plaintext on 20/21. SFTP is a subsystem of SSH on port 22 — a completely different protocol. FTPS is the original FTP wrapped in TLS. The naming similarity between SFTP and FTPS is a classic exam trap.",
              },
              {
                term: "TFTP",
                body: "UDP port 69, no authentication and no directory listing. Deliberately minimal so it can fit in the firmware of a PXE boot ROM. Appropriate only inside a trusted management network.",
              },
            ],
          },
          {
            type: "list",
            title: "Remote Access and Network Services",
            items: [
              {
                term: "SSH on 22",
                body: "Encrypted shell, port forwarding, and file transfer. Key-based authentication should be preferred over passwords, and the host key fingerprint is what protects against interception on first connection.",
              },
              {
                term: "Telnet on 23",
                body: "Retained on the exam as the insecure counterexample. Anything Telnet does, SSH does with encryption. Its remaining legitimate use is testing whether an arbitrary TCP port is open.",
              },
              {
                term: "RDP on 3389",
                body: "Full graphical Windows sessions. Expose it through a VPN or gateway rather than directly, and require network level authentication.",
              },
              {
                term: "DNS on 53",
                body: "Resolves names to addresses. Uses UDP for speed, falling back to TCP when a response exceeds the datagram limit or when a secondary performs a zone transfer. A resolution failure looks exactly like a total outage to users, which is why it is the first thing to test after connectivity.",
              },
              {
                term: "DHCP on 67 and 68",
                body: "The DORA exchange — Discover, Offer, Request, Acknowledge. Discover is a broadcast, so a client on a different subnet needs a relay agent or IP helper address configured on the router.",
              },
              {
                term: "NTP on 123",
                body: "Synchronises clocks against a stratum hierarchy. Certificate validation, Kerberos tickets, and correlated log timelines all depend on it, so a drifted clock produces failures that look unrelated to time.",
              },
            ],
          },
          {
            type: "list",
            title: "ICMP and Finding Open Ports",
            items: [
              {
                term: "ICMP has no ports",
                body: "The Internet Control Message Protocol is a Layer 3 protocol carried directly inside IP as protocol number 1. It has no port numbers at all, because it signals conditions about the network rather than delivering data to a process. IPv6 uses ICMPv6, protocol number 58.",
              },
              {
                term: "What ICMP carries",
                body: "Echo Request and Echo Reply types 8 and 0 underpin ping. Destination Unreachable type 3 reports that a host, network, or port cannot be reached. Time Exceeded type 11 is returned when the TTL hits zero, which is what makes traceroute work.",
              },
              {
                term: "Blocking ICMP has costs",
                body: "Filtering ICMP wholesale removes ping and traceroute, but it also breaks Path MTU Discovery, producing the fault where small requests succeed and large transfers hang indefinitely. Filter selectively rather than dropping the protocol entirely.",
              },
              {
                term: "Port scanning",
                body: "A scanner probes a range of ports and infers state from the response. A SYN answered by SYN-ACK means open; a RST means closed; silence usually means a firewall is dropping the packet. Nmap is the standard tool, and scanning systems you do not own or have written permission to test is unlawful in most jurisdictions.",
              },
              {
                term: "Checking a single port",
                body: "Confirm one service quickly rather than scanning a range. On Windows, Test-NetConnection -Port 443 host. On Linux or macOS, nc -vz host 443. A refused connection proves reachability with nothing listening; a timeout suggests filtering.",
              },
              {
                term: "Auditing the local machine",
                body: "netstat -ano on Windows or ss -tulpn on Linux lists every listening socket with the owning process. This is how you find the service that is holding a port you expected to be free.",
              },
            ],
          },
          {
            type: "code",
            title: "Verifying reachability and listening sockets",
            lines: [
              "# Is the port reachable from this host?",
              "nc -vz mail.example.com 587          # Linux / macOS",
              "Test-NetConnection mail.example.com -Port 587   # Windows PowerShell",
              "",
              "# What is listening locally, and which process owns it?",
              "ss -tulpn                            # Linux",
              "netstat -ano                         # Windows",
              "",
              "# Is name resolution working before blaming the service?",
              "dig +short mail.example.com          # Linux / macOS",
              "Resolve-DnsName mail.example.com     # Windows PowerShell",
            ],
          },
        ],
      },

      {
        id: "media-connectors",
        icon: "server",
        accent: true,
        title: "4. Media and Connectors",
        blocks: [
          {
            type: "text",
            lead: true,
            body: "Every abstraction in the OSI model eventually resolves to a physical signal on a physical medium. Objective 1.5 covers the media themselves — copper, fibre, and the transceivers that terminate them — while Objective 5.5 covers the tools used to build and verify them. Media choice is a negotiation between required bandwidth, distance, electrical environment, and budget, and the wrong choice surfaces later as intermittent faults that are far harder to diagnose than an outright failure.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1785682231847-93265d8e633d?w=1200&h=600&fit=crop&q=85",
            alt: "Server rack filled with network equipment and structured cabling in a distribution frame",
            caption: "A distribution frame — where horizontal cabling from the floor terminates onto patch panels",
          },
          {
            type: "list",
            title: "Media and Cabling Distribution",
            items: [
              {
                term: "MDF — Main Distribution Frame",
                body: "The building's primary termination point, where the service provider's circuit enters and the core switching lives. There is one MDF per building.",
              },
              {
                term: "IDF — Intermediate Distribution Frame",
                body: "A floor-level or wing-level wiring closet fed from the MDF by backbone cabling. Access switches live here and horizontal cabling radiates out to work areas.",
              },
              {
                term: "Backbone versus horizontal cabling",
                body: "Backbone (vertical) cabling connects MDF to IDF and is almost always fibre, because the runs are long and the aggregate bandwidth is high. Horizontal cabling runs from the IDF to the wall outlet and is copper, capped at 90 metres of solid-core permanent link plus 10 metres of stranded patch cord — 100 metres total.",
              },
              {
                term: "Patch panel and demarcation",
                body: "Horizontal runs terminate permanently on the back of a patch panel; short patch cords then connect the front to a switch port. Moves and changes touch only the patch cord, never the permanent link. The demarcation point is the boundary where provider responsibility ends and yours begins.",
              },
              {
                term: "Plenum versus non-plenum",
                body: "Plenum-rated jacket (typically FEP or low-smoke PVC) is mandatory in air-handling spaces such as raised floors and the void above a suspended ceiling, because standard PVC emits toxic smoke when it burns. This is a fire-code requirement, not a performance one.",
              },
            ],
          },

          {
            type: "text",
            body: "Copper media. Twisted pair remains the default for the horizontal run to the desk. The twisting itself is the engineering: two conductors carrying equal and opposite signals pick up interference almost identically, and the receiver's differential amplifier cancels anything common to both. Tighter twists and more of them per metre give higher category ratings.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1783683783819-e6cb806bba69?w=1200&h=600&fit=crop&q=85",
            alt: "Ethernet patch cables terminated in RJ45 plugs connected to the rear ports of a network device",
            caption: "RJ45-terminated twisted pair — the standard copper interface for horizontal cabling",
          },
          {
            type: "list",
            title: "UTP, STP, and Cable Categories",
            items: [
              {
                term: "UTP — Unshielded Twisted Pair",
                body: "Four pairs in a plain jacket, relying purely on the twist rate for noise rejection. Cheaper, thinner, and more flexible, which makes it the default for ordinary office cabling.",
              },
              {
                term: "STP — Shielded Twisted Pair",
                body: "Adds foil or braid around individual pairs, the whole bundle, or both. Required near motors, fluorescent ballasts, lift shafts, and industrial plant. The shield must be bonded to ground at one end only — a shield grounded at both ends becomes an aerial and makes interference worse.",
              },
              {
                term: "Cat 5e",
                body: "100 MHz, 1 Gbps at 100 metres. The practical floor for new installations; adequate for gigabit to the desk.",
              },
              {
                term: "Cat 6",
                body: "250 MHz, 1 Gbps at 100 metres, and 10 Gbps only up to roughly 37-55 metres depending on installation quality and adjacent-cable interference. The 10 Gbps distance limit is the detail most often missed.",
              },
              {
                term: "Cat 6a",
                body: "500 MHz, 10 Gbps across the full 100 metres. The augmented specification tightens alien crosstalk limits, which is why the cable is noticeably thicker and has a larger bend radius — a genuine consideration when filling cable trays.",
              },
              {
                term: "Beyond Cat 6a",
                body: "Cat 7 at 600 MHz and Cat 8 at 2000 MHz supporting 25 and 40 Gbps, but only to about 30 metres. Cat 8 is a data centre top-of-rack technology, not a horizontal cabling one.",
              },
              {
                term: "Coaxial and twinaxial",
                body: "Coax such as RG-6 with F-type connectors carries cable broadband and CCTV; RG-58 with BNC is legacy Ethernet. Twinaxial direct attach copper terminates in an SFP+ or QSFP form factor and links adjacent racks over a few metres far more cheaply than optics.",
              },
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1594915854088-2128db6a8db5?w=1200&h=600&fit=crop&q=85",
            alt: "Individually coloured twisted pair conductors separated and ordered ready for termination",
            caption: "Untwisted and ordered conductors — pair order is what T568A and T568B standardise",
          },
          {
            type: "list",
            title: "Building a Copper Cable — T568A versus T568B",
            items: [
              {
                term: "What the standards define",
                body: "T568A and T568B are two pin-to-pair assignments for an eight-position RJ45. They are electrically identical: same bandwidth, same attenuation, same impedance. Only the positions of the orange and green pairs are swapped.",
              },
              {
                term: "T568B pin order",
                body: "1 white/orange, 2 orange, 3 white/green, 4 blue, 5 white/blue, 6 green, 7 white/brown, 8 brown. The most common choice in commercial installations and on factory patch cords.",
              },
              {
                term: "T568A pin order",
                body: "1 white/green, 2 green, 3 white/orange, 4 blue, 5 white/blue, 6 orange, 7 white/brown, 8 brown. Backward compatible with older USOC telephone wiring and mandated in some government and residential specifications.",
              },
              {
                term: "Straight-through versus crossover",
                body: "The same standard at both ends produces a straight-through cable, which is what virtually everything uses today. T568A at one end and T568B at the other produces a crossover, historically needed to join two like devices. Auto-MDI-X on modern switches detects and corrects the mismatch automatically, so crossover cables are now effectively obsolete.",
              },
              {
                term: "Pick one and document it",
                body: "The genuine failure mode is inconsistency. A site that mixes standards produces accidental crossovers that auto-MDI-X will silently hide until it meets equipment that lacks it. Choose one standard, label it at the patch panel, and hold to it.",
              },
              {
                term: "Termination technique",
                body: "Strip only the jacket, never the conductor insulation. Preserve the twist to within 13 mm of the termination — untwisting further is a leading cause of near-end crosstalk failures. Punch down onto the panel with a punchdown tool, which strips, seats, and trims in one action, then verify with a cable tester.",
              },
              {
                term: "Tools for the job (OBJ 5.5)",
                body: "Punchdown tool for panels and keystone jacks, crimper for RJ45 plugs, cable tester for continuity and pin mapping, toner and probe to trace one run through an unlabelled bundle, and a TDR to locate the distance to a break in a long run.",
              },
            ],
          },

          {
            type: "text",
            body: "Fibre media. Fibre carries modulated light through a glass core rather than current through copper, which makes it immune to electromagnetic interference, incapable of radiating a signal that could be tapped passively, and free of any ground-loop concerns between buildings. It is the default for backbone, inter-building, and any run beyond the 100-metre copper limit.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1594915440248-1e419eba6611?w=1200&h=600&fit=crop&q=85",
            alt: "Fibre optic patch cables connected to a network switch inside a server rack",
            caption: "Fibre patching in a server rack — duplex cores, one to transmit and one to receive",
          },
          {
            type: "list",
            title: "Single-mode versus Multimode Fibre",
            items: [
              {
                term: "Single-mode (SMF)",
                body: "A core of roughly 9 microns admits exactly one propagation path, eliminating modal dispersion. Driven by a narrow-linewidth laser at 1310 or 1550 nm. Reaches tens of kilometres and carries the highest bandwidth. Jacket is conventionally yellow.",
              },
              {
                term: "Multimode (MMF)",
                body: "A core of 50 or 62.5 microns admits many simultaneous paths. Cheaper VCSEL transmitters at 850 nm make the optics far less expensive, but modal dispersion limits reach to a few hundred metres. Jacket is orange for OM1 and OM2, aqua for OM3 and OM4, and violet for OM5.",
              },
              {
                term: "Choosing between them",
                body: "Multimode inside a building or campus where runs are short and transceiver cost dominates. Single-mode between buildings, across a metro area, or wherever future capacity headroom matters more than the optics budget.",
              },
              {
                term: "Never mix them",
                body: "Connecting single-mode to multimode couples a 9-micron core to a 50-micron one and produces enormous loss. The link may come up marginally and then fail intermittently under load, which is far harder to diagnose than a link that simply stays down.",
              },
              {
                term: "Attenuation and dispersion",
                body: "Attenuation is loss of optical power over distance, measured in dB. Dispersion is the spreading of a pulse in time until adjacent bits blur together. Both set the practical distance limit, and both are measured with a light meter and an OTDR.",
              },
            ],
          },
          {
            type: "list",
            title: "Fibre Connectors and Polish Types",
            items: [
              {
                term: "LC — Lucent Connector",
                body: "A small form factor latching connector, half the footprint of SC. The dominant choice on modern SFP optics precisely because port density matters.",
              },
              {
                term: "SC — Subscriber Connector",
                body: "A square push-pull connector, sometimes called stick-and-click. Robust and common on older equipment and on provider hand-off panels.",
              },
              {
                term: "ST — Straight Tip",
                body: "A round bayonet connector, twist-and-lock. Largely legacy, still encountered on older multimode plant.",
              },
              {
                term: "MPO / MTP",
                body: "A multi-fibre push-on ferrule carrying 12 or 24 strands in one connector. Used for 40 and 100 Gigabit breakout links and high-density trunk cabling.",
              },
              {
                term: "UPC — Ultra Physical Contact",
                body: "A ferrule polished flat with a slight dome, conventionally blue. Return loss around -50 dB. The general-purpose choice for enterprise data links.",
              },
              {
                term: "APC — Angled Physical Contact",
                body: "An 8-degree angled ferrule, conventionally green. Reflected light is deflected into the cladding rather than straight back down the core, giving return loss around -60 dB. Required for RF video and long-haul DWDM.",
              },
              {
                term: "Never mate APC to UPC",
                body: "The angled and flat faces cannot make full contact. The result is a large air gap, severe insertion loss, and physical damage to both ferrules. Colour coding — green for APC, blue for UPC — exists to prevent exactly this.",
              },
              {
                term: "Contamination",
                body: "A single dust particle on a 9-micron core can obscure a meaningful fraction of it. Inspect and clean every connector before mating; a dirty end face is the single most common cause of an unexplained fibre fault.",
              },
            ],
          },

          {
            type: "image",
            src: "https://images.unsplash.com/photo-1750711731797-25c3f2551ff8?w=1200&h=600&fit=crop&q=85",
            alt: "Network switch with populated ports and ethernet cabling in a rack",
            caption: "Modular switch ports — transceivers let one chassis serve copper and fibre simultaneously",
          },
          {
            type: "list",
            title: "Transceivers — SFP, SFP+, and QSFP",
            items: [
              {
                term: "Why modular optics exist",
                body: "A switch port with a fixed medium commits the chassis to one cabling decision for its lifetime. A cage that accepts a pluggable transceiver lets the same port run multimode today, single-mode next year, or direct attach copper to the adjacent rack — without replacing the switch.",
              },
              {
                term: "SFP",
                body: "Small Form-factor Pluggable, up to 1 Gbps. The workhorse for gigabit uplinks, available in copper 1000BASE-T, multimode SX, and single-mode LX variants.",
              },
              {
                term: "SFP+",
                body: "Enhanced SFP at 10 Gbps in the same physical footprint. An SFP+ cage generally accepts an older SFP at the lower rate, but the reverse is not true.",
              },
              {
                term: "QSFP and QSFP+",
                body: "Quad SFP, bonding four lanes into one module — 4 x 10 Gbps for 40 Gigabit in roughly the space of a single SFP. QSFP28 carries 4 x 25 Gbps for 100 Gigabit, and QSFP-DD doubles the lane count again for 400 Gigabit.",
              },
              {
                term: "Bidirectional optics",
                body: "BiDi transceivers use wavelength division to send and receive on a single strand rather than a duplex pair, halving the fibre count on a constrained run. Both ends must be a matched upstream and downstream pair.",
              },
              {
                term: "Matching matters",
                body: "The transceiver, the fibre type, and the wavelength must agree at both ends of the link. A 1310 nm single-mode optic will not usefully drive an OM3 multimode strand, and vendor firmware may refuse an unrecognised third-party module outright.",
              },
            ],
          },
          {
            type: "table",
            title: "Media Selection Summary (OBJ 1.5)",
            caption: "Practical selection guide. Copper distances assume a compliant 100-metre channel; fibre distances vary with transceiver and grade.",
            columns: ["Media", "Max speed", "Max distance", "Connector", "Typical use"],
            rows: [
              ["Cat 5e UTP", "1 Gbps", "100 m", "RJ45", "Standard desk drop where gigabit is sufficient"],
              ["Cat 6 UTP", "10 Gbps", "55 m at 10G, 100 m at 1G", "RJ45", "Horizontal cabling with limited 10G headroom"],
              ["Cat 6a UTP/STP", "10 Gbps", "100 m", "RJ45", "10G to the desk, wireless AP backhaul, PoE-heavy runs"],
              ["Cat 8", "40 Gbps", "30 m", "RJ45", "Top-of-rack switch to server inside a data centre"],
              ["Twinaxial DAC", "25-100 Gbps", "1-7 m", "SFP+ / QSFP", "Rack-adjacent switch interconnect at low cost"],
              ["Multimode OM3/OM4", "10-100 Gbps", "300-400 m", "LC / MPO", "Intra-building backbone and data centre distribution"],
              ["Single-mode OS1/OS2", "10-400 Gbps", "10-80 km", "LC / SC", "Inter-building, campus backbone, and provider hand-off"],
              ["Coaxial RG-6", "Varies", "Hundreds of m", "F-type", "Cable broadband service drop and CCTV"],
            ],
          },
        ],
      },


      {
        id: "distribution-systems",
        icon: "server",
        accent: true,
        title: "5. Distribution Systems",
        blocks: [
          {
            type: "text",
            lead: true,
            body: "Objective 2.4 leaves the protocol stack behind entirely and asks about the building. A network that is flawless in configuration still fails if the riser is undocumented, the rack loses power at 03:00, the intake air is 40 °C, or a sprinkler head discharges over a live switch. This module covers the four physical systems every distribution frame depends on — cable, power, cooling, and fire protection — plus the tools from Objective 5.5 used to build and prove the cable plant.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?w=1200&h=600&fit=crop&q=85",
            alt: "Neatly dressed yellow and green patch cables running through horizontal cable management in a rack",
            caption: "Structured cabling done properly — dressed, colour-coded and documented, so the next fault is found in minutes rather than hours",
          },

          {
            type: "text",
            body: "Distribution systems. A structured cabling design is hierarchical for the same reason a routed network is: it localises change. Traffic enters the building once, aggregates at one main frame, fans out to floor-level frames over a small number of high-capacity backbone runs, and only then radiates to individual outlets. Adding a desk touches one horizontal run and one patch cord — nothing else in the hierarchy moves.",
          },
          {
            type: "list",
            title: "Cable Distribution Hierarchy (OBJ 2.4)",
            items: [
              {
                term: "Demarcation point",
                body: "The legal and physical boundary where the service provider's responsibility ends and yours begins. In practice it is the NIU, smartjack or ONT in the entrance facility. Faults are triaged against it: if the provider's side of the demarc tests clean, the problem is yours.",
              },
              {
                term: "Entrance facility",
                body: "The room or enclosure where outside plant enters the building. It houses the demarc, the provider's terminating equipment, and the protection devices that stop an outdoor surge from travelling inside on the copper.",
              },
              {
                term: "MDF — Main Distribution Frame",
                body: "One per building. The provider circuit terminates here and the core switching, routing and edge firewall live here, so it is usually also the server room. Every backbone run in the building traces back to this single frame.",
              },
              {
                term: "IDF — Intermediate Distribution Frame",
                body: "A floor-level or wing-level wiring closet fed from the MDF. Access switches, patch panels and a local UPS sit here, and horizontal cabling radiates out to the work areas on that floor. A campus may run MDF to building IDF to floor IDF, but the pattern is the same at every tier.",
              },
              {
                term: "Backbone versus horizontal cabling",
                body: "Backbone — also called riser or vertical — cabling connects MDF to IDF and is almost always fibre: the runs are long and carry aggregated traffic. Horizontal cabling runs IDF to outlet and is copper, limited to a 90 m permanent link plus 10 m of patch cords, 100 m of channel in total.",
              },
              {
                term: "Racks and mounting",
                body: "The 19-inch rack is the industry standard width. Height is counted in rack units, where 1U is 1.75 inches, and a full-height cabinet is typically 42U. Two-post relay racks suit patch panels and switches; four-post cabinets are needed for the depth and weight of servers.",
              },
              {
                term: "Patch panels and fibre distribution panels",
                body: "Horizontal runs terminate permanently on the rear of a patch panel — 110 block for copper — and short patch cords connect the front to a switch port. A fibre distribution panel does the same for fibre, and includes a service loop so the cable is never bent inside its minimum radius.",
              },
              {
                term: "Lockable equipment and physical security",
                body: "A cabinet with lockable front and rear doors keeps an unauthorised person off a console port. Physical access to a switch is administrative access to it, which is why the IDF door, the cabinet lock and the port-level controls are all part of the same control.",
              },
              {
                term: "Plenum-rated cable",
                body: "Any cable run through an air-handling space — the void above a suspended ceiling, or under a raised floor used for return air — must have a plenum-rated jacket. This is a fire-code obligation about smoke toxicity, not a performance rating.",
              },
            ],
          },
          {
            type: "mermaid",
            title: "Cable Distribution Hierarchy",
            caption:
              "Diagram — from the provider handoff at the demarcation point, through the MDF, across the backbone to each IDF, and out over horizontal cabling to the work area.",
            definition: `flowchart TD
    ISP(("Service Provider<br/>Network"))

    DEMARC["<b>Demarcation Point</b><br/>NIU &middot; smartjack &middot; ONT<br/><i>provider responsibility ends here</i>"]

    subgraph MDFZ["Main Distribution Frame &mdash; one per building"]
      MDF["<b>MDF</b><br/>Core switch &middot; router &middot; edge firewall<br/>Provider circuit terminates here"]
    end

    BB["<b>Backbone / riser cabling</b><br/>Fibre &middot; long runs, aggregated traffic"]

    subgraph IDFZ["Intermediate Distribution Frames &mdash; per floor or wing"]
      IDF1["<b>IDF &mdash; Floor 1</b><br/>Access switch &middot; patch panel &middot; UPS"]
      IDF2["<b>IDF &mdash; Floor 2</b><br/>Access switch &middot; patch panel &middot; UPS"]
    end

    HZ1["<b>Horizontal cabling</b><br/>Cat 6/6A &middot; 90 m permanent link<br/>+ 10 m patch = 100 m channel"]
    HZ2["<b>Horizontal cabling</b><br/>Cat 6/6A &middot; 90 m permanent link<br/>+ 10 m patch = 100 m channel"]

    subgraph WA["Work area &mdash; end devices"]
      PC["<b>Workstation</b>"]
      AP["<b>Wireless AP</b><br/><i>PoE from the IDF</i>"]
      PH["<b>VoIP phone</b>"]
    end

    ISP --> DEMARC
    DEMARC --> MDF
    MDF --> BB
    BB --> IDF1
    BB --> IDF2
    IDF1 --> HZ1
    IDF2 --> HZ2
    HZ1 --> PC
    HZ1 --> PH
    HZ2 --> AP

    classDef ext fill:#f1f5f9,stroke:#94a3b8,stroke-width:2px,color:#334155
    classDef demarc fill:#fee2e2,stroke:#dc2626,stroke-width:2px,color:#7f1d1d
    classDef mdf fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#3b0764
    classDef bb fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f
    classDef idf fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef horiz fill:#ccfbf1,stroke:#0d9488,stroke-width:2px,color:#134e4a
    classDef dev fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d

    class ISP ext
    class DEMARC demarc
    class MDF mdf
    class BB bb
    class IDF1,IDF2 idf
    class HZ1,HZ2 horiz
    class PC,AP,PH dev`,
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1698668975271-2ba9a323be6b?w=1200&h=600&fit=crop&q=85",
            alt: "Equipment rack with structured cabling terminated onto patch panels and routed through cable management",
            caption: "An MDF in practice — permanent links land on the patch panel, and only patch cords move",
          },

          {
            type: "text",
            body: "Wiring and testing. Building the plant and proving it are one job. A link that shows carrier is not a link that passes certification: a split pair, a marginal termination or an untwisted pair at the jack will pass a continuity check and then drop sessions under load. Every tool below answers a specific question, and knowing which question you are asking is most of the diagnosis.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1785682117028-6fcf2c0b515b?w=1200&h=600&fit=crop&q=85",
            alt: "Technician working on rack-mounted network equipment with hand tools",
            caption: "Termination and verification at the rack — the practical half of Objective 5.5",
          },
          {
            type: "table",
            title: "Wiring and Testing Tools (OBJ 5.5)",
            caption:
              "The tool determines the question you can answer. A cable tester tells you the pairs are right; only a certifier tells you the link meets its category.",
            columns: ["Tool", "Used for", "What it tells you"],
            rows: [
              ["Punchdown tool", "Seating conductors into a 110 or 66 block on a patch panel or jack", "Nothing — it terminates. The blade seats and trims the conductor in one action."],
              ["Crimper", "Attaching an RJ45 plug to stranded patch cable", "Nothing — it terminates. Used for patch cords, not for permanent links."],
              ["Cable stripper", "Removing the outer jacket without nicking the conductors", "A nicked conductor is a future intermittent fault, not an immediate one."],
              ["Cable tester", "Wire map, continuity, shorts, opens, reversed and split pairs", "Whether the eight conductors land on the right pins at both ends."],
              ["Cable certifier", "Frequency-swept testing against a category standard", "Whether the link actually meets Cat 6/6A — insertion loss, NEXT, return loss."],
              ["Tone generator and probe", "Tracing one cable out of a bundle by injecting an audio tone", "Which of the 48 unlabelled runs in the IDF is the one you want."],
              ["TDR — time-domain reflectometer", "Sending a pulse down copper and timing the reflection", "How far along the run the break or short is, in metres."],
              ["OTDR — optical TDR", "The same principle on fibre", "Distance to a break, splice loss and connector loss along the fibre."],
              ["Light meter / OLTS", "Measuring optical power against a reference", "Whether the received power is within the transceiver's budget."],
              ["Fusion splicer", "Permanently joining two fibres with an electric arc", "Lower loss than a mechanical splice, and no connector to contaminate."],
            ],
          },

          {
            type: "text",
            body: "Power distribution. Every device in the rack is downstream of a chain — utility feed, generator, UPS, PDU, rack outlet, power supply — and the chain is only as available as its least redundant link. Dual power supplies achieve nothing if both cords land on the same PDU on the same circuit.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1680992046626-418f7e910589?w=1200&h=600&fit=crop&q=85",
            alt: "Rack-mounted equipment with status indicators in a dimly lit data centre aisle",
            caption: "Rack power feeds the whole chain — the last link before the equipment itself",
          },
          {
            type: "list",
            title: "Power Systems (OBJ 2.4)",
            items: [
              {
                term: "UPS — uninterruptible power supply",
                body: "Bridges the gap between a utility failure and either restoration or generator start. Standby (offline) switches to battery on failure and is the cheapest. Line-interactive adds an autotransformer that corrects sags and swells without draining the battery. Double-conversion online rectifies to DC and re-inverts continuously, so the load never sees a transfer at all — the choice for a datacentre.",
              },
              {
                term: "PDU — power distribution unit",
                body: "Distributes one feed to many rack outlets. Basic units just split the circuit; metered units report draw so you can see the real load; switched units allow an outlet to be power-cycled remotely — the difference between a five-minute fix and a drive to site. An ATS PDU accepts two feeds and fails over between them.",
              },
              {
                term: "Power load and the 80 % rule",
                body: "Continuous load on a circuit should not exceed 80 % of its rating, so a 20 A circuit is planned to 16 A. Sizing to the nameplate rating of every device overstates the real draw substantially; sizing to measured load with headroom for inrush is the working method.",
              },
              {
                term: "Voltage",
                body: "Equipment is commonly dual-voltage, accepting roughly 100–240 V. Running a rack at 208 or 230 V rather than 120 V carries the same power at lower current, which means less heat in the conductors and more equipment per circuit.",
              },
              {
                term: "Redundancy — A and B feeds",
                body: "Dual-corded equipment takes one supply from an A-side PDU and the other from a B-side PDU, each on a separate circuit and ideally a separate UPS. Either side can then be taken out for maintenance with the load still up.",
              },
              {
                term: "Generator and transfer switch",
                body: "The UPS covers seconds to minutes; a generator covers hours to days. An automatic transfer switch starts the generator and moves the load onto it, with the UPS carrying everything during the changeover.",
              },
              {
                term: "Grounding and surge protection",
                body: "Racks and cable trays are bonded to a common ground so no potential difference exists between two chassis. A surge protector clamps transients — worth remembering that a surge protector alone provides no runtime, and a basic power strip provides neither.",
              },
            ],
          },

          {
            type: "text",
            body: "HVAC. Cooling in a datacentre is an airflow problem before it is a refrigeration problem. Servers draw cold air at the front and exhaust hot air at the back; the entire discipline is keeping those two air masses apart. Once exhaust air recirculates into an intake, adding cooling capacity treats the symptom while the hot spot remains.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1782094673136-5198a372980c?w=1200&h=600&fit=crop&q=85",
            alt: "Close-up of cooling fans on rack-mounted server equipment in a data centre",
            caption: "Every chassis moves air front to back — cooling design starts by respecting that direction",
          },
          {
            type: "list",
            title: "Cooling and Environmental Control (OBJ 2.4)",
            items: [
              {
                term: "Hot aisle / cold aisle",
                body: "Racks are arranged in rows with all fronts facing one another across a cold aisle, and all rears facing one another across a hot aisle. Cold supply air is delivered only to the cold aisle; hot exhaust collects only in the hot aisle and returns to the units. Alternating rows this way is the foundation everything else builds on.",
              },
              {
                term: "Containment",
                body: "Physically sealing one aisle with doors and a roof stops the two air masses mixing at all. Cold-aisle containment encloses the supply side; hot-aisle containment encloses the exhaust and returns it to the plenum. Containment is what makes a higher supply temperature safe, and a higher supply temperature is where the efficiency saving comes from.",
              },
              {
                term: "Blanking panels and floor seals",
                body: "An empty rack unit is a short circuit for air: exhaust flows straight back through the gap to the intake. Blanking panels close unused U space, and brush grommets seal cable cut-outs in a raised floor. Both are trivially cheap and among the most effective fixes for a hot spot.",
              },
              {
                term: "Port-side intake and exhaust",
                body: "Most switches move air front to back, but some move it back to front so the port side faces the cold aisle. Mixing the two airflow directions in one row puts one device's exhaust directly into its neighbour's intake, so the airflow variant must be specified at purchase.",
              },
              {
                term: "Temperature",
                body: "ASHRAE TC 9.9 recommends an inlet range of 18–27 °C for general-purpose equipment. Measurement belongs at the rack inlet, not at the room thermostat — the room average can look correct while the top of a rack is well outside range.",
              },
              {
                term: "Humidity",
                body: "ASHRAE recommends a dew point of −9 °C to 15 °C with relative humidity not exceeding 60 %. Too dry and electrostatic discharge becomes a real risk during handling; too damp and you invite condensation and corrosion on contacts.",
              },
              {
                term: "CRAC versus CRAH",
                body: "A computer room air conditioner contains its own refrigeration compressor. A computer room air handler uses chilled water from a central plant and only moves air across a coil. CRAH scales better in large facilities; CRAC is simpler in a single room.",
              },
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1784652852605-6945598f2af3?w=1200&h=600&fit=crop&q=85",
            alt: "Rows of white server cabinets forming aisles in a modern data centre",
            caption: "Rows arranged front-to-front and back-to-back — the hot aisle / cold aisle layout as built",
          },

          {
            type: "text",
            body: "Fire suppression. A server room presents a conflict: the standard response to fire is water, and water destroys exactly what you are trying to protect. Purpose-built suppression resolves it by detecting earlier than a sprinkler head would, and by extinguishing with something that leaves no residue.",
          },
          {
            type: "table",
            title: "Fire Suppression Options (OBJ 2.4)",
            caption:
              "Clean agents are the primary response in an equipment room; pre-action sprinklers are the secondary layer that satisfies building code without risking an accidental soaking.",
            columns: ["System", "Agent / mechanism", "Fit for an equipment room"],
            rows: [
              ["FM-200 (HFC-227ea)", "Clean agent gas; absorbs heat and interrupts the flame chemically", "Established choice. Discharges in about ten seconds, leaves no residue, safe for occupied spaces at design concentration."],
              ["Novec 1230 (FK-5-1-12)", "Clean agent; stored as a liquid, vaporises on discharge", "Same rapid, residue-free suppression with a far lower global-warming potential — the usual choice in new installations."],
              ["Inert gas (IG-541, IG-55)", "Argon / nitrogen blend that displaces oxygen below the combustion threshold", "No chemical decomposition products, but needs far more cylinder storage space."],
              ["Water mist", "Very fine droplets that cool and displace oxygen with little total water", "Used where a gaseous system is impractical; wets far less than a sprinkler but is still water."],
              ["Pre-action sprinkler", "Pipe held dry; water admitted only after detection, then released by a fused head", "The standard code-required backup. Double-interlock needs both detection and a fused head, so one broken pipe or one false alarm cannot flood the room."],
              ["Wet pipe sprinkler", "Pipes permanently charged with water", "Fastest and cheapest, but a damaged head or pipe discharges over live equipment. Avoided directly above racks."],
              ["Dry pipe sprinkler", "Pipes held under air pressure, water admitted when a head opens", "Suits unheated spaces where wet pipes would freeze; slower than wet pipe and still water onto equipment."],
              ["Detection — VESDA / aspirating", "Continuously samples air for combustion particles", "Detects at the smouldering stage, long before a sprinkler head would reach its fusing temperature."],
            ],
          },
          {
            type: "list",
            title: "Operational Points That Get Examined",
            items: [
              {
                term: "Suppression is not the only control",
                body: "Detection buys the time that makes suppression optional. Aspirating detection can alarm on a failing power supply well before there is enough heat to trigger anything else.",
              },
              {
                term: "EPO — emergency power off",
                body: "A clean agent discharge is normally interlocked with shutting down power and HVAC. Continuing to move air through the room would dilute the agent below its design concentration and let the fire re-establish.",
              },
              {
                term: "Room integrity matters",
                body: "A gaseous agent only works if the enclosure holds it. Cable penetrations, floor voids and door seals must be fire-stopped, or the agent leaks out before the fire is out.",
              },
              {
                term: "Standards to recognise",
                body: "NFPA 75 covers fire protection for information technology equipment spaces; NFPA 2001 covers clean agent systems specifically. The exam does not test the clause numbers, but it does expect you to know a server room is treated differently from an office.",
              },
            ],
          },
          {
            type: "text",
            body: "Taken together these four systems define whether a design survives contact with a building. Objective 2.4 is examined as judgement rather than recall: given a rack that keeps overheating, an outage that took down one of two supposedly redundant feeds, or a room protected only by a wet pipe sprinkler, the question is which physical system was specified wrongly — and that is exactly the reasoning this module is built around.",
          },
        ],
      },

      {
        id: "wireless-networks",
        icon: "smartphone",
        accent: true,
        title: "6. Wireless Networks",
        blocks: [
          {
            type: "text",
            lead: true,
            body: "Wireless is the only medium on the exam where the transmission path is shared, unlicensed and invisible. A switch port gives one client a private collision-free link; an access point gives every client in earshot a share of one half-duplex radio channel. Everything that follows — antenna choice, channel planning, standard selection and authentication design — exists to manage that single constraint. Objective 2.3 covers configuration and security; Objective 1.5 covers the standards and the media themselves.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1785682118010-18bb78e482dc?w=1200&h=600&fit=crop&q=85",
            alt: "White wireless access point mounted on a ceiling cable tray in an office",
            caption: "A ceiling-mounted access point — the infrastructure-mode building block, powered and backhauled over one Ethernet run",
          },

          {
            type: "text",
            body: "Wireless network types. The classification is by coverage area, and it maps almost exactly onto the wired geography from Module 1 — the difference is that the boundary is defined by radiated power rather than by cable length.",
          },
          {
            type: "table",
            title: "Wireless Network Types (OBJ 1.5 & 2.3)",
            caption:
              "Coverage area determines the technology, the licensing model and who operates the infrastructure.",
            columns: ["Type", "Full name", "Typical range", "Technology", "Operated by"],
            rows: [
              ["WPAN", "Wireless Personal Area Network", "Up to ~10 m", "Bluetooth, Zigbee, NFC, IEEE 802.15", "The user — pairing is ad hoc and personal"],
              ["WLAN", "Wireless Local Area Network", "~30–100 m indoors", "IEEE 802.11 (Wi-Fi)", "The organisation — unlicensed spectrum, your own APs"],
              ["WMAN", "Wireless Metropolitan Area Network", "Several km", "IEEE 802.16 (WiMAX), municipal mesh, fixed point-to-multipoint", "A city or a regional provider"],
              ["WWAN", "Wireless Wide Area Network", "Regional to national", "Cellular — LTE, 5G NR, satellite", "A licensed carrier"],
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1632277232577-09bcf876d6fb?w=1200&h=600&fit=crop&q=85",
            alt: "Cellular towers carrying sector antennas against a cloudy sky",
            caption: "WWAN infrastructure — licensed spectrum, carrier-operated, and the reason cellular has no channel-contention problem of your making",
          },
          {
            type: "list",
            title: "Service Set Identifiers and Modes (OBJ 2.3)",
            items: [
              {
                term: "SSID — Service Set Identifier",
                body: "The human-readable network name, up to 32 characters. Hiding it is not a security control: it is still present in probe responses and association frames, and suppressing the beacon merely makes clients broadcast the name themselves as they hunt for it.",
              },
              {
                term: "BSSID — Basic Service Set Identifier",
                body: "The MAC address of the individual radio serving that SSID. One physical AP with a 2.4 GHz and a 5 GHz radio, each carrying two SSIDs, presents four BSSIDs. This is the identifier you match against when troubleshooting which radio a client actually joined.",
              },
              {
                term: "ESSID — Extended Service Set Identifier",
                body: "The same SSID shared across many APs so a client can roam between them without re-authenticating to a different network. The ESS is what makes a building feel like one wireless network rather than a dozen.",
              },
              {
                term: "Infrastructure mode",
                body: "Every frame passes through an access point, even between two clients on the same SSID. The AP is the arbiter of the medium and the bridge to the wired network — the standard enterprise deployment.",
              },
              {
                term: "Ad hoc (IBSS) mode",
                body: "Peers talk directly with no AP and no distribution system. Useful for a temporary file transfer or a device-to-device link; it does not scale, has no central security policy, and every peer must be in range of every other.",
              },
              {
                term: "Mesh and point-to-point",
                body: "A mesh gives each AP a wireless backhaul to its neighbours, trading throughput for the ability to cover ground without running cable. Point-to-point uses two high-gain directional antennas to bridge a single link between buildings.",
              },
            ],
          },
          {
            type: "mermaid",
            title: "Diagram 1 — Infrastructure Mode",
            caption:
              "The enterprise pattern. A controller holds the configuration and RF policy, PoE switches power and backhaul the access points, and every client frame traverses an AP.",
            definition: `flowchart TD
    NET(("Wired network<br/>&amp; Internet"))

    subgraph CTRL["Control plane"]
      WLC["<b>WLAN Controller</b><br/>SSID / RF policy &middot; channel &amp; power<br/>Roaming &middot; central authentication"]
      RAD["<b>RADIUS server</b><br/>802.1X &middot; EAP termination"]
    end

    subgraph DIST["Distribution"]
      SW["<b>PoE Switch</b><br/>Power + backhaul over one cable<br/>802.3af / at / bt"]
    end

    subgraph APS["Access layer &mdash; ESS, one shared ESSID"]
      AP1["<b>AP 1</b><br/>ch 1 &middot; 2.4 GHz<br/>ch 36 &middot; 5 GHz"]
      AP2["<b>AP 2</b><br/>ch 6 &middot; 2.4 GHz<br/>ch 44 &middot; 5 GHz"]
      AP3["<b>AP 3</b><br/>ch 11 &middot; 2.4 GHz<br/>ch 149 &middot; 5 GHz"]
    end

    subgraph CLI["Wireless clients"]
      C1["Laptop"]
      C2["Phone"]
      C3["Handheld scanner"]
    end

    NET --- WLC
    WLC --- RAD
    WLC --> SW
    SW -->|"PoE + data"| AP1
    SW -->|"PoE + data"| AP2
    SW -->|"PoE + data"| AP3
    AP1 -.->|"associate"| C1
    AP2 -.->|"associate"| C2
    AP3 -.->|"associate"| C3
    C1 -.->|"roam &mdash; same ESSID"| AP2

    classDef ext fill:#f1f5f9,stroke:#94a3b8,stroke-width:2px,color:#334155
    classDef ctrl fill:#ede9fe,stroke:#7c3aed,stroke-width:2px,color:#3b0764
    classDef sw fill:#fee2e2,stroke:#dc2626,stroke-width:2px,color:#7f1d1d
    classDef ap fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef cli fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d

    class NET ext
    class WLC,RAD ctrl
    class SW sw
    class AP1,AP2,AP3 ap
    class C1,C2,C3 cli`,
          },
          {
            type: "mermaid",
            title: "Diagram 2 — Ad Hoc Mode (IBSS)",
            caption:
              "No access point and no distribution system. Every peer negotiates directly, so each must be within range of each other and there is no central place to apply policy.",
            definition: `flowchart LR
    subgraph IBSS["Independent Basic Service Set &mdash; no infrastructure"]
      A["<b>Laptop A</b><br/>peer"]
      B["<b>Laptop B</b><br/>peer"]
      C["<b>Phone C</b><br/>peer"]
      D["<b>Camera D</b><br/>peer"]
    end

    OUT["<b>No AP &middot; no controller</b><br/>no wired distribution system<br/><i>policy and roaming are impossible</i>"]

    A <-->|"direct"| B
    B <-->|"direct"| C
    A <-->|"direct"| C
    C <-->|"direct"| D
    IBSS -.- OUT

    classDef peer fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d
    classDef warn fill:#fef3c7,stroke:#d97706,stroke-width:2px,color:#78350f,stroke-dasharray:4 3

    class A,B,C,D peer
    class OUT warn`,
          },

          {
            type: "text",
            body: "Antennas and radiation patterns. An antenna adds no energy — it redistributes it. Gain, quoted in dBi against a theoretical isotropic radiator, is a measure of concentration, not amplification: an antenna that reaches further in one plane has necessarily given up coverage in another. Every 3 dB of gain is a doubling of effective radiated power in the favoured direction, and an equivalent loss elsewhere.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1721995656938-ddc26c0f5071?w=1200&h=600&fit=crop&q=85",
            alt: "Cell tower carrying sector antenna panels against a blue sky",
            caption: "Sector antennas — directional in azimuth, each panel covering a defined arc rather than radiating everywhere",
          },
          {
            type: "list",
            title: "Antenna Types and Their Patterns (OBJ 2.3)",
            items: [
              {
                term: "Omnidirectional (dipole)",
                body: "Radiates evenly through 360° in the horizontal plane. The pattern is a torus — a doughnut around the antenna axis — with a null directly above and below it. This is why a ceiling-mounted omni covers the floor beneath it well and the floor above it poorly, and why raising the gain flattens the doughnut: more reach across the floor, less coverage immediately below.",
              },
              {
                term: "Directional — patch and panel",
                body: "Radiates into a defined lobe, typically 60–120° wide, with a flat back that suppresses radiation behind it. Mounted on a wall it pushes coverage into the room instead of into the car park, which improves both signal and security.",
              },
              {
                term: "Yagi–Uda",
                body: "A driven element with a reflector behind and several directors in front. Each parasitic element re-radiates in phase along the boom, producing a narrow forward lobe with high gain and a very small back lobe. Highly directional and a common choice for a medium-range point-to-point link.",
              },
              {
                term: "Parabolic dish",
                body: "A reflector focuses energy onto a feed at the focal point, producing the narrowest beamwidth and the highest gain of the common types. Aiming becomes critical — a few degrees of misalignment on a long link can cost more than the gain was worth.",
              },
              {
                term: "MIMO — multiple input, multiple output",
                body: "Several transmit and receive chains operating on the same channel. Spatial multiplexing sends independent streams that arrive with different multipath signatures and are separated by the receiver, so throughput scales with the number of streams. Notation is transmit × receive : streams — 4×4:4 means four radios each way carrying four streams.",
              },
              {
                term: "MU-MIMO — multi-user MIMO",
                body: "Serves several clients simultaneously on the same channel by directing separate spatial streams at each. Downlink MU-MIMO arrived with 802.11ac Wave 2; 802.11ax added it in the uplink direction as well.",
              },
              {
                term: "Beamforming",
                body: "The transmitter adjusts the relative phase of each antenna element so the wavefronts add constructively at the client's position and cancel elsewhere. Explicit beamforming uses channel sounding feedback from the client to compute those weights, which is why it works best when both ends support it.",
              },
            ],
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1557174360-3f4f7c724501?w=1200&h=600&fit=crop&q=85",
            alt: "Cell site tower carrying directional antenna arrays and microwave dishes",
            caption: "Directional arrays and a parabolic dish on the same mast — narrow beamwidth traded for reach on a fixed link",
          },

          {
            type: "text",
            body: "Frequencies and channel planning. The three unlicensed bands are not interchangeable. Lower frequency propagates further and penetrates building materials better; higher frequency carries more spectrum and therefore more capacity. A design decision about which band to prefer is really a decision about whether the deployment is range-limited or capacity-limited.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1606420187127-dae7c868fa7a?w=1200&h=600&fit=crop&q=85",
            alt: "Wireless router with external antennas on a dark surface",
            caption: "A dual-band radio — the same chassis serving two very different propagation environments",
          },
          {
            type: "table",
            title: "The Three Unlicensed Bands (OBJ 2.3)",
            caption:
              "Non-overlapping channel counts are region dependent. The 2.4 GHz figure is the one the exam expects: only three of the fourteen channels can coexist.",
            columns: ["Band", "Spectrum", "Non-overlapping 20 MHz channels", "Propagation", "Key constraint"],
            rows: [
              ["2.4 GHz", "2.400 – 2.4835 GHz", "3 — channels 1, 6 and 11", "Best range and wall penetration", "Channels are spaced 5 MHz apart but are 22 MHz wide, so adjacent channels overlap. Shared with Bluetooth, Zigbee, cordless phones and microwave ovens."],
              ["5 GHz", "≈ 5.150 – 5.895 GHz", "Around 24, region dependent", "Moderate range, poorer through walls", "Many channels are DFS: the AP must monitor for radar and vacate under 802.11h, which can drop clients mid-session."],
              ["6 GHz", "5.925 – 7.125 GHz", "Up to 59", "Shortest range, weakest penetration", "Wi-Fi 6E and Wi-Fi 7 clients only. Low-power indoor operation is capped; standard power outdoors requires AFC coordination."],
            ],
          },
          {
            type: "list",
            title: "Planning Decisions That Follow",
            items: [
              {
                term: "Channel width is a trade",
                body: "Doubling the width doubles the theoretical rate and halves the number of non-overlapping channels available. A 40 MHz channel in 2.4 GHz consumes most of the band and is almost always the wrong choice; 80 MHz in a dense 5 GHz deployment often causes more contention than the extra width recovers.",
              },
              {
                term: "Co-channel versus adjacent-channel interference",
                body: "Two APs on the same channel co-operate — they hear each other and take turns, costing throughput. Two APs on partially overlapping channels cannot decode each other and simply raise the noise floor, which is worse. Where reuse is unavoidable, reuse the same channel deliberately rather than sliding one channel across.",
              },
              {
                term: "Band steering",
                body: "The AP delays or withholds probe responses on 2.4 GHz so a dual-band client associates on 5 or 6 GHz instead, keeping the congested band for devices that have no alternative.",
              },
              {
                term: "Regulatory impact — 802.11h",
                body: "DFS and TPC were added so Wi-Fi could share 5 GHz with radar. DFS makes the AP vacate a channel when it detects a radar pattern; TPC caps transmit power to the minimum needed. Near an airport or a weather radar, DFS channels may be effectively unusable.",
              },
              {
                term: "Power is not coverage",
                body: "Raising AP transmit power extends the downlink but not the client's weaker uplink, producing clients that can hear the AP and cannot be heard back. Cell size is set by lowering power and adding APs, not by turning one up.",
              },
            ],
          },

          {
            type: "text",
            body: "802.11 standards. Each generation has raised throughput by some combination of wider channels, denser modulation, more spatial streams, and better handling of many clients at once. The theoretical rates below assume maximum streams, maximum channel width and ideal conditions — real throughput is typically well under half, and is shared across every client on that radio.",
          },
          {
            type: "table",
            title: "802.11 Standards Reference (OBJ 1.5)",
            caption:
              "Maximum theoretical rates under laboratory conditions at full stream count and channel width. Wi-Fi 6E is 802.11ax operating in the 6 GHz band rather than a separate amendment.",
            columns: ["Standard", "Wi-Fi name", "Frequency", "Max channel width", "Max theoretical rate"],
            rows: [
              ["802.11a", "—", "5 GHz", "20 MHz", "54 Mbps"],
              ["802.11b", "—", "2.4 GHz", "22 MHz (DSSS)", "11 Mbps"],
              ["802.11g", "—", "2.4 GHz", "20 MHz", "54 Mbps"],
              ["802.11n", "Wi-Fi 4", "2.4 and 5 GHz", "40 MHz", "600 Mbps — 4 streams, 64-QAM"],
              ["802.11ac", "Wi-Fi 5", "5 GHz", "160 MHz", "6.9 Gbps — 8 streams, 256-QAM"],
              ["802.11ax", "Wi-Fi 6", "2.4 and 5 GHz", "160 MHz", "9.6 Gbps — 1024-QAM, OFDMA"],
              ["802.11ax", "Wi-Fi 6E", "adds 6 GHz", "160 MHz", "9.6 Gbps — same radio, new spectrum"],
              ["802.11be", "Wi-Fi 7", "2.4, 5 and 6 GHz", "320 MHz", "46 Gbps — 4096-QAM, MLO"],
            ],
          },
          {
            type: "list",
            title: "What Each Generation Actually Changed",
            items: [
              {
                term: "Wi-Fi 4 (802.11n) — MIMO and channel bonding",
                body: "Introduced spatial multiplexing and 40 MHz channels, and was the first standard to operate in both bands. Throughput became a function of antenna count rather than modulation alone.",
              },
              {
                term: "Wi-Fi 5 (802.11ac) — wider channels, 5 GHz only",
                body: "Pushed to 80 and 160 MHz and 256-QAM, and added downlink MU-MIMO in Wave 2. It has no 2.4 GHz mode at all, so a dual-band Wi-Fi 5 AP is running 802.11n on its 2.4 GHz radio.",
              },
              {
                term: "Wi-Fi 6 (802.11ax) — efficiency rather than raw speed",
                body: "OFDMA subdivides a channel into resource units so several small clients are served in one transmission instead of queueing; BSS colouring lets a radio ignore a neighbouring cell's frames rather than deferring to them; Target Wake Time lets battery devices sleep on a schedule. The headline rate rose modestly — the gain is in dense environments.",
              },
              {
                term: "Wi-Fi 6E — the same standard, new spectrum",
                body: "Not a new amendment. It is 802.11ax certified to operate in 6 GHz, where there are no legacy 802.11b/g/n devices to slow the cell down and enough contiguous spectrum for genuinely wide channels.",
              },
              {
                term: "Wi-Fi 7 (802.11be) — Multi-Link Operation",
                body: "320 MHz channels and 4096-QAM raise the ceiling, but MLO is the structural change: a client associates over 2.4, 5 and 6 GHz simultaneously and can aggregate them for throughput or duplicate traffic across them for reliability and lower latency.",
              },
            ],
          },

          {
            type: "text",
            body: "Wireless security. On a wired network an attacker needs physical access to a port. On a wireless network the medium is available to anyone within radio range, including outside the building, so authentication and encryption are not hardening measures — they are the access control.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1681383064412-171e5bee5f6e?w=1200&h=600&fit=crop&q=85",
            alt: "Two wireless routers side by side on a desk",
            caption: "Two radios, one legitimate — telling them apart is the entire problem behind rogue AP and evil twin attacks",
          },
          {
            type: "table",
            title: "Encryption and Authentication (OBJ 2.3)",
            caption:
              "Personal modes authenticate the network with a shared secret; Enterprise modes authenticate each user individually through 802.1X and RADIUS.",
            columns: ["Scheme", "Authentication", "Cipher", "Assessment"],
            rows: [
              ["WEP", "Shared key", "RC4 with a 24-bit IV", "Broken. The IV repeats often enough that the key is recoverable in minutes. Present only on legacy equipment."],
              ["WPA2-Personal", "Pre-shared key, 4-way handshake", "AES-CCMP", "Still acceptable, but the handshake can be captured and attacked offline, so the passphrase is the whole defence."],
              ["WPA3-Personal", "SAE — Simultaneous Authentication of Equals", "AES-CCMP / GCMP", "Each session derives a fresh key, so capture gives an attacker nothing to grind offline, and past traffic stays secret if the passphrase later leaks."],
              ["WPA2-Enterprise", "802.1X with EAP to a RADIUS server", "AES-CCMP", "Per-user credentials, individual revocation, and per-session keys. The correct choice for a corporate SSID."],
              ["WPA3-Enterprise", "802.1X with EAP, optional 192-bit mode", "GCMP-256", "Adds a stronger suite and makes Protected Management Frames mandatory."],
              ["OWE — Enhanced Open", "None", "Opportunistic encryption", "Encrypts an open guest network against passive sniffing without a password. It does not authenticate the AP."],
            ],
          },
          {
            type: "list",
            title: "802.1X, EAP and RADIUS",
            items: [
              {
                term: "The three roles",
                body: "The supplicant is the client, the authenticator is the AP or controller, and the authentication server is RADIUS. The authenticator forwards EAP messages without being able to read the credentials — it only learns the accept or reject and the keying material.",
              },
              {
                term: "EAP-TLS",
                body: "Certificates on both sides. There is no password to phish, replay or spray, which makes it the strongest option; the cost is running a certificate authority and getting a client certificate onto every device.",
              },
              {
                term: "PEAP and EAP-TTLS",
                body: "The server presents a certificate, a TLS tunnel is built, and the user's credentials — typically MSCHAPv2 — travel inside it. Far easier to deploy, but the security collapses if clients are configured not to validate the server certificate, because an evil twin can then present its own.",
              },
              {
                term: "RADIUS ports",
                body: "UDP 1812 for authentication and UDP 1813 for accounting. Older implementations used 1645 and 1646, which still appear in configuration files and occasionally in exam questions.",
              },
            ],
          },
          {
            type: "list",
            title: "When Security Fails (OBJ 2.3)",
            items: [
              {
                term: "Rogue access point",
                body: "An unauthorised AP attached to your wired network — often a staff member plugging in a consumer router for convenience. It bypasses every wireless control you have because the threat is behind the firewall. Wireless intrusion detection and switch port controls are what find it.",
              },
              {
                term: "Evil twin",
                body: "An attacker-run AP broadcasting your SSID with a stronger signal, so clients associate with it and their traffic is relayed through the attacker. Mutual authentication is the defence: with EAP-TLS or a validated server certificate the client refuses the impostor.",
              },
              {
                term: "Deauthentication attack",
                body: "Management frames were unauthenticated in the original standard, so a forged deauth frame could disconnect any client at will — used to force a re-association and capture the handshake. Protected Management Frames (802.11w) sign those frames; PMF is optional under WPA2 and mandatory under WPA3.",
              },
              {
                term: "WPS brute force",
                body: "The eight-digit WPS PIN is validated in two halves, reducing the search space to about eleven thousand attempts. There is no safe configuration — disable WPS.",
              },
              {
                term: "Downgrade in transition mode",
                body: "An SSID advertising both WPA3 and WPA2 for compatibility can be pushed back to WPA2 by an attacker. Once every client supports WPA3, run WPA3-only.",
              },
              {
                term: "Jamming and interference",
                body: "Availability has no cryptographic defence. A jammer, or simply a badly sited microwave, denies the channel to everyone. Spectrum analysis is the diagnostic — a protocol analyser sees no frames and reports nothing useful.",
              },
            ],
          },
          {
            type: "list",
            title: "Guest Networks and Captive Portals",
            items: [
              {
                term: "What a captive portal does",
                body: "The client associates and receives an address, but the network holds it in an unauthorised state. HTTP requests are intercepted and redirected to a portal page; once the visitor accepts the terms or authenticates, the controller moves that MAC address into the authorised state and normal forwarding begins.",
              },
              {
                term: "The walled garden",
                body: "The small set of destinations reachable before authentication — DNS, the portal itself, and any identity provider it calls out to. Everything else is blocked until the session is authorised.",
              },
              {
                term: "Segmentation is the real control",
                body: "The guest SSID belongs on its own VLAN with a policy permitting internet only. Client isolation should also be on, so two guests on the same SSID cannot reach each other.",
              },
              {
                term: "What a portal does not give you",
                body: "Acceptance of terms is not encryption. Unless the guest SSID uses OWE or WPA3, traffic on it is in the clear over the air, and the portal login itself is only as private as the HTTPS session carrying it.",
              },
            ],
          },
          {
            type: "text",
            body: "The through-line of this module is that wireless problems are rarely solved by the setting they appear to be about. Poor throughput in a crowded office is usually a channel-width and cell-size decision rather than a hardware limit; a client that connects but cannot pass traffic is usually an authentication or VLAN problem rather than a radio one; and a network that is fully patched and correctly encrypted can still be defeated by an access point somebody plugged in under a desk.",
          },
        ],
      },

      {
        id: "ethernet-switching",
        icon: "server",
        accent: true,
        title: "7. Ethernet Switching",
        blocks: [
          {
            type: "text",
            lead: true,
            body: "Switching is where most real networks are actually built, and where most real faults actually live. A router decides which network a packet belongs to; a switch decides which physical port a frame leaves by, which broadcast domain it belongs to, whether the path it wants to take would create a loop, whether the device sending it is even allowed on the network, and how large it is permitted to be. Those five decisions are this module: Ethernet and MAC addressing, VLANs and 802.1Q, spanning tree, network access control, and MTU.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1680691257251-5fead813b73e?w=1200&h=600&fit=crop&q=85",
            alt: "Close-up of an enterprise network switch chassis with populated ports",
            caption: "The switch is the Layer 2 forwarding engine — every decision in this module happens inside one of these",
          },

          {
            type: "text",
            body: "Ethernet fundamentals. Ethernet is defined by IEEE 802.3 and has two halves: an addressing and framing scheme that has barely changed since 1980, and a media access method that has become almost irrelevant. Understanding which is which is the difference between answering an exam question correctly and repeating something that stopped being true twenty-five years ago.",
          },
          {
            type: "list",
            title: "MAC Addressing (OBJ 1.2)",
            items: [
              {
                term: "48 bits, written as 12 hex digits",
                body: "Formatted as 00:1A:2B:3C:4D:5E or 001A.2B3C.4D5E depending on vendor convention. It is burned into the NIC and is the only address a switch ever looks at — a switch has no idea what an IP address is.",
              },
              {
                term: "OUI + device identifier",
                body: "The first 24 bits are the Organisationally Unique Identifier assigned to the manufacturer by the IEEE; the last 24 bits are assigned by that manufacturer. Looking up an OUI tells you who made the card, which is genuinely useful when an unknown device appears in a MAC table.",
              },
              {
                term: "The I/G bit — unicast or group",
                body: "The least significant bit of the first octet. Cleared means unicast, set means multicast. This is why every multicast MAC begins with an odd first octet, and why 01:00:5E:… is the IPv4 multicast range.",
              },
              {
                term: "The U/L bit — universal or local",
                body: "The second-least-significant bit of the first octet. Cleared means the burned-in universal address; set means locally administered. Randomised MAC addresses on phones set this bit, which is why they never collide with a real OUI.",
              },
              {
                term: "Broadcast — FF:FF:FF:FF:FF:FF",
                body: "All 48 bits set. Every device in the broadcast domain must receive and process it. This single fact is the reason VLANs exist and the reason a switching loop is catastrophic rather than merely inefficient.",
              },
            ],
          },
          {
            type: "table",
            title: "Ethernet II Frame Anatomy",
            caption:
              "Field sizes in bytes. Preamble and SFD are added by the hardware and are not counted in the frame size, which is why a standard frame is 64–1518 bytes and a VLAN-tagged one is 1522.",
            columns: ["Field", "Size", "Purpose"],
            rows: [
              ["Preamble", "7 bytes", "Alternating 1s and 0s so the receiver can lock onto the clock."],
              ["SFD — Start Frame Delimiter", "1 byte", "10101011 — the pattern break that says the frame itself starts on the next bit."],
              ["Destination MAC", "6 bytes", "Who the frame is for. Read first so the switch can begin forwarding before the rest arrives."],
              ["Source MAC", "6 bytes", "Who sent it. This is the field the switch learns from to build its MAC address table."],
              ["802.1Q tag", "4 bytes — optional", "Present only on a trunk. Carries the VLAN ID and the priority bits."],
              ["EtherType / Length", "2 bytes", "0x0800 for IPv4, 0x0806 for ARP, 0x86DD for IPv6, 0x8100 for an 802.1Q tag."],
              ["Payload", "46 – 1500 bytes", "The encapsulated packet. Below 46 bytes it is padded, because a runt cannot be distinguished from a collision fragment."],
              ["FCS — Frame Check Sequence", "4 bytes", "CRC-32 over the frame. A frame that fails is silently discarded — Ethernet detects errors, it never corrects them."],
            ],
          },
          {
            type: "list",
            title: "CSMA/CD — and Why It No Longer Runs",
            items: [
              {
                term: "Carrier Sense",
                body: "Before transmitting, a station listens to the wire. If it hears a carrier, another station is already sending and it waits.",
              },
              {
                term: "Multiple Access",
                body: "Every station shares one collision domain. On a hub or a coaxial segment there is exactly one conversation possible at a time, no matter how many devices are attached.",
              },
              {
                term: "Collision Detection",
                body: "If two stations transmit at once the voltages superimpose. Each detects the anomaly, sends a 32-bit jam signal so every station discards the corrupted frame, and then backs off.",
              },
              {
                term: "Binary exponential backoff",
                body: "After the nth collision each station waits a random number of slot times drawn from 0 to 2ⁿ−1, capped at 1023, and retries. After 16 consecutive collisions the frame is abandoned. This is why a saturated shared segment degrades non-linearly.",
              },
              {
                term: "Why it is effectively historical",
                body: "A switch port is its own collision domain, and a full-duplex link has separate transmit and receive paths, so a collision is physically impossible. CSMA/CD is disabled on every full-duplex link. If you see late collisions on a modern switch port, the cause is almost always a duplex mismatch — one end hard-coded full, the other auto-negotiating to half.",
              },
            ],
          },
          {
            type: "list",
            title: "How a Switch Actually Forwards (OBJ 2.2)",
            items: [
              {
                term: "Learn",
                body: "On receiving a frame, the switch records the source MAC against the ingress port in its MAC address table, with a timestamp. Every frame teaches it something.",
              },
              {
                term: "Flood",
                body: "If the destination MAC is unknown, is a broadcast, or is an unregistered multicast, the frame goes out of every port in that VLAN except the one it arrived on. Unknown-unicast flooding is normal; sustained flooding is a symptom.",
              },
              {
                term: "Forward and filter",
                body: "If the destination is in the table, the frame goes out that one port only. If the destination is on the same port it arrived on, the switch drops it — there is no reason to send a frame back where it came from.",
              },
              {
                term: "Age",
                body: "Entries expire after an idle period, 300 seconds by default on most platforms, so a device that moves does not stay wrongly mapped forever.",
              },
              {
                term: "Store-and-forward vs cut-through",
                body: "Store-and-forward buffers the whole frame and validates the FCS before forwarding — higher latency, no corrupt frames propagated. Cut-through forwards as soon as it has read the destination MAC — lower latency, but it will happily forward a frame that turns out to be corrupt. Fragment-free is the compromise: read the first 64 bytes, past the collision window, then forward.",
              },
              {
                term: "Collision domain versus broadcast domain",
                body: "A hub is one collision domain and one broadcast domain. A switch gives each port its own collision domain but remains one broadcast domain. A router — or a VLAN — is what actually creates a second broadcast domain. This distinction is examined constantly.",
              },
            ],
          },

          {
            type: "text",
            body: "VLANs. A switch out of the box is a single flat broadcast domain: every broadcast reaches every port, and any host can attempt to reach any other at Layer 2. A VLAN partitions that switch into several independent logical switches. Two ports in different VLANs cannot exchange a frame no matter how they are cabled — traffic between them must be routed, which means it can be filtered.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1702478475268-aa8ef54c084e?w=1200&h=600&fit=crop&q=85",
            alt: "Equipment rack densely populated with patch cables running to switch ports",
            caption: "Physically one rack, logically several networks — VLAN membership is configuration, not cabling",
          },
          {
            type: "list",
            title: "Access Ports and Trunk Ports (OBJ 2.2)",
            items: [
              {
                term: "Access port — one VLAN, untagged",
                body: "Carries traffic for exactly one VLAN and sends frames untagged. The end device has no idea a VLAN exists; the switch adds membership on ingress and strips it on egress. Every port facing a PC, printer or camera is an access port.",
              },
              {
                term: "Trunk port — many VLANs, tagged",
                body: "Carries traffic for multiple VLANs over one physical link by inserting an 802.1Q tag into each frame. Used switch-to-switch, switch-to-router and switch-to-hypervisor. The tag is what lets one cable do the work of many.",
              },
              {
                term: "Native VLAN — the untagged exception",
                body: "One VLAN on a trunk is carried untagged, by default VLAN 1. It exists for backwards compatibility with devices that cannot read tags. Both ends must agree on which VLAN it is, and a mismatch merges two broadcast domains silently.",
              },
              {
                term: "Voice VLAN",
                body: "An access port that additionally carries one tagged VLAN for an IP phone, so a phone and the PC daisy-chained behind it land in different VLANs on one cable. The phone reads the tag; the PC receives untagged frames and remains oblivious.",
              },
              {
                term: "SVI — Switch Virtual Interface",
                body: "A virtual Layer 3 interface on the switch representing an entire VLAN, given an IP address so it can act as the default gateway for that VLAN. This is how a Layer 3 switch performs inter-VLAN routing without an external router.",
              },
              {
                term: "VLAN database",
                body: "The switch's list of which VLAN IDs exist and what they are named. A VLAN must exist in the database before a port can be assigned to it — a very common cause of a port that is configured correctly and still does not pass traffic.",
              },
            ],
          },
          {
            type: "table",
            title: "The 802.1Q Tag — 4 Bytes, Field by Field",
            caption:
              "Inserted between the source MAC and the EtherType. Because the VID field is 12 bits, the theoretical maximum is 4096 IDs, of which 0 and 4095 are reserved, leaving 4094 usable.",
            columns: ["Field", "Size", "Value / range", "Purpose"],
            rows: [
              ["TPID — Tag Protocol Identifier", "16 bits", "0x8100", "Sits where the EtherType normally would. A receiver seeing 0x8100 knows the next two bytes are tag control information, not a protocol type."],
              ["PCP — Priority Code Point", "3 bits", "0 – 7", "Class of Service for QoS. Voice is conventionally 5, video 4, best effort 0."],
              ["DEI — Drop Eligible Indicator", "1 bit", "0 or 1", "Marks the frame as eligible for discard first under congestion. Formerly the CFI bit."],
              ["VID — VLAN Identifier", "12 bits", "0 – 4095", "The VLAN number itself. 0 means priority-tagged with no VLAN, 1 is the default VLAN, 4095 is reserved — so 4094 are usable."],
            ],
          },
          {
            type: "mermaid",
            title: "Diagram 1 — VLAN Trunking Between Two Switches",
            caption:
              "One physical link carries both VLANs. Frames leaving an access port are untagged; the trunk adds an 802.1Q tag on the way out and the far switch strips it before delivering to its own access ports.",
            definition: `flowchart LR
    subgraph SWA["Switch A"]
      direction TB
      A10["<b>Fa0/1 &middot; ACCESS</b><br/>VLAN 10 &middot; untagged"]
      A20["<b>Fa0/2 &middot; ACCESS</b><br/>VLAN 20 &middot; untagged"]
      ATR["<b>Gi0/1 &middot; TRUNK</b><br/>802.1Q &middot; allowed 10,20<br/>native VLAN 99"]
    end

    subgraph SWB["Switch B"]
      direction TB
      BTR["<b>Gi0/1 &middot; TRUNK</b><br/>802.1Q &middot; allowed 10,20<br/>native VLAN 99"]
      B10["<b>Fa0/1 &middot; ACCESS</b><br/>VLAN 10 &middot; untagged"]
      B20["<b>Fa0/2 &middot; ACCESS</b><br/>VLAN 20 &middot; untagged"]
    end

    PC1["<b>PC-A1</b><br/>Staff &middot; VLAN 10"]
    PC2["<b>PC-A2</b><br/>Guest &middot; VLAN 20"]
    PC3["<b>PC-B1</b><br/>Staff &middot; VLAN 10"]
    PC4["<b>PC-B2</b><br/>Guest &middot; VLAN 20"]

    PC1 ---|"untagged"| A10
    PC2 ---|"untagged"| A20
    A10 --> ATR
    A20 --> ATR
    ATR ==>|"<b>TRUNK LINK</b><br/>tagged VID 10 and VID 20<br/>on one physical cable"| BTR
    BTR --> B10
    BTR --> B20
    B10 ---|"untagged"| PC3
    B20 ---|"untagged"| PC4

    classDef v10 fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef v20 fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d
    classDef trunk fill:#fef3c7,stroke:#d97706,stroke-width:3px,color:#78350f
    classDef host fill:#f1f5f9,stroke:#94a3b8,stroke-width:2px,color:#334155

    class A10,B10 v10
    class A20,B20 v20
    class ATR,BTR trunk
    class PC1,PC2,PC3,PC4 host`,
          },
          {
            type: "code",
            title: "VLAN configuration — the four things that must all be true",
            lines: [
              "! 1. The VLAN must exist in the database",
              "vlan 10",
              "  name STAFF",
              "vlan 20",
              "  name GUEST",
              "vlan 99",
              "  name NATIVE-UNUSED",
              "!",
              "! 2. Access ports carry one VLAN, untagged",
              "interface FastEthernet0/1",
              "  switchport mode access",
              "  switchport access vlan 10",
              "!",
              "! 3. The trunk must tag and must allow those VLANs",
              "interface GigabitEthernet0/1",
              "  switchport mode trunk",
              "  switchport trunk encapsulation dot1q",
              "  switchport trunk allowed vlan 10,20",
              "  switchport trunk native vlan 99",
              "!",
              "! 4. An SVI gives the VLAN a gateway for inter-VLAN routing",
              "interface Vlan10",
              "  ip address 192.168.10.1 255.255.255.0",
              "  no shutdown",
            ],
          },
          {
            type: "list",
            title: "VLAN Faults You Will Actually Meet",
            items: [
              {
                term: "VLAN not in the database",
                body: "The port shows the correct access VLAN in the running configuration and stays down or passes nothing, because the VLAN was never created. Check the VLAN list before checking anything else.",
              },
              {
                term: "VLAN missing from the allowed list",
                body: "Trunks prune. A VLAN that exists on both switches and on both access ports will still fail if it is not in `switchport trunk allowed vlan` on every trunk along the path.",
              },
              {
                term: "Native VLAN mismatch",
                body: "If one end calls the native VLAN 1 and the other calls it 99, untagged frames arrive in the wrong broadcast domain and two networks silently merge. CDP or LLDP will usually log the mismatch.",
              },
              {
                term: "VLAN hopping by double tagging",
                body: "An attacker on the native VLAN sends a frame with two tags. The first switch strips the outer tag — because it matches the native VLAN — and forwards the frame with the inner tag still attached, landing it in a VLAN the attacker was never allowed into. The defence is to make the native VLAN an unused VLAN carrying no hosts, and to never leave a port in dynamic trunking mode.",
              },
            ],
          },

          {
            type: "text",
            body: "Spanning Tree Protocol. Redundant links between switches are essential for availability and fatal without protection. An IP packet has a TTL that decrements at every router, so a routing loop eventually kills the packet. An Ethernet frame has no TTL field at all. A broadcast frame that enters a loop is copied and forwarded forever, at line rate, in both directions.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1762163516269-3c143e04175c?w=1200&h=600&fit=crop&q=85",
            alt: "Rack-mounted switch with rows of green link status indicators",
            caption: "A link light tells you the port is up — spanning tree decides whether it is allowed to forward",
          },
          {
            type: "list",
            title: "What a Loop Actually Does (OBJ 2.2)",
            items: [
              {
                term: "Broadcast storm",
                body: "One broadcast is flooded out every port, arrives back at the originating switch on the redundant link, is flooded again, and multiplies. Within seconds the links are saturated and the switch CPUs are pinned. Nothing on the segment works — including your management session.",
              },
              {
                term: "MAC address table instability",
                body: "The same source MAC keeps arriving on different ports, so the switch rewrites the entry thousands of times per second. Even unicast forwarding becomes unreliable because the table is never correct for long.",
              },
              {
                term: "Multiple frame copies",
                body: "A single unicast frame reaches the destination more than once by different paths, which breaks protocols that assume Ethernet delivers at most one copy.",
              },
              {
                term: "The fix is deliberate blocking",
                body: "STP does not remove the redundant cable. It computes a loop-free tree and puts the surplus ports into a state where they do not forward, keeping them ready to take over if the active path fails.",
              },
            ],
          },
          {
            type: "list",
            title: "How STP Converges — the Three-Step Election",
            items: [
              {
                term: "Step 1 — elect one Root Bridge",
                body: "Every switch starts by claiming to be root and advertising its Bridge ID in BPDUs. The Bridge ID is a 4-bit priority multiplier plus a 12-bit extended system ID (the VLAN number) plus the switch's base MAC address — priority defaults to 32768. Lowest Bridge ID wins, and because priority is compared first, whoever has the lowest priority becomes root; if priorities tie, the lowest MAC address decides. Leaving priorities at default means the oldest switch in the building — the one with the lowest MAC — becomes the root of your network by accident. Set it deliberately.",
              },
              {
                term: "Step 2 — every non-root switch elects one Root Port",
                body: "The single port with the lowest cumulative path cost back to the root. Cost is per-link and inversely related to bandwidth — 10 Gbps is 2, 1 Gbps is 4, 100 Mbps is 19, 10 Mbps is 100. Ties are broken by lowest sender Bridge ID, then lowest sender port ID.",
              },
              {
                term: "Step 3 — every segment elects one Designated Port",
                body: "On each link, the port with the lowest cost to the root is designated and forwards. Every port on the root bridge is designated by definition. Any port that is neither a root port nor a designated port is blocked — that is where the loop is broken.",
              },
            ],
          },
          {
            type: "mermaid",
            title: "Diagram 2 — STP Breaking a Triangle Loop",
            caption:
              "Three switches cabled in a triangle would loop indefinitely. Switch 1 is elected root by its lower priority, so the link between Switch 2 and Switch 3 is the one that loses — one of its ports is put into a discarding state and the loop is broken without removing the cable.",
            definition: `flowchart TD
    SW1["<b>Switch 1 &mdash; ROOT BRIDGE</b><br/>priority 4096 &middot; lowest Bridge ID<br/><i>all ports designated</i>"]
    SW2["<b>Switch 2</b><br/>priority 32768<br/><i>Gi0/1 = Root Port</i>"]
    SW3["<b>Switch 3</b><br/>priority 32768<br/><i>Gi0/1 = Root Port</i>"]

    NOTE["<b>Loop broken here</b><br/>Gi0/2 on Switch 3 is the<br/>ALTERNATE port &rarr; DISCARDING<br/><i>cable stays connected, standing by</i>"]

    SW1 ===|"<b>FORWARDING</b><br/>cost 4"| SW2
    SW1 ===|"<b>FORWARDING</b><br/>cost 4"| SW3
    SW2 -.-|"<b>BLOCKED / DISCARDING</b><br/>physical link up, no frames forwarded"| SW3
    SW3 -.- NOTE

    classDef root fill:#dcfce7,stroke:#16a34a,stroke-width:3px,color:#14532d
    classDef sw fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef blocked fill:#fee2e2,stroke:#dc2626,stroke-width:2px,color:#7f1d1d,stroke-dasharray:5 4

    class SW1 root
    class SW2,SW3 sw
    class NOTE blocked

    linkStyle 0 stroke:#16a34a,stroke-width:3px
    linkStyle 1 stroke:#16a34a,stroke-width:3px
    linkStyle 2 stroke:#dc2626,stroke-width:3px`,
          },
          {
            type: "table",
            title: "Port States — 802.1D versus 802.1w",
            caption:
              "Classic STP walks every port through timed states, which is why convergence takes 30–50 seconds. RSTP collapses the non-forwarding states into one and negotiates transitions with its neighbour instead of waiting out a timer.",
            columns: ["802.1D STP state", "Duration", "Learns MACs?", "Forwards?", "802.1w RSTP equivalent"],
            rows: [
              ["Disabled", "—", "No", "No", "Discarding — port is administratively down"],
              ["Blocking", "20 s max age", "No", "No", "Discarding — receives BPDUs only"],
              ["Listening", "15 s forward delay", "No", "No", "Discarding — participating in the election"],
              ["Learning", "15 s forward delay", "Yes", "No", "Learning — building the MAC table before forwarding"],
              ["Forwarding", "steady state", "Yes", "Yes", "Forwarding"],
            ],
          },
          {
            type: "list",
            title: "RSTP, Variants and Hardening",
            items: [
              {
                term: "RSTP — 802.1w",
                body: "Three states — discarding, learning, forwarding — and two new roles for blocked ports. An alternate port is a backup path to the root learned from another switch; a backup port is a redundant path to the same segment learned from the same switch. Because the alternate is pre-computed, failover is a role change rather than a re-election, and convergence drops from 30–50 seconds to roughly one or two.",
              },
              {
                term: "Proposal / agreement handshake",
                body: "RSTP neighbours negotiate directly to bring a link into forwarding immediately rather than waiting out forward delay timers. This is the mechanism behind the speed, and it is why RSTP wants point-to-point full-duplex links.",
              },
              {
                term: "PVST+ and Rapid PVST+",
                body: "Cisco's per-VLAN spanning tree: one instance per VLAN, so different VLANs can use different root bridges and therefore different physical paths. Excellent load distribution, expensive in CPU when there are hundreds of VLANs.",
              },
              {
                term: "MSTP — 802.1s",
                body: "Maps many VLANs onto a small number of spanning tree instances. You get the path diversity of PVST+ without running one instance per VLAN.",
              },
              {
                term: "PortFast / edge port",
                body: "Skips listening and learning on a port connected to an end device, so a PC gets link immediately instead of waiting 30 seconds for DHCP. Only ever apply it to a port facing a host — a PortFast port that receives a switch is an instant loop.",
              },
              {
                term: "BPDU Guard",
                body: "Shuts a PortFast port down the moment it receives a BPDU. This is the control that stops somebody plugging an unmanaged switch under a desk and taking over your spanning tree. Pair it with PortFast on every access port.",
              },
              {
                term: "Root Guard and Loop Guard",
                body: "Root Guard prevents a port from ever becoming a root port, so a downstream switch cannot claim to be root. Loop Guard blocks a port that stops receiving BPDUs unexpectedly, covering the unidirectional-link case where a port would otherwise wrongly transition to forwarding.",
              },
            ],
          },

          {
            type: "text",
            body: "Network access control. Spanning tree decides which ports may forward; NAC decides which devices may connect at all. Physical access to a network port has historically been the same thing as network access — NAC is what breaks that equivalence, and it is examined under Objective 4.3 as a security control rather than a switching feature.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1546124404-9e7e3cac2ec1?w=1200&h=600&fit=crop&q=85",
            alt: "Ethernet patch cable connected into a switch port",
            caption: "The port is the control point — NAC decides what happens between link-up and network access",
          },
          {
            type: "list",
            title: "802.1X Port-Based Authentication (OBJ 4.3)",
            items: [
              {
                term: "Three roles",
                body: "The supplicant is the software on the client; the authenticator is the switch port; the authentication server is RADIUS. The switch relays EAP messages without being able to read the credentials — it learns only accept or reject.",
              },
              {
                term: "EAPOL — EAP over LAN",
                body: "Before authentication succeeds the port forwards nothing except EAPOL frames. The client has link, and has no network. Everything else is dropped until RADIUS returns an Access-Accept.",
              },
              {
                term: "Dynamic VLAN assignment",
                body: "RADIUS can return VLAN attributes with the accept, so the switch places the port in a VLAN chosen by identity rather than by cabling. The same wall socket puts a contractor in one VLAN and a finance laptop in another.",
              },
              {
                term: "Guest and restricted VLANs",
                body: "A device with no supplicant can be dropped into a guest VLAN with internet only; a device that authenticates and fails posture can be put in a restricted VLAN that reaches only the remediation server.",
              },
              {
                term: "MAB — MAC Authentication Bypass",
                body: "Printers, cameras and badge readers have no 802.1X supplicant. MAB lets the switch submit the device's MAC address to RADIUS as a username. It is a fallback, not a security control — a MAC address is trivially spoofed.",
              },
              {
                term: "Posture assessment",
                body: "Beyond identity, NAC can check the device's state — patch level, antivirus, disk encryption — before granting full access. Agent-based assessment is deeper; agentless is easier on unmanaged devices.",
              },
            ],
          },
          {
            type: "table",
            title: "Port Security — Violation Modes (OBJ 4.3)",
            caption:
              "Port security limits which and how many MAC addresses a port will accept. Choosing the violation mode is choosing how loudly a breach fails.",
            columns: ["Mode", "Action on violation", "Traffic from offending MAC", "Logged / counter", "Port state"],
            rows: [
              ["Protect", "Silently discards offending frames", "Dropped", "No notification", "Stays up"],
              ["Restrict", "Discards and reports", "Dropped", "Syslog, SNMP trap, counter increments", "Stays up"],
              ["Shutdown (default)", "Disables the port entirely", "Dropped — nothing passes at all", "Syslog and trap", "err-disabled until manually recovered or auto-recovery expires"],
            ],
          },
          {
            type: "list",
            title: "Port Security in Practice",
            items: [
              {
                term: "Maximum MAC addresses",
                body: "Set the ceiling to what the port legitimately needs — one for a desktop, two where an IP phone daisy-chains a PC. Exceeding it triggers the violation action, which is how an unauthorised hub or switch is detected.",
              },
              {
                term: "Sticky MAC learning",
                body: "The switch learns the connected MAC dynamically and writes it into the running configuration as if it had been typed. You get the convenience of learning with the permanence of a static entry — but remember to save, or the bindings vanish on reload.",
              },
              {
                term: "err-disabled recovery",
                body: "A port shut down by a violation stays down until an administrator bounces it, or until error-disable recovery is configured with a timeout. Silently leaving recovery off turns every accidental violation into a support ticket.",
              },
              {
                term: "Port security is not 802.1X",
                body: "Port security authorises a MAC address; 802.1X authorises an identity. A spoofed MAC defeats the first entirely and the second not at all. Where both are available, 802.1X is the control and port security is defence in depth.",
              },
              {
                term: "Disable unused ports",
                body: "The cheapest NAC of all. A port that is administratively shut down and assigned to an unused VLAN cannot be used by anyone who walks into the building.",
              },
            ],
          },

          {
            type: "text",
            body: "Maximum Transmission Unit. MTU is the largest payload a link will carry in one frame. It is trivial to state and a persistent source of faults that present as anything but MTU — a session that establishes and then hangs, a website that loads its HTML and stalls on an image, a VPN that passes ping and fails file transfers.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1682559736721-c2e77ff4c650?w=1200&h=600&fit=crop&q=85",
            alt: "Dense bundle of network cables connected to server equipment",
            caption: "Every hop in the path has its own MTU — the smallest one governs the whole conversation",
          },
          {
            type: "table",
            title: "MTU and Frame Sizes (OBJ 2.2)",
            caption:
              "MTU counts the payload only. Frame size adds the 18 bytes of Ethernet header and FCS, and 4 more if the frame is VLAN-tagged.",
            columns: ["Item", "Size", "Notes"],
            rows: [
              ["Standard Ethernet MTU", "1500 bytes", "The default nearly everywhere. Assume it unless you know otherwise."],
              ["Minimum frame", "64 bytes", "Anything shorter is a runt and is discarded — hence the 46-byte payload padding."],
              ["Standard maximum frame", "1518 bytes", "1500 payload + 14 header + 4 FCS."],
              ["VLAN-tagged maximum frame", "1522 bytes", "The 802.1Q tag adds 4 bytes. A device that only accepts 1518 will drop tagged full-size frames as baby giants."],
              ["Jumbo frame MTU", "9000 bytes", "The de-facto standard. Some platforms accept up to 9216."],
              ["PPPoE MTU", "1492 bytes", "8 bytes of PPPoE overhead — the classic cause of MTU problems on consumer DSL."],
              ["GRE tunnel overhead", "24 bytes", "Typically leaves 1476."],
              ["IPsec / VXLAN overhead", "~50–60 bytes", "Any encapsulation eats into the payload the inner traffic can use."],
            ],
          },
          {
            type: "list",
            title: "Jumbo Frames, Fragmentation and Black Holes",
            items: [
              {
                term: "Why jumbo frames help",
                body: "Each frame carries fixed per-frame overhead and costs an interrupt. Moving 9000 bytes in one frame instead of six cuts that overhead by roughly six times, which matters for iSCSI, NFS, backup traffic and vMotion. It does nothing useful for web browsing.",
              },
              {
                term: "Jumbo frames are all-or-nothing",
                body: "Every device in the path — both NICs, every switch, and any router in between — must be configured for the same larger MTU. One switch left at 1500 does not fragment the frame; it discards it. Enable jumbo frames on an isolated storage VLAN, not across a campus.",
              },
              {
                term: "Fragmentation and the DF bit",
                body: "An IPv4 router that receives a packet larger than the outgoing MTU either fragments it or, if the Don't Fragment bit is set, drops it and returns ICMP Type 3 Code 4 — destination unreachable, fragmentation needed. IPv6 removed router fragmentation entirely: only the source may fragment.",
              },
              {
                term: "Path MTU Discovery",
                body: "The sender transmits with DF set and relies on those ICMP messages to learn the smallest MTU along the path, then sizes its packets to fit.",
              },
              {
                term: "The PMTUD black hole",
                body: "If a firewall blocks ICMP Type 3 Code 4 — a very common over-tightening — the sender never learns to reduce its packet size. Small packets pass, so the connection establishes and ping works; the first full-size packet is dropped silently and the session hangs. A TCP handshake that succeeds followed by a transfer that stalls is the signature of this fault.",
              },
              {
                term: "MSS clamping",
                body: "The practical workaround. The router rewrites the Maximum Segment Size in the TCP handshake so both ends agree from the outset to send segments that fit the tunnel, without depending on ICMP getting through.",
              },
            ],
          },
          {
            type: "text",
            body: "The pattern worth carrying out of this module is that Layer 2 faults rarely announce themselves as Layer 2 faults. A VLAN missing from a trunk's allowed list looks like a dead application. A native VLAN mismatch looks like an intermittent security problem. A blocked spanning tree port that should be forwarding looks like a slow network. A blocked ICMP message looks like a broken server. In each case the switch is doing precisely what it was configured to do — and the diagnosis is a matter of knowing which of these five mechanisms is making the decision.",
          },
        ],
      },

      {
        id: "ip-addressing",
        icon: "route",
        accent: true,
        title: "8. IP Addressing",
        blocks: [
          {
            type: "text",
            lead: true,
            body: "Everything up to this point moved frames between ports. IP addressing is what lets a packet leave the building. This module is the most arithmetic-heavy on the exam, and the arithmetic is not optional: subnetting questions are worked by hand under time pressure, without a calculator. The method below is built so that once you can convert an octet to binary and remember the powers of two, every subnetting question reduces to the same four steps.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop&q=85",
            alt: "Cascading columns of binary digits on a dark screen",
            caption: "An IPv4 address is 32 bits. Every subnetting decision is a decision about where to cut those bits",
          },

          {
            type: "text",
            body: "IPv4 addressing. An IPv4 address is 32 bits, written as four 8-bit octets in dotted decimal, so each octet runs 0–255. The address has two parts — a network portion and a host portion — and the subnet mask is what declares where the boundary falls. Two hosts can communicate directly only if they compute the same network address from their own address and mask; if they do not, the packet goes to the default gateway instead.",
          },
          {
            type: "table",
            title: "Table 1 — Private IPv4 Ranges (RFC 1918) and Reserved Blocks",
            caption:
              "The three RFC 1918 ranges are not routable on the internet and must be translated by NAT. APIPA and loopback are reserved but are not RFC 1918 — a distinction the exam does test.",
            columns: ["Class / block", "Range", "CIDR", "Default mask", "Addresses", "Purpose"],
            rows: [
              ["Class A private", "10.0.0.0 – 10.255.255.255", "10.0.0.0/8", "255.0.0.0", "16,777,216", "Large enterprises; one flat block big enough to subnet freely."],
              ["Class B private", "172.16.0.0 – 172.31.255.255", "172.16.0.0/12", "255.240.0.0", "1,048,576", "Medium networks. Note the range stops at 172.31, not 172.255."],
              ["Class C private", "192.168.0.0 – 192.168.255.255", "192.168.0.0/16", "255.255.0.0", "65,536", "Home and small office. 256 usable /24 networks."],
              ["APIPA / link-local", "169.254.0.0 – 169.254.255.255", "169.254.0.0/16", "255.255.0.0", "65,536", "Self-assigned when DHCP fails. Not RFC 1918, and never routed."],
              ["Loopback", "127.0.0.0 – 127.255.255.255", "127.0.0.0/8", "255.0.0.0", "16,777,216", "The host itself. 127.0.0.1 is conventional; the whole /8 is reserved."],
              ["CGNAT", "100.64.0.0 – 100.127.255.255", "100.64.0.0/10", "255.192.0.0", "4,194,304", "Carrier-grade NAT between subscriber and provider. Not for enterprise use."],
            ],
          },
          {
            type: "list",
            title: "Address Types You Must Recognise on Sight (OBJ 1.5, 1.7)",
            items: [
              {
                term: "Public",
                body: "Globally unique, allocated through a Regional Internet Registry, routable across the internet. Anything that is not private, reserved or multicast is public.",
              },
              {
                term: "Private",
                body: "The three RFC 1918 ranges above. Reusable in every organisation simultaneously because no internet router will forward them — which is exactly why NAT exists.",
              },
              {
                term: "APIPA — 169.254.x.x",
                body: "A host that finds no DHCP server self-assigns from this range and verifies uniqueness with ARP. It can reach other APIPA hosts on the same segment and nothing else. Seeing 169.254 on a client is a diagnosis, not a configuration: the DHCP server is unreachable, the scope is exhausted, or the VLAN is wrong.",
              },
              {
                term: "Loopback — 127.0.0.1",
                body: "Traffic that never leaves the network stack. Pinging it proves the TCP/IP stack is installed and working; it proves nothing whatsoever about the cable, the switch or the gateway.",
              },
              {
                term: "The two addresses you can never assign",
                body: "In every subnet the all-zeros host portion is the network ID and the all-ones host portion is the broadcast address. That is why usable hosts are 2ⁿ − 2, and why a /31 is a special case — RFC 3021 allows it on point-to-point links precisely because neither reserved address is needed there.",
              },
            ],
          },

          {
            type: "text",
            body: "IPv4 data flows. How many destinations a single packet is aimed at determines how the network handles it, and IPv4 has exactly three answers.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1516044734145-07ca8eef8731?w=1200&h=600&fit=crop&q=85",
            alt: "Router with illuminated status indicators on a dark surface",
            caption: "The gateway decides what leaves the subnet — and broadcast traffic is precisely what it does not forward",
          },
          {
            type: "table",
            title: "The Three IPv4 Data Flows (OBJ 1.5)",
            caption:
              "Broadcast is the flow that defines the boundary: a broadcast domain is exactly the set of hosts a broadcast reaches, and a router is what stops it.",
            columns: ["Flow", "Destinations", "Address used", "Scope", "Typical use"],
            rows: [
              ["Unicast", "Exactly one", "The host's own address", "Routed anywhere", "Almost all traffic — HTTP, SSH, SMB, DNS queries."],
              ["Broadcast", "Every host on the subnet", "255.255.255.255 (limited) or the subnet broadcast, e.g. 192.168.1.255 (directed)", "Stops at the router — never forwarded", "ARP requests, DHCP Discover, legacy NetBIOS."],
              ["Multicast", "A subscribed group only", "224.0.0.0 – 239.255.255.255 (224.0.0.0/4)", "Routable with IGMP and multicast routing", "IPTV, stock feeds, OSPF (224.0.0.5), routing protocol hellos."],
            ],
          },
          {
            type: "list",
            title: "Why the Distinction Matters Operationally",
            items: [
              {
                term: "Broadcast cost is quadratic in a flat network",
                body: "Every host must interrupt its CPU to process every broadcast, even if it discards the frame. A flat /16 with thousands of hosts spends measurable CPU on ARP alone — which is the practical argument for VLANs, not just the security one.",
              },
              {
                term: "Limited versus directed broadcast",
                body: "255.255.255.255 is never forwarded by any router. A directed broadcast such as 192.168.1.255 targets a specific remote subnet and can in principle be forwarded — which is why it is disabled by default on every modern router, having been the basis of the Smurf amplification attack.",
              },
              {
                term: "Multicast needs cooperation",
                body: "Hosts join groups with IGMP; switches use IGMP snooping to avoid flooding multicast to ports with no subscriber. Without snooping a switch treats multicast like broadcast and the efficiency gain disappears.",
              },
              {
                term: "IPv6 has no broadcast at all",
                body: "It was removed deliberately and replaced with well-scoped multicast groups — ff02::1 is all-nodes, ff02::2 is all-routers. Anything that was broadcast in IPv4 is a specific multicast group in IPv6.",
              },
            ],
          },

          {
            type: "text",
            body: "Assigning addresses. Every host needs four things to work beyond its own subnet: an address, a mask, a default gateway and a DNS server. How those four arrive is the choice between static and dynamic assignment.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1583474884909-230dac058b63?w=1200&h=600&fit=crop&q=85",
            alt: "Networking device with green status lighting",
            caption: "DHCP hands out addresses on lease — a reservation is how you get a predictable address without configuring the client",
          },
          {
            type: "list",
            title: "DHCP — the DORA Exchange (OBJ 1.7)",
            items: [
              {
                term: "Discover",
                body: "The client broadcasts to 255.255.255.255 from source 0.0.0.0, because it has no address yet. UDP source port 68, destination 67.",
              },
              {
                term: "Offer",
                body: "Each DHCP server that hears it offers an address from the scope, together with mask, gateway, DNS and lease time. If two servers answer, the client takes the first offer — which is exactly how a rogue DHCP server hijacks a network.",
              },
              {
                term: "Request",
                body: "The client broadcasts its acceptance, naming the server it chose so the others can release their reservations.",
              },
              {
                term: "Acknowledge",
                body: "The chosen server confirms and commits the binding. The lease begins; the client attempts renewal at 50 % of the lease (T1) and rebinding at 87.5 % (T2).",
              },
              {
                term: "DHCP relay / IP helper",
                body: "Because Discover is a broadcast and routers do not forward broadcasts, a DHCP server on another subnet is unreachable by default. The router is configured as a relay agent — `ip helper-address` — to convert that broadcast into a unicast towards the server. A whole VLAN receiving APIPA while another works is usually a missing helper address.",
              },
              {
                term: "Reservation versus static",
                body: "A reservation is configured on the DHCP server and ties an address to a MAC; the client still runs DHCP and still receives updated options. A static address is configured on the client and receives nothing. Reservations are preferable for printers and appliances precisely because gateway and DNS changes still propagate.",
              },
            ],
          },
          {
            type: "list",
            title: "Static, Dynamic and the APIPA Fallback",
            items: [
              {
                term: "When static is right",
                body: "Routers, switch management interfaces, firewalls, DNS and DHCP servers themselves. Anything that must be reachable before or during a DHCP failure cannot depend on DHCP.",
              },
              {
                term: "When dynamic is right",
                body: "Everything else. Manual addressing at scale produces duplicate-address conflicts and stale documentation, both of which are harder to diagnose than the problem they were avoiding.",
              },
              {
                term: "The APIPA fallback in sequence",
                body: "DHCP Discover is sent, no Offer arrives within the retry window, the client self-assigns 169.254.x.y, ARPs to confirm nothing else holds it, and keeps retrying DHCP in the background. Local-segment traffic works; nothing else does, because APIPA supplies no gateway and no DNS.",
              },
              {
                term: "Reading the symptom correctly",
                body: "One host on APIPA suggests that host's link or NIC. Every host on one VLAN on APIPA suggests the relay, the scope or the trunk. Every host everywhere on APIPA suggests the DHCP server itself.",
              },
            ],
          },

          {
            type: "text",
            body: "Computer mathematics. Subnetting is done in binary whether you write the binary down or not. There are exactly three facts to memorise, and everything else is derived from them: the powers of two, the octet bit values, and the fact that the mask's boundary is where the 1s stop.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1610466896927-699424f3c86d?w=1200&h=600&fit=crop&q=85",
            alt: "Screen filled with rows of binary digits",
            caption: "Convert once, reason in decimal afterwards — the binary is scaffolding, not the destination",
          },
          {
            type: "code",
            title: "Binary to decimal — the only conversion you need",
            lines: [
              "Bit position value:   128  64  32  16   8   4   2   1",
              "                      ---------------------------------",
              "192  =                  1   1   0   0   0   0   0   0   -> 128 + 64          = 192",
              "224  =                  1   1   1   0   0   0   0   0   -> 128 + 64 + 32     = 224",
              "252  =                  1   1   1   1   1   1   0   0   -> 128+64+32+16+8+4  = 252",
              "168  =                  1   0   1   0   1   0   0   0   -> 128 + 32 + 8      = 168",
              "",
              "A subnet mask is always 1s then 0s, never mixed. So only nine values",
              "can ever appear in an octet of a mask:",
              "",
              "  /24  0        /25  128      /26  192      /27  224",
              "  /28  240      /29  248      /30  252      /31  254      /32  255",
              "",
              "Powers of two - memorise to 2^10:",
              "  2^1=2   2^2=4   2^3=8    2^4=16    2^5=32",
              "  2^6=64  2^7=128 2^8=256  2^9=512   2^10=1024",
            ],
          },
          {
            type: "list",
            title: "The Four Formulas",
            items: [
              {
                term: "Number of subnets = 2ˢ",
                body: "Where s is the number of bits borrowed from the host portion. Borrowing 2 bits from a /24 gives 2² = 4 subnets.",
              },
              {
                term: "Usable hosts = 2ʰ − 2",
                body: "Where h is the number of remaining host bits. The minus two removes the network ID and the broadcast address. This is the formula you invert when a question gives you a host requirement.",
              },
              {
                term: "Block size (the magic number) = 256 − mask octet",
                body: "For /26 the interesting octet is 192, so 256 − 192 = 64. Subnets then start at every multiple of 64: .0, .64, .128, .192. This single trick removes almost all of the arithmetic from a subnetting question.",
              },
              {
                term: "Broadcast = next network address − 1",
                body: "Once you have the block size you never calculate a broadcast address directly. The subnet starting at .64 with block 32 ends immediately before .96, so its broadcast is .95 and its usable range is .65 – .94.",
              },
            ],
          },
          {
            type: "table",
            title: "CIDR Reference — /24 to /32",
            caption:
              "Worth memorising as a block. The block size column is the magic number, and it is the fastest route to a network ID under exam conditions.",
            columns: ["CIDR", "Subnet mask", "Block size", "Usable hosts", "Common use"],
            rows: [
              ["/24", "255.255.255.0", "256", "254", "A standard LAN segment."],
              ["/25", "255.255.255.128", "128", "126", "Splitting a /24 in half."],
              ["/26", "255.255.255.192", "64", "62", "A department of up to 62 hosts."],
              ["/27", "255.255.255.224", "32", "30", "A small team or a wireless guest pool."],
              ["/28", "255.255.255.240", "16", "14", "A rack, a DMZ or a small server VLAN."],
              ["/29", "255.255.255.248", "8", "6", "A handful of appliances."],
              ["/30", "255.255.255.252", "4", "2", "The classic router-to-router point-to-point link."],
              ["/31", "255.255.255.254", "2", "2", "Point-to-point under RFC 3021 — no network ID or broadcast needed."],
              ["/32", "255.255.255.255", "1", "1", "A single host route or a loopback interface."],
            ],
          },

          {
            type: "text",
            body: "Subnetting practice — worked by hand. VLSM means applying a different mask to each subnet so that every subnet is only as large as it needs to be. The rule that makes it work is simple: allocate the largest requirement first, and start each subsequent subnet at the first address after the previous one ends. Take the requirement below and work it through completely.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1680992044138-ce4864c2b962?w=1200&h=600&fit=crop&q=85",
            alt: "Close-up of network equipment in a server room",
            caption: "The case study: one /24 divided across two departments and a router link",
          },
          {
            type: "list",
            title: "The Requirement",
            items: [
              {
                term: "Available block",
                body: "192.168.1.0/24 — 256 addresses in total, 254 usable if left as a single flat network.",
              },
              {
                term: "Divisi A",
                body: "60 hosts.",
              },
              {
                term: "Divisi B",
                body: "25 hosts.",
              },
              {
                term: "Router link",
                body: "2 hosts — the point-to-point connection between two router interfaces.",
              },
            ],
          },
          {
            type: "code",
            title: "Step 1 — sort by size, then find the host bits for each",
            lines: [
              "Always allocate LARGEST first. Out of order, the blocks will not align.",
              "",
              "  Divisi A     60 hosts",
              "  Divisi B     25 hosts",
              "  Router link   2 hosts",
              "",
              "Solve 2^h - 2 >= required, for the SMALLEST h that works:",
              "",
              "  Divisi A:  2^5 - 2 = 30   -> too small",
              "             2^6 - 2 = 62   -> fits 60   h = 6   prefix = 32 - 6 = /26",
              "",
              "  Divisi B:  2^4 - 2 = 14   -> too small",
              "             2^5 - 2 = 30   -> fits 25   h = 5   prefix = 32 - 5 = /27",
              "",
              "  Router:    2^1 - 2 = 0    -> too small",
              "             2^2 - 2 = 2    -> fits 2    h = 2   prefix = 32 - 2 = /30",
            ],
          },
          {
            type: "code",
            title: "Step 2 — derive each mask and its magic number",
            lines: [
              "/26  ->  11111111.11111111.11111111.11000000  =  255.255.255.192",
              "         magic number = 256 - 192 = 64        blocks at .0 .64 .128 .192",
              "",
              "/27  ->  11111111.11111111.11111111.11100000  =  255.255.255.224",
              "         magic number = 256 - 224 = 32        blocks at .0 .32 .64 .96 ...",
              "",
              "/30  ->  11111111.11111111.11111111.11111100  =  255.255.255.252",
              "         magic number = 256 - 252 = 4         blocks at .0 .4 .8 .12 ...",
            ],
          },
          {
            type: "code",
            title: "Step 3 — allocate in order, each starting where the last one ended",
            lines: [
              "DIVISI A  -  /26, block 64, starting at 192.168.1.0",
              "  Network    11000000.10101000.00000001.00000000  = 192.168.1.0",
              "  Mask       11111111.11111111.11111111.11000000  = 255.255.255.192",
              "  Broadcast  11000000.10101000.00000001.00111111  = 192.168.1.63",
              "  Usable     192.168.1.1  -  192.168.1.62         = 62 hosts (60 needed, 2 spare)",
              "",
              "  Next free address = .63 + 1 = 192.168.1.64",
              "",
              "DIVISI B  -  /27, block 32, starting at 192.168.1.64",
              "  Network    11000000.10101000.00000001.01000000  = 192.168.1.64",
              "  Mask       11111111.11111111.11111111.11100000  = 255.255.255.224",
              "  Broadcast  11000000.10101000.00000001.01011111  = 192.168.1.95",
              "  Usable     192.168.1.65  -  192.168.1.94        = 30 hosts (25 needed, 5 spare)",
              "",
              "  Next free address = .95 + 1 = 192.168.1.96",
              "",
              "ROUTER LINK  -  /30, block 4, starting at 192.168.1.96",
              "  Network    11000000.10101000.00000001.01100000  = 192.168.1.96",
              "  Mask       11111111.11111111.11111111.11111100  = 255.255.255.252",
              "  Broadcast  11000000.10101000.00000001.01100011  = 192.168.1.99",
              "  Usable     192.168.1.97  -  192.168.1.98        = 2 hosts (exactly enough)",
              "",
              "  Next free address = 192.168.1.100",
            ],
          },
          {
            type: "table",
            title: "Step 4 — the completed VLSM allocation table",
            caption:
              "Every column here is derived, not guessed. Network ID from the block boundary, broadcast from the next boundary minus one, usable range from the two addresses in between.",
            columns: ["Subnet", "Network ID", "CIDR", "Subnet mask", "Usable host range", "Broadcast", "Usable / needed"],
            rows: [
              ["Divisi A", "192.168.1.0", "/26", "255.255.255.192", "192.168.1.1 – 192.168.1.62", "192.168.1.63", "62 / 60"],
              ["Divisi B", "192.168.1.64", "/27", "255.255.255.224", "192.168.1.65 – 192.168.1.94", "192.168.1.95", "30 / 25"],
              ["Router link", "192.168.1.96", "/30", "255.255.255.252", "192.168.1.97 – 192.168.1.98", "192.168.1.99", "2 / 2"],
              ["Unallocated", "192.168.1.100", "—", "—", "192.168.1.100 – 192.168.1.255", "—", "156 spare"],
            ],
          },
          {
            type: "mermaid",
            title: "Topology of the VLSM Case Study",
            caption:
              "One router, three subnets, three different masks. Each interface address is the first usable address in its block, which is the conventional choice for a gateway.",
            definition: `flowchart TD
    R1["<b>Router R1</b><br/>Gateway for both divisions"]
    R2["<b>Router R2</b><br/>Upstream / WAN"]

    SWA["<b>Switch &mdash; Divisi A</b>"]
    SWB["<b>Switch &mdash; Divisi B</b>"]

    HA["<b>60 hosts</b><br/>192.168.1.1 &ndash; .62"]
    HB["<b>25 hosts</b><br/>192.168.1.65 &ndash; .94"]

    R1 ---|"<b>192.168.1.0/26</b><br/>mask 255.255.255.192<br/>gw .1 &middot; bcast .63 &middot; 62 usable"| SWA
    R1 ---|"<b>192.168.1.64/27</b><br/>mask 255.255.255.224<br/>gw .65 &middot; bcast .95 &middot; 30 usable"| SWB
    R1 ===|"<b>192.168.1.96/30</b><br/>mask 255.255.255.252<br/>.97 &lt;&mdash;&gt; .98 &middot; 2 usable"| R2

    SWA --> HA
    SWB --> HB

    classDef rtr fill:#fee2e2,stroke:#dc2626,stroke-width:3px,color:#7f1d1d
    classDef swa fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef swb fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d
    classDef host fill:#f1f5f9,stroke:#94a3b8,stroke-width:2px,color:#334155

    class R1,R2 rtr
    class SWA swa
    class SWB swb
    class HA,HB host

    linkStyle 0 stroke:#2563eb,stroke-width:3px
    linkStyle 1 stroke:#16a34a,stroke-width:3px
    linkStyle 2 stroke:#dc2626,stroke-width:3px`,
          },
          {
            type: "list",
            title: "Why VLSM Was Worth the Effort",
            items: [
              {
                term: "Addresses actually consumed",
                body: "64 + 32 + 4 = 100 of the 256 available, leaving 192.168.1.100 – 192.168.1.255 — 156 addresses — free for future subnets.",
              },
              {
                term: "What fixed-length subnetting would have cost",
                body: "Using /26 uniformly for all three requirements consumes 3 × 64 = 192 addresses and leaves only one /26 spare. The router link alone would receive 62 usable addresses to satisfy a requirement of 2, wasting 60. VLSM saves 92 addresses on a single /24.",
              },
              {
                term: "Why the order matters",
                body: "Allocating the /30 first would place it at .0 – .3, and the next /26 boundary is .64 — so the /26 could not start until .64 and the space between .4 and .63 would be stranded. Largest first keeps every block aligned to its own boundary.",
              },
              {
                term: "Checking your work",
                body: "Each network ID must be an exact multiple of its own block size. .0 is a multiple of 64, .64 is a multiple of 32, .96 is a multiple of 4. If a network ID is not a multiple of its block size, the subnet is misaligned and the arithmetic is wrong.",
              },
            ],
          },

          {
            type: "text",
            body: "IPv6. The address is 128 bits, written as eight groups of four hexadecimal digits separated by colons. That is 2¹²⁸ addresses — enough that address exhaustion is not a design consideration, which changes how the protocol works rather than merely how big the numbers are.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=1200&h=600&fit=crop&q=85",
            alt: "Monitor displaying dense lines of code",
            caption: "Eight groups of four hex digits — compression rules make them shorter to write but no shorter to compute",
          },
          {
            type: "code",
            title: "IPv6 compression — two rules, applied in order",
            lines: [
              "Full address:",
              "  2001:0db8:0000:0000:0000:ff00:0042:8329",
              "",
              "Rule 1 - drop LEADING zeros in each group (never trailing):",
              "  2001:db8:0:0:0:ff00:42:8329",
              "",
              "Rule 2 - replace ONE run of consecutive all-zero groups with :: ",
              "  2001:db8::ff00:42:8329",
              "",
              ":: may appear only once. If it appeared twice the address would be",
              "ambiguous - you could not tell how many zero groups belong to each.",
              "",
              "  2001:db8::1:0:0:1     valid   (:: covers groups 3-4)",
              "  2001:db8::1::1        INVALID (which run does each :: cover?)",
              "",
              "Loopback  0000:...:0001  ->  ::1",
              "Unspecified 0000:...:0000 ->  ::",
            ],
          },
          {
            type: "table",
            title: "Table 2 — IPv4 versus IPv6",
            caption:
              "The differences that get examined are structural, not cosmetic. Note especially that IPv6 has no broadcast and no ARP.",
            columns: ["Aspect", "IPv4", "IPv6"],
            rows: [
              ["Address length", "32 bits — 4 octets", "128 bits — 8 groups of 16 bits"],
              ["Notation", "Dotted decimal, 192.168.1.1", "Colon hexadecimal, 2001:db8::1"],
              ["Address space", "≈ 4.3 × 10⁹", "≈ 3.4 × 10³⁸"],
              ["Header", "Variable, 20–60 bytes, includes a checksum", "Fixed 40 bytes, no checksum — errors are caught at Layer 2 and Layer 4"],
              ["Broadcast", "Yes — 255.255.255.255 and directed broadcast", "None. Replaced entirely by scoped multicast"],
              ["Address resolution", "ARP — a broadcast", "NDP with solicited-node multicast — no broadcast involved"],
              ["Auto-configuration", "DHCP, or APIPA as a failure fallback", "SLAAC from Router Advertisements, DHCPv6 optional"],
              ["Fragmentation", "Performed by routers or by the host", "Source host only; routers never fragment"],
              ["IPsec", "Optional bolt-on", "Designed into the protocol suite"],
              ["NAT", "Effectively mandatory to conserve addresses", "Unnecessary — every host can hold a globally unique address"],
            ],
          },
          {
            type: "table",
            title: "IPv6 Address Types and Data Flows (OBJ 1.5, 1.8)",
            caption:
              "IPv6 replaces the unicast/broadcast/multicast triad with unicast, multicast and anycast. Anycast is the genuinely new one.",
            columns: ["Type", "Prefix", "Scope", "Behaviour"],
            rows: [
              ["Global unicast", "2000::/3", "Internet-routable", "One interface, globally unique — the IPv6 equivalent of a public IPv4 address."],
              ["Link-local", "fe80::/10", "One link only, never routed", "Auto-configured on every IPv6 interface. Used by NDP and by routing protocol neighbours."],
              ["Unique local", "fc00::/7 — in practice fd00::/8", "Site", "The rough equivalent of RFC 1918 private space, not routed on the internet."],
              ["Multicast", "ff00::/8", "Scoped by the address itself", "ff02::1 all nodes on the link, ff02::2 all routers on the link."],
              ["Anycast", "Drawn from unicast space", "Depends on routing", "The same address configured on several nodes; routing delivers to the topologically nearest. Behind DNS root servers and most CDNs."],
              ["Loopback", "::1", "The host itself", "The single-address equivalent of 127.0.0.1."],
              ["Unspecified", "::", "None", "Used as a source address before an address has been acquired."],
            ],
          },
          {
            type: "list",
            title: "How an IPv6 Host Gets Its Address",
            items: [
              {
                term: "Link-local first, always",
                body: "Every interface derives an fe80:: address as soon as IPv6 is enabled, before any router is heard from. Neighbour Discovery and Router Solicitation both run over it.",
              },
              {
                term: "SLAAC — Stateless Address Autoconfiguration",
                body: "The host sends a Router Solicitation; the router replies with a Router Advertisement carrying the /64 prefix. The host generates its own interface identifier and combines the two. No server holds any state, which is the meaning of stateless.",
              },
              {
                term: "EUI-64",
                body: "One way to build that interface identifier from a 48-bit MAC: split it in half, insert fffe in the middle, and invert the seventh bit of the first octet. Privacy extensions now generate a random identifier instead, precisely because EUI-64 exposes the MAC address.",
              },
              {
                term: "DHCPv6",
                body: "Used when the network must control assignment or supply options SLAAC cannot. Stateful DHCPv6 assigns the address itself; stateless DHCPv6 lets SLAAC assign the address and supplies only DNS and other options.",
              },
              {
                term: "Duplicate Address Detection",
                body: "Before using any address the host sends a Neighbour Solicitation to its own tentative address. A reply means the address is taken. This is mandatory in IPv6, not optional as ARP-based conflict detection was in IPv4.",
              },
            ],
          },

          {
            type: "text",
            body: "IPv4 and IPv6 compatibility. The two protocols are not interoperable — an IPv6 host cannot talk to an IPv4 host directly, because the header formats and address lengths differ entirely. Every migration strategy is therefore some way of running both, carrying one inside the other, or translating between them.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1554220170-a389aff2a0c3?w=1200&h=600&fit=crop&q=85",
            alt: "Close-up of network hardware with indicator lighting",
            caption: "Dual-stack is the default migration path — the hardware runs both protocols and the application chooses",
          },
          {
            type: "table",
            title: "Transition Mechanisms (OBJ 1.8)",
            caption:
              "Dual-stack is the preferred approach wherever it is possible. Tunnelling and translation exist for the cases where it is not.",
            columns: ["Mechanism", "How it works", "When it is used", "Cost"],
            rows: [
              ["Dual stack", "Every host and router runs both IPv4 and IPv6 with both addresses. The application resolves a name and uses whichever family answers.", "The default and preferred migration path.", "Two protocol stacks to configure, monitor, secure and troubleshoot."],
              ["6in4 / manual tunnel", "IPv6 packets are encapsulated inside IPv4 packets with protocol 41 between two configured endpoints.", "Linking two IPv6 islands across an IPv4-only core.", "Adds 20 bytes of overhead and reduces the effective MTU."],
              ["6to4", "Automatic tunnelling using the 2002::/16 prefix, deriving the IPv6 prefix from an IPv4 address.", "Largely historical — deprecated for reliability problems.", "Depends on public relays with no accountability."],
              ["Teredo", "Tunnels IPv6 inside UDP so it can traverse NAT.", "IPv6 for a host stuck behind an IPv4 NAT.", "Highest overhead, weakest performance, a last resort."],
              ["NAT64 with DNS64", "A translator rewrites IPv6 packets into IPv4; DNS64 synthesises AAAA records for IPv4-only destinations.", "IPv6-only clients that must still reach IPv4-only servers.", "Breaks anything that embeds a literal IPv4 address in its payload."],
              ["464XLAT", "Combines a client-side translator with a NAT64 gateway so IPv4-only applications work over an IPv6-only network.", "Mobile carrier networks running IPv6-only.", "Two translation steps to reason about when debugging."],
            ],
          },
          {
            type: "list",
            title: "Practical Points at Migration",
            items: [
              {
                term: "Happy Eyeballs",
                body: "A dual-stack client attempts IPv6 and IPv4 nearly simultaneously and uses whichever completes first, so a broken IPv6 path degrades performance instead of breaking the application. Without it, a misconfigured IPv6 route produces long timeouts that look like a server fault.",
              },
              {
                term: "Every tunnel is an MTU problem",
                body: "Encapsulation reduces the payload available to the inner protocol. Tunnelled IPv6 that pings successfully and then stalls on a large transfer is the same PMTUD black hole covered in Module 7, arriving by a different route.",
              },
              {
                term: "Firewall both stacks",
                body: "An IPv4 rule set does not filter IPv6. A host that is carefully firewalled on IPv4 and reachable over an auto-configured IPv6 address is a genuinely common oversight — and SLAAC means the IPv6 address may exist without anyone having configured it.",
              },
              {
                term: "The /64 convention",
                body: "SLAAC requires a 64-bit interface identifier, so IPv6 subnets are /64 essentially without exception — even a point-to-point link, where the IPv4 instinct would be to use the smallest possible block. Conserving IPv6 addresses is not a goal.",
              },
            ],
          },
          {
            type: "text",
            body: "The reason this module rewards practice rather than reading is that subnetting under exam conditions is a speed problem, not a comprehension problem. The method above always terminates: convert the requirement into host bits, turn host bits into a prefix, turn the prefix into a magic number, and step through the block boundaries. Work the case study again on paper with different numbers — 100 hosts, 12 hosts, two links — and the sequence becomes automatic well before the arithmetic does.",
          },
        ],
      },

      {
        id: "routing",
        icon: "route",
        accent: true,
        title: "9. Routing",
        blocks: [
          {
            type: "text",
            lead: true,
            body: "A switch answers the question \"which port on this network?\". A router answers \"which network?\" — and then hands the packet on to somebody else who asks the same question again. That distinction is the whole subject. No router in the internet knows the full path to any destination; each one knows only the next step, and the path emerges from a chain of independent local decisions. Understanding routing means understanding how a router arrives at that one decision, and how it learns enough to make it well.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1612588311647-c87d00ea19df?w=1200&h=600&fit=crop&q=85",
            alt: "Network router with antennas on a plain surface",
            caption: "Every router makes exactly one decision per packet: which interface, and to whom next",
          },

          {
            type: "text",
            body: "Routing fundamentals. The useful analogy is a road sign at a junction. The sign does not show you the whole route to your destination — it says \"Jakarta, that way\". You drive to the next junction and read the next sign. A routing table is a list of such signs: destination prefix on the left, direction on the right. The router never knows whether the journey succeeds; it only guarantees the next step is correct according to what it has been told.",
          },
          {
            type: "list",
            title: "Anatomy of a Route Entry (OBJ 2.1)",
            items: [
              {
                term: "Destination prefix",
                body: "The network being described, written as address plus prefix length — 10.1.0.0/16. This is what the router matches an inbound packet's destination against.",
              },
              {
                term: "Next hop",
                body: "The IP address of the neighbouring router that is one step closer to the destination. It must be an address the router can already reach on a directly connected network, otherwise the entry is unusable.",
              },
              {
                term: "Exit interface",
                body: "The local interface the frame leaves by. On a point-to-point link the exit interface alone is sufficient; on a multi-access link such as Ethernet the next hop is also required, because the router must ARP for a specific neighbour.",
              },
              {
                term: "Administrative distance and metric",
                body: "Written as [AD/metric], for example [110/20]. AD says how much the router trusts the source of this information; metric says how good this particular path is according to that source. The two are compared at different stages and are never compared against each other.",
              },
              {
                term: "Source code",
                body: "A letter identifying where the route came from — C connected, S static, O OSPF, R RIP, D EIGRP, B BGP. Reading this column first tells you immediately whether a missing route is a configuration problem or a protocol problem.",
              },
              {
                term: "Directly connected routes",
                body: "The moment an interface is given an address and comes up, the router installs a route for that interface's network with no next hop, because it is the destination. Every other route ultimately resolves down to one of these.",
              },
            ],
          },
          {
            type: "code",
            title: "Reading a routing table",
            lines: [
              "R1# show ip route",
              "",
              "Codes: C - connected, S - static, O - OSPF, R - RIP, B - BGP",
              "       * - candidate default",
              "",
              "Gateway of last resort is 203.0.113.1 to network 0.0.0.0",
              "",
              "S*    0.0.0.0/0 [1/0] via 203.0.113.1",
              "      10.0.0.0/8 is variably subnetted, 3 subnets, 2 masks",
              "C        10.1.1.0/24 is directly connected, GigabitEthernet0/0",
              "O        10.1.2.0/24 [110/20] via 10.1.1.2, 00:14:22, GigabitEthernet0/0",
              "O        10.1.0.0/16 [110/30] via 10.1.1.2, 00:14:22, GigabitEthernet0/0",
              "C     203.0.113.0/30 is directly connected, GigabitEthernet0/1",
              "",
              "How to read the OSPF line:",
              "  O            learned from OSPF",
              "  10.1.2.0/24  the destination network",
              "  [110/20]     administrative distance 110, OSPF cost 20",
              "  via 10.1.1.2 the next hop",
              "  00:14:22     how long this route has been in the table",
              "  Gi0/0        the exit interface",
              "",
              "A packet for 10.1.2.55 matches BOTH 10.1.2.0/24 and 10.1.0.0/16.",
              "The /24 is more specific, so longest prefix match sends it there.",
            ],
          },
          {
            type: "list",
            title: "Default Routes and the Gateway of Last Resort",
            items: [
              {
                term: "0.0.0.0/0 matches everything",
                body: "A prefix length of zero means no bits have to match, so this entry matches any destination. Because longest prefix match always prefers a more specific entry, the default route is used only when nothing else fits — which is exactly the behaviour wanted.",
              },
              {
                term: "Why edge routers need one",
                body: "No enterprise router can hold the full internet table — roughly a million prefixes and growing. The edge router keeps specific routes for internal networks and one default route pointing at the ISP. This is why a branch router with 40 routes still reaches the whole internet.",
              },
              {
                term: "Recursive lookup",
                body: "If a static route says \"via 203.0.113.1\" the router must first look up how to reach 203.0.113.1. That second lookup normally resolves to a connected interface. A route whose next hop cannot itself be resolved is not installed, which is the usual explanation for a static route that appears in the configuration but never in the table.",
              },
              {
                term: "The routing table is not the forwarding table",
                body: "The RIB is the control plane's collection of everything learned. From it the router derives a FIB — a hardware-optimised structure that the forwarding path actually consults per packet. This separation is worth remembering, because it is precisely what SDN takes apart and relocates.",
              },
            ],
          },

          {
            type: "text",
            body: "Route selection. There are two separate decisions here and conflating them is the single most common misunderstanding on this topic. One decision picks which routes get installed in the table at all; the other picks which installed route a given packet uses. They run at different times, use different criteria, and never override one another.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1642356692954-3fbb84baf1a6?w=1200&h=600&fit=crop&q=85",
            alt: "Abstract diagram of interconnected nodes and paths",
            caption: "Two decisions, in order: what gets into the table, then which entry a packet matches",
          },
          {
            type: "list",
            title: "The Two Stages, in Order",
            items: [
              {
                term: "Stage 1 — control plane: which routes are installed",
                body: "If two different sources offer a route to the same prefix, the one with the lower administrative distance wins and the other is discarded. If the same source offers several paths to that prefix, the lower metric wins. AD is compared first, metric only within a single protocol.",
              },
              {
                term: "Stage 2 — forwarding: which installed route a packet uses",
                body: "Once routes are in the table, every packet is matched against all of them and the longest prefix match wins. Administrative distance plays no part here. A /24 learned by RIP (AD 120) will still be preferred over a /16 learned by OSPF (AD 110) for an address inside that /24, because the /24 is more specific.",
              },
              {
                term: "Why that ordering matters practically",
                body: "It explains why summarising routes changes traffic paths even when no protocol changed, and why injecting a more specific prefix is the standard way to steer traffic without touching any metric.",
              },
            ],
          },
          {
            type: "table",
            title: "Administrative Distance — Default Values",
            caption:
              "Lower is more trusted. These are the Cisco defaults and are what the exam expects; other vendors use their own numbers, which is worth knowing in a mixed estate.",
            columns: ["Route source", "AD", "Reasoning"],
            rows: [
              ["Directly connected", "0", "The router can see the network on its own interface. Nothing is more reliable than that."],
              ["Static route", "1", "An administrator stated it explicitly. Trusted just below direct observation."],
              ["eBGP", "20", "Learned from an external autonomous system, and deliberately preferred over any IGP so that external policy wins at the edge."],
              ["EIGRP (internal)", "90", "A proprietary protocol with a composite metric, trusted above OSPF on Cisco equipment."],
              ["OSPF", "110", "The standard interior link-state protocol."],
              ["IS-IS", "115", "The other link-state IGP, common in service provider cores."],
              ["RIP", "120", "Trusted least of the working IGPs — a hop count says nothing about bandwidth."],
              ["EIGRP (external)", "170", "Redistributed into EIGRP from elsewhere, so trusted less than natively learned EIGRP."],
              ["iBGP", "200", "Learned from a peer inside your own AS; deliberately less preferred than any IGP."],
              ["Unusable", "255", "A route with AD 255 is never installed. Setting it is a way to disable a route without deleting it."],
            ],
          },
          {
            type: "list",
            title: "Metrics — What Each Protocol Is Actually Measuring",
            items: [
              {
                term: "RIP — hop count",
                body: "Simply the number of routers crossed. A three-hop path over gigabit links loses to a two-hop path over a 1 Mbps line, which is the fundamental defect of the protocol. Maximum is 15; 16 means unreachable.",
              },
              {
                term: "OSPF — cost",
                body: "Derived from bandwidth: cost equals a reference bandwidth divided by the interface bandwidth, with a default reference of 100 Mbps. That default makes every link at or above 100 Mbps cost 1, so a gigabit link and a fast-ethernet link look identical. Raising the reference bandwidth consistently across every router is standard practice on any modern network.",
              },
              {
                term: "EIGRP — composite metric",
                body: "By default a function of the lowest bandwidth along the path and the cumulative delay. More expressive than hop count, and computed by DUAL, which keeps a pre-validated backup path — the feasible successor — so failover does not require recomputation.",
              },
              {
                term: "BGP — path attributes, not a metric",
                body: "BGP does not measure speed at all. It walks an ordered list of attributes — weight, local preference, locally originated, shortest AS_PATH, origin type, lowest MED — and stops at the first that decides. This is policy, not performance, which is why the fastest path across the internet is frequently not the one taken.",
              },
              {
                term: "Floating static routes",
                body: "A static route configured with a deliberately high AD — say 250 — sits idle while the dynamic route exists, and is installed only if the protocol withdraws its route. This is the standard way to configure a backup link that must not carry traffic while the primary is healthy.",
              },
              {
                term: "Equal-cost multi-path",
                body: "When several paths tie on both AD and metric, the router installs all of them and load-shares. Sharing is normally per-flow rather than per-packet, so that a single TCP session does not arrive out of order.",
              },
            ],
          },

          {
            type: "text",
            body: "Routing protocols. The first division is by scope. An Interior Gateway Protocol runs inside a single autonomous system — one organisation's network, under one administrative policy — and its job is to find the technically best path. An Exterior Gateway Protocol runs between autonomous systems, and its job is to enforce business policy about whose traffic you will carry. There is exactly one EGP in use on the internet, and it is BGP.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1606814540563-5c02d62fd409?w=1200&h=600&fit=crop&q=85",
            alt: "Abstract blue light trails in a darkened room",
            caption: "Inside an autonomous system the goal is the best path; between them, the goal is policy",
          },
          {
            type: "list",
            title: "Distance Vector — RIP",
            items: [
              {
                term: "The mechanism",
                body: "Each router tells its directly connected neighbours the full contents of its own routing table, along with its distance to each destination. A router that hears \"I can reach 10.1.0.0/16 at a cost of 3\" installs that network at cost 4 through that neighbour. This is Bellman-Ford, and it is often called routing by rumour: no router ever sees the topology, only what its neighbours claim.",
              },
              {
                term: "The analogy",
                body: "Asking the person next to you how far it is to the station, and adding one step. If everyone answers honestly it works. If somebody repeats back to you what you told them, you both start counting upwards forever.",
              },
              {
                term: "Count-to-infinity, and the fixes",
                body: "That upward count is the protocol's classic failure. Split horizon stops a router advertising a route back out of the interface it learned it on; route poisoning advertises a failed route at cost 16 — infinity — rather than staying silent; holddown timers refuse better news about a route that just failed until the network has settled.",
              },
              {
                term: "Limits",
                body: "Maximum 15 hops, full-table updates every 30 seconds whether anything changed or not, and slow convergence. RIPv2 added subnet masks in the update, so it is classless, and moved from broadcast to multicast 224.0.0.9. It survives in labs and very small networks, and is examined mainly as a contrast to what came after.",
              },
            ],
          },
          {
            type: "list",
            title: "Link State — OSPF",
            items: [
              {
                term: "The mechanism",
                body: "Every router describes only its own directly attached links in a Link State Advertisement, and floods that description unchanged to every other router in the area. Each router therefore assembles an identical Link State Database — a complete map of the area — and independently runs Dijkstra's shortest path first algorithm over it with itself as the root.",
              },
              {
                term: "The analogy",
                body: "Instead of asking neighbours for directions, everyone contributes their own street to a shared map, and each person then plans their own route from the finished map. Nobody has to trust anyone else's arithmetic, which is why link state converges fast and does not suffer count-to-infinity at all.",
              },
              {
                term: "Areas and why they exist",
                body: "Dijkstra's cost grows with the size of the database, and every topology change forces every router in the area to re-run it. Areas partition the database: a change inside Area 1 is recomputed only by Area 1's routers, and is summarised to everyone else. Area 0 is the backbone, and every other area must connect to it — inter-area traffic always transits Area 0.",
              },
              {
                term: "Router roles",
                body: "An internal router has all interfaces in one area. An Area Border Router sits on the edge of two areas, holds a database for each, and summarises between them. An Autonomous System Boundary Router redistributes routes in from outside OSPF entirely. A backbone router has at least one interface in Area 0.",
              },
              {
                term: "Neighbours and adjacency",
                body: "Hello packets are sent to 224.0.0.5 every 10 seconds on broadcast links, and a neighbour is declared down after 40 seconds of silence. On a multi-access segment the routers elect a Designated Router and a Backup DR, so that n routers form n adjacencies with the DR rather than n(n−1)/2 with each other.",
              },
              {
                term: "What breaks adjacency",
                body: "Mismatched area IDs, mismatched hello or dead intervals, mismatched subnet masks on the segment, mismatched authentication, or duplicate router IDs. An OSPF neighbour stuck in EXSTART almost always means an MTU mismatch — which connects directly back to Module 7.",
              },
            ],
          },
          {
            type: "list",
            title: "Path Vector — BGP",
            items: [
              {
                term: "The mechanism",
                body: "BGP advertises a prefix together with the complete list of autonomous systems the advertisement has traversed — the AS_PATH. A router that sees its own AS number already in the path discards the advertisement, which is how loops are prevented without any metric or timer at all.",
              },
              {
                term: "The analogy",
                body: "A parcel with the full delivery chain stamped on the outside. If you see your own stamp on it, it has come back to you and you refuse it.",
              },
              {
                term: "eBGP versus iBGP",
                body: "eBGP runs between routers in different autonomous systems and is usually a single hop across a peering link. iBGP runs between routers inside one AS to carry external routes across it, and by design an iBGP router does not re-advertise iBGP-learned routes to other iBGP peers — which is why full-mesh, route reflectors or confederations are required.",
              },
              {
                term: "Transport and scale",
                body: "BGP runs over TCP port 179, so it inherits reliable ordered delivery instead of implementing its own. It sends the full table once at session establishment and only incremental updates afterwards — essential when the table is roughly a million prefixes.",
              },
              {
                term: "Policy, not speed",
                body: "Local preference steers traffic leaving your AS; AS_PATH prepending makes a route look worse to influence traffic entering it; MED suggests a preferred entry point to a neighbouring AS. These are commercial instruments. BGP is how the business relationships between networks get expressed in packets.",
              },
            ],
          },
          {
            type: "table",
            title: "OSPF versus BGP",
            caption:
              "The comparison the exam draws most often. Note that the categories differ in kind: OSPF optimises a path, BGP expresses a policy.",
            columns: ["Category", "OSPF", "BGP"],
            rows: [
              ["Type", "Interior Gateway Protocol (IGP), link state", "Exterior Gateway Protocol (EGP), path vector"],
              ["Usage", "Inside a single autonomous system — a campus, a data centre, an enterprise WAN", "Between autonomous systems — the routing protocol of the internet itself"],
              ["Algorithm", "Dijkstra's Shortest Path First over a complete link state database", "Best-path selection walking an ordered list of path attributes"],
              ["Metric", "Cost — reference bandwidth ÷ interface bandwidth, summed along the path", "No metric. AS_PATH length is one attribute among several, and not the first consulted"],
              ["Loop prevention", "Every router computes from an identical map, so loops cannot form within an area", "An AS discards any advertisement already carrying its own AS number"],
              ["Transport", "IP protocol 89, multicast 224.0.0.5 and 224.0.0.6", "TCP port 179, unicast to a configured peer"],
              ["Administrative distance", "110", "20 for eBGP, 200 for iBGP"],
              ["Convergence", "Seconds — fast, and CPU-intensive at scale", "Minutes on the global table — deliberately damped for stability"],
              ["Scales to", "Thousands of routes within an area hierarchy", "The full internet table, roughly a million prefixes"],
              ["Configured with", "Areas, interface costs, router IDs", "Peers, AS numbers, and route policy"],
            ],
          },
          {
            type: "mermaid",
            title: "OSPF Multi-Area Topology",
            caption:
              "Area 0 is the backbone and every other area attaches to it. The ABRs hold a separate link state database per area and summarise between them, so a topology change inside Area 1 never forces Area 2 to re-run Dijkstra.",
            definition: `flowchart TB
    subgraph A1["Area 1"]
      R1["<b>R1</b><br/>Internal router"]
      R2["<b>R2</b><br/>Internal router"]
    end

    ABR1["<b>ABR-1</b><br/>Area Border Router<br/><i>LSDB for Area 0 + Area 1</i><br/>summarises between them"]

    subgraph A0["Area 0 &mdash; BACKBONE"]
      BB1["<b>R-Backbone-1</b>"]
      BB2["<b>R-Backbone-2</b>"]
    end

    ABR2["<b>ABR-2</b><br/>Area Border Router<br/><i>LSDB for Area 0 + Area 2</i><br/>summarises between them"]

    subgraph A2["Area 2"]
      R3["<b>R3</b><br/>Internal router"]
      R4["<b>R4</b><br/>Internal router"]
    end

    ASBR["<b>ASBR</b><br/>AS Boundary Router<br/>redistributes external routes<br/><i>e.g. BGP or static</i>"]
    EXT(("External AS<br/>/ Internet"))

    R1 --- ABR1
    R2 --- ABR1
    ABR1 ==>|"inter-area<br/>always via Area 0"| BB1
    BB1 --- BB2
    BB2 ==>|"inter-area<br/>always via Area 0"| ABR2
    ABR2 --- R3
    ABR2 --- R4
    BB2 --- ASBR
    ASBR --- EXT

    classDef area1 fill:#dbeafe,stroke:#2563eb,stroke-width:2px,color:#1e3a8a
    classDef bb fill:#fef3c7,stroke:#d97706,stroke-width:3px,color:#78350f
    classDef area2 fill:#dcfce7,stroke:#16a34a,stroke-width:2px,color:#14532d
    classDef abr fill:#fee2e2,stroke:#dc2626,stroke-width:3px,color:#7f1d1d
    classDef ext fill:#f1f5f9,stroke:#94a3b8,stroke-width:2px,color:#334155

    class R1,R2 area1
    class BB1,BB2 bb
    class R3,R4 area2
    class ABR1,ABR2,ASBR abr
    class EXT ext`,
          },

          {
            type: "text",
            body: "Configuring routers. The commands below are Cisco IOS syntax, which is what the exam uses. The pattern generalises: address the interfaces, tell the router what it does not learn by itself, then verify against the routing table rather than against the configuration.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?w=1200&h=600&fit=crop&q=85",
            alt: "Rack-mounted network device with front panel ports",
            caption: "Configuration is only half the work — verification is done against the routing table",
          },
          {
            type: "code",
            title: "Static routing and a default route",
            lines: [
              "! Address the interfaces first - nothing routes without connected networks",
              "interface GigabitEthernet0/0",
              "  description LAN",
              "  ip address 10.1.1.1 255.255.255.0",
              "  no shutdown",
              "!",
              "interface GigabitEthernet0/1",
              "  description WAN to ISP",
              "  ip address 203.0.113.2 255.255.255.252",
              "  no shutdown",
              "!",
              "! Static route: destination, mask, next hop",
              "ip route 10.2.0.0 255.255.0.0 10.1.1.2",
              "!",
              "! Default route - the gateway of last resort",
              "ip route 0.0.0.0 0.0.0.0 203.0.113.1",
              "!",
              "! Floating static backup - AD 250 keeps it out of the table",
              "! until the primary route disappears",
              "ip route 10.2.0.0 255.255.0.0 192.0.2.1 250",
              "!",
              "! Verify",
              "show ip route",
              "show ip route 10.2.0.0",
            ],
          },
          {
            type: "code",
            title: "OSPF — single area and multi-area",
            lines: [
              "! Single area",
              "router ospf 1",
              "  router-id 1.1.1.1",
              "  network 10.1.1.0 0.0.0.255 area 0",
              "  network 203.0.113.0 0.0.0.3 area 0",
              "  passive-interface GigabitEthernet0/0",
              "!",
              "! The mask in a network statement is a WILDCARD, not a subnet mask.",
              "! It is the inverse:  255.255.255.0  ->  0.0.0.255",
              "!",
              "! Raise the reference bandwidth so gigabit and faster links",
              "! do not all end up with a cost of 1. Set it identically",
              "! on EVERY router or the costs will not be comparable.",
              "router ospf 1",
              "  auto-cost reference-bandwidth 100000",
              "!",
              "! An ABR simply has interfaces in two areas",
              "router ospf 1",
              "  router-id 2.2.2.2",
              "  network 10.1.1.0 0.0.0.255 area 1",
              "  network 10.0.0.0 0.0.0.3   area 0",
              "!",
              "! Verify - in this order",
              "show ip ospf neighbor        ! adjacency up?",
              "show ip ospf interface brief ! right area, right cost?",
              "show ip route ospf           ! did the routes install?",
            ],
          },

          {
            type: "text",
            body: "Address translation and redundancy. Two problems solved at the same boundary: NAT lets many private hosts share few public addresses, and a first hop redundancy protocol stops the default gateway itself from being a single point of failure.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1663932210347-164a05ed0ccd?w=1200&h=600&fit=crop&q=85",
            alt: "Network appliance with blue indicator lighting",
            caption: "The edge device carries both jobs — translating addresses outward and presenting a virtual gateway inward",
          },
          {
            type: "table",
            title: "NAT Variants (OBJ 2.1)",
            caption:
              "PAT is what almost every network actually runs. The distinction the exam draws is how many inside hosts share one outside address, and whether the mapping is permanent.",
            columns: ["Type", "Mapping", "Typical use", "Limitation"],
            rows: [
              ["Static NAT", "One inside address ↔ one outside address, permanently", "Publishing an internal server on a fixed public address", "Consumes one public address per host. No conservation at all."],
              ["Dynamic NAT", "Inside addresses drawn from a pool of outside addresses, first come first served", "A group of hosts needing genuine one-to-one translation", "When the pool is exhausted, further hosts simply fail to translate."],
              ["PAT / NAT overload", "Many inside addresses share one outside address, distinguished by source port", "Effectively every internet connection in the world", "Inbound connections need explicit port forwarding; protocols embedding addresses in payload need an ALG."],
            ],
          },
          {
            type: "list",
            title: "The Four NAT Address Terms",
            items: [
              {
                term: "Inside local",
                body: "The private address as the inside host knows itself — 192.168.1.10.",
              },
              {
                term: "Inside global",
                body: "The public address that same host appears as from outside — 203.0.113.5.",
              },
              {
                term: "Outside global",
                body: "The public address of the external host being contacted, as it really is.",
              },
              {
                term: "Outside local",
                body: "The external host's address as it appears to inside hosts. Usually identical to outside global, and differs only where the far side is also being translated.",
              },
              {
                term: "How PAT actually distinguishes sessions",
                body: "The translation table keys on the full tuple — inside address, inside port, outside address, outside port — and rewrites the source port to a unique value per session. That is why one public address can support tens of thousands of concurrent connections, and why a single host opening too many sessions can exhaust the table.",
              },
            ],
          },
          {
            type: "table",
            title: "First Hop Redundancy Protocols",
            caption:
              "All three present a virtual IP and virtual MAC to clients, so hosts keep a single unchanging default gateway while the routers behind it fail over.",
            columns: ["Protocol", "Standard", "Roles", "Virtual MAC", "Notes"],
            rows: [
              ["HSRP", "Cisco proprietary", "Active and Standby", "0000.0C07.ACxx (v1)", "Default priority 100; higher wins. Preemption is off by default, so a recovered router does not automatically take back the active role unless configured to."],
              ["VRRP", "Open standard, RFC 5798", "Master and Backup", "0000.5E00.01xx", "The interoperable choice in a multi-vendor estate. Preemption is on by default — the opposite of HSRP."],
              ["GLBP", "Cisco proprietary", "AVG and multiple AVFs", "Multiple virtual MACs", "The Active Virtual Gateway hands different clients different virtual MACs, so several routers forward simultaneously instead of one standing idle."],
            ],
          },
          {
            type: "list",
            title: "VIP, Subinterfaces and Where They Fit",
            items: [
              {
                term: "Virtual IP",
                body: "An address not owned by any single physical interface. In an FHRP it is the gateway address configured on every client; in a load balancer it is the front-end address clients connect to. In both cases the point is that the address survives the failure of the device currently answering for it.",
              },
              {
                term: "Subinterfaces",
                body: "One physical interface divided into several logical ones, each with its own VLAN tag and IP address. This is router-on-a-stick — the same mechanism configured on the FortiGate in this portfolio's network project — and it is how a router provides inter-VLAN routing over a single trunk.",
              },
              {
                term: "Why FHRP and static gateways interact badly",
                body: "A statically addressed host points at one gateway address forever. Without an FHRP, replacing that router means touching every host. With one, the virtual IP stays constant and the physical router behind it can be swapped during business hours.",
              },
            ],
          },

          {
            type: "text",
            body: "Multicast routing and GRE tunnels. Two mechanisms that both exist because ordinary unicast routing cannot express what is needed: one delivers a single stream to many receivers without duplicating it, the other carries traffic a router would otherwise refuse to forward.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1624965439943-09e0238644e2?w=1200&h=600&fit=crop&q=85",
            alt: "Bundled network cabling in yellow and white",
            caption: "One source, many receivers — multicast builds a distribution tree rather than n separate streams",
          },
          {
            type: "list",
            title: "Multicast Routing (OBJ 1.4, 2.1)",
            items: [
              {
                term: "The problem it solves",
                body: "Sending one video stream to 500 receivers by unicast means transmitting it 500 times. Multicast transmits once and lets the network replicate the packet only where the paths to different receivers diverge.",
              },
              {
                term: "IGMP — who wants it",
                body: "Hosts use Internet Group Management Protocol to tell their local router which groups they wish to join. Version 2 added explicit leave messages; version 3 added source-specific filtering. Switches use IGMP snooping to avoid flooding the group to ports with no member.",
              },
              {
                term: "PIM — how it gets there",
                body: "Protocol Independent Multicast builds the distribution tree, using whatever unicast routing table already exists rather than maintaining its own. Dense mode floods first and prunes back, which suits a network where most segments want the traffic. Sparse mode is explicit-join through a Rendezvous Point and suits the far more common case where most segments do not.",
              },
              {
                term: "The RPF check",
                body: "Reverse Path Forwarding is the loop-prevention rule: a multicast packet is accepted only if it arrived on the interface the router would itself use to send unicast traffic back to the source. Arriving anywhere else, it is silently dropped.",
              },
              {
                term: "Reserved local-scope groups worth knowing",
                body: "224.0.0.1 all hosts on the segment, 224.0.0.2 all routers, 224.0.0.5 all OSPF routers, 224.0.0.6 OSPF designated routers, 224.0.0.9 RIPv2, 224.0.0.10 EIGRP. Everything in 224.0.0.0/24 is link-local and is never forwarded off the segment.",
              },
            ],
          },
          {
            type: "list",
            title: "GRE Tunnels",
            items: [
              {
                term: "What it does",
                body: "Generic Routing Encapsulation wraps an arbitrary payload in a new IP header, so two routers separated by an intervening network appear to be directly connected. It is IP protocol 47 and adds roughly 24 bytes of overhead.",
              },
              {
                term: "Why it is used with routing protocols",
                body: "IPsec in tunnel mode carries unicast IP only, so it cannot transport OSPF hellos or EIGRP updates, which are multicast. Wrapping them in GRE first turns them into unicast the IPsec tunnel will accept — which is why GRE over IPsec is such a common combination, and why the phrase is almost never GRE alone in production.",
              },
              {
                term: "GRE provides no security whatsoever",
                body: "No encryption, no authentication, no integrity checking. Anything requiring confidentiality must be paired with IPsec. Treating a GRE tunnel as private because it is called a tunnel is a genuine and recurring mistake.",
              },
              {
                term: "It is always an MTU question",
                body: "The 24 bytes of overhead reduce the payload available to the inner protocol, so the effective MTU is typically 1476. Tunnels that ping successfully and then stall on a large transfer are the PMTUD black hole from Module 7 — and MSS clamping on the tunnel interface is the usual fix.",
              },
              {
                term: "Recursive routing",
                body: "If the route to the tunnel's own destination is learned through the tunnel, the tunnel tries to carry itself and flaps continuously. The tunnel destination must always be reachable by a route learned outside the tunnel.",
              },
            ],
          },

          {
            type: "text",
            body: "Beyond the traditional model — SDN. Everything described in this module shares one architectural assumption: every router carries both a control plane, which decides where traffic should go, and a forwarding plane, which moves it there. The intelligence is distributed, and the network's behaviour is emergent — no single component holds the whole picture, and convergence is what happens when hundreds of independent devices happen to agree. Software Defined Networking inverts that. The control plane is lifted out of the individual devices and centralised in a controller with a genuine global view of the topology, while the devices are reduced to programmable forwarding elements. The controller pushes flow entries down over a southbound interface such as OpenFlow or OVSDB, and a software switch — Open vSwitch being the canonical implementation, and the forwarding plane underneath most OpenStack and container networks — simply executes match-and-action rules it did not compute. Northbound, applications and orchestration systems ask the controller for outcomes rather than configuring devices individually. The gain is that policy becomes a property of the network rather than of each box: a change is expressed once instead of being configured consistently on forty routers and hoped for. The costs are real — the controller becomes a critical dependency, the control channel becomes a latency and failure domain of its own, and a network that cannot reach its controller must fall back on cached state. In practice the two models have converged rather than one replacing the other: SD-WAN applies centralised policy over ordinary internet transport, and EVPN-VXLAN fabrics use a BGP control plane to distribute reachability into a programmable overlay — centralised intent, distributed protocols still doing the forwarding underneath.",
          },
          {
            type: "image",
            src: "https://images.unsplash.com/photo-1761489717991-a69fe927032f?w=1200&h=600&fit=crop&q=85",
            alt: "Abstract blue and grey representation of a digital control interface",
            caption: "SDN separates the decision from the device — the controller computes, the switch executes",
          },
          {
            type: "table",
            title: "Traditional Routing versus SDN",
            caption:
              "Not a replacement so much as a relocation. The same two planes exist in both models; what changes is where the control plane lives and who can program it.",
            columns: ["Aspect", "Traditional distributed routing", "Software Defined Networking"],
            rows: [
              ["Control plane", "Runs on every router; each computes its own view", "Centralised in a controller with a global topology view"],
              ["Forwarding plane", "On the same device as the control plane", "On the device, but programmed externally — e.g. Open vSwitch"],
              ["How paths are decided", "Emergent — protocols converge on an agreement", "Computed centrally and pushed down as flow entries"],
              ["Configuration", "Per device, per CLI, repeated consistently", "Expressed once through a northbound API"],
              ["Failure of the brain", "No single brain to fail — degrades locally", "Controller loss is significant; devices run on cached state"],
              ["Change velocity", "Slow, manual, error-prone at scale", "Programmatic and fast, with the risk that a bad push is also fast"],
              ["Where you meet it", "Campus, enterprise WAN, the internet", "Data centre fabrics, SD-WAN, cloud and container networking"],
            ],
          },
          {
            type: "text",
            body: "The thread running through this module is that routing is a chain of independent local decisions, and almost every routing fault is a disagreement between two of those decisions. A route that exists in the configuration but not the table is a recursive lookup that failed. Traffic taking the wrong path is a longest prefix match doing exactly what it should against a summary somebody added. An OSPF neighbour that will not form is a parameter mismatch, not a cabling fault. Diagnosis is a matter of asking, at each hop in turn, what that particular router believed and why — which is also precisely the visibility that centralising the control plane was designed to provide.",
          },
        ],
      },
      {
        id: "exam-overview",
        icon: "book",
        title: "2. CompTIA Network+ Overview",
        blocks: [
          {
            type: "text",
            lead: true,
            body: "CompTIA Network+ (N10-009) is a globally recognized certification that validates the skills needed to design, configure, manage, and troubleshoot wired and wireless networks. The exam covers network protocols, infrastructure, operations, security, and support.",
          },
          {
            type: "list",
            title: "Key Topics Covered",
            items: [
              {
                term: "Networking Fundamentals",
                body: "OSI model, TCP/IP, network types, and topologies.",
              },
              {
                term: "Network Implementation",
                body: "Switching, routing, network segmentation, and wireless networking.",
              },
              {
                term: "Network Operations",
                body: "Network monitoring, performance optimization, and management tools.",
              },
              {
                term: "Network Security",
                body: "Firewalls, VPNs, access control, and threat mitigation.",
              },
              {
                term: "Network Troubleshooting",
                body: "Diagnostic tools, methodologies, and real-world problem solving.",
              },
            ],
          },
        ],
      },

      {
        id: "exam-objectives",
        icon: "terminal",
        title: "3. Exam Objectives (Domains 1.0 – 5.0)",
        blocks: [
          {
            type: "text",
            body: "The N10-009 exam is structured around five main domains, each with specific objectives and weight in the certification test.",
          },
          {
            type: "list",
            title: "Exam Domains",
            items: [
              {
                term: "Domain 1: Networking Fundamentals (24%)",
                body: "OSI model layers, network types, TCP/IP stack, protocols, and network design principles.",
              },
              {
                term: "Domain 2: Network Implementation (20%)",
                body: "Switching, VLANs, routing, subnetting, wireless technologies, and cloud services.",
              },
              {
                term: "Domain 3: Network Operations (16%)",
                body: "Network management tools, monitoring, optimization, logging, and maintenance procedures.",
              },
              {
                term: "Domain 4: Network Security (20%)",
                body: "Firewalls, access control, encryption, VPNs, authentication, and security best practices.",
              },
              {
                term: "Domain 5: Network Troubleshooting and Tools (20%)",
                body: "Diagnostic commands, network monitoring tools, packet analysis, and systematic troubleshooting.",
              },
            ],
          },
        ],
      },

      {
        id: "resources",
        icon: "gallery",
        title: "4. Study Materials & Certificate",
        blocks: [
          {
            type: "text",
            body: "CompTIA Network+ certification validates networking expertise through a rigorous exam. Below is the certificate of completion.",
          },
          {
            type: "gallery",
            items: [
              {
                src: asset("comptia-network-plus-certificate.png"),
                alt: "CompTIA Network+ N10-009 Certificate",
                label: "View Certificate",
              },
            ],
          },
        ],
      },

      {
        id: "reflection",
        icon: "note",
        title: "5. Reflection",
        blocks: [
          {
            type: "text",
            body: "Pursuing CompTIA Network+ deepened my understanding of enterprise networking. The certification covers not just the protocols I work with daily, but the broader context: how networks are designed, secured, and operated at scale. It reinforced the importance of systematic troubleshooting and the value of industry-standard best practices.",
          },
        ],
      },
    ],
  },
];
/* 6. DOCUMENTATION GALLERY                                          */
/*    `span` controls the masonry layout on desktop:                 */
/*      'feature' = large tile, 'tall' = half-height, 'wide' = row   */
/* ---------------------------------------------------------------- */

export const documentation = {
  title: "Internship Documentation",
  subtitle:
    "The work itself — the appliance I configured, the screens I configured it on, and the evidence that each change did what it was meant to do.",
  items: [
    {
      span: "feature",
      tag: "Hardware",
      tagStyle: "primary",
      title: "FortiGate 90G on the Bench",
      caption:
        "The next-generation firewall at the centre of my internship, powered up and cabled — WAN on the shared X1 port, users on the switched LAN ports.",
      image: asset("fortigate-90g-unit.jpg"),
      alt: "FortiGate 90G desktop firewall powered on with copper patch leads in the LAN and WAN ports",
    },
    {
      span: "tall",
      tag: "Portrait",
      tagStyle: "primary",
      title: "Network Engineering Intern",
      caption: "AirAsia Indonesia, Tangerang — July to September 2026.",
      image: asset("fotoairasia.jpeg"),
      alt: "Portrait of Muhammad Rafi Gunawan",
    },
    {
      span: "tall",
      tag: "Automation",
      tagStyle: "muted",
      title: "ICT Automation Dashboard",
      caption: "The operator view I built for the daily endpoint compliance report.",
      image: asset("project-ict-dashboard.jpg"),
      alt: "ICT Automation dashboard with browser profile, Gmail API and Gemini AI readiness cards",
      fit: "contain",
    },
    {
      span: "wide",
      tag: "Configuration",
      tagStyle: "muted",
      title: "FortiGate Interface List",
      caption:
        "X1 carrying the WAN address, the lan VLAN switch acting as the user gateway with its DHCP range, and the FortiLink aggregate reserved for FortiSwitch.",
      image: asset("fortigate-interfaces.jpg"),
      alt: "FortiGate interface list showing the fortilink aggregate, physical interfaces and the lan VLAN switch",
      fit: "contain",
    },
    {
      span: "wide",
      tag: "Verification",
      tagStyle: "primary",
      title: "Forward Traffic Log",
      caption:
        "The web filter proving itself: Deny (UTM Blocked) against the filtered domains and Accept elsewhere, every session attributable to a client IP under the Internetan policy.",
      image: asset("fortigate-traffic-log.jpg"),
      alt: "FortiGate forward traffic log showing UTM blocked denials alongside accepted sessions",
      fit: "contain",
    },
    {
      span: "tall",
      tag: "Security Profile",
      tagStyle: "muted",
      title: "Web Filter Profile",
      caption: "The Web-Test profile with the FortiGuard category filter enabled.",
      image: asset("fortigate-webfilter-profile.jpg"),
      alt: "FortiGuard category based filter inside the Web-Test web filter profile",
      fit: "contain",
    },
    {
      span: "tall",
      tag: "Policy",
      tagStyle: "muted",
      title: "Static URL Blocklist",
      caption: "Wildcard entries evaluated ahead of the category engine.",
      image: asset("fortigate-url-filter-list.jpg"),
      alt: "Static URL filter list with three wildcard entries set to block",
      fit: "contain",
    },
    {
      span: "tall",
      tag: "Output",
      tagStyle: "muted",
      title: "Delivered Daily Report",
      caption: "The automated compliance report as the ICT team receives it.",
      image: asset("project-ict-email-report.jpg"),
      alt: "Delivered ICT Daily Endpoint Compliance Report email with the AirAsia-branded HTML body",
      fit: "contain",
    },
  ],
};

/* ---------------------------------------------------------------- */
/* 7. ABOUT ME                                                       */
/* ---------------------------------------------------------------- */

export const about = {
  eyebrow: "About this placement",
  greeting: "Hello, I'm",
  intro:
    "This is my internship report for AirAsia Indonesia, where I spent the placement with the ICT Support & Operation team at Red House, Tangerang. Two pieces of work ran through it. The first was a FortiGate 90G: I brought it up from default to a working internet edge — interfaces, addressing, DHCP, a default route and the firewall policy that lets user laptops out — then added VLAN segmentation and a FortiGuard web filter, and verified every rule in the forward traffic log. The second was the ICT daily reporting routine: I built the monitoring dashboard the team uses and automated the report end to end, so a compliance summary now reaches their inbox at 09:00 each morning without anyone opening a browser.",

  /* Three cards, all scoped to the placement — no CV material. */
  placement: {
    title: "The Placement",
    icon: "briefcase",
    facts: [
      { label: "Company", value: "PT Indonesia AirAsia" },
      { label: "Team", value: "ICT Support & Operation" },
      { label: "Site", value: "Red House, Tangerang" },
      { label: "Period", value: "July 27 – September 11, 2026" },
      { label: "Role", value: "Network Engineering Intern" },
    ],
  },

  focus: {
    title: "What I Was Responsible For",
    icon: "route",
    body: "Two things the team needed and I owned end to end. On the network side: configure the next-generation firewall so the user segment reaches the internet through an explicit, filtered, logged path rather than a flat one. On the operations side: remove the manual daily report — build the dashboard that holds the endpoint compliance picture, then automate capturing, analysing, formatting and delivering it. Both were taken from nothing to running and verified inside the placement.",
  },

  toolkit: {
    title: "Used During the Internship",
    icon: "code",
    // Only what I actually touched at AirAsia — not a general skills list.
    items: [
      "FortiGate 90G",
      "FortiOS",
      "Firewall Policy & NAT",
      "VLAN & Router on a Stick",
      "Static Routing",
      "DHCP",
      "FortiGuard Web Filtering",
      "SSL Certificate Inspection",
      "Forward Traffic Log Analysis",
      "Python",
      "Playwright",
      "Gemini API",
      "Gmail API",
      "Windows Task Scheduler",
    ],
  },

  /* What I actually worked on at AirAsia. Dated entries are anchored to
     evidence captured at the time — the first delivered report and the
     verification log — rather than to a planned schedule. */
  experience: [
    {
      role: "Onboarding & Network Familiarisation",
      period: "July 27 – August 5, 2026",
      body: "Learned the environment before changing anything in it: how the endpoints and network devices are laid out, how the ICT team checks compliance day to day, and which parts of that routine were still being done by hand. Those manual routines became the brief for everything that followed.",
    },
    {
      role: "ICT Monitoring Dashboard",
      period: "Early August 2026",
      body: "Built the internal dashboard that holds the endpoint compliance picture, including readiness indicators for the browser profile, the Gmail API and the Gemini key so a failed automated run is diagnosed at a glance instead of from the logs.",
    },
    {
      role: "Daily Report Automation",
      period: "First automated report delivered August 6, 2026",
      body: "Automated the reporting loop on top of that dashboard. Windows Task Scheduler fires a Python orchestrator at 09:00; Playwright drives a headless Chromium through the sign-in, captures the dashboard and extracts the metrics as JSON; the Gemini API writes the executive summary; the report is rendered to HTML, Markdown and PDF, mailed through Gmail and archived to Google Drive.",
    },
    {
      role: "FortiGate NGFW Configuration",
      period: "August 2026",
      body: "Configured a FortiGate 90G from default: the WAN interface at 10.42.0.145, the switched LAN at 192.168.1.99/24 with a DHCP scope for user laptops, the default static route to the upstream gateway, and the firewall policy — Internetan — that permits the segment outbound with NAT.",
    },
    {
      role: "VLAN Segmentation & Web Filtering",
      period: "Verified in the traffic log on August 20, 2026",
      body: "Applied VLAN segmentation with router-on-a-stick so inter-VLAN traffic becomes a policy decision, then built the Web-Test FortiGuard profile with a static URL blocklist and bound it to the policy with certificate inspection. Confirmed the result from a client at 192.168.1.111: Deny (UTM Blocked) against the filtered domains, Accept elsewhere.",
    },
    {
      role: "Documentation & Handover",
      period: "Through September 11, 2026",
      body: "Wrote up both builds so they can be repeated by someone else — the configuration walkthroughs with their GUI paths and CLI equivalents, the pipeline architecture, and this report itself.",
    },
  ],

  // ⚠ PLACEHOLDER — the previous quotes were invented by the design tool.
  // Add real feedback from your AirAsia supervisor here, or leave the
  // array empty and the section stays hidden.
  feedback: [],
};

/* ---------------------------------------------------------------- */
/* 8. FOOTER                                                         */
/* ---------------------------------------------------------------- */

export const footer = {
  links: [
    { label: "Projects", to: "/projects" },
    { label: "Courses", to: "/courses" },
    { label: "About Me", to: "/about" },
  ],
};
