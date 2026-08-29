import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="py-16 md:py-24">
      <Container className="text-center">
        <p className="label mb-4 text-accent">Get In Touch</p>
        <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-secondary">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="mt-10">
          <Button href="/contact" className="px-8 py-4 text-base">
            Let&apos;s Talk
          </Button>
        </div>
      </Container>
    </section>
  );
}
