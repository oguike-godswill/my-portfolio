import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { statusLabel, type Project } from "@/content/projects";

function Block({ label, title, children }: { label?: string; title: string; children: React.ReactNode }) {
  return (
    <section className="hairline py-12 sm:py-16">
      {label ? <p className="section-label mb-3">{label}</p> : null}
      <h2 className="display-heading text-2xl sm:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((text) => (
        <p key={text} className="muted max-w-3xl text-base leading-relaxed sm:text-[17px]">
          {text}
        </p>
      ))}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid max-w-3xl gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-[var(--surface)] px-4 py-3 text-sm text-fg-muted">
          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[10px] font-bold text-[var(--accent-text)]" aria-hidden="true">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

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
      <header className="section hairline">
        <Container>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="section-label">{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--fg-subtle)]" aria-hidden="true" />
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
              <span
                className={`h-1.5 w-1.5 rounded-full ${project.status === "live" ? "bg-emerald-500" : "bg-[var(--accent)]"}`}
                aria-hidden="true"
              />
              {statusLabel[project.status]}
            </span>
            {project.year ? (
              <>
                <span className="h-1 w-1 rounded-full bg-[var(--fg-subtle)]" aria-hidden="true" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">{project.year}</span>
              </>
            ) : null}
          </div>

          <h1 className="display-heading mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">{project.title}</h1>

          <p className="muted mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">{project.tagline}</p>

          <ul className="mt-7 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((tech) => (
              <li key={tech} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-fg-muted">
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
                Source code
              </a>
            ) : null}
          </div>

          <Reveal className="mt-12">
            <ProjectCover variant={project.cover} />
          </Reveal>
        </Container>
      </header>

      <Container>
        <Block label="Overview" title="The Problem">
          <Paragraphs items={cs.problem} />
        </Block>

        <Block label="Overview" title="The Product">
          <Paragraphs items={cs.product} />
        </Block>

        <Block label="Ownership" title="My Role">
          <Paragraphs items={[project.role]} />
        </Block>

        <Block label="Scope" title="Features">
          <p className="muted mb-5 text-sm">Implemented and available in the product today.</p>
          <CheckList items={cs.features} />
          {cs.planned && cs.planned.length > 0 ? (
            <>
              <p className="mb-5 mt-10 text-sm text-fg-subtle">Planned — not yet shipped.</p>
              <ul className="grid max-w-3xl gap-3 sm:grid-cols-2">
                {cs.planned.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-dashed border-border px-4 py-3 text-sm text-fg-subtle"
                  >
                    <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-border" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </Block>

        <Block label="Interface" title="Design">
          <Paragraphs items={cs.design} />
        </Block>

        <Block label="Technical" title="Engineering">
          <div className="grid max-w-4xl gap-4 sm:grid-cols-2">
            {cs.engineering.map((note) => (
              <div key={note.label} className="rounded-2xl border border-border bg-[var(--surface)] p-5">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--accent-text)]">
                  {note.label}
                </h3>
                <p className="muted mt-2.5 text-sm leading-relaxed">{note.body}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Problem solving" title="Challenges & Solutions">
          <div className="max-w-4xl space-y-4">
            {cs.challenges.map((item, i) => (
              <div key={item.challenge} className="rounded-2xl border border-border bg-[var(--surface)] p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 font-mono text-xs text-fg-subtle">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-[15px] font-medium text-fg">{item.challenge}</p>
                    <p className="muted mt-2 text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Devices" title="Responsive Design">
          <Paragraphs items={cs.responsive} />
        </Block>

        <Block label="Quality" title="Performance & Accessibility">
          <Paragraphs items={cs.performance} />
        </Block>

        <Block label="Result" title="Outcome">
          <Paragraphs items={cs.outcome} />
        </Block>

        <Block label="Reflection" title="Lessons Learned">
          <ul className="max-w-3xl space-y-4">
            {cs.lessons.map((lesson) => (
              <li key={lesson} className="flex items-start gap-3 text-base leading-relaxed text-fg-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                {lesson}
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Links" title="See it for yourself">
          <div className="flex flex-wrap gap-3">
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
      </Container>

      <nav className="hairline" aria-label="Project pagination">
        <Container>
          <div className="grid gap-4 py-8 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group rounded-2xl border border-border bg-[var(--surface)] p-5 transition-colors hover:border-border-strong"
              >
                <span className="section-label flex items-center gap-1.5">
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  Previous
                </span>
                <span className="mt-2 block font-display text-lg font-semibold">{prev.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group rounded-2xl border border-border bg-[var(--surface)] p-5 text-right transition-colors hover:border-border-strong"
              >
                <span className="section-label flex items-center justify-end gap-1.5">
                  Next
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="mt-2 block font-display text-lg font-semibold">{next.title}</span>
              </Link>
            ) : null}
          </div>
        </Container>
      </nav>
    </article>
  );
}
