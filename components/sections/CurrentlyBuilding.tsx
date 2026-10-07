import Link from "next/link";
import { ArrowUpRight, Boxes, Code2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { statusLabel, projects } from "@/content/projects";

const icons = [Boxes, Code2];

export function CurrentlyBuilding() {
  const active = projects.filter((p) => p.status === "in-development");

  return (
    <Section>
      <SectionHeading
        label="Currently building"
        title="Active products in progress."
        description="Things I'm actively shipping right now — not ideas on a list."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {active.map((project, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Reveal key={project.slug} delay={i * 0.06}>
              <Link
                href={`/work/${project.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--border))]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-[var(--accent-soft)] text-[var(--accent-text)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    {statusLabel[project.status]}
                  </span>
                </div>

                <h3 className="display-heading mt-6 text-xl sm:text-2xl">{project.title}</h3>
                <p className="muted mt-2 flex-1 text-sm leading-relaxed">{project.tagline}</p>

                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-fg transition-colors group-hover:text-[var(--accent-text)]">
                  Read the build
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
