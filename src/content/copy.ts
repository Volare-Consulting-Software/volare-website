// Single source of truth for all marketing copy on go-volare.com.
// Voice: direct, plainspoken, sentence case, no buzzwords.

export const company = {
  name: "Volare Consulting",
  tagline: "Your ideas taking flight.",
  email: "slongietti@gmail.com",
  github: "https://github.com/Volare-Consulting-Software",
};

export const home = {
  pilotaPillars: [
    {
      title: "Plan it",
      body: "We define what to build, who it's for, and what success looks like — before any code is written.",
    },
    {
      title: "Build it small first",
      body: "A working version of the whole thing on day one. Real software you can run, not a mockup.",
    },
    {
      title: "Grow it in usable pieces",
      body: "Each release adds a feature you can use. No big-bang launch that misses the date.",
    },
  ],
  philosophy: {
    headline: "We build software the way it should have been built the first time.",
    body: [
      "Most software gets built in a hurry, layered with workarounds, and shipped before anyone could ask the right questions. We do the opposite. We design what to build before we build it, get a working version live on day one, and grow it in pieces customers can actually use.",
      "AI does the heavy lifting on the inside. People stay in charge at the moments that matter — what to build, what to keep, what to throw out. The result is software that survives contact with real users, because real users were the point all along.",
    ],
  },
  vito: {
    headline: "Meet Vito — your team's AI assistant.",
    body: "Vito ships with the software we build for you. He talks to your team where they already work — email, Teams, Slack, SMS, WhatsApp — and pulls answers from the systems they already use. Fact-first, no AI fluff.",
  },
  about: {
    headline: "Volare Consulting.",
    body: [
      "We're a small consulting firm that specializes in technology and software. We design, build, and improve the systems companies actually depend on — for organizations who need outcomes that make a difference to their bottom line.",
      "Most engagements end in working software. Some end in a smarter integration, a clean migration, or a system that finally talks to the rest of the business. The common thread is judgment: we tell you what to build before we build it, and we ship the version that holds up in production.",
      "Our work is grounded in two things we built and use every day: Pilota — the AI engine that lets us ship fast without sacrificing quality — and Vito, the AI assistant we embed in the systems we deliver.",
      "If you have an idea worth building, we want to hear it.",
    ],
  },
  testimonials: {
    eyebrow: "What customers say",
    headline: "Real software. Real time saved.",
    items: [
      {
        quote:
          "Volare built us a custom invoice management system — work that used to take hours now takes seconds. They also moved us off a third-party email provider and put us in control of our own domain.",
        author: "Oscar Menendez Chavez",
        title: "CEO",
        company: "NC Pro Construction",
        companyLogo: "/ncpro-logo.png" as string | null,
        companyUrl: "https://ncproconstruction.com" as string | null,
        authorPhoto: "/oscar.jpg" as string | null,
        authorInitials: "OM",
        location: "Charlotte, NC",
      },
      {
        quote:
          "Anything technology, we trust Volare to get it done.",
        author: "Ninfa Villagra",
        title: "Owner",
        company: "Target Tax Solutions",
        companyLogo: "/target-tax-logo.jpg" as string | null,
        companyUrl: "https://target-tax-solutions.square.site/" as string | null,
        authorPhoto: "/ninfa.jpg" as string | null,
        authorInitials: "NV",
        location: null as string | null,
      },
    ],
  },
  leadership: {
    eyebrow: "Leadership",
    headline: "Built and led by an engineer.",
    members: [
      {
        name: "Sam Longietti",
        title: "Founder & CEO",
        location: "Charlotte, North Carolina",
        initials: "SL",
        photo: "/sam.png" as string | null,
        bio: "Sam has spent his career writing the software that moves money and freight. Years in transportation tech and fintech taught him that the systems people depend on every day have to be right — fast isn't enough on its own. He founded Volare Consulting to build that kind of software for everyone else, with AI doing the heavy lifting and humans in charge of quality.",
        linkedin: "https://www.linkedin.com/in/sam-longietti-52bbb268/",
      },
    ],
  },
};

