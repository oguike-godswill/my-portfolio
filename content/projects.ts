export type ProjectStatus = "live" | "in-development" | "personal";

export type CoverVariant =
  | "marketplace"
  | "cbt"
  | "auction"
  | "journal"
  | "career"
  | "commerce"
  | "vault"
  | "dashboard"
  | "mobile"
  | "auto"
  | "recipe"
  | "bot";

export interface EngineeringNote {
  label: string;
  body: string;
}

export interface Challenge {
  challenge: string;
  solution: string;
}

export interface CaseStudy {
  problem: string[];
  product: string[];
  features: string[];
  planned?: string[];
  design: string[];
  engineering: EngineeringNote[];
  challenges: Challenge[];
  responsive: string[];
  performance: string[];
  outcome: string[];
  lessons: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  status: ProjectStatus;
  featured: boolean;
  year?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  cover: CoverVariant;
  gallery?: { src: string; alt: string }[];
  role: string;
  caseStudy: CaseStudy;
}

export const statusLabel: Record<ProjectStatus, string> = {
  live: "Live",
  "in-development": "In development",
  personal: "Personal project",
};

export const projects: Project[] = [
  {
    slug: "molearn",
    title: "Molearn",
    tagline: "An education platform connecting students and tutors, allowing tutors to sell educational videos and books.",
    description:
      "A marketplace where tutors publish educational videos and books, and students buy and learn from them in one place.",
    category: "Education Platform",
    status: "live",
    featured: true,
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Stripe", "Zod", "Tailwind CSS"],
    liveUrl: "https://molearn.vercel.app",
    githubUrl: "https://github.com/oguike-godswill/molearn",
    cover: "marketplace",
    role: "Product design, frontend engineering, API integration, authentication and database layers.",
    caseStudy: {
      problem: [
        "Tutors create valuable educational content — recorded lessons and written material — but have no simple way to package and sell it to students.",
        "Students looking for specific help end up scattered across chat groups, one-off links and unorganised file shares, with no single place to buy, own and revisit material.",
      ],
      product: [
        "Molearn brings both sides into one product: tutors publish educational videos and books, and students browse, purchase and learn from them through a single interface.",
        "The platform handles accounts, content browsing, purchases and content delivery, so a tutor can sell and a student can learn without leaving the product.",
      ],
      features: [
        "Student and tutor accounts with sign up and sign in",
        "Browseable library of educational videos and books",
        "Video and book content pages for purchasing and learning",
        "Stripe payments for purchases",
        "Tutor-side content publishing flow",
        "Protected account areas for signed-in users",
        "Responsive interface across mobile, tablet and desktop",
      ],
      design: [
        "The interface is built around content discovery: clear cards, readable metadata and obvious calls to action so a student can go from browsing to learning in very few steps.",
        "Typography and spacing do the heavy lifting instead of decoration, which keeps dense catalogue pages scannable on small screens.",
        "Every flow — browsing, purchasing, managing content — was designed mobile-first, since most students will arrive on a phone.",
      ],
      engineering: [
        {
          label: "Frontend",
          body: "Next.js with the App Router and TypeScript, styled with Tailwind CSS. Server components carry the data-heavy pages so the client bundle stays small, while interactive pieces — forms, checkout, account views — stay isolated client components.",
        },
        {
          label: "Database & ORM",
          body: "Prisma as the data layer over PostgreSQL (Neon), with typed models for users, content and purchases. Schema changes are versioned through Prisma migrations instead of manual SQL.",
        },
        {
          label: "Authentication",
          body: "NextAuth with credential-based sign in and bcrypt password hashing, wired to the same user records the rest of the product reads from.",
        },
        {
          label: "Payments",
          body: "Stripe is integrated on both client and server so a purchase is confirmed on the server before access is granted — the frontend is never trusted to mark an order as paid.",
        },
        {
          label: "Validation & security",
          body: "Zod schemas validate input at the API boundary, and secrets live in environment variables — nothing sensitive ships in client code.",
        },
      ],
      challenges: [
        {
          challenge: "Two very different users — students and tutors — share one product without the interface becoming confusing.",
          solution:
            "Role-aware navigation and separate account views, so each user only sees the actions that matter to them while both sides share the same design language.",
        },
        {
          challenge: "Digital content must only reach paying students, without locking out legitimate owners.",
          solution:
            "Access is decided server-side from purchase records in the database, never from client state, so a refresh or shared link cannot bypass payment.",
        },
        {
          challenge: "Marketplace flows span multiple pages — browse, buy, access — and easy to drift out of sync.",
          solution:
            "A typed API layer shared between routes and components, so the same contract drives the UI and the server responses.",
        },
      ],
      responsive: [
        "Mobile-first layouts throughout: catalogue grids collapse to single columns, navigation moves into a compact menu, and content pages prioritise the lesson itself.",
        "Touch targets, spacing and type scale were checked at 320px through to wide desktop so nothing overflows or becomes untappable.",
      ],
      performance: [
        "Server components for content-heavy routes keep client-side JavaScript down.",
        "Next.js image handling and lazy loading keep media-heavy pages from blocking first paint.",
        "Fonts and scripts are minimised — the platform loads content fast even on slower mobile connections.",
      ],
      outcome: [
        "Molearn is live in production and continues to be developed, with the codebase open on GitHub.",
        "It stands as a clear example of end-to-end product work: interface, authentication, payments and data model shipped as one working product.",
      ],
      lessons: [
        "Marketplace products live or die on role clarity — knowing exactly which screen belongs to which user removes entire categories of confusion.",
        "Doing payment and access control on the server from day one is far cheaper than retrofitting it later.",
        "Typed data contracts between the API and the UI catch a surprising share of bugs before they ever reach the browser.",
      ],
    },
  },
  {
    slug: "naijaprep",
    title: "NaijaPrep",
    tagline: "Offline-first NERDC 9-3-4 Teaching Academy & Nigerian Exam CBT Simulator with AI tutoring.",
    description:
      "A Flutter mobile learning and computer-based testing simulator built for JAMB, WAEC and NECO students, powered by local Drift SQLite storage and Gemini AI explanations.",
    category: "Mobile App",
    status: "in-development",
    featured: true,
    year: "2026",
    technologies: ["Flutter", "Dart", "Riverpod", "GoRouter", "Drift SQLite", "Gemini AI", "Express"],
    githubUrl: "https://github.com/oguike-godswill/cbtApp",
    cover: "cbt",
    role: "End-to-end mobile architecture, offline-first database design, CBT exam engine and AI tutor backend.",
    caseStudy: {
      problem: [
        "Students preparing for national exams (JAMB, WAEC, NECO) often face unreliable mobile connectivity, making purely cloud-dependent study apps frustrating during study sessions.",
        "Existing past-question apps dump static answers without teaching the underlying NERDC curriculum concepts or simulating real timed CBT exam conditions.",
      ],
      product: [
        "NaijaPrep combines a structured NERDC 9-3-4 teaching academy with a realistic timed Computer-Based Test (CBT) simulator in a single offline-first mobile app.",
        "Students can study and take full timed mock exams offline using local SQLite persistence, then request step-by-step AI explanations powered by Gemini when connected.",
      ],
      features: [
        "Offline-first curriculum and question bank persisted locally with Drift SQLite",
        "Timed CBT exam simulator with question palette, flagging and instant scoring",
        "Subject-by-subject NERDC 9-3-4 study modules",
        "AI-powered step-by-step explanations via Express + Google Gemini API",
        "Reactive state management with Riverpod and declarative routing via GoRouter",
        "Performance tracking across mock exams and weak-topic diagnostics",
      ],
      design: [
        "Exam screens eliminate distractions: a clean question canvas, clear countdown timer, and thumb-reachable navigation between questions.",
        "Review mode contrasts selected answers against correct solutions with expandable explanations so learning happens immediately after submission.",
      ],
      engineering: [
        {
          label: "Offline-First Data",
          body: "Drift (SQLite) stores curriculum lessons, question banks and user exam attempts locally so full mock exams run with zero network latency.",
        },
        {
          label: "State & Navigation",
          body: "Flutter Riverpod manages exam timers, active selections and study progress predictably, paired with GoRouter for structured deep linking.",
        },
        {
          label: "AI Tutor Service",
          body: "A lightweight Node.js / Express service wraps the @google/genai SDK to generate curriculum-aligned explanations without exposing API keys in the mobile binary.",
        },
      ],
      challenges: [
        {
          challenge: "Keeping timed CBT sessions reliable even if the student loses signal or backgrounds the app.",
          solution:
            "Persisted exam state and answers directly to Drift SQLite on every selection so sessions resume cleanly with zero lost progress.",
        },
        {
          challenge: "Keeping AI explanations fast, accurate and safe from prompt injection.",
          solution:
            "Routed all Gemini calls through a server-side Express proxy with structured system instructions scoped strictly to the question context.",
        },
      ],
      responsive: [
        "Built for a wide range of Android and iOS screen densities, including compact budget phones common among students.",
        "Large touch targets on option cards and question-grid drawers prevent mis-taps during timed exams.",
      ],
      performance: [
        "Local SQLite queries render question transitions instantaneously.",
        "Lazy-loaded study modules keep startup time fast and memory usage low.",
      ],
      outcome: [
        "NaijaPrep demonstrates production offline-first mobile engineering combining Flutter, Drift SQLite and a secure AI backend.",
      ],
      lessons: [
        "Offline-first architecture isn't just a caching layer — designing local persistence as the primary source of truth simplifies the entire UI.",
        "Proxying AI models through a thin backend protects credentials and lets you iterate on prompts without shipping a new app binary.",
      ],
    },
  },
  {
    slug: "solis",
    title: "Solis",
    tagline: "A museum collection and live art auction mobile app with race-safe atomic bidding and secure token rotation.",
    description:
      "A full-stack Flutter and Node.js museum & auction platform featuring live lot bidding, exhibition event bookings, and hardened JWT refresh-token rotation.",
    category: "Mobile App",
    status: "personal",
    featured: true,
    year: "2026",
    technologies: ["Flutter", "Dart", "Node.js", "Express", "MongoDB", "JWT Rotation", "Zod"],
    githubUrl: "https://github.com/oguike-godswill/artapp",
    cover: "auction",
    role: "Full-stack architecture — Flutter client UI, Express + MongoDB API, atomic bidding engine and security layer.",
    caseStudy: {
      problem: [
        "Live auction apps fail hard when concurrent bids collide or when mobile auth tokens are stored insecurely and expire mid-auction.",
        "Collectors and museum visitors need a calm, editorial mobile experience that still handles real-time bidding integrity and capacity-limited event bookings.",
      ],
      product: [
        "Solis pairs a curated Flutter mobile client with a hardened Node.js + MongoDB backend for discovering artworks, placing live bids, and booking museum exhibitions.",
        "Every bid is processed atomically on the server, while mobile sessions stay seamless through Keychain/Keystore storage and single-flight token refresh.",
      ],
      features: [
        "Discover feed with featured live lots and auction carousel",
        "Collection bento browser with series, exhibition, saved filter and search",
        "Lot detail view with atomic race-safe bidding (+$100 / $250 / $500) and live bid history",
        "Events week strip with capacity-checked booking management",
        "Profile hub tracking leading, outbid and won bids alongside bookings and saved works",
        "Short-lived JWT access tokens + rotating 30-day opaque refresh tokens with reuse detection",
      ],
      design: [
        "Gallery-first editorial design where artwork photography breathes on quiet surfaces and bidding controls remain unmistakable.",
        "Clear bid status indicators (Leading, Outbid, Won) let collectors read their standing at a glance.",
      ],
      engineering: [
        {
          label: "Hardened Auth",
          body: "bcrypt (12 rounds) hashing, 15-minute JWT access tokens, and 30-day opaque refresh tokens stored hashed in MongoDB. Replayed tokens trigger automatic family revocation.",
        },
        {
          label: "Mobile Security",
          body: "Tokens are persisted in Keychain/Keystore via flutter_secure_storage with a single-flight interceptor that transparently refreshes on 401.",
        },
        {
          label: "Atomic Bidding API",
          body: "Express + MongoDB endpoints validate increments with Zod and enforce race-safe atomic updates so concurrent bids never overwrite a higher offer.",
        },
      ],
      challenges: [
        {
          challenge: "Preventing race conditions when two collectors bid on the same lot simultaneously.",
          solution:
            "Used atomic conditional database updates verifying the current highest bid before committing, rejecting stale bids cleanly with updated lot state.",
        },
        {
          challenge: "Handling expired access tokens gracefully when multiple API requests fire concurrently.",
          solution:
            "Implemented single-flight refresh locking in the Flutter HTTP client so parallel 401s await a single refresh call instead of triggering false reuse revocations.",
        },
      ],
      responsive: [
        "Designed for one-handed gallery browsing and rapid bidding across iOS and Android devices.",
      ],
      performance: [
        "Rate-limited auth endpoints, Helmet headers and indexed MongoDB queries keep API responses crisp under load.",
      ],
      outcome: [
        "Solis showcases production-grade mobile security and backend concurrency engineering across Flutter and Node.js.",
      ],
      lessons: [
        "Refresh-token rotation requires single-flight client coordination — otherwise concurrent requests will look like token replay.",
        "Atomic conditional writes eliminate entire classes of financial and bidding race conditions.",
      ],
    },
  },
  {
    slug: "verso",
    title: "Verso",
    tagline: "A quiet mobile exhibit for poems, journals, and letters — with ambient soundscapes and voice narration.",
    description:
      "A calm, editorial Flutter journaling and literary reading app backed by Neon PostgreSQL, pairing Newsreader typography with text-to-speech narration and ambient soundscapes.",
    category: "Mobile App",
    status: "personal",
    featured: true,
    year: "2026",
    technologies: ["Flutter", "Dart", "Neon PostgreSQL", "Flutter TTS", "Ambient Audio", "Editorial UI"],
    githubUrl: "https://github.com/oguike-godswill/verso_app",
    cover: "journal",
    gallery: [
      { src: "/projects/verso/screen-1.jpg", alt: "Verso app exhibit reading interface" },
      { src: "/projects/verso/screen-2.jpg", alt: "Verso app journal and poetry view" },
      { src: "/projects/verso/screen-3.jpg", alt: "Verso app writing studio screen" },
      { src: "/projects/verso/screen-4.jpg", alt: "Verso app personal shelf and profile" },
    ],
    role: "Product design, Flutter UI architecture, Neon PostgreSQL integration, TTS narration and ambient soundscape layer.",
    caseStudy: {
      problem: [
        "Most writing and journaling apps feel like noisy social feeds or clinical note-taking utilities, leaving little room for quiet reflection, poetry, and long-form letters.",
        "Readers who enjoy literary writing on mobile rarely get print-grade typography paired with optional audio narration and calm atmosphere.",
      ],
      product: [
        "Verso is designed as a quiet digital exhibit for poems, personal journals, and letters.",
        "Writers compose and publish pieces to a calm reading gallery, curate their personal shelf, and listen to works read aloud via built-in text-to-speech and ambient soundscapes.",
      ],
      features: [
        "Editorial reading exhibit for poems, journals, and letters",
        "Distraction-free writing and publishing studio",
        "Personal shelf for organizing saved works and drafts",
        "Built-in text-to-speech narration powered by flutter_tts",
        "Optional ambient soundscape engine for focused reading and writing",
        "Cloud persistence backed by Neon PostgreSQL with user accounts and profiles",
      ],
      design: [
        "Print-inspired typography pairing Newsreader (regular and italic) for literary prose with Manrope for clean UI controls.",
        "Generous whitespace, muted gallery surfaces, and restrained interactions keep the focus entirely on the written word.",
      ],
      engineering: [
        {
          label: "Flutter Client",
          body: "Structured screen architecture (welcome, auth, exhibit, poem reader, write, publish, shelf, profile) with custom editorial theming and bundled font families.",
        },
        {
          label: "Database",
          body: "Neon PostgreSQL data layer handling accounts, published pieces, shelves, and local storage persistence.",
        },
        {
          label: "Audio & TTS",
          body: "Integrated flutter_tts narration alongside a dedicated soundscape controller so readers can listen hands-free.",
        },
      ],
      challenges: [
        {
          challenge: "Making long-form literary reading feel like a quiet book rather than a standard mobile app.",
          solution:
            "Tuned line heights, serif italic accents (Newsreader), and low-contrast chrome so every screen reads like a printed chapbook.",
        },
        {
          challenge: "Coordinating text-to-speech playback cleanly with navigation and ambient audio.",
          solution:
            "Centralised playback and audio state management so narration pauses cleanly on screen transitions and never overlaps.",
        },
      ],
      responsive: [
        "Tuned for comfortable one-handed mobile reading and extended writing sessions across phone and tablet screens.",
      ],
      performance: [
        "Bundled local font assets eliminate font flash, and lightweight widget trees keep scrolling silky across long poems and journal entries.",
      ],
      outcome: [
        "Verso stands out as an atmospheric, typography-driven Flutter product combining cloud persistence with audio craft.",
      ],
      lessons: [
        "Restraint is harder than adding features — removing visual noise made the writing and reading experience feel genuinely calm.",
        "Pairing typography with subtle audio (TTS + soundscape) transforms how users engage with long-form mobile content.",
      ],
    },
  },
  {
    slug: "career-relay",
    title: "CareerRelay",
    tagline: "An autopilot job scout, batch applier and email feedback hub powered by Playwright and Gemini AI.",
    description:
      "A full-stack automation platform that discovers relevant roles, assists with tailored batch applications via Playwright, and tracks recruiter replies over IMAP.",
    category: "Automation / AI",
    status: "personal",
    featured: true,
    year: "2026",
    technologies: ["React", "TypeScript", "Express", "MongoDB", "Playwright", "Gemini AI", "Nodemailer", "ImapFlow"],
    githubUrl: "https://github.com/oguike-godswill/jobfinder",
    cover: "career",
    role: "Full-stack engineering — React dashboard, Express server, Playwright automation, IMAP/SMTP pipeline and Gemini AI integration.",
    caseStudy: {
      problem: [
        "Job searching involves hours of repetitive portal scanning, copy-pasting profile details, and digging through cluttered email inboxes to track application status.",
        "Standard trackers require manual updates every time a recruiter replies or sends an interview invite.",
      ],
      product: [
        "CareerRelay brings job scouting, assisted batch applying, and automatic inbox feedback tracking into a single workspace.",
        "It uses Playwright for browser-assisted workflows, Gemini AI to evaluate role fit and draft tailored outreach, and ImapFlow + Nodemailer to sync application replies automatically.",
      ],
      features: [
        "Automated job scouting and structured role queue persisted in MongoDB",
        "AI-assisted role matching and tailored application drafting via Google Gemini",
        "Playwright-powered batch application workflow",
        "IMAP inbox polling (ImapFlow) to detect recruiter responses and status updates",
        "SMTP outreach dispatch via Nodemailer",
        "Unified React 19 dashboard for tracking pipeline stages and feedback",
      ],
      design: [
        "Built as a focused operational command center: clear pipeline statuses, scannable role cards, and immediate visibility into what needs human review.",
      ],
      engineering: [
        {
          label: "Frontend",
          body: "React 19 + TypeScript built with Vite for a fast, reactive workspace managing job queues, drafts and email threads.",
        },
        {
          label: "Automation Engine",
          body: "Playwright-core automates repetitive browser interactions while keeping user review checkpoints intact.",
        },
        {
          label: "Mail & AI Pipeline",
          body: "Express orchestrates MongoDB persistence, ImapFlow inbox ingestion, Nodemailer dispatch, and @google/genai classification.",
        },
      ],
      challenges: [
        {
          challenge: "Correlating unstructured recruiter emails back to specific job applications.",
          solution:
            "Combined ImapFlow thread metadata with Gemini AI classification to categorize replies (interview, follow-up, rejection) and attach them to the right MongoDB record.",
        },
        {
          challenge: "Keeping long-running Playwright and email sync jobs from blocking the API server.",
          solution:
            "Isolated automation runs into asynchronous worker flows that stream status updates back to the React dashboard.",
        },
      ],
      responsive: [
        "Desktop-first productivity workspace that collapses cleanly to mobile screens for checking recruiter updates on the go.",
      ],
      performance: [
        "MongoDB indexing on job status and timestamps keeps queue filtering instant even across hundreds of tracked roles.",
      ],
      outcome: [
        "CareerRelay demonstrates deep full-stack and browser-automation engineering beyond standard CRUD applications.",
      ],
      lessons: [
        "Human-in-the-loop automation beats blind automation — surfacing AI drafts for quick approval keeps quality high.",
        "Integrating IMAP and browser automation requires defensive error handling for flaky networks and changing markup.",
      ],
    },
  },
  {
    slug: "mensah-hairline",
    title: "Mensah Hairline",
    tagline: "Luxury virgin hair e-commerce storefront and salon studio booking platform built for a Lagos beauty brand.",
    description:
      "A high-craft Next.js storefront for handcrafted human hair wigs, bespoke frontals, and salon styling appointments backed by Supabase.",
    category: "E-Commerce",
    status: "live",
    featured: true,
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Supabase", "TanStack Query", "Zustand", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://mensahhariline.vercel.app",
    githubUrl: "https://github.com/oguike-godswill/mensah_hariline",
    cover: "commerce",
    role: "Design implementation, frontend architecture, Supabase integration, cart state and motion polish.",
    caseStudy: {
      problem: [
        "Luxury beauty brands often lose credibility when forced into generic e-commerce templates that feel cluttered or slow on mobile networks.",
        "Customers shopping for high-ticket wigs and salon installations need clear product presentation, smooth variant selection, and direct studio booking.",
      ],
      product: [
        "Mensah Hairline is a bespoke digital storefront and booking experience designed to reflect a luxury salon brand.",
        "Shoppers browse curated wig collections, manage cart state effortlessly, and connect directly with the studio for installations and revamps.",
      ],
      features: [
        "Curated luxury product catalogue with variant and length selection",
        "Persistent shopping cart powered by Zustand",
        "Server-state synchronization and caching via TanStack Query and Supabase",
        "Fluid page and drawer transitions with Framer Motion",
        "Direct WhatsApp concierge and salon booking integration",
        "SEO-optimised metadata and OpenGraph configuration",
      ],
      design: [
        "Editorial luxury aesthetic using refined typography (Inter + Manrope), generous whitespace, and imagery-led product cards.",
        "Subtle Framer Motion transitions elevate interactions without slowing down checkout.",
      ],
      engineering: [
        {
          label: "Framework",
          body: "Next.js 16 App Router and React 19 with TypeScript, delivering fast server-rendered landing and collection pages.",
        },
        {
          label: "Backend & Data",
          body: "Supabase (@supabase/ssr) provides product persistence, auth and studio data, cached on the client with TanStack Query.",
        },
        {
          label: "Client State",
          body: "Zustand handles lightweight cart and drawer state with minimal re-renders.",
        },
      ],
      challenges: [
        {
          challenge: "Balancing rich high-resolution imagery and animations with fast mobile load times.",
          solution:
            "Combined Next.js image optimization, lazy loading, and lightweight GPU-composited Framer Motion transitions.",
        },
      ],
      responsive: [
        "Built mobile-first for Instagram and WhatsApp traffic where over 80% of luxury beauty shoppers browse on phones.",
      ],
      performance: [
        "TanStack Query caching eliminates redundant Supabase fetches during collection browsing.",
      ],
      outcome: [
        "Live in production at mensahhariline.vercel.app, delivering a polished brand-first e-commerce experience.",
      ],
      lessons: [
        "In luxury e-commerce, pacing, whitespace and perceived speed directly drive buyer trust.",
        "Separating server cache (TanStack Query) from UI state (Zustand) keeps commerce codebases clean.",
      ],
    },
  },
  {
    slug: "titanvaultpro",
    title: "TitanVaultPro",
    tagline: "A watch-to-earn and fixed-ROI investment platform with wallet ledgers, cron settlements and admin controls.",
    description:
      "A full-stack Next.js and MongoDB financial platform where users earn wallet balance from sponsored video tasks and allocate funds into maturity-based investment plans.",
    category: "Finance Product",
    status: "personal",
    featured: true,
    year: "2026",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "NextAuth v5", "Zod", "Tailwind CSS"],
    githubUrl: "https://github.com/oguike-godswill/titanvaultpro",
    cover: "vault",
    role: "Full-stack architecture — Next.js App Router, Mongoose schemas, NextAuth v5, cron settlement API and admin dashboard.",
    caseStudy: {
      problem: [
        "Reward and investment platforms require strict server-side accounting: wallet balances, task credits, maturity payouts and withdrawals must stay consistent and auditable.",
        "Admins also need operational visibility to configure plans, review withdrawals and manage tasks without touching the database directly.",
      ],
      product: [
        "TitanVaultPro combines a user-facing earning and investment portal with an administrative control center.",
        "Users complete sponsored video tasks to build wallet balance, subscribe to fixed-return plans, and receive automated principal + profit settlements at maturity.",
      ],
      features: [
        "Credential authentication with NextAuth v5 and bcryptjs hashing",
        "Sponsored video task completion with server-verified wallet crediting",
        "Fixed-ROI investment plans with maturity tracking",
        "Secret-protected cron settlement endpoint (POST /api/cron/settle)",
        "Withdrawal requests with configurable minimums and fee calculation",
        "Admin panel for managing plans, tasks, settings and user payouts",
      ],
      design: [
        "Clean financial UI highlighting available balance, active plans, maturity countdowns and transaction history.",
      ],
      engineering: [
        {
          label: "App Architecture",
          body: "Next.js 16 App Router with dynamic per-request session resolution and strict Zod validation on all mutations.",
        },
        {
          label: "Database",
          body: "MongoDB with Mongoose models for users, wallets, tasks, investment positions, withdrawals and ledger entries.",
        },
        {
          label: "Settlements",
          body: "Protected cron API route settles matured positions idempotently so payouts cannot be double-credited.",
        },
      ],
      challenges: [
        {
          challenge: "Preventing duplicate payouts or balance drift when settlement jobs run repeatedly.",
          solution:
            "Designed idempotent settlement queries gated by maturity timestamp and status flags inside the cron handler.",
        },
      ],
      responsive: [
        "Responsive dashboard tables and wallet cards adapted cleanly for mobile users checking earnings on the move.",
      ],
      performance: [
        "Server-rendered account views avoid client-side loading waterfalls on sensitive financial data.",
      ],
      outcome: [
        "Complete full-stack financial workflow with seeded demo environment, automated settlements and role-based admin controls.",
      ],
      lessons: [
        "Idempotency is mandatory for any cron-driven financial settlement endpoint.",
        "Separating user ledger entries from cached balances makes auditing and debugging straightforward.",
      ],
    },
  },
  {
    slug: "pocketguard",
    title: "PocketGuard",
    tagline: "A personal finance planning platform designed to help users organize, understand and plan their money.",
    description:
      "A finance planning platform that turns raw transactions into a dashboard people can actually read and act on.",
    category: "Finance Product",
    status: "in-development",
    featured: true,
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Prisma", "Recharts", "JWT", "Zod", "Tailwind CSS"],
    githubUrl: "https://github.com/oguike-godswill/pocket-guard",
    cover: "dashboard",
    role: "Product thinking, frontend architecture, dashboard UI, authentication and data handling.",
    caseStudy: {
      problem: [
        "Personal money information is scattered across notes, spreadsheets and memory, which makes it hard to answer a simple question: where do I stand financially right now?",
        "Most finance tools are either too heavy for an individual or too shallow to be trusted with real planning.",
      ],
      product: [
        "PocketGuard is a personal finance planning platform built to help users organise, understand and plan their money from a single dashboard.",
        "Users sign in securely, record their financial data through structured forms, and see it summarised visually so decisions are based on something more than a hunch.",
      ],
      features: [
        "Account creation and secure sign in",
        "Financial dashboard summarising the user's data",
        "Charts and data visualisation of financial information",
        "Structured forms with server-side validation",
        "Persisted user data across sessions",
        "Responsive dashboard usable on phone, tablet and desktop",
      ],
      design: [
        "The dashboard leads with clarity: the most important numbers are readable at a glance, and everything else supports them instead of competing for attention.",
        "Charts are used only where they genuinely explain data better than a list would — visualisation earns its place rather than decorating the screen.",
        "Dense financial information is broken into cards and sections so the layout stays calm on small screens.",
      ],
      engineering: [
        {
          label: "Frontend",
          body: "Next.js and TypeScript with a component-driven structure, styled in Tailwind CSS. Charts are rendered with Recharts inside focused client components while the surrounding page stays server-rendered.",
        },
        {
          label: "Data layer",
          body: "Prisma models the financial records and user data, with migrations keeping the schema in step with the product as it evolves.",
        },
        {
          label: "Authentication",
          body: "Stateless JWT authentication using jose for token handling, with bcrypt password hashing on stored credentials.",
        },
        {
          label: "Validation",
          body: "Zod validates every financial entry before it touches the database — malformed or missing data is rejected at the boundary.",
        },
      ],
      challenges: [
        {
          challenge: "Financial data is easy to enter badly: missing fields, wrong types and inconsistent values quietly corrupt the whole picture.",
          solution:
            "Shared Zod schemas validate on both the form and the API route, so users get immediate feedback while the server stays authoritative.",
        },
        {
          challenge: "Dashboards get slow and cluttered as records grow.",
          solution:
            "Aggregation happens on the server and charts receive only the summary they need, keeping the client light and the UI responsive.",
        },
      ],
      responsive: [
        "The dashboard is designed mobile-first: chart cards stack vertically, tables simplify, and primary actions stay within thumb reach.",
        "Layouts are verified from 320px up so financial summaries never introduce horizontal scrolling.",
      ],
      performance: [
        "Charts are client-only islands, leaving the rest of the page server-rendered.",
        "Only necessary data is sent to the browser, keeping payloads small as the record count grows.",
      ],
      outcome: [
        "PocketGuard is currently in active development; the public repository reflects the work in progress.",
        "It is a focused example of product thinking applied to a data-heavy interface.",
      ],
      lessons: [
        "In finance products, trust is a design feature — clear validation, honest states and readable numbers matter as much as visuals.",
        "Validating at the boundary instead of inside components keeps forms and APIs consistent without duplicated logic.",
        "Designing the dashboard before the entry forms clarifies exactly which data the product actually needs.",
      ],
    },
  },
  {
    slug: "run-buddy-app",
    title: "Run Buddy App",
    tagline: "A Flutter application that connects two people who want to run together — anywhere in the world.",
    description:
      "A mobile app for finding a running partner: discover runners, connect with them, and go for a run wherever you are in the world.",
    category: "Mobile App",
    status: "in-development",
    featured: true,
    year: "2026",
    technologies: ["Flutter", "Dart", "Mobile UI", "Auth", "State Management"],
    cover: "mobile",
    role: "Mobile development: navigation architecture, authentication flows, runner discovery and the connection flow.",
    caseStudy: {
      problem: [
        "Running with someone is a different activity from running alone — but finding a partner at your pace, in your area and on your schedule rarely happens by accident.",
        "General social apps connect people in the abstract; none of them are built around the simple outcome of two people actually going for a run together.",
      ],
      product: [
        "Run Buddy is built around one outcome: two people connect and run together, wherever they are in the world.",
        "A runner creates an account, discovers other runners and reaches out to connect — the app handles the introduction so the run can happen.",
      ],
      features: [
        "Sign up and sign in with authentication persistence",
        "Runner profiles with the person front and centre",
        "Discover other runners and reach out to connect",
        "Connection flow between two runners — next door or on the other side of the world",
        "Protected screens that require a signed-in account",
        "Structured navigation across the app",
        "Responsive interface across phone sizes",
      ],
      design: [
        "The interface is built for one-handed use on the move: large tap targets, simple cards and very few steps between opening the app and reaching another runner.",
        "Screens stay deliberately quiet — the connection between two people is the event, so layout and spacing do the work instead of decoration.",
        "Discovery reads like a short list of people rather than an endless directory: the goal is one good match, not infinite browsing.",
      ],
      engineering: [
        {
          label: "Framework",
          body: "Built with Flutter and Dart — a single codebase rendering a native-feeling mobile UI, with widgets composed into reusable screen and component layers.",
        },
        {
          label: "Navigation & routing",
          body: "A route structure with protected guards: account-only screens are unreachable when no session exists, so introductions always happen between two real accounts.",
        },
        {
          label: "Authentication state",
          body: "Session persistence keeps runners signed in across app restarts, with a single source of truth for auth state driving the UI.",
        },
        {
          label: "State management",
          body: "Discovery results, connection status and form input live in one managed layer, so screens rebuild predictably instead of passing data down through the widget tree by hand.",
        },
      ],
      challenges: [
        {
          challenge: "Two people who have never met need enough context to feel comfortable starting a run together.",
          solution:
            "Profiles and the connection flow do the introducing — the app keeps that first step structured, short and consistent, so the decision to connect is easy to make.",
        },
        {
          challenge: "Discovery has to work across cities and countries without turning into an endless directory to scroll.",
          solution:
            "Discovery is shaped around finding one person to run with: focused lists, clear actions and a direct path from a profile to a connection request.",
        },
      ],
      responsive: [
        "Built for phones first: layouts adapt across small and large devices, and every interactive target is sized for touch.",
        "Screen structure stays consistent across device densities, so the app looks intentional rather than stretched.",
      ],
      performance: [
        "Widgets are kept lean and lists are built to avoid unnecessary rebuilds while scrolling.",
        "Assets and routes are organised so the app starts fast and navigates without stutter.",
      ],
      outcome: [
        "The app is in active development, with the core journey — account handling, discovery and connecting with other runners — built first.",
      ],
      lessons: [
        "A connection product is only as good as its first introduction — the path up to connecting has to feel safe, short and obvious.",
        "Mobile forces discipline: hierarchy and touch targets have to be decided early, especially for an app people use outdoors on the move.",
        "Centralising auth state removes a whole class of routing bugs in apps with protected screens.",
      ],
    },
  },
  {
    slug: "legit-autos",
    title: "Legit Autos",
    tagline: "A complete automotive dealership website built to present vehicles and provide a professional digital experience.",
    description:
      "An end-to-end dealership website that presents vehicles properly and gives customers a credible digital first impression.",
    category: "Business Website",
    status: "live",
    featured: true,
    year: "2025",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "SEO"],
    liveUrl: "https://legitautomobile.com",
    cover: "auto",
    role: "Design and full build of the website — layout system, vehicle presentation, interactions and deployment.",
    caseStudy: {
      problem: [
        "A dealership sells on trust as much as on inventory. A dated or inconsistent website makes a real business look smaller than it is.",
        "Customers want to see vehicles clearly — good imagery, readable specifications and an easy way to make contact — without fighting the site.",
      ],
      product: [
        "A complete dealership website built to present vehicles and give customers a professional, credible digital experience from first visit to enquiry.",
        "The site covers the business's identity, its vehicles and the path to getting in touch, structured so it works equally well on a phone in a showroom and on a desktop at home.",
      ],
      features: [
        "Vehicle presentation with structured listings",
        "Business-focused homepage and service presentation",
        "Clear navigation across the whole site",
        "Contact and enquiry interactions",
        "Fully responsive experience on mobile and desktop",
        "Search-engine friendly structure and metadata",
      ],
      design: [
        "Vehicle imagery leads; the layout stays out of its way. Listings use generous cards with consistent spacing so inventory reads as one coherent catalogue.",
        "The visual system is deliberately restrained — neutral surfaces, strong type and one accent — because the cars, not the chrome, should catch the eye.",
        "Call-to-action placement follows the customer's decision path: browse, shortlist, enquire.",
      ],
      engineering: [
        {
          label: "Framework",
          body: "Built with Next.js and TypeScript, styled with Tailwind CSS, and deployed for production so pages are server-rendered and indexable.",
        },
        {
          label: "Structure",
          body: "Content-driven components keep listings consistent — vehicle cards and detail sections render from structured data rather than hand-built markup.",
        },
        {
          label: "SEO & metadata",
          body: "Semantic markup, per-page titles and descriptions, and optimised images so the business is discoverable and presents well when shared.",
        },
      ],
      challenges: [
        {
          challenge: "Image-heavy vehicle listings can easily become slow, especially on mobile connections.",
          solution:
            "Next.js image optimisation with proper sizing and lazy loading keeps galleries fast without sacrificing visual quality.",
        },
        {
          challenge: "The site has to look equally credible on a 320px phone and a wide desktop monitor.",
          solution:
            "A fluid layout system with breakpoint-specific type scales and spacing, verified across small phones through large desktop viewports.",
        },
      ],
      responsive: [
        "Mobile-first: navigation collapses cleanly, listings stack into readable columns and enquiry actions stay reachable without scrolling past the content.",
        "Touch targets and spacing are sized for real-world phone use, not just visual correctness.",
      ],
      performance: [
        "Server-rendered pages with optimised images keep the site fast on first load.",
        "Third-party scripts were kept to a minimum — nothing loads that the site doesn't need.",
      ],
      outcome: [
        "Legit Autos is live in production at legitautomobile.com as a complete, business-facing website.",
        "It demonstrates shipping a polished, high-trust site for a real business.",
      ],
      lessons: [
        "For business sites, credibility is the feature: consistency in spacing, type and imagery does more for trust than any effect.",
        "Content-driven components mean a listing-heavy site stays maintainable as inventory changes.",
        "Real businesses expose performance problems faster than portfolio demos — optimising images early pays off immediately.",
      ],
    },
  },
  {
    slug: "tastybitsz",
    title: "TastyBits",
    tagline: "A cooking web application that helps users discover dishes and learn how to prepare them.",
    description:
      "A cooking web app for discovering dishes and following cooking instructions, built as a fast single-page experience.",
    category: "Web App",
    status: "live",
    featured: true,
    year: "2025",
    technologies: ["React", "Vite", "JavaScript", "REST API", "Responsive UI"],
    liveUrl: "https://tastybitsz.vercel.app",
    cover: "recipe",
    role: "Frontend development — discovery interface, search, recipe views and API integration.",
    caseStudy: {
      problem: [
        "People cooking at home want ideas quickly: what can I make, and how do I make it — without wading through ad-heavy pages or long personal stories.",
        "Recipe information scattered across the web is inconsistent, making it hard to go from a dish name to actual cooking instructions.",
      ],
      product: [
        "TastyBits is a cooking web application that helps users discover dishes and learn how to prepare them through a focused, fast interface.",
        "Users search for dishes, open a recipe and follow its cooking instructions — the whole journey happens inside one clean application view.",
      ],
      features: [
        "Dish and recipe discovery",
        "Search across recipes",
        "Recipe detail views with cooking instructions",
        "Fast single-page application navigation",
        "Responsive layout for phone, tablet and desktop",
      ],
      design: [
        "The interface is built for scanning: dish imagery, clear titles and short metadata let users move quickly from an idea to a recipe.",
        "Recipe pages prioritise cooking instructions — readable line lengths, clear steps and no visual noise competing with the content.",
        "Because it is a single-page app, transitions between browsing and reading a recipe stay instant.",
      ],
      engineering: [
        {
          label: "Stack",
          body: "A React single-page application built with Vite, deployed as static assets so it loads quickly from a CDN-backed host.",
        },
        {
          label: "Data",
          body: "Recipe content is pulled from an API and rendered into reusable components, with loading and empty states handled explicitly so the UI never shows a broken view.",
        },
        {
          label: "Architecture",
          body: "Componentised views for discovery, search and recipe detail, keeping the codebase small and easy to extend.",
        },
      ],
      challenges: [
        {
          challenge: "Recipe data comes from a remote source, which means latency, missing fields and empty results are normal rather than exceptional.",
          solution:
            "Every data-driven view has explicit loading, empty and error states, so users always understand what the app is doing.",
        },
        {
          challenge: "A recipe app is used with floury hands on a phone propped against a kitchen counter.",
          solution:
            "Mobile-first layout with large touch targets and readable type sizes for the cooking-instruction view.",
        },
      ],
      responsive: [
        "Grids collapse gracefully from multi-column desktop layouts to single-column mobile views.",
        "The recipe reading experience is tuned for small screens, where most cooking actually happens.",
      ],
      performance: [
        "Vite's build pipeline produces a small, code-split bundle served as static files.",
        "Static deployment means near-instant repeat loads and no server round-trip for the app shell.",
      ],
      outcome: [
        "TastyBits is live in production and available to use at tastybitsz.vercel.app.",
        "It shows the ability to build and ship a clean API-driven frontend application.",
      ],
      lessons: [
        "Handling loading and empty states properly is what separates a demo from a product — users notice absence more than decoration.",
        "A small, well-structured component set goes a long way; not every app needs a large architecture.",
        "Designing for the real usage context — a phone in a kitchen — changes typography and touch decisions in useful ways.",
      ],
    },
  },
  {
    slug: "ai-responder",
    title: "WhatsApp + Telegram AI Responder",
    tagline: "An AI-powered messaging responder that processes and replies to WhatsApp and Telegram messages automatically.",
    description:
      "A Node.js automation system that listens for incoming WhatsApp and Telegram messages and responds using AI.",
    category: "Automation / AI",
    status: "personal",
    featured: true,
    year: "2025",
    technologies: ["Node.js", "Baileys", "OpenAI", "Telegram Bot API", "Event Handling"],
    cover: "bot",
    role: "Backend engineering — messaging integrations, AI pipeline, event handling and automation logic.",
    caseStudy: {
      problem: [
        "Repetitive message handling — frequently asked questions, acknowledgements, basic replies — consumes time even when the answers are predictable.",
        "WhatsApp and Telegram are separate ecosystems with different APIs, so a single automated responder has to speak both.",
      ],
      product: [
        "An AI-powered responder that connects to WhatsApp and Telegram, listens for incoming messages, processes them through an AI model and sends replies back automatically.",
        "It is a server-side system rather than a visual product: the value is in the pipeline — receive, understand, respond — running reliably in the background.",
      ],
      features: [
        "WhatsApp messaging integration through the Baileys library",
        "Telegram bot integration through the Telegram Bot API",
        "AI-powered message processing and reply generation",
        "Event-driven handling of incoming messages",
        "Automated response dispatch back to the originating chat",
      ],
      design: [
        "There is no traditional UI here — the design work is in the message flow: how a message enters, how it is interpreted, and how a reply is formed and returned.",
        "Responses are shaped with clear instructions so replies stay consistent and on-topic instead of open-ended.",
      ],
      engineering: [
        {
          label: "Runtime",
          body: "A Node.js service built around asynchronous event handling — incoming messages are processed without blocking the connection.",
        },
        {
          label: "Messaging integrations",
          body: "Baileys provides the WhatsApp connection layer; the Telegram side uses the official Bot API. Both funnel into one shared processing pipeline.",
        },
        {
          label: "AI integration",
          body: "Incoming message content is passed to an AI model with a defined system prompt, and the generated reply is sent back to the correct conversation.",
        },
        {
          label: "Security",
          body: "Credentials, tokens and API keys are held in environment variables on the server only — nothing sensitive is ever exposed to a client or committed to the repository.",
        },
      ],
      challenges: [
        {
          challenge: "Messaging connections are long-lived and occasionally drop, which can silently stop a responder.",
          solution:
            "The service handles reconnection and treats message processing as resilient, queue-like work rather than assuming a perfect connection.",
        },
        {
          challenge: "Automated replies can go off-topic or repeat themselves without guardrails.",
          solution:
            "Constrained system prompts and per-message processing keep replies scoped to what the responder is meant to handle.",
        },
      ],
      responsive: [
        "Works across whatever messaging apps and devices participants are already using.",
      ],
      performance: [
        "Message handling is asynchronous, so one slow AI call never stalls the connection or other conversations.",
        "Processing is kept minimal per message, focusing only on the content that needs a reply.",
      ],
      outcome: [
        "The responder exists as a working personal project demonstrating backend, integration and automation ability beyond frontend work.",
        "No credentials, tokens or private server details are exposed anywhere in relation to it.",
      ],
      lessons: [
        "Integrating two messaging platforms reinforced how much value a well-designed shared pipeline has — the core logic stays identical while only the transport changes.",
        "AI features are only as reliable as their guardrails; prompts and fallbacks are part of the engineering, not an afterthought.",
        "Secrets belong on the server, in environment variables — a rule that should never bend, no matter how small the project.",
      ],
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
