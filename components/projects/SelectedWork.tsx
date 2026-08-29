import { Container } from "@/components/ui/Container";
import { StickyWork } from "./StickyWork";
import { projects } from "@/lib/projects";

export function SelectedWork() {
  return (
    <section id="work" className="pt-0 pb-8 md:pb-12">
      <Container>
        <div className="mb-12 flex flex-col items-end text-right lg:mb-16">
          <p className="label mb-4 text-accent">Selected Work</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Projects I&apos;ve built
          </h2>
        </div>
        <StickyWork projects={projects} />
      </Container>
    </section>
  );
}
