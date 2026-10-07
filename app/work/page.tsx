import type { Metadata } from "next";
import { WorkIndex } from "@/components/projects/WorkIndex";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected products, applications and digital experiences built by Godswill Oguike — education platforms, finance tools, mobile apps and business websites.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <div className="section">
      <Container>
        <header className="max-w-2xl">
          <p className="section-label mb-4">Work</p>
          <h1 className="display-heading text-4xl sm:text-5xl">Selected Work</h1>
          <p className="muted mt-4 text-base leading-relaxed sm:text-lg">
            A selection of products, applications and digital experiences I&apos;ve built — with the story
            behind each one.
          </p>
        </header>

        <div className="mt-12">
          <WorkIndex />
        </div>
      </Container>
    </div>
  );
}
