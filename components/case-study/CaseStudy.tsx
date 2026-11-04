import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Github,
  Layers,
  Sparkles,
  Wrench,
} from "lucide-react";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { statusLabel, type Project } from "@/content/projects";

function Block({
  id,
  label,
  title,
  children,
}: {
  id: string;
  label?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-12 first:border-t-0 sm:py-14">
      {label ? <p className="section-label mb-3">{label}</p> : null}
      <h2 className="display-heading text-2xl sm:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((text) => (
        <p key={text} className="muted max-w-3xl text-base leading-relaxed sm:text-[16.5px]">
          {text}
        </p>
      ))}
    </div>
  );
}

const tocSections = [
  { id: "overview", label: "01 · Problem & Product" },
  { id: "engineering", label: "02 · System Architecture" },
  { id: "challenges", label: "03 · Challenges & Solutions" },
  { id: "features", label: "04 · Shipped Scope" },
  { id: "design", label: "05 · Interface & Quality" },
  { id: "outcome", label: "06 · Outcome & Lessons" },
];

export function CaseStudy({
  project,
  prev,
  next,
}: {
  project: Project;
  prev?: Project;
  next?: Project;
}) {
  const cs = project.caseStudy;

  return (
    <article>
      <header className="section hairline relative overflow-hidden">
        <div
          className="grid-pattern pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,var(--bg),transparent_75%)]"
          aria-hidden="true"
        />
        <Container className="relative">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[var(--surface)] px-3.5 py-1.5 text-xs text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            All projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="section-label">{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--fg-subtle)]" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[var(--surface)] px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
              <span
                className={`h-1.5 w-1.5 rounded-full ${project.status === "live" ? "bg-emerald-500" : "bg-[var(--accent)]"}`}
                aria-hidden="true"
              />
              {statusLabel[project.status]}
            </span>
            {project.year ? (
              <>
                <span className="h-1 w-1 rounded-full bg-[var(--fg-subtle)]" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                  {project.year}
                </span>
              </>
            ) : null}
          </div>

          <h1 className="display-heading mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="muted mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">{project.tagline}</p>

          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-[var(--surface)] px-3 py-1 font-mono text-xs text-fg-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-medium text-[#0a0a0b] transition-all hover:-translate-y-0.5 hover:brightness-105"
              >
                Visit live product
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border-strong bg-[var(--surface)] px-6 text-sm font-medium text-fg transition-all hover:-translate-y-0.5 hover:bg-surface-hover"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                View source code
              </a>
            ) : null}
          </div>

          <Reveal className="mt-12">
            <div className="group">
              <ProjectCover variant={project.cover} />
            </div>
          </Reveal>
        </Container>
      </header>

      <Container>
        <div className="grid gap-12 py-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
          {/* Sticky Left Rail: Navigation & Specs */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-border bg-[var(--surface)] p-5">
                <p className="section-label mb-3">On this page</p>
                <nav aria-label="Case study sections" className="space-y-1.5">
                  {tocSections.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block rounded-lg px-2.5 py-1.5 font-mono text-xs text-fg-muted transition-colors hover:bg-[var(--bg-subtle)] hover:text-fg"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="rounded-2xl border border-border bg-[var(--surface)] p-5">
                <p className="section-label mb-3">Ownership &amp; Role</p>
                <p className="text-xs leading-relaxed text-fg-muted">{project.role}</p>
                <div className="mt-4 space-y-2 border-t border-border pt-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between font-mono text-xs text-[var(--accent-text)] hover:underline"
                    >
                      <span>Live deployment</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between font-mono text-xs text-fg-muted hover:text-fg"
                    >
                      <span>GitHub repository</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Case Study Deep-Dive */}
          <div>
            <Block id="overview" label="01 · Context & Product" title="The Problem & Product Solution">
              <div className="grid gap-5 sm:grid-cols-2">
                <SpotlightCard className="p-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[var(--bg-subtle)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                    The Problem
                  </span>
                  <div className="mt-4 space-y-3">
                    {cs.problem.map((text) => (
                      <p key={text} className="text-sm leading-relaxed text-fg-muted">
                        {text}
                      </p>
                    ))}
                  </div>
                </SpotlightCard>

                <SpotlightCard className="p-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--accent-text)]">
                    <Sparkles className="h-3 w-3" aria-hidden="true" />
                    The Product Solution
                  </span>
                  <div className="mt-4 space-y-3">
                    {cs.product.map((text) => (
                      <p key={text} className="text-sm leading-relaxed text-fg">
                        {text}
                      </p>
                    ))}
                  </div>
                </SpotlightCard>
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-[var(--bg-subtle)] p-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-text)]">
                  My Role &amp; Ownership
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{project.role}</p>
              </div>
            </Block>

            <Block id="engineering" label="02 · Technical Architecture" title="How It's Engineered">
              <div className="grid gap-4 sm:grid-cols-2">
                {cs.engineering.map((note, idx) => (
                  <SpotlightCard key={note.label} className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent-text)]">
                        <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
                        {note.label}
                      </span>
                      <span className="font-mono text-[11px] text-fg-subtle">
                        Layer 0{idx + 1}
                      </span>
                    </div>
                    <p className="muted mt-3 text-sm leading-relaxed">{note.body}</p>
                  </SpotlightCard>
                ))}
              </div>
            </Block>

            <Block id="challenges" label="03 · Problem Solving" title="Engineering Challenges & Solutions">
              <div className="space-y-4">
                {cs.challenges.map((item, i) => (
                  <SpotlightCard key={item.challenge} className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                          Challenge 0{i + 1}
                        </span>
                        <p className="mt-2 font-display text-base font-semibold leading-snug text-fg">
                          {item.challenge}
                        </p>
                      </div>
                      <div className="border-t border-border pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-500">
                          <Wrench className="h-3 w-3" aria-hidden="true" />
                          Engineered Solution
                        </span>
                        <p className="muted mt-2 text-sm leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </Block>

            <Block id="features" label="04 · Scope" title="Shipped Features">
              <p className="muted mb-5 text-sm">Implemented and working in the codebase today.</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {cs.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-[var(--surface)] px-4 py-3 text-sm text-fg-muted"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-text)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block id="design" label="05 · Craft & Quality" title="Interface, Responsiveness & Performance">
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg">
                    <Layers className="h-3.5 w-3.5 text-[var(--accent-text)]" aria-hidden="true" />
                    Interface Design
                  </h3>
                  <Paragraphs items={cs.design} />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-[var(--surface)] p-5">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent-text)]">
                      Responsive Behaviour
                    </h3>
                    <div className="mt-3 space-y-2.5">
                      {cs.responsive.map((text) => (
                        <p key={text} className="text-sm leading-relaxed text-fg-muted">
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-[var(--surface)] p-5">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent-text)]">
                      Performance &amp; Accessibility
                    </h3>
                    <div className="mt-3 space-y-2.5">
                      {cs.performance.map((text) => (
                        <p key={text} className="text-sm leading-relaxed text-fg-muted">
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Block>

            <Block id="outcome" label="06 · Result & Reflection" title="Outcome & Takeaways">
              <Paragraphs items={cs.outcome} />

              <div className="mt-8 rounded-2xl border border-border bg-[var(--surface)] p-6">
                <p className="section-label mb-4">Key Engineering Lessons</p>
                <ul className="space-y-3">
                  {cs.lessons.map((lesson) => (
                    <li
                      key={lesson}
                      className="flex items-start gap-3 text-sm leading-relaxed text-fg-muted sm:text-[15px]"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                        aria-hidden="true"
                      />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-medium text-[#0a0a0b] transition-all hover:-translate-y-0.5 hover:brightness-105"
                  >
                    Live demo
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-border-strong px-6 text-sm font-medium text-fg transition-all hover:-translate-y-0.5 hover:bg-surface-hover"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </a>
                ) : null}
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border-strong px-6 text-sm font-medium text-fg transition-all hover:-translate-y-0.5 hover:bg-surface-hover"
                >
                  Discuss a similar project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Block>
          </div>
        </div>
      </Container>

      <nav className="hairline" aria-label="Project pagination">
        <Container>
          <div className="grid gap-4 py-10 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group rounded-2xl border border-border bg-[var(--surface)] p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong"
              >
                <span className="section-label flex items-center gap-1.5">
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden="true" />
                  Previous Case Study
                </span>
                <span className="mt-2 block font-display text-lg font-semibold text-fg group-hover:text-[var(--accent-text)]">
                  {prev.title}
                </span>
                <span className="mt-1 block truncate text-xs text-fg-muted">{prev.tagline}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group rounded-2xl border border-border bg-[var(--surface)] p-6 text-right transition-all hover:-translate-y-0.5 hover:border-border-strong"
              >
                <span className="section-label flex items-center justify-end gap-1.5">
                  Next Case Study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
                <span className="mt-2 block font-display text-lg font-semibold text-fg group-hover:text-[var(--accent-text)]">
                  {next.title}
                </span>
                <span className="mt-1 block truncate text-xs text-fg-muted">{next.tagline}</span>
              </Link>
            ) : null}
          </div>
        </Container>
      </nav>
    </article>
  );
}
