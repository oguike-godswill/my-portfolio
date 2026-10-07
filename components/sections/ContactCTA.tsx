import { ArrowRight, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section className="hairline" aria-label="Contact call to action">
      <Container>
        <div className="section relative overflow-hidden rounded-none px-0">
          <div className="relative rounded-2xl border border-border bg-[var(--surface)] px-6 py-12 sm:px-10 sm:py-16">
            <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,var(--surface),transparent_75%)]" />
            <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="section-label mb-4">Let&apos;s talk</p>
                <h2 className="display-heading text-3xl sm:text-4xl lg:text-[2.75rem]">
                  Have a product that needs building?
                </h2>
                <p className="muted mt-4 text-base leading-relaxed sm:text-lg">
                  I&apos;m available for frontend and app development work — freelance projects, contracts or
                  full-time roles.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.email}
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contact" size="lg">
                  Start a conversation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/work" variant="secondary" size="lg">
                  View my work
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
