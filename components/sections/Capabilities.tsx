import Link from "next/link";
import { ArrowRight, Blocks, Layers, Server, Smartphone, Sparkles, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const capabilities: {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  span?: string;
}[] = [
  {
    icon: Layers,
    title: "Frontend Engineering",
    description: "Interfaces that hold up in production, not just in a Figma mockup.",
    items: [
      "React & Next.js App Router applications",
      "Strict TypeScript across the stack",
      "Responsive, accessible 320px-first UI",
      "Reusable component & design system architecture",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native-feeling iOS & Android products from a single codebase.",
    items: [
      "Flutter & Dart mobile applications",
      "Protected navigation & route guards",
      "Persistent authentication & session state",
      "Predictable state management & 60fps lists",
    ],
  },
  {
    icon: Server,
    title: "Backend & API Systems",
    description: "The architecture behind the screen — typed, validated, and secure.",
    items: [
      "Node.js services & event pipelines",
      "REST API design & Stripe payment webhooks",
      "NextAuth & JWT credential authentication",
      "Relational modelling with Prisma & PostgreSQL",
    ],
  },
  {
    icon: Blocks,
    title: "End-to-End Product Delivery",
    description: "Complete digital products taken from zero to shipped release.",
    items: [
      "Financial dashboards & data visualisation",
      "Two-sided marketplaces & content platforms",
      "High-conversion business websites & SEO",
      "Complex forms, search & role-based flows",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Integration & Agentic Workflows",
    description: "AI where it genuinely earns its place — inside the product and the engineering loop.",
    items: [
      "Guardrailed OpenAI API pipelines in production",
      "Automated WhatsApp & Telegram AI responders",
      "Agentic engineering with Claude Code & opencode",
      "Rapid architecture & edge-case verification",
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
                What I can build for your team.
              </h2>
              <p className="muted mt-4 text-base leading-relaxed sm:text-lg">
                Not just a list of frameworks — the complete product layers I take from specification to production release.
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
              <Reveal key={group.title} delay={i * 0.06} className={group.span}>
                <SpotlightCard className="h-full p-6">
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-[var(--accent-soft)] text-[var(--accent-text)]">
                        <group.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-xs text-fg-subtle">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-lg font-semibold tracking-normal text-fg">
                      {group.title}
                    </h3>
                    <p className="muted mt-2 text-sm leading-relaxed">{group.description}</p>

                    <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-muted">
                          <svg
                            className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--accent-text)]"
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
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-[var(--surface)] px-6 py-4 text-sm text-fg-muted">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-text)]">
                Engineering Standards Across Every Build
              </span>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm">
                <span>Server-Side Access Control</span>
                <span className="h-1 w-1 rounded-full bg-fg-subtle" aria-hidden="true" />
                <span>Zod Boundary Validation</span>
                <span className="h-1 w-1 rounded-full bg-fg-subtle" aria-hidden="true" />
                <span>320px-First Responsiveness</span>
                <span className="h-1 w-1 rounded-full bg-fg-subtle" aria-hidden="true" />
                <span>Web Accessibility (WCAG)</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
