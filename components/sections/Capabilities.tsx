import Link from "next/link";
import { ArrowRight, Blocks, Layers, Server, Smartphone, Sparkles, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const capabilities: {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  span?: string;
}[] = [
  {
    icon: Layers,
    title: "Frontend Development",
    description: "Interfaces that hold up in production, not just in a mockup.",
    items: [
      "React & Next.js applications",
      "TypeScript across the stack",
      "Responsive, accessible interfaces",
      "Reusable component architecture",
    ],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native-feeling mobile products from a single codebase.",
    items: [
      "Flutter & Dart mobile apps",
      "Mobile navigation & routing",
      "Authentication & protected routes",
      "State management",
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    description: "The systems behind the screen — typed, validated, secure.",
    items: [
      "Node.js services",
      "REST API design & integration",
      "Authentication & session handling",
      "Database modelling with Prisma",
    ],
  },
  {
    icon: Blocks,
    title: "Product Development",
    description: "Complete products taken from idea to shipped release.",
    items: [
      "Dashboards & data visualisation",
      "Marketplaces & platforms",
      "Business websites",
      "Forms, search & user flows",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Integration & Agents",
    description: "AI where it earns its place — inside the product and the workflow.",
    items: [
      "ChatGPT & Gemini for research and planning",
      "Agentic coding with opencode & Claude Code",
      "OpenAI API integration in products",
      "LLM-powered messaging automation",
    ],
    span: "sm:col-span-2 lg:col-span-2",
  },
];

export function Capabilities() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-[var(--bg-subtle)]" aria-label="Capabilities">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,var(--bg-subtle),transparent_75%)]" />

      <Container className="relative">
        <div className="section">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="section-label mb-4">Capabilities</p>
              <h2 className="display-heading text-3xl sm:text-4xl lg:text-[2.75rem]">
                What I can build for you.
              </h2>
              <p className="muted mt-4 text-base leading-relaxed sm:text-lg">
                Not a list of technologies — the kinds of products I take from idea to working release.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-[var(--accent-text)]"
            >
              Start a project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.07} className={group.span}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[color-mix(in_srgb,var(--accent)_50%,var(--border))] hover:shadow-[0_24px_48px_-32px_rgba(0,0,0,0.6)]">
                  <span
                    className="absolute left-0 top-0 h-0.5 w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-[var(--accent-soft)] text-[var(--accent-text)] transition-all duration-300 group-hover:-rotate-6 group-hover:scale-105">
                      <group.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-fg-subtle transition-colors duration-300 group-hover:text-[var(--accent-text)]">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-lg font-semibold tracking-normal">{group.title}</h3>
                  <p className="muted mt-2 text-sm leading-relaxed">{group.description}</p>

                  <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-muted">
                        <svg
                          className="mt-1 h-3 w-3 shrink-0 text-[var(--accent-text)]"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 6.5L4.5 9L10 3.5"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-border bg-[var(--surface)] px-6 py-5 text-sm text-fg-muted">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-text)]">
                Across all of it
              </span>
              <span>Authentication</span>
              <span className="h-1 w-1 rounded-full bg-fg-subtle" aria-hidden="true" />
              <span>Data validation</span>
              <span className="h-1 w-1 rounded-full bg-fg-subtle" aria-hidden="true" />
              <span>Performance</span>
              <span className="h-1 w-1 rounded-full bg-fg-subtle" aria-hidden="true" />
              <span>Accessibility</span>
              <span className="h-1 w-1 rounded-full bg-fg-subtle" aria-hidden="true" />
              <span>Deployment</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
