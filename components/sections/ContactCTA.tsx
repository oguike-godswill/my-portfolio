"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy, Mail } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { site } from "@/lib/site";

export function ContactCTA() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard?.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  return (
    <section className="hairline" aria-label="Contact call to action">
      <Container>
        <div className="section px-0">
          <SpotlightCard className="px-6 py-12 sm:px-10 sm:py-16">
            <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,var(--surface),transparent_75%)]" />
            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-[var(--bg-subtle)] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-fg-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  Let&apos;s build together
                </div>
                <h2 className="display-heading text-3xl sm:text-4xl lg:text-[2.75rem]">
                  Have a product that needs building?
                </h2>
                <p className="muted mt-4 text-base leading-relaxed sm:text-lg">
                  I&apos;m available for frontend and mobile app engineering — full-time product roles, contracts,
                  or ambitious freelance builds.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 font-mono text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    <Mail className="h-4 w-4 text-[var(--accent-text)]" aria-hidden="true" />
                    {site.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-[var(--bg-subtle)] px-2.5 py-1 font-mono text-[11px] text-fg-subtle transition-colors hover:border-border-strong hover:text-fg"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-500" aria-hidden="true" />
                        <span className="text-emerald-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href="/contact" size="lg">
                  Start a conversation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href="/resume" variant="secondary" size="lg">
                  View resume
                </ButtonLink>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </Container>
    </section>
  );
}
