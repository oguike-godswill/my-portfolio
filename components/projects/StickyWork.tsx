"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectTextCard } from "./ProjectTextCard";
import type { Project } from "@/lib/projects";

export function StickyWork({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = projects[activeIndex];

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
      {/* Left: sticky visual */}
      <div className="relative hidden lg:block">
        <div className="sticky top-32">
          <div className="absolute -inset-6 rounded-2xl bg-surface/40" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative -mr-12"
            >
              <div className="overflow-hidden rounded-[12px] border border-line bg-surface-2 p-5 sm:p-7">
                <ProjectVisual
                  kind={current.slug}
                  accent={current.accent}
                  url={current.liveUrl?.replace("https://", "")}
                />
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Dots */}
          <div className="mt-6 flex justify-start gap-2">
            {projects.map((p, i) => (
              <button
                key={p.slug}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-accent"
                    : "w-1.5 bg-line hover:bg-muted"
                }`}
                aria-label={`Show ${p.title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right: scrolling text cards */}
      <div>
        {/* Mobile: inline visual + text for each project */}
        <div className="space-y-24 lg:hidden">
          {projects.map((project, i) => (
            <div key={project.slug}>
              <Link href={`/work/${project.slug}`} className="mb-8 block">
                <div className="overflow-hidden rounded-[12px] border border-line bg-surface-2 p-5 transition-colors duration-300 hover:border-accent">
                  <ProjectVisual
                    kind={project.slug}
                    accent={project.accent}
                    url={project.liveUrl?.replace("https://", "")}
                  />
                </div>
              </Link>
              <ProjectTextCard
                project={project}
                index={i}
                onInView={() => {}}
              />
            </div>
          ))}
        </div>

        {/* Desktop: text-only cards with sticky visual */}
        <div className="hidden lg:block">
          {projects.map((project, i) => (
            <ProjectTextCard
              key={project.slug}
              project={project}
              index={i}
              onInView={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
