import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { ProjectCover } from "@/components/projects/ProjectCover";
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
    <article
      className={cn(
        "group relative flex h-full flex-col rounded-2xl border border-border bg-[var(--surface)] p-3 transition-colors duration-300 hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--border))]",
        horizontal && "sm:grid sm:grid-cols-2 sm:items-center sm:gap-6 sm:p-4",
        className,
      )}
    >
      <Link
        href={`/work/${project.slug}`}
        className="block overflow-hidden rounded-xl focus-visible:outline-offset-4"
        aria-label={`Read the ${project.title} case study`}
      >
        <ProjectCover
          variant={project.cover}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </Link>

      <div className={cn("flex flex-1 flex-col", horizontal ? "px-2 pb-2 pt-5 sm:px-3 sm:py-4" : "px-2 pb-2 pt-5")}>
        <div className="flex items-center justify-between gap-3">
          <p className="section-label">{project.category}</p>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
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
          <Link href={`/work/${project.slug}`} className="transition-colors hover:text-[var(--accent-text)]">
            {project.title}
          </Link>
        </h3>

        <p className="muted mt-3 text-sm leading-relaxed sm:text-[15px]">{project.tagline}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.slice(0, 5).map((tech) => (
            <li key={tech} className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-fg-muted">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-4 text-sm">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 font-medium text-fg transition-colors hover:text-[var(--accent-text)]"
          >
            View case study
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-fg-muted transition-colors hover:text-fg"
            >
              Live demo
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : null}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-fg-muted transition-colors hover:text-fg"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
