// Single source of truth for all marketing copy on go-volare.com.
// Voice: direct, plainspoken, sentence case, no buzzwords.

export const company = {
  name: "Volare Consulting",
  tagline: "Your ideas taking flight.",
  // TODO: confirm address before launch
  email: "hello@go-volare.com",
  github: "https://github.com/Volare-Consulting-Software",
};

export const home = {
  pilotaPillars: [
    {
      title: "Spec",
      body: "From the rough idea to a PRD a team can build against. Acceptance criteria, edge cases, and the scope you actually want.",
    },
    {
      title: "Skeleton",
      body: "A walking app on day one. Routes, data, deploys, and the smallest end-to-end path through the system.",
    },
    {
      title: "Slices",
      body: "Vertical slices that ship. Each one tested, reviewed, and merged before the next begins. Demo-ready every step.",
    },
  ],
  philosophy: {
    headline: "We build software the way it should have been built the first time.",
    body: [
      "Most software gets built in a hurry, layered with workarounds, and shipped before anyone could ask the right questions. We do the opposite. We design what to build before we build it, ship a walking skeleton on day one, and merge vertical slices that each move the product forward.",
      "AI does the heavy lifting on the inside. People stay in charge at the moments that matter — what to build, what to keep, what to throw out. The result is software that survives contact with real users, because real users were the point all along.",
    ],
  },
  vito: {
    headline: "Vito gives your software a voice.",
    body: "Vito is the voice of your product across chat, agents, and customer-facing surfaces. He follows our brand voice — direct, plainspoken, no buzzwords — so the words your customers read sound like they came from people, not a model. He is the voice we use ourselves, made available to you.",
  },
  about: {
    headline: "Volare Consulting.",
    body: [
      "We are a small engineering team that ships software for companies that need outcomes, not hours.",
      "Our work is grounded in two products we built and use every day: Pilota for the way software gets made, and Vito for the way it speaks.",
      "If you have an idea worth building, we want to hear it.",
    ],
  },
};

export const pilota = {
  hero: {
    eyebrow: "Volare Pilota",
    title: "Pilota.",
    subtitle: "An AI SDLC engine for teams that ship.",
  },
  problem: {
    headline: "Software gets built the wrong way around.",
    body: [
      "Tickets land before specs. Designs land after code. Tests come at the end, when there's no time left to write them. Reviews catch what the team wished it had caught earlier.",
      "Pilota inverts the order. The work moves forward only when the previous stage is real — written down, agreed to, and small enough to verify.",
    ],
  },
  pipeline: [
    {
      title: "Idea",
      body: "Capture the raw goal. Who it's for, what it changes, what success looks like. No solutioning yet.",
    },
    {
      title: "Spec",
      body: "Scope, acceptance criteria, edge cases. Written so anyone on the team can build it the same way.",
    },
    {
      title: "PRD",
      body: "The product story stitched together. Why this, why now, what we're not doing.",
    },
    {
      title: "Design",
      body: "User-facing surfaces and the data they need. Annotated, not pixel-perfected.",
    },
    {
      title: "Walking skeleton",
      body: "An end-to-end path through the system on day one. Routes, data, deploys, real CI.",
    },
    {
      title: "Vertical slices",
      body: "Each slice ships. Tested, reviewed, merged. The product grows one demo at a time.",
    },
  ],
  gates: {
    headline: "Humans where it matters.",
    body: "Pilota runs the loop. People approve the gates — what to build, what's good enough, what to ship. The agents handle the work between the gates.",
  },
  agnostic: {
    headline: "Language- and integration-agnostic.",
    body: "TypeScript on Vercel through GitHub. C# on Azure through Azure Pipelines. Python on AWS. Whatever your team already runs, Pilota plugs into it.",
  },
  outcomes: [
    {
      title: "Merged code",
      body: "Code reviewed by humans and shipped on a real branch, not a sandbox.",
    },
    {
      title: "Passing tests",
      body: "Tests that exist because behavior was defined first. Coverage that means something.",
    },
    {
      title: "A working product",
      body: "On every demo, what you see is what you can use. No mockup theater.",
    },
  ],
};

export const vito = {
  hero: {
    eyebrow: "Volare Vito",
    title: "Vito.",
    subtitle: "The voice of your product. From Latin vita — life.",
  },
  uses: [
    {
      title: "Chatbots",
      body: "Customer-facing assistants that sound like a person who works at your company, because the voice was written that way.",
    },
    {
      title: "Agentic workflows",
      body: "Background agents that summarize, route, and follow up. Vito keeps the tone consistent wherever they speak.",
    },
    {
      title: "Customer surfaces",
      body: "Onboarding emails, in-product copy, error messages. The places customers feel your brand without realizing it.",
    },
  ],
  voice: {
    headline: "Vito inherits the Volare voice.",
    body: "Direct. Plainspoken. No buzzwords, no exclamation marks, no false cheer. Vito sounds like Volare because Volare wrote the voice he reads from. You can adopt the same voice or layer your own brand on top.",
  },
};
