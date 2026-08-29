import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="pb-24 pt-32 md:pb-32 md:pt-40">
      <Container className="max-w-2xl">
        <p className="label mb-4 text-accent">Contact</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Let&apos;s work together
        </h1>
        <p className="mt-6 text-base leading-relaxed text-secondary">
          Have a project in mind? Fill out the form below and I&apos;ll get back
          to you as soon as possible.
        </p>
        <div className="mt-12">
          <ContactForm />
        </div>
        <div className="mt-12 flex flex-wrap gap-8 text-sm text-muted">
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-foreground">
            {site.email}
          </a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            LinkedIn
          </a>
        </div>
      </Container>
    </section>
  );
}
