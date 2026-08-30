"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/cn";
import { Tag } from "@/components/ui/Tag";
import { ArrowLink } from "@/components/ui/ArrowLink";
import type { Project } from "@/lib/projects";

export function ProjectTextCard({
  project,
  index,
  onInView,
}: {
  project: Project;
  index: number;
  onInView: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) onInView(index);
  }, [isInView, index, onInView]);

  return (
    <div ref={ref} className={cn("py-10 md:py-16")}>
      <div className="mb-5 flex items-center gap-4">
        <span className="font-display text-sm font-semibold text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px w-10 bg-line" />
        <span className="label text-muted">{project.category}</span>
      </div>

      <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {project.title}
      </h3>

      <p className="mt-4 max-w-md text-base leading-relaxed text-secondary normal-case">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-6">
        <ArrowLink href={`/work/${project.slug}`}>View Case Study</ArrowLink>
        {project.liveUrl && (
          <ArrowLink href={project.liveUrl} external>
            Live Site
          </ArrowLink>
        )}
        {project.githubUrl && (
          <ArrowLink href={project.githubUrl} external>
            GitHub
          </ArrowLink>
        )}
      </div>
    </div>
  );
}
