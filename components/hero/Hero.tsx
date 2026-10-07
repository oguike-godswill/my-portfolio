"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();
  const [hasAvatar, setHasAvatar] = useState(true);

  const item = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section className="relative overflow-hidden" aria-label="Introduction">
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,var(--bg),transparent_70%)]" />

      <Container className="relative">
        <div className="grid items-center gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:pb-24 lg:pt-24">
          <div className="flex flex-col justify-center">
            <motion.p
              {...item(0)}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-fg-muted"
            >
              <span
                className="h-2 w-2 rounded-full bg-[var(--accent)]"
                style={{ boxShadow: "0 0 0 3px var(--accent-soft)" }}
                aria-hidden="true"
              />
              {site.availability}
            </motion.p>

            <motion.h1
              {...item(0.08)}
              className="display-heading max-w-4xl text-[2.5rem] leading-[1.03] sm:text-6xl lg:text-[4.5rem]"
            >
              I build web &amp; mobile products that people{" "}
              <span className="text-[var(--accent-text)]">actually use.</span>
            </motion.h1>

            <motion.p {...item(0.16)} className="muted mt-7 max-w-2xl text-base leading-relaxed sm:text-lg">
              I&apos;m Godswill Oguike — a frontend &amp; app developer focused on React, Next.js,
              TypeScript, Node.js and Flutter.
            </motion.p>

            <motion.div {...item(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
              <ButtonLink href="/work" size="lg">
                View my work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Let&apos;s work together
              </ButtonLink>
            </motion.div>

            <motion.dl
              {...item(0.32)}
              className="mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-8 sm:grid-cols-3"
            >
              <div>
                <dt className="section-label">Focus</dt>
                <dd className="mt-2 text-sm text-fg">Web &amp; mobile products</dd>
              </div>
              <div>
                <dt className="section-label">Stack</dt>
                <dd className="mt-2 text-sm text-fg">React · Next.js · Flutter</dd>
              </div>
              <div>
                <dt className="section-label">Based in</dt>
                <dd className="mt-2 text-sm text-fg">{site.location} · Remote friendly</dd>
              </div>
            </motion.dl>
          </div>

          <motion.div {...item(0.2)} className="hidden lg:flex lg:justify-end">
            <div className="relative h-[30rem] w-80 overflow-hidden rounded-3xl border border-border bg-[var(--surface)] xl:h-[34rem] xl:w-96">
              {hasAvatar ? (
                <Image
                  src="/avatar.png"
                  alt="Godswill Oguike"
                  fill
                  priority
                  sizes="(min-width: 1280px) 384px, 320px"
                  className="object-cover"
                  onError={() => setHasAvatar(false)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-4">
                  <div
                    className="grid-pattern pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,var(--bg),transparent_75%)]"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute -inset-6 bg-[var(--accent-soft)] opacity-60 blur-3xl"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-border-strong bg-[var(--bg)]">
                    <User className="h-10 w-10 text-fg-subtle" aria-hidden="true" />
                  </div>
                  <span className="section-label relative">Photo</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
