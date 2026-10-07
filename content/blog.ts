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