export const pilota = {
  hero: {
    eyebrow: "How we work",
    title: "Pilota.",
    subtitle:
      "An AI engine with humans at every gate. It's how we ship software fast — without the slop.",
  },
  intro: {
    headline: "Pilota is the engine. You see the result.",
    body: "Pilota is what we use to deliver software faster than a typical team while keeping quality where it should be. AI handles the heavy lifting. Humans make the calls. You hire Volare; Pilota is how the work gets done.",
  },
  engagements: [
    {
      tagline: "Green-field",
      title: "New systems",
      body: "Idea to working software. We design and build new systems end-to-end — architecture, integrations, and the user experience baked in from day one.",
    },
    {
      tagline: "Connect what you have",
      title: "Integrations",
      body: "Make systems talk to each other. Wire in a new third-party API, replace a stale vendor, or stitch internal tools together so the data finally flows.",
    },
    {
      tagline: "Build on what works",
      title: "Improvements",
      body: "Fix what's slow, ship what's stuck. We work alongside your team to modernize, extend, or unstick software that's already in production.",
    },
    {
      tagline: "Stalled AI projects",
      title: "Finish what failed",
      body: "AI projects stall when there's no plan, no humans in the loop, or no honest measure of done. We diagnose what went wrong, keep what's salvageable, and ship the version that was promised.",
    },
  ],
  process: [
    {
      title: "Plan it",
      body: "We define what to build, who it's for, and what success looks like. Scope, edge cases, and what you'll see at the end — written down before any code is written.",
    },
    {
      title: "Build it small first",
      body: "A working version of the whole thing on day one. Routes, data, real deploys — small but end-to-end. Not a mockup, not a slide.",
    },
    {
      title: "Grow it in usable pieces",
      body: "Each release adds a feature you can demo, ship, or hand to a user. The product grows one usable step at a time, on a schedule that holds.",
    },
    {
      title: "Review every step",
      body: "AI handles the work between gates. Humans approve what ships — what to build next, what's good enough, and what isn't yet. Quality is never an afterthought.",
    },
  ],
  slop: {
    headline: "Fast software, without the slop.",
    body: "AI is fast. AI also gets things wrong. We put humans where it matters — choosing what to build, what to keep, and what to ship — so speed never costs you quality. That's the whole point of Pilota: the speed of AI with the judgment of people who've been doing this for a long time.",
  },
  outcomes: [
    {
      title: "Software you can use",
      body: "Working software at every checkpoint. Real, runnable, demo-able. No mockup theater, no slide-deck progress.",
    },
    {
      title: "On the date you agreed to",
      body: "Schedules that hold because the work is sized to fit them. Each step is small enough to estimate honestly.",
    },
    {
      title: "Quality customers feel",
      body: "Rigorously tested and automatically published for repeatable quality. Every release verified the same way, every time.",
    },
  ],
};

export const vito = {
  hero: {
    eyebrow: "Volare Vito",
    title: "Vito.",
    subtitle:
      "Your team's AI assistant. He talks where they talk, knows what they know, and answers in facts.",
  },
  intro: {
    headline: "A personal assistant for your team — across every channel they use.",
    body: "Vito is an AI assistant Volare builds into the software we ship for you. He shows up where your team already works, plugs into the systems that hold the answers, and replies in plain language without the AI fluff.",
  },
  channels: {
    headline: "Where Vito speaks.",
    body: "Vito meets your team where they already are. One assistant, one personality, every surface they use to get work done.",
    items: [
      "Email",
      "Microsoft Teams",
      "Slack",
      "Google Chat",
      "SMS",
      "WhatsApp",
      "Voice",
      "In-app chat",
    ],
  },
  knowledge: {
    headline: "Vito knows your systems.",
    items: [
      {
        title: "Built-in by Volare",
        body: "When we ship software for you, Vito ships with it. He knows your data, your users, and your business rules from the day the system goes live.",
      },
      {
        title: "Connected to what you run",
        body: "Hand Vito the keys to systems your team already uses — CRM, ticketing, knowledge base, internal docs. He works with what's there, no rip-and-replace.",
      },
    ],
  },
  voice: {
    headline: "Direct. Plainspoken. Fact-first.",
    body: "Vito doesn't pad. No \"I'd be happy to help,\" no \"I hope this finds you well,\" no marketing fog. He answers the question, cites where the answer came from, and stops talking when there's nothing left to say. Layer your brand on top so Vito sounds like you — not us.",
  },
};
