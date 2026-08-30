import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { Tag } from "@/components/ui/Tag";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { projects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <Container>
          <div className="mb-8">
            <ArrowLink href="/">Back to Work</ArrowLink>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="label text-muted">{project.category}</span>
                <span className="text-muted">·</span>
                <span className="text-xs text-muted">{project.year}</span>
              </div>

              <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {project.title}
              </h1>

              <p className="mt-6 text-base leading-relaxed text-secondary normal-case">
                {project.longDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
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

            <div className="relative">
              <div className="sticky top-32">
                <ProjectVisual
                  kind={project.slug}
                  accent={project.accent}
                  url={project.liveUrl?.replace("https://", "")}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 border-t border-line">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="label mb-4 text-accent">Overview</p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Project Overview
              </h2>
              <p className="mt-4 text-base leading-relaxed text-secondary normal-case">
                {project.longDescription}
              </p>
            </div>
            <div>
              <p className="label mb-4 text-accent">My Role</p>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {project.role}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-secondary normal-case">
                Responsible for the entire frontend development, from design implementation to performance optimization.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features, Challenges, Results */}
      <section className="py-16 md:py-24 border-t border-line">
        <Container>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="label mb-4 text-accent">Features</p>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-secondary">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label mb-4 text-accent">Challenges</p>
              <ul className="space-y-3">
                {project.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-start gap-2 text-sm text-secondary">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label mb-4 text-accent">Results</p>
              <ul className="space-y-3">
                {project.results.map((result) => (
                  <li key={result} className="flex items-start gap-2 text-sm text-secondary">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack */}
      <section className="py-16 md:py-24 border-t border-line">
        <Container>
          <p className="label mb-4 text-accent">Tech Stack</p>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Technologies Used
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <div
                key={tag}
                className="rounded-full border border-line bg-surface/50 px-4 py-2 text-sm text-secondary"
              >
                {tag}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
