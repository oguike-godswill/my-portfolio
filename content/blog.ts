export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; language: string; code: string }
  | { type: "quote"; text: string }
  | { type: "note"; text: string };

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  blocks: Block[];
}

export const posts: Post[] = [
  {
    slug: "quiet-consistency-beats-loud-motivation",
    title: "Why quiet consistency beats loud motivation",
    description:
      "Motivation feels good for a weekend, but ordinary daily habits are what actually change your skills and your life.",
    date: "2026-11-18",
    tags: ["Life", "Discipline", "Mindset"],
    blocks: [
      {
        type: "p",
        text: "There is a version of ambition that looks great online. Big announcements, late night declarations, fresh notebooks, and a burst of energy that lasts about four days. I used to rely on that feeling a lot. Whenever I felt inspired, I could code for ten hours straight. Whenever the feeling faded, days would pass without a single commit.",
      },
      { type: "h2", text: "The trap of waiting to feel ready" },
      {
        type: "p",
        text: "Motivation is unreliable because it depends on your mood, your sleep, the weather, and whatever happened to you that morning. If your progress requires you to feel excited before you open your laptop, you will only move forward on good days. Most days in real life are just ordinary days.",
      },
      {
        type: "p",
        text: "Reading Daniel Walter on discipline made something click for me. Discipline is not about being harsh with yourself. It is simply deciding in advance that you will show up for an hour even when the work feels boring, slow, or slightly frustrating.",
      },
      { type: "h2", text: "Small sessions add up faster than heroic ones" },
      {
        type: "ul",
        items: [
          "Two focused hours every day will outperform one twelve hour sprint every other week.",
          "Stopping while you still have a little energy left makes it much easier to return tomorrow.",
          "Keeping your promises to yourself in private builds a quiet confidence nobody can take from you.",
        ],
      },
      {
        type: "quote",
        text: "Nobody sees the Tuesday evening when you fixed one stubborn bug and read twenty pages before bed, yet those evenings quietly build your entire future.",
      },
      { type: "h2", text: "What works for me now" },
      {
        type: "p",
        text: "I stopped announcing goals before I start them. Instead, I pick one concrete thing to finish today, close extra tabs, and work quietly until it is done. Over months, those small ordinary days turn into shipped apps, finished books, and a much calmer mind.",
      },
    ],
  },
  {
    slug: "psychology-of-money-and-building",
    title: "What The Psychology of Money taught me about patience and building",
    description:
      "Morgan Housel wrote a book about finance, yet almost every chapter reads like advice for building a meaningful career in tech.",
    date: "2026-11-05",
    tags: ["Books", "Money", "Life"],
    blocks: [
      {
        type: "p",
        text: "I picked up The Psychology of Money expecting practical tips on saving and investing. What I actually got was a perspective shift on time, ego, and what freedom really looks like. Even though the book is about wealth, I kept thinking about software engineering and life choices on almost every page.",
      },
      { type: "h2", text: "Staying in the game matters more than looking brilliant" },
      {
        type: "p",
        text: "One idea from the book stayed with me for weeks. Compounding does not require extraordinary returns every single year. It requires decent returns repeated for a very long time without blowing up. In tech, it is easy to burn out chasing every new framework or comparing your timeline with strangers on the internet.",
      },
      {
        type: "p",
        text: "If you keep learning steadily, ship real projects, treat people well, and protect your health so you can stay in the game for years, compounding does the heavy lifting for you.",
      },
      { type: "h2", text: "True wealth is control over your time" },
      {
        type: "p",
        text: "Housel writes that the highest dividend money pays is the ability to wake up and say I can do what I want today, with who I want, for as long as I want. That resonated deeply. Chasing expensive things to impress people who barely notice you is exhausting. Building skills and savings that buy you peace, options, and room to breathe is worth far more.",
      },
      {
        type: "ul",
        items: [
          "Save for the sake of having options, not just for a specific purchase.",
          "Leave room for error in your plans because life rarely follows a straight line.",
          "Respect how differently people grew up before judging how they handle money or risk.",
        ],
      },
      {
        type: "note",
        text: "If you only read one personal finance book this year, make it this one. The chapters are short, honest, and easy to revisit whenever you feel rushed.",
      },
    ],
  },
  {
    slug: "designing-mobile-apps-offline-first",
    title: "Why I design mobile apps to work offline first",
    description:
      "Real users do not live on perfect office wifi. Lessons from building offline first mobile software with Flutter and local SQLite storage.",
    date: "2026-10-24",
    tags: ["Flutter", "Mobile", "Engineering"],
    blocks: [
      {
        type: "p",
        text: "When you build an app on a fast laptop connected to stable fiber internet, it is very easy to forget what your app feels like on a moving bus or inside a building with one bar of signal. Every screen fetches from an API, every tap shows a loading spinner, and if the network drops for five seconds, the user stares at an error message.",
      },
      { type: "h2", text: "What building NaijaPrep taught me" },
      {
        type: "p",
        text: "While building NaijaPrep, an exam preparation and CBT simulator for Nigerian students, assuming constant internet was simply not an option. A student practicing for JAMB or WAEC should never lose their mock exam progress because their mobile data flickered.",
      },
      {
        type: "p",
        text: "Instead of treating local storage as a quick cache, I made local SQLite via Drift the primary source of truth on the device. Questions, curriculum notes, and active exam attempts live right on the phone. Transitions happen in milliseconds, and the network is only needed when the student wants AI tutor explanations or fresh sync updates.",
      },
      { type: "h2", text: "Practical habits for offline first apps" },
      {
        type: "ol",
        items: [
          "Save user input locally the moment they tap, not only when they hit a final submit button.",
          "Separate core features that must work without signal from enhanced features that use the cloud.",
          "Test your app with airplane mode turned on before you call a screen finished.",
          "Design honest sync indicators so users always know what is saved on device versus backed up online.",
        ],
      },
      {
        type: "p",
        text: "An app that works without internet feels noticeably faster even when the internet is working great. Respecting the reality of your users' environment is one of the highest forms of engineering craft.",
      },
    ],
  },
  {
    slug: "applying-eighty-twenty-to-software-and-life",
    title: "Applying the 80/20 rule to software and everyday life",
    description:
      "Reading Richard Koch reminded me that being busy is not the same as being effective. Most of our real progress comes from a tiny handful of choices.",
    date: "2026-10-12",
    tags: ["Books", "Productivity", "Engineering"],
    blocks: [
      {
        type: "p",
        text: "For a long time I treated every task on my list as equally important. I would spend three hours tweaking a subtle border animation while a broken checkout flow waited at the bottom of the backlog. I felt busy all day, yet the product barely moved.",
      },
      { type: "h2", text: "The vital few versus the trivial many" },
      {
        type: "p",
        text: "The core idea in The 80/20 Principle is simple. Roughly eighty percent of your results come from twenty percent of your efforts. Not every feature matters equally. Not every hour of study produces the same growth. Not every obligation deserves your best energy.",
      },
      { type: "h2", text: "How this shows up when building products" },
      {
        type: "ul",
        items: [
          "In most web apps, twenty percent of the screens carry eighty percent of user traffic. Make those core flows rock solid first.",
          "In learning a new language or framework, mastering the fundamentals gives you far more leverage than memorizing obscure tricks.",
          "In daily life, a few good habits like sleep, focused mornings, and honest conversations drive almost all of your peace and output.",
        ],
      },
      {
        type: "quote",
        text: "Efficiency is doing things right. Effectiveness is choosing the few things that actually matter before you start.",
      },
      {
        type: "p",
        text: "Now, before I start a work week, I ask myself one plain question. If I only finish two things this week, which two will genuinely move this product or my life forward? Everything else waits until those two are done.",
      },
    ],
  },
  {
    slug: "figuring-things-out-as-a-self-driven-developer",
    title: "Growing as a developer when you have to figure things out yourself",
    description:
      "Nobody hands you a complete map when you start building real software. Here is what actually helped me move past tutorial loops.",
    date: "2026-09-28",
    tags: ["Life", "Career", "Learning"],
    blocks: [
      {
        type: "p",
        text: "Almost every developer goes through a season where they watch ten hours of video tutorials, feel like they understand everything, open a blank editor, and immediately freeze. I lived in that loop for months early on. Watching someone else write clean code gives you the comfort of progress without the friction of actual thinking.",
      },
      { type: "h2", text: "Friction is where the real learning hides" },
      {
        type: "p",
        text: "Things started changing the day I closed the video player and tried to build a small idea from scratch with only the official documentation open. It was painfully slow at first. I got stuck on routing, broke my database migrations, and spent whole afternoons chasing tiny TypeScript errors.",
      },
      {
        type: "p",
        text: "Yet every bug I solved by reading docs and tracing stack frames stayed in my head permanently. You never forget a lesson you earned the hard way.",
      },
      { type: "h2", text: "Habits that accelerated my growth" },
      {
        type: "ol",
        items: [
          "Build something slightly above your current skill level so every project forces you to learn two or three new concepts.",
          "Read error messages all the way to the bottom before searching for a fix.",
          "Read other people's open source code to see how real teams organize files and handle edge cases.",
          "Write down what you learned in plain English. If you cannot explain it simply, you do not fully own it yet.",
        ],
      },
      {
        type: "p",
        text: "You do not need permission or a perfect environment to become a strong engineer. Curiosity, patience with confusion, and a willingness to finish what you start will carry you further than you think.",
      },
    ],
  },
  {
    slug: "quiet-freedom-in-the-courage-to-be-disliked",
    title: "The quiet freedom inside The Courage to Be Disliked",
    description:
      "Notes from a book that challenged how I think about approval, comparison, and doing honest work without constantly checking the scoreboard.",
    date: "2026-09-14",
    tags: ["Books", "Mindset", "Life"],
    blocks: [
      {
        type: "p",
        text: "When I first saw the title The Courage to Be Disliked, I assumed it was about being stubborn or ignoring everyone around you. It is actually the opposite. The book is a dialogue about Adlerian psychology, and at its heart it is about taking responsibility for your own life while respecting other people's freedom.",
      },
      { type: "h2", text: "The separation of tasks" },
      {
        type: "p",
        text: "The most freeing concept in the entire book is what the authors call the separation of tasks. Your task is to do your best work, speak honestly, and act with integrity. How someone else chooses to react to you, whether they applaud you or misunderstand you, is their task.",
      },
      {
        type: "p",
        text: "So much daily anxiety comes from trying to control someone else's task. We hesitate to publish our writing, ship a project, or say no to something unhealthy because we are trying to manage everyone's opinion in advance.",
      },
      {
        type: "quote",
        text: "Freedom is being willing to be misunderstood while still treating people with kindness and respect.",
      },
      { type: "h2", text: "What changed for me after reading it" },
      {
        type: "p",
        text: "I started spending less energy worrying about how my journey looks from the outside and more energy making sure I am proud of the work on the inside. When you stop performing for approval, your creativity opens up and your relationships become much more genuine.",
      },
    ],
  },
  {
    slug: "how-refresh-token-rotation-protects-mobile-users",
    title: "How refresh token rotation actually protects mobile users",
    description:
      "A clear breakdown of short lived access tokens, rotating refresh tokens, and single flight refresh from building a live auction app.",
    date: "2026-09-02",
    tags: ["Security", "Backend", "Mobile"],
    blocks: [
      {
        type: "p",
        text: "Mobile users hate logging in every single day. At the same time, handing a phone a single JWT that lasts for thirty days is a serious security risk. If that token is ever leaked or intercepted, an attacker has full access for a month and the server has no clean way to revoke it.",
      },
      { type: "h2", text: "Splitting access from renewal" },
      {
        type: "p",
        text: "While building the backend and Flutter client for Solis, I solved this with two separate tokens. The access token is a short lived JWT that expires in fifteen minutes. The refresh token is a random opaque string that lasts thirty days, stored hashed in MongoDB and kept inside the phone's secure Keychain or Keystore.",
      },
      { type: "h2", text: "Why rotation and reuse detection matter" },
      {
        type: "p",
        text: "Every time the mobile app uses a refresh token to get a new access token, the server immediately invalidates the old refresh token and issues a brand new one. If an attacker steals an older refresh token and tries to replay it later, the server recognizes that a spent token was reused and immediately revokes the entire session family.",
      },
      {
        type: "note",
        text: "One subtle detail on the client side: if three API calls fail with 401 at the exact same moment, your HTTP interceptor must lock and run only one refresh request. Otherwise your own app will accidentally trigger reuse detection.",
      },
      {
        type: "p",
        text: "Good security should feel invisible to honest users and unforgiving to attackers. Taking the extra afternoon to get token rotation right pays off on every single authenticated screen.",
      },
    ],
  },
  {
    slug: "ikigai-and-minimalism-choosing-what-to-build",
    title: "What Ikigai and minimalism taught me about choosing what to build",
    description:
      "When you can build almost anything with code, the hardest skill is deciding what deserves your attention and what to leave behind.",
    date: "2026-08-26",
    tags: ["Books", "Minimalism", "Life"],
    blocks: [
      {
        type: "p",
        text: "Every builder I know has a folder full of half started ideas. A new thought pops up on a Sunday night, you scaffold a repository, design two screens, and by Thursday a shinier idea steals your attention. For years I thought having twenty ideas at once was a strength. Eventually I realized it was just clutter.",
      },
      { type: "h2", text: "Finding the intersection in Ikigai" },
      {
        type: "p",
        text: "Reading Ikigai alongside The Art of Minimalism helped me slow down. Ikigai asks where four things meet: what you love, what you are good at, what the world needs, and what can sustain you. Minimalism asks a complementary question: what can you remove so the essential things have room to breathe?",
      },
      { type: "h2", text: "Subtraction makes products and lives better" },
      {
        type: "ul",
        items: [
          "A calmer interface with three clear actions beats a crowded dashboard with twenty buttons.",
          "A smaller bookshelf of books you actually reread beats a hundred books you skimmed to look smart.",
          "A focused week with two clear priorities leaves you energized instead of scattered.",
        ],
      },
      {
        type: "p",
        text: "When I built Verso, a quiet mobile app for poems and journals, minimalism guided every single decision. I kept asking what I could take away until only the words and the calm atmosphere remained. That same filter works surprisingly well for life outside of code.",
      },
    ],
  },
  {
    slug: "shipping-a-product-alone-from-blank-folder-to-users",
    title: "Shipping a product alone from a blank folder to real users",
    description:
      "The distance between a working prototype on localhost and a product someone can rely on is where all the real craft happens.",
    date: "2026-08-19",
    tags: ["Product", "Engineering", "Shipping"],
    blocks: [
      {
        type: "p",
        text: "The first seventy percent of a solo project is pure joy. Everything moves fast, screens come alive, and your vision looks close. Then you hit the last thirty percent: validation, password resets, empty states, webhook edge cases, mobile spacing, SEO metadata, and deployment environment variables.",
      },
      { type: "h2", text: "The last thirty percent is the product" },
      {
        type: "p",
        text: "Users do not judge your app by how clean your happy path looked during development. They judge it by what happens when their payment fails, when they open it on a small Android phone, or when a search returns zero results. Finishing those unglamorous details is what earns trust.",
      },
      { type: "h2", text: "Rules I follow when shipping solo" },
      {
        type: "ol",
        items: [
          "Cut scope early so you can finish completely. A small finished product always beats an ambitious unfinished one.",
          "Choose boring, reliable tools you already know well so your energy goes into the product instead of fighting your setup.",
          "Deploy early, even on day two, so production surprises show up while the codebase is still small.",
          "Use your own product on your own phone like a real stranger would.",
        ],
      },
      {
        type: "p",
        text: "Every time you carry an idea all the way across the finish line, you prove to yourself that you are not just someone who talks about ideas. You are someone who ships.",
      },
    ],
  },
  {
    slug: "what-building-twelve-projects-taught-me",
    title: "What building twelve different projects taught me about myself",
    description:
      "Looking back across marketplaces, finance dashboards, exam apps, auction engines, and a quiet journal app, and what the journey actually revealed.",
    date: "2026-08-05",
    tags: ["Life", "Craft", "Reflection"],
    blocks: [
      {
        type: "p",
        text: "When I look at the list of things I have built over the last couple of years, it looks surprisingly diverse. An education marketplace, an offline exam simulator, an art auction app, a luxury hair storefront, an autopilot job scout, a personal finance dashboard, a running partner app, and a quiet poetry journal.",
      },
      { type: "h2", text: "Each project leaves a permanent skill behind" },
      {
        type: "p",
        text: "None of those projects were wasted time, even the ones that stayed personal experiments. Molearn taught me how payments and server side entitlements really work. Solis forced me to understand atomic database writes and rotating auth tokens. NaijaPrep taught me offline first mobile architecture. Verso taught me typographic restraint and stillness.",
      },
      { type: "h2", text: "Your work quietly shapes your character" },
      {
        type: "p",
        text: "Building software has taught me more about patience, honesty, and humility than almost anything else. Code does not care about excuses. If something is broken, you slow down, look closely at the facts, and fix it with a clear head.",
      },
      {
        type: "quote",
        text: "You start out thinking you are just building apps, and somewhere along the way you realize the apps have been building you.",
      },
      {
        type: "p",
        text: "I am still learning, still reading, and still excited by the simple joy of turning a blank screen into something genuinely useful for another human being. That feeling never gets old.",
      },
    ],
  },
  {
    slug: "responsive-react-applications",
    title: "Building responsive React applications that survive real phones",
    description:
      "Practical patterns for responsive React UI: mobile-first defaults, fluid type, and the checks that catch broken layouts before users do.",
    date: "2026-08-14",
    tags: ["React", "Responsive", "CSS"],
    blocks: [
      {
        type: "p",
        text: "Most layouts don't break because a developer can't write CSS. They break because the design was decided on a 1440px monitor and then squeezed into a phone. Responsive work starts earlier than the media queries.",
      },
      { type: "h2", text: "Start from the smallest screen" },
      {
        type: "p",
        text: "Write the single-column layout first, then add complexity as width allows. When you design desktop-first, every breakpoint becomes a patch on top of something that was already wrong at 320px.",
      },
      {
        type: "ul",
        items: [
          "One column is the default; grids opt in at breakpoints.",
          "Navigation collapses into a menu by default, and desktop navigation is the enhancement.",
          "Type scales use clamp() so headings shrink smoothly instead of jumping between fixed sizes.",
        ],
      },
      {
        type: "code",
        language: "css",
        code: ".title {\n  font-size: clamp(2.5rem, 6vw, 4.5rem);\n  line-height: 1.05;\n}",
      },
      { type: "h2", text: "Components should own their responsiveness" },
      {
        type: "p",
        text: "Responsiveness scattered across a dozen files is impossible to maintain. A card component should know how it behaves at 320px, and its parent shouldn't need to patch it with overrides.",
      },
      {
        type: "quote",
        text: "If you have to remember a magic parent class to make a component work on mobile, the component is broken — not the page.",
      },
      { type: "h2", text: "The checks that actually catch bugs" },
      {
        type: "ol",
        items: [
          "Open the page at 320px and scroll the whole thing. Horizontal overflow hides in long words, images and tables.",
          "Test real touch targets. Anything under roughly 44px will be mis-tapped.",
          "Resize slowly between breakpoints. Jumps happen at the exact width where a grid switches columns.",
          "Check long content — a name, a project title, an error message — not just the text you designed with.",
        ],
      },
      {
        type: "note",
        text: "DevTools device emulation catches most issues, but a real phone still exposes problems with keyboard focus, sticky headers and safe-area insets that an emulator won't.",
      },
      { type: "h2", text: "In short" },
      {
        type: "p",
        text: "Responsive design is a default, not a pass you do at the end. Choose mobile-first layouts, let components own their behaviour, and verify at the widths your users actually visit.",
      },
    ],
  },
  {
    slug: "nextjs-app-router-architecture",
    title: "Structuring a Next.js App Router project for the long run",
    description:
      "How I organise routes, components and content in an App Router codebase so features stay easy to find, change and delete.",
    date: "2026-07-02",
    tags: ["Next.js", "Architecture", "TypeScript"],
    blocks: [
      {
        type: "p",
        text: "The App Router makes it easy to move fast and equally easy to end up with a folder that nobody wants to open. A little structure up front prevents that.",
      },
      { type: "h2", text: "Route folders stay thin" },
      {
        type: "p",
        text: "A page file should compose and wire things together — fetch data, set metadata, render sections. When a page.tsx file starts accumulating layout logic and styling decisions, it's time to pull that into a component.",
      },
      {
        type: "code",
        language: "text",
        code: "app/\n  page.tsx            # composes hero + selected work + CTA\n  work/\n    page.tsx\n    [slug]/page.tsx\n  about/page.tsx\ncomponents/\n  navigation/\n  projects/\n  sections/\n  ui/\ncontent/\n  projects.ts\n  blog.ts\nlib/\n  site.ts\n  utils.ts",
      },
      { type: "h2", text: "Group components by feature, then by type" },
      {
        type: "p",
        text: "Feature folders — projects, navigation, case-study — make ownership obvious. Inside them, reusable primitives live in ui/. You should be able to delete a feature by deleting one folder.",
      },
      { type: "h3", text: "Content lives in code (until it doesn't)" },
      {
        type: "p",
        text: "For a portfolio or a small product, structured TypeScript content beats a CMS: it's typed, it's versioned, it can't go down. If non-developers need to edit content regularly, that's the signal to introduce a CMS — not the other way around.",
      },
      { type: "h2", text: "Server first, client when needed" },
      {
        type: "ul",
        items: [
          "Pages and static sections render on the server by default — smaller bundles, faster first paint.",
          "'use client' is an opt-in for interactivity: menus, forms, filters, animations.",
          "Pass server data into client components as props instead of re-fetching it in the browser.",
        ],
      },
      {
        type: "note",
        text: "Every client component is JavaScript your users download and execute. Treating the directive as a cost, rather than a default, keeps most of the page free of it.",
      },
      { type: "h2", text: "Metadata belongs to the route" },
      {
        type: "p",
        text: "Titles, descriptions and canonical URLs are exported from the same file that renders the page. That keeps SEO honest: if a route exists, its metadata exists.",
      },
      { type: "h2", text: "The payoff" },
      {
        type: "p",
        text: "Structure isn't about looking organised — it's about change cost. A thin route, a feature folder and typed content mean a new page takes minutes instead of an afternoon.",
      },
    ],
  },
  {
    slug: "authentication-production-apps",
    title: "Authentication in production: what building Molearn taught me",
    description:
      "Notes on credential auth, server-side access checks and the mistakes that quietly break protected content.",
    date: "2026-06-11",
    tags: ["Next.js", "Security", "Authentication"],
    blocks: [
      {
        type: "p",
        text: "Authentication is one of those features that's easy to get 80% right and dangerous to leave there. Building authentication for Molearn — a platform where content should only reach paying students — made the failure modes concrete.",
      },
      { type: "h2", text: "The server decides, always" },
      {
        type: "p",
        text: "The most common mistake is trusting the client: hiding a button, storing a flag in localStorage, or skipping an access check because the UI already guards it. None of that is security.",
      },
      {
        type: "code",
        language: "ts",
        code: "const session = await auth();\n\nif (!session?.user) {\n  return redirect(\"/sign-in\");\n}\n\nconst access = await db.access.findFirst({\n  where: { userId: session.user.id, contentId },\n});\n\nif (!access) return notFound();",
      },
      {
        type: "p",
        text: "The UI is a convenience. Access control happens where the data leaves the server.",
      },
      { type: "h2", text: "Hash passwords, never store them" },
      {
        type: "ul",
        items: [
          "bcrypt (or argon2) for credential storage, with a sensible cost factor.",
          "Never log passwords, tokens or session identifiers.",
          "Compare hashes with the library's own function — hand-rolled comparisons leak timing information.",
        ],
      },
      { type: "h2", text: "Validate everything at the boundary" },
      {
        type: "p",
        text: "Auth endpoints are a favourite target. Schema validation with Zod on every field — email format, password length, unexpected properties — turns a class of attacks into a 400 response.",
      },
      {
        type: "code",
        language: "ts",
        code: "const schema = z.object({\n  email: z.string().email(),\n  password: z.string().min(8).max(128),\n});\n\nconst parsed = schema.safeParse(await request.json());\nif (!parsed.success) {\n  return Response.json({ error: \"Invalid input\" }, { status: 400 });\n}",
      },
      { type: "h2", text: "Session UX is a design problem too" },
      {
        type: "p",
        text: "Users shouldn't get dumped on a blank screen when a session expires. Redirect back to where they were after signing in, show clear error states for wrong credentials, and never reveal whether an email exists in the system.",
      },
      { type: "note", text: "Rate-limit sign-in attempts. Credential stuffing is automated, and a login form with no throttle is an invitation." },
      { type: "h2", text: "What I'd tell my past self" },
      {
        type: "ol",
        items: [
          "Decide the access model before writing the first route.",
          "Keep secrets in environment variables — client bundles are public.",
          "Write the failure paths (expired session, denied access, invalid input) first; they're most of the work.",
        ],
      },
    ],
  },
  {
    slug: "figma-to-production-responsive-ui",
    title: "Figma to production: turning designs into responsive UI",
    description:
      "How I translate a static design into components that hold up across screen sizes — without pixel-pushing every frame.",
    date: "2026-05-20",
    tags: ["Frontend", "Workflow", "Design"],
    blocks: [
      {
        type: "p",
        text: "A Figma frame is one width. Your users have dozens. The job isn't to reproduce the mock — it's to infer the system behind it and rebuild that system in code.",
      },
      { type: "h2", text: "Read the design for rules, not pixels" },
      {
        type: "ul",
        items: [
          "What's the spacing rhythm? Repeating values (16, 24, 32) become a scale you reuse everywhere.",
          "Where does hierarchy come from — size, weight, colour, or spacing?",
          "Which elements are repeated? Those are your components, immediately.",
          "What changes between variants? That's your props.",
        ],
      },
      { type: "h2", text: "Translate constraints, not absolute positions" },
      {
        type: "p",
        text: "Absolute coordinates in a design are a trap. Convert them to relationships: this column is twice that one, that gap is fixed while the content grows, this block is centred within the container.",
      },
      {
        type: "code",
        language: "tsx",
        code: "<section className=\"grid gap-8 sm:grid-cols-[2fr_1fr]\">\n  <Hero />\n  <aside className=\"rounded-2xl border p-6\">…</aside>\n</section>",
      },
      { type: "h2", text: "Build the smallest reusable piece first" },
      {
        type: "p",
        text: "Start with the button, the tag, the card — the primitives every screen repeats. Once those exist, pages become composition instead of CSS authoring, and consistency comes for free.",
      },
      { type: "h3", text: "Name things by role" },
      {
        type: "p",
        text: "ProjectCard, not GreyBox. SectionHeading, not Title2. Role-based names survive redesigns; positional names break the moment the layout changes.",
      },
      { type: "h2", text: "Close the loop with QA" },
      {
        type: "ol",
        items: [
          "Compare at the design width first — get the reference frame right.",
          "Then test at 320, 768 and 1280. Designers rarely specify these; your users live there.",
          "Check states the mock doesn't show: hover, focus, loading, empty, error, long text.",
          "Fix contrast and focus rings while you're in there — they're cheap now and expensive later.",
        ],
      },
      {
        type: "quote",
        text: "The design file is a sample of the system. Your job is to rebuild the system, not the sample.",
      },
      { type: "h2", text: "In short" },
      {
        type: "p",
        text: "Extract the rules, translate relationships instead of coordinates, build components by role, and verify states the mock never showed. That's how a static frame becomes an interface that holds up in production.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function sortedPosts() {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function readingTime(post: Post) {
  const words = post.blocks.reduce((count, block) => {
    if (block.type === "ul" || block.type === "ol") return count + block.items.join(" ").split(/\s+/).length;
    if (block.type === "code") return count + block.code.split(/\s+/).length;
    return count + block.text.split(/\s+/).length;
  }, 0);
  return Math.max(1, Math.round(words / 220));
}
