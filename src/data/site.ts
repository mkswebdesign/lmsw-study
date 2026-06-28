export const site = {
  name: 'Katie Mayes',
  title: 'Katie Mayes | Clear Messaging and Focused Strategy',
  description:
    'Messaging-first strategic advisory for founders and solo internal marketers who need clearer language, focused strategy, and practical direction.',
  nav: [
    { label: 'The Mayes Method', href: '/method' },
    { label: 'Services', href: '/services' },
    { label: 'Founders', href: '/for-founders' },
    { label: 'Solo Marketers', href: '/for-solo-marketers' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
  ],
};

export const ctas = {
  primary: { label: 'Book a free strategy call', href: '/apply' },
  secondary: { label: 'Explore services', href: '/services' },
};

export const audiences = [
  {
    title: 'Founders & entrepreneurs',
    href: '/for-founders',
    visual: 'founder',
    image: '/assets/katie-mayes/founder-strategy-v2.png',
    imageAlt: 'A founder strategy table with notes, planning cards, books, and a pen.',
    summary: 'You built the business. Now you need to market it clearly.',
    pains: [
      'Too close to your brand to see what is working.',
      'Not ready to hire a full marketing team.',
      'Want strategy you can actually implement yourself.',
      'Tired of second-guessing your messaging.',
    ],
    clarityChanges: [
      'A clearer explanation of what you do and why it matters.',
      'A focused plan you can actually use.',
      'Outside perspective before you spend more time or money.',
    ],
    recommendedOffers: ['strategic-reset', 'outside-eye'],
  },
  {
    title: 'Solo internal marketers',
    href: '/for-solo-marketers',
    visual: 'solo',
    image: '/assets/katie-mayes/solo-marketer-workflow-v2.png',
    imageAlt: 'A calm planning desk with a weekly workflow map, cards, books, and a closed laptop.',
    summary: "You're the whole marketing department. And everyone knows it.",
    pains: [
      'Making strategic decisions with no senior backup.',
      'Managing vendors, content, and campaigns alone.',
      'Want outside perspective without a full agency.',
      'You think strategically - you need someone to think with.',
    ],
    clarityChanges: [
      'More confident recommendations before they reach leadership.',
      'A clearer way to sort competing priorities.',
      'A senior perspective without a full agency engagement.',
    ],
    recommendedOffers: ['thinking-partner', 'outside-eye'],
  },
] as const;

export const offers = [
  {
    slug: 'outside-eye',
    name: 'The Outside Eye',
    short: 'One session. Expert perspective. A clear path forward.',
    transformation:
      'For solo marketers and lean teams who need an outside read on a specific challenge and a concrete plan to act on.',
    investment: '$595 flat',
    bestFor: [
      'A specific messaging, content, or positioning challenge',
      'A decision that needs outside perspective before you keep building',
      'A focused strategy conversation without an ongoing engagement',
    ],
    solves: [
      'A message that feels close but not clear enough',
      'A campaign, offer, or page that needs sharper perspective',
      'A decision that would benefit from a senior outside read',
    ],
    includes: [
      'Pre-session brief and content or messaging review',
      '90-minute strategy session, recorded',
      'Three-part action plan',
      'Seven days of follow-up email support',
    ],
    process: ['Share context', 'Review the material', 'Pressure-test the pattern', 'Leave with direction'],
    timeline: '2-week turnaround.',
    outcome:
      "You'll leave with outside perspective on what is actually working, a clear next step, and a focused plan you can take straight to your team or leadership.",
    primaryCta: 'Book the Outside Eye',
  },
  {
    slug: 'thinking-partner',
    name: 'The Thinking Partner',
    short: "Ongoing strategic support so you're never deciding alone.",
    transformation: 'A senior strategist in your corner, month after month.',
    investment: '$1,250/month',
    bestFor: [
      'Solo marketers who need strategic backup',
      'Founders or teams with recurring message and priority decisions',
      'People who need someone to think with before the work goes live',
    ],
    solves: [
      'Decision fatigue',
      'Strategic work crowded out by execution',
      'Messaging and campaign direction that needs steady refinement',
    ],
    includes: [
      'Two 60-minute coaching calls per month',
      'Messaging and content review',
      'Action plans, templates, and tools',
      'Email access between calls',
      'Optional goal tracking',
    ],
    process: ['Set the focus', 'Review active decisions', 'Pressure-test options', 'Translate insight into action'],
    timeline: 'Ongoing, 4-month minimum.',
    outcome:
      'Steady, confident decision-making with a trusted strategist to pressure-test your thinking before it reaches leadership.',
    primaryCta: 'Discuss Thinking Partner',
  },
  {
    slug: 'strategic-reset',
    name: 'The Strategic Reset',
    short: "30 days to realign your company's message and sharpen your plan.",
    transformation: 'A short, intensive container for a focused reset.',
    investment: '$2,500 flat',
    bestFor: [
      'A company message or marketing direction that needs realignment',
      'A reset before a launch, growth push, or major decision',
      'Teams with too many possible directions and not enough clarity',
    ],
    solves: [
      'Positioning drift',
      'Overbuilt plans without a clear decision spine',
      'Message, audience, and offer choices that need to be reconnected',
    ],
    includes: [
      '90-minute kickoff call',
      'Two 60-minute follow-up sessions',
      'Full messaging audit and positioning map',
      'Final strategy roadmap',
      'Email support throughout',
    ],
    process: ['Audit the current state', 'Name the friction', 'Clarify the positioning', 'Map the roadmap'],
    timeline: '4 weeks.',
    outcome:
      'A realigned message, a clear positioning map, and a final roadmap you can confidently bring to your organization.',
    primaryCta: 'Plan a Strategic Reset',
  },
] as const;

export const methodPrinciples = [
  { title: 'Messaging-first', body: 'Get crystal clear on what to say before worrying about where to say it.' },
  {
    title: 'Practical strategy',
    body: 'Grounded in what will actually move the needle for your specific situation.',
  },
  {
    title: 'Lean + flexible',
    body: 'Tools you can use without adding complexity or building a team to run them.',
  },
  {
    title: 'Real feedback',
    body: "Direct, honest coaching that respects your time and doesn't sugarcoat.",
  },
] as const;

export const methodPrinciplesFull = [
  {
    title: 'Messaging first, always',
    body:
      "Before we talk about content, channels, or campaigns, we get clear on what you're actually saying - and whether it's landing. Your message is the foundation. If it's off, everything built on top of it is off too.",
  },
  {
    title: 'Strategy must be specific',
    body:
      'Generic advice is easy to give and nearly impossible to act on. The Mayes Method produces recommendations specific to your business, your audience, and your actual capacity.',
  },
  {
    title: 'Simplicity is the goal',
    body:
      'The right strategy should make marketing feel more manageable, not less. The Mayes Method is designed to fit inside real life - lean, flexible, and built to last beyond the engagement.',
  },
  {
    title: 'Honesty over comfort',
    body:
      "The most useful thing a strategic partner can do is tell you what is not working - clearly, respectfully, and without burying it in qualifications.",
  },
] as const;

export const methodProcess = [
  {
    title: 'Diagnose before prescribing',
    body:
      "Every engagement starts with a structured audit of your messaging, positioning, content, and how you're showing up.",
  },
  {
    title: 'Clarify the message',
    body:
      'We sharpen your voice, tighten your positioning, and get precise about who you are talking to and what you want them to do.',
  },
  {
    title: 'Build the strategy',
    body:
      'With a clear message as the foundation, we build a focused, actionable plan you can pick up and use.',
  },
  {
    title: 'Support the execution',
    body:
      'Depending on the format, Katie stays in your corner as you implement, review content, and pressure-test decisions.',
  },
] as const;

export const methodOutcomes = [
  {
    title: 'A sharper message',
    body: 'Clear, specific language that reflects your value and speaks to the right people.',
  },
  {
    title: 'A focused strategy',
    body: 'A specific, prioritized plan - not everything you could do, but what you should do next.',
  },
  {
    title: 'An outside perspective',
    body: "Honest feedback from someone who is not inside your bubble and has no reason to tell you only what you want to hear.",
  },
  {
    title: 'Tools you can own',
    body: 'Templates, frameworks, and reference points you can use long after the engagement ends.',
  },
] as const;

export const comparisonRows = [
  ['Starts with tactics - content, channels, cadence', 'Starts with message - voice, value, positioning'],
  ['Assumes the message is fine and focuses on distribution', "Diagnoses what's actually off before prescribing anything"],
  ['Generic frameworks applied to every situation', 'Custom to your business, your audience, your capacity'],
  ['Measures success by output - posts, emails, ads', 'Measures success by clarity and traction'],
  ['Adds complexity and requires more tools or team', 'Designed to simplify and work with how you already operate'],
  ['Leaves you dependent on whoever sold you the system', 'Builds your own capability so you can own it going forward'],
] as const;

export const trustPoints = [
  {
    title: 'A clearer message',
    body: 'The language gets sharper because the thinking underneath it gets cleaner first.',
  },
  {
    title: 'A focused strategy',
    body: 'The next move becomes easier to see because the plan is built around capacity, audience, and priority.',
  },
  {
    title: 'A useful outside read',
    body: 'Katie brings the direct perspective that is hard to find when you are too close to the work.',
  },
] as const;

export const beliefs = [
  'Clarity is more valuable than content.',
  'You do not need to be everywhere - just consistent in the right places.',
  'Strategy should be honest and custom.',
  'Marketing should not feel like a performance.',
  'You do not have to figure it out alone.',
] as const;

export const faqs = [
  {
    category: 'For founders & entrepreneurs',
    items: [
      {
        question: 'I am not sure my messaging is the problem - how do I know if coaching is actually what I need?',
        answer:
          "That uncertainty is usually a signal in itself. If you've been marketing consistently but not getting the traction you expected, or you find yourself second-guessing what to say and where to focus, the issue is often rooted in messaging or positioning - even when it does not look that way on the surface.",
      },
      {
        question: 'Why not just hire a marketing agency instead?',
        answer:
          "An agency makes sense when you're ready to hand off execution. But if your messaging is not clear yet, handing it off just scales the problem. Coaching gets your strategy and message right so any execution is working from a solid foundation.",
      },
      {
        question: "I've tried courses and read all the books. What makes this different?",
        answer:
          'Courses and books give you general frameworks applied to imaginary businesses. Coaching gives you someone looking directly at your specific situation - your voice, your offer, your audience, and your constraints - and telling you exactly what to do.',
      },
      {
        question: 'I am early-stage and still figuring things out. Is this too soon for me?',
        answer:
          "Not necessarily. Early-stage is one of the best times to get messaging right, before you've spent months or money going in a direction that does not land. A focused session is often the right starting point.",
      },
      {
        question: 'What happens after the coaching ends? Will I be able to sustain this on my own?',
        answer:
          'That is the goal. Every engagement is designed to build your own capability, not create dependency. You leave with a clear strategy, documented action plans, and frameworks you can keep using.',
      },
    ],
  },
  {
    category: 'For solo internal marketers',
    items: [
      {
        question: 'My company would need to approve this. How do I make the case internally?',
        answer:
          "The easiest frame: you're bringing in a fractional strategic advisor at a fraction of what a senior marketing hire or agency retainer would cost. It is focused on your strategic capability, not just deliverables you hand back.",
      },
      {
        question: 'I work in a specific industry. Do you need to know my sector to be useful?',
        answer:
          "Not as much as you might think. The Mayes Method is grounded in messaging and positioning strategy, which operates on principles that hold across industries. You're the subject-matter expert; Katie is the expert on how to communicate it clearly.",
      },
      {
        question: "I do not own the brand - my company does. How does coaching work when I'm not the final decision-maker?",
        answer:
          'Coaching here is less about making unilateral decisions and more about sharpening your strategic thinking, strengthening your recommendations, and giving you frameworks to bring better ideas to the table with more confidence.',
      },
      {
        question: 'How is this different from hiring a marketing consultant for a project?',
        answer:
          'A consultant typically comes in, does defined work, hands it over, and leaves. Coaching builds your capability: the thinking, frameworks, and strategic judgment stay with you.',
      },
      {
        question: 'I am already busy. How much time does this actually take?',
        answer:
          'The Thinking Partner involves two 60-minute calls per month. Work between sessions is prioritized and realistic. The point is to make your existing time more effective, not add a second full-time job.',
      },
    ],
  },
] as const;

export function getOffer(slug: string) {
  return offers.find((offer) => offer.slug === slug);
}

export function getAudienceOffers(slugs: readonly string[]) {
  return slugs.map((slug) => getOffer(slug)).filter(Boolean);
}
