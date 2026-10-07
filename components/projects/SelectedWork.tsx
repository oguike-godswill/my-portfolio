import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { featuredProjects } from "@/content/projects";

export function SelectedWork() {
  return (
    <Section id="work">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          label="Selected work"
          title="Products I've designed and built."
          description="A selection of products, applications and digital experiences I've built."
        />
        <Link
          href="/work"
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-fg transition-colors hover:text-[var(--accent-text)]"
        >
          All projects
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={i * 0.05}
            className={i === 0 ? "sm:col-span-2" : undefined}
          >
            <ProjectCard project={project} layout={i === 0 ? "horizontal" : "vertical"} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
