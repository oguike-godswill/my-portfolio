"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import { Tag } from "@/components/ui/Tag";
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

      <Link
        href={`/work/${project.slug}`}
        className="group inline-block"
        aria-label={`View case study for ${project.title}`}
      >
        <h3 className="font-display text-3xl font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-accent sm:text-4xl">
          {project.title}
        </h3>
      </Link>

      <p className="mt-4 max-w-md text-base leading-relaxed text-secondary normal-case">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href={`/work/${project.slug}`}
          className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/40 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
        >
          View Case Study
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/40 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
          >
            Live Site
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/40 px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent hover:text-accent"
          >
            GitHub
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        )}
      </div>
    </div>
  );
}
