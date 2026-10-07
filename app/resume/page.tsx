import type { Metadata } from "next";
import { DownloadCV } from "@/components/about/DownloadCV";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { featuredProjects } from "@/content/projects";
import { education, experience, skillGroups } from "@/content/resume";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Experience, education, skills and projects — the professional resume of Godswill Oguike, frontend and app developer.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <div className="section">
      <Container>
        <header className="flex flex-col gap-8 border-b border-border pb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label mb-4">Resume</p>
            <h1 className="display-heading text-4xl sm:text-5xl">{site.name}</h1>
            <p className="muted mt-3 text-base sm:text-lg">{site.role}</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-fg-muted">
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">
                {site.email}
              </a>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
                github.com/oguike-godswill
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-fg">
                linkedin.com/in/oguikegodswill
              </a>
              <span>{site.location}</span>
            </div>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <DownloadCV />
            <ButtonLink href="/contact" variant="secondary" className="h-11 px-6">
              Hire me
            </ButtonLink>
          </div>
        </header>

        <section className="pt-12" aria-labelledby="experience-heading">
          <h2 id="experience-heading" className="section-label">
            Experience
          </h2>
          <ol className="mt-6 space-y-8">
            {experience.map((entry) => (
              <li key={`${entry.role}-${entry.period}`} className="grid gap-3 sm:grid-cols-[200px_1fr]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">{entry.period}</p>
                  <p className="mt-1 text-sm text-fg-muted">{entry.company}</p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-normal">{entry.role}</h3>
                  <ul className="mt-3 space-y-2">
                    {entry.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-fg-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 border-t border-border pt-12" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="section-label">
            Projects
          </h2>
          <ol className="mt-6 space-y-6">
            {featuredProjects.map((project) => (
              <li key={project.slug} className="grid gap-3 sm:grid-cols-[200px_1fr]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">{project.category}</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-fg-muted underline decoration-border-strong underline-offset-4 hover:text-fg"
                      >
                        Live
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-fg-muted underline decoration-border-strong underline-offset-4 hover:text-fg"
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-normal">{project.title}</h3>
                  <p className="muted mt-1.5 max-w-2xl text-sm leading-relaxed">{project.tagline}</p>
                  <p className="mt-2 font-mono text-[11px] text-fg-subtle">
                    {project.technologies.slice(0, 6).join(" · ")}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12 border-t border-border pt-12" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="section-label">
            Skills
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-sm font-semibold text-fg">{group.label}</h3>
                <ul className="mt-2.5 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-fg-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-border pt-12" aria-labelledby="education-heading">
          <h2 id="education-heading" className="section-label">
            Education
          </h2>
          <ol className="mt-6 space-y-6">
            {education.map((entry) => (
              <li key={entry.qualification} className="grid gap-3 sm:grid-cols-[200px_1fr]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">{entry.period}</p>
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">{entry.qualification}</h3>
                  <p className="muted mt-1 text-sm">{entry.institution}</p>
                  {entry.detail ? <p className="mt-1 text-sm text-fg-subtle">{entry.detail}</p> : null}
                </div>
              </li>
            ))}
          </ol>
        </section>
      </Container>
    </div>
  );
}
