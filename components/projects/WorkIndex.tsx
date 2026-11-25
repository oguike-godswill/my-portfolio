"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

const ALL = "All";

export function WorkIndex() {
  const categories = useMemo(() => [ALL, ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const [active, setActive] = useState(ALL);

  const visible = active === ALL ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div
        className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-border pb-3"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((category) => {
          const isActive = category === active;
          const count =
            category === ALL ? projects.length : projects.filter((p) => p.category === category).length;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={cn(
                "relative pb-1 text-sm transition-colors",
                isActive ? "font-medium text-fg" : "text-fg-muted hover:text-fg",
              )}
            >
              <span>{category}</span>
              <span className="ml-1.5 font-mono text-[11px] text-fg-subtle">{count}</span>
              {isActive && (
                <span className="absolute inset-x-0 -bottom-[13px] h-0.5 bg-[var(--accent)]" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {visible.map((project, i) => (
          <Reveal key={project.slug} delay={Math.min(i * 0.04, 0.2)}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="muted mt-10 text-sm">No projects in this category yet.</p>
      ) : null}
    </div>
  );
}
