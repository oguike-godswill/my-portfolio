export type ProjectStatus = "live" | "in-development" | "personal";

export type CoverVariant = "marketplace" | "dashboard" | "mobile" | "auto" | "recipe" | "bot";

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
        "It stands as the clearest example of my end-to-end product work: interface, authentication, payments and data model shipped as one working product.",
      ],
      lessons: [
        "Marketplace products live or die on role clarity — knowing exactly which screen belongs to which user removes entire categories of confusion.",
        "Doing payment and access control on the server from day one is far cheaper than retrofitting it later.",
        "Typed data contracts between the API and the UI catch a surprising share of bugs before they ever reach the browser.",
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
        "It is my strongest example of product thinking applied to a data-heavy interface.",
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
        "It is the mobile half of my product work: where Molearn and PocketGuard prove the web side, Run Buddy proves the Flutter side.",
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
        "It demonstrates that I can ship a polished site for a real business, not just personal projects.",
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
    category: "Cooking Web App",
    status: "live",
    featured: true,
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
        "It shows my ability to build and ship a clean API-driven frontend application.",
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
    category: "Automation / Backend",
    status: "personal",
    featured: false,
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
        "Not applicable in the traditional sense — the system works across whatever messaging apps and devices the participants are already using.",
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
