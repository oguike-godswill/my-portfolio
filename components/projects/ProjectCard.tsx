import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { ProjectCover } from "@/components/projects/ProjectCover";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { statusLabel, type Project } from "@/content/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  layout = "vertical",
  className,
}: {
  project: Project;
  layout?: "vertical" | "horizontal";
  className?: string;
}) {
  const horizontal = layout === "horizontal";

  return (
    <SpotlightCard as="article" className={cn("h-full", className)}>
      <div
        className={cn(
          "group flex h-full flex-col p-3.5",
          horizontal && "lg:grid lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-7 lg:p-5",
        )}
      >
        <Link
          href={`/work/${project.slug}`}
          className="block overflow-hidden rounded-xl focus-visible:outline-offset-4"
          aria-label={`Read the ${project.title} case study`}
        >
          <ProjectCover
            variant={project.cover}
            className="transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
        </Link>

        <div
          className={cn(
            "flex flex-1 flex-col",
            horizontal ? "px-2 pb-2 pt-5 lg:px-2 lg:py-2" : "px-2 pb-2 pt-5",
          )}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <p className="section-label">{project.category}</p>
              {project.year && (
                <>
                  <span className="text-fg-subtle" aria-hidden="true">
                    ·
                  </span>
                  <span className="font-mono text-[11px] text-fg-subtle">{project.year}</span>
                </>
              )}
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[var(--bg-subtle)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  project.status === "live" ? "bg-emerald-500" : "bg-[var(--accent)]",
                )}
                aria-hidden="true"
              />
              {statusLabel[project.status]}
            </span>
          </div>

          <h3 className="display-heading mt-3 text-2xl sm:text-[1.75rem]">
            <Link
              href={`/work/${project.slug}`}
              className="transition-colors hover:text-[var(--accent-text)]"
            >
              {project.title}
            </Link>
          </h3>

          <p className="muted mt-2.5 text-sm leading-relaxed sm:text-[15px]">{project.tagline}</p>

          <p className="mt-3 line-clamp-2 border-l-2 border-border-strong pl-3 text-xs leading-relaxed text-fg-subtle">
            <span className="font-mono uppercase tracking-wider text-fg-muted">Role: </span>
            {project.role}
          </p>

          <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.technologies.slice(0, 6).map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border bg-[var(--bg-subtle)]/60 px-2.5 py-1 font-mono text-[11px] text-fg-muted"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-border pt-4 text-sm">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-1.5 font-medium text-fg transition-colors hover:text-[var(--accent-text)]"
              >
                Read case study
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>

              <div className="flex items-center gap-4">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-fg-muted transition-colors hover:text-fg"
                  >
                    Live site
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : null}

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-fg-muted transition-colors hover:text-fg"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    Source
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
