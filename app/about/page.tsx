import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { featuredProjects } from "@/content/projects";
import { books } from "@/content/books";
import { education, experience, skillGroups } from "@/content/resume";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Godswill Oguike is a frontend and app developer building production-ready products with React, Next.js, TypeScript and Flutter.",
  alternates: { canonical: "/about" },
};

const philosophy = [
  {
    title: "Ship real things",
    body: "A project only counts when someone can actually use it. I care about the boring parts — states, errors, edge cases — because that's what separates a demo from a product.",
  },
  {
    title: "Clarity over cleverness",
    body: "Readable components, predictable structure and honest UI. Future-me and every teammate after me should be able to understand a decision in seconds.",
  },
  {
    title: "Design is part of engineering",
    body: "Spacing, hierarchy and responsiveness aren't decoration — they're requirements. I treat UI quality as a technical concern, not a hand-off.",
  },
];

export default function AboutPage() {
  const selected = featuredProjects.slice(0, 3);
  const nowReading = books.find((b) => b.status === "reading");

  return (
    <div>
      <header className="section hairline">
        <Container>
          <p className="section-label mb-4">About</p>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h1 className="display-heading max-w-3xl text-4xl sm:text-5xl lg:text-[3.5rem]">
                I&apos;m a developer who enjoys turning ideas into usable digital products.
              </h1>
              <div className="muted mt-6 max-w-2xl space-y-4 text-base leading-relaxed sm:text-lg">
                <p>
                  I&apos;m Godswill Oguike — a frontend and app developer working across React, Next.js,
                  TypeScript, Node.js and Flutter. I build interfaces people can rely on, and the systems
                  behind them: APIs, authentication, data and validation.
                </p>
                <p>
                  My day job is product work at ConnectNigeria, where I maintain and extend a live platform.
                  Outside of it, I design and ship my own products — an education platform, a finance planning
                  tool, a mobile app — which is where I get to own every decision from data model to pixels.
                </p>
                <p>
                  AI is part of how I work: ChatGPT and Gemini for research and planning, coding agents like
                  opencode and Claude Code for speed, and the OpenAI API when a product genuinely needs it.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact">
                  Let&apos;s work together
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/resume" variant="secondary">
                  View resume
                </ButtonLink>
              </div>
            </div>

            <aside className="flex flex-col gap-4">
              <div className="rounded-2xl border border-border bg-[var(--surface)] p-6">
                <p className="section-label mb-4">Quick facts</p>
                <dl className="space-y-3.5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-fg-subtle">Role</dt>
                    <dd className="text-right text-fg">{site.role}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-fg-subtle">Based in</dt>
                    <dd className="text-right text-fg">{site.location}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-fg-subtle">Focus</dt>
                    <dd className="text-right text-fg">Web &amp; mobile products</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-fg-subtle">Status</dt>
                    <dd className="text-right text-[var(--accent-text)]">Open to opportunities</dd>
                  </div>
                </dl>
              </div>

              <div className="flex gap-3">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-[var(--surface)] py-3 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-[var(--surface)] py-3 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </header>

      <section className="section hairline" aria-label="Experience">
        <Container>
          <p className="section-label mb-4">Experience</p>
          <h2 className="display-heading text-3xl sm:text-4xl">Where I&apos;ve worked</h2>

          <ol className="mt-10 max-w-3xl space-y-6">
            {experience.map((entry) => (
              <li key={`${entry.role}-${entry.period}`} className="rounded-2xl border border-border bg-[var(--surface)] p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold tracking-normal">
                    {entry.role} <span className="text-fg-subtle">·</span>{" "}
                    <span className="text-fg-muted">{entry.company}</span>
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-wider text-fg-subtle">{entry.period}</span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {entry.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section hairline" aria-label="Education and skills">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="section-label mb-4">Education</p>
              <ol className="space-y-4">
                {education.map((entry) => (
                  <li key={entry.qualification} className="rounded-2xl border border-border bg-[var(--surface)] p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-base font-semibold">{entry.qualification}</h3>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
                        {entry.period}
                      </span>
                    </div>
                    <p className="muted mt-1.5 text-sm">{entry.institution}</p>
                    {entry.detail ? <p className="mt-2 text-sm text-fg-subtle">{entry.detail}</p> : null}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="section-label mb-4">Technical skills</p>
              <div className="space-y-5">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <h3 className="text-sm font-medium text-fg">{group.label}</h3>
                    <ul className="mt-2.5 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-fg-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section hairline" aria-label="Development philosophy">
        <Container>
          <p className="section-label mb-4">Philosophy</p>
          <h2 className="display-heading text-3xl sm:text-4xl">How I approach the work</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {philosophy.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-[var(--surface)] p-6">
                <h3 className="font-display text-base font-semibold">{item.title}</h3>
                <p className="muted mt-3 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="hairline" aria-label="Reading">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4 py-8">
            <p className="text-sm text-fg-muted">
              <span className="section-label mr-3">Reading</span>
              {nowReading ? (
                <>
                  Now reading{" "}
                  <span className="font-medium text-fg">
                    {nowReading.title}
                  </span>{" "}
                  by {nowReading.author}
                </>
              ) : (
                <>A shelf of the books I&apos;ve read and the ones I&apos;m reading now.</>
              )}
            </p>
            <Link
              href="/books"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-[var(--accent-text)]"
            >
              Browse the shelf
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="section hairline" aria-label="Selected projects">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="section-label mb-4">Selected work</p>
              <h2 className="display-heading text-3xl sm:text-4xl">Proof of work</h2>
            </div>
            <Link
              href="/work"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-[var(--accent-text)]"
            >
              All projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {selected.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section hairline" aria-label="Interests and contact">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-border bg-[var(--surface)] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="section-label mb-3">Currently</p>
              <h2 className="display-heading text-2xl sm:text-3xl">
                Building products and open to new opportunities.
              </h2>
              <p className="muted mt-3 max-w-xl text-sm leading-relaxed">
                Interested in frontend or app development roles, contracts and collaborations — particularly
                product work where engineering quality actually matters.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <ButtonLink href="/contact">
                Get in touch
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
