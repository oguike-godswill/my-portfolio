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
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition-colors",
                isActive
                  ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-text)]"
                  : "border-border text-fg-muted hover:border-border-strong hover:text-fg",
              )}
            >
              {category}
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
