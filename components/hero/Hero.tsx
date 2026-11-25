"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Globe,
  Layers,
  ShieldCheck,
  Smartphone,
  User,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduced = useReducedMotion();
  const [hasAvatar, setHasAvatar] = useState(true);
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState<string>("WAT · UTC+1");
  const [mode, setMode] = useState<"web" | "mobile">("web");
  const [verified, setVerified] = useState(false);
  const [runnerMatched, setRunnerMatched] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }).format(new Date());
        setLocalTime(`${formatted.toUpperCase()} WAT`);
      } catch {
        setLocalTime("WAT · UTC+1");
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 30_000);
    return () => clearInterval(timer);
  }, []);

  function copyEmail() {
    navigator.clipboard?.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }

  const item = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section className="relative overflow-hidden" aria-label="Introduction">
      {/* Ambient architectural grid + radial glow */}
      <div
        className="grid-pattern pointer-events-none absolute inset-0 opacity-[0.38] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_35%,transparent_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full bg-[var(--accent-soft)] opacity-50 blur-[130px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.18fr_0.82fr] lg:gap-12 lg:pb-24 lg:pt-20">
          {/* Left Column: Editorial Statement */}
          <div className="flex flex-col justify-center">
            <motion.p
              {...item(0)}
              className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-fg-muted"
            >
              <span className="inline-flex items-center gap-2 text-fg">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {site.availability}
              </span>
              <span className="text-fg-subtle" aria-hidden="true">
                ·
              </span>
              <span className="text-fg-subtle">
                {site.location} · {localTime}
              </span>
            </motion.p>

            <motion.h1
              {...item(0.08)}
              className="display-heading max-w-3xl text-[2.5rem] leading-[1.03] sm:text-6xl lg:text-[4.25rem]"
            >
              I build web &amp; mobile products that people{" "}
              <span className="relative inline-block text-[var(--accent-text)]">
                actually use.
                <svg
                  className="pointer-events-none absolute -bottom-1.5 left-0 w-full text-[var(--accent)] opacity-60"
                  viewBox="0 0 240 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7.5C62 2.5 154 1.5 238 6.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              {...item(0.16)}
              className="muted mt-7 max-w-2xl text-base leading-relaxed sm:text-[17.5px]"
            >
              I&apos;m <strong className="font-medium text-fg">Godswill Oguike</strong> — a frontend &amp; mobile
              product engineer crafting production web apps, offline-first mobile software, and AI-powered systems
              with <span className="text-fg">React, Next.js, TypeScript, Node.js</span> and{" "}
              <span className="text-fg">Flutter</span>.
            </motion.p>

            <motion.div {...item(0.24)} className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink href="/work" size="lg">
                Explore all work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Start a conversation
              </ButtonLink>
              <button
                type="button"
                onClick={copyEmail}
                className="group inline-flex items-center gap-2 font-mono text-xs text-fg-muted transition-colors hover:text-fg"
                aria-label={`Copy email address ${site.email}`}
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                    <span className="text-emerald-500">Copied email</span>
                  </>
                ) : (
                  <>
                    <Copy
                      className="h-3.5 w-3.5 text-fg-subtle transition-colors group-hover:text-[var(--accent-text)]"
                      aria-hidden="true"
                    />
                    <span className="underline decoration-border-strong underline-offset-4">
                      {site.email}
                    </span>
                  </>
                )}
              </button>
            </motion.div>

            <motion.dl
              {...item(0.32)}
              className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-border pt-7 sm:gap-6"
            >
              <div>
                <dt className="section-label">Architecture</dt>
                <dd className="mt-1.5 text-xs font-medium text-fg sm:text-sm">Web, Mobile &amp; AI</dd>
                <p className="mt-0.5 font-mono text-[11px] text-fg-subtle">End-to-end ownership</p>
              </div>
              <div>
                <dt className="section-label">Core Stack</dt>
                <dd className="mt-1.5 text-xs font-medium text-fg sm:text-sm">Next.js · TS · Flutter</dd>
                <p className="mt-0.5 font-mono text-[11px] text-fg-subtle">Node · Prisma · MongoDB</p>
              </div>
              <div>
                <dt className="section-label">Portfolio</dt>
                <dd className="mt-1.5 text-xs font-medium text-fg sm:text-sm">12 Products Built</dd>
                <p className="mt-0.5 font-mono text-[11px] text-fg-subtle">SaaS · Commerce · Apps</p>
              </div>
            </motion.dl>
          </div>

          {/* Right Column: Identity + Interactive Live Architecture Stage */}
          <motion.div {...item(0.2)} className="flex flex-col gap-4">
            {/* Identity & Portrait Card */}
            <SpotlightCard className="p-4 sm:p-5">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-border-strong bg-[var(--bg-subtle)] sm:h-24 sm:w-24">
                  {hasAvatar ? (
                    <Image
                      src="/avatar.png"
                      alt="Godswill Oguike"
                      fill
                      priority
                      sizes="96px"
                      className="object-cover"
                      onError={() => setHasAvatar(false)}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <User className="h-8 w-8 text-fg-subtle" aria-hidden="true" />
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 font-mono text-[10.5px]">
                    <span className="uppercase tracking-widest text-[var(--accent-text)]">
                      Frontend &amp; App Engineer
                    </span>
                    <span className="text-fg-subtle">{localTime}</span>
                  </div>
                  <h2 className="mt-1.5 truncate font-display text-lg font-semibold text-fg">
                    {site.name}
                  </h2>
                  <p className="truncate text-xs text-fg-muted">
                    Building web platforms, Flutter apps &amp; AI systems
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[11px]">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1 text-fg transition-colors hover:text-[var(--accent-text)]"
                    >
                      About
                      <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                    </Link>
                    <span className="text-fg-subtle" aria-hidden="true">
                      ·
                    </span>
                    <Link
                      href="/resume"
                      className="text-fg-muted transition-colors hover:text-fg"
                    >
                      Resume
                    </Link>
                    <span className="text-fg-subtle" aria-hidden="true">
                      ·
                    </span>
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fg-muted transition-colors hover:text-fg"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Interactive Dual-Platform Showcase Widget */}
            <SpotlightCard className="p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2 border-b border-border pb-3.5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-fg-subtle">
                    Interactive Inspection
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-fg">
                    Cross-platform product craft
                  </p>
                </div>

                <div
                  className="inline-flex items-center gap-1 border border-border bg-[var(--bg-subtle)] p-0.5 rounded-lg"
                  role="tablist"
                  aria-label="Inspect platform craft"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mode === "web"}
                    onClick={() => setMode("web")}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] transition-all",
                      mode === "web"
                        ? "bg-[var(--surface)] text-fg shadow-xs"
                        : "text-fg-muted hover:text-fg",
                    )}
                  >
                    <Globe className="h-3 w-3 text-[var(--accent-text)]" aria-hidden="true" />
                    Web
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={mode === "mobile"}
                    onClick={() => setMode("mobile")}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] transition-all",
                      mode === "mobile"
                        ? "bg-[var(--surface)] text-fg shadow-xs"
                        : "text-fg-muted hover:text-fg",
                    )}
                  >
                    <Smartphone className="h-3 w-3 text-[var(--accent-text)]" aria-hidden="true" />
                    Mobile
                  </button>
                </div>
              </div>

              <div className="mt-4 min-h-[192px]">
                <AnimatePresence mode="wait">
                  {mode === "web" ? (
                    <motion.div
                      key="web-demo"
                      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col justify-between rounded-xl border border-border bg-[var(--bg-subtle)] p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-text)]">
                            Molearn · Server-Verified Access
                          </span>
                          <h3 className="mt-1 font-display text-sm font-semibold text-fg">
                            Advanced System Design Masterclass
                          </h3>
                          <p className="mt-0.5 text-xs text-fg-muted">
                            Next.js App Router · Prisma · Stripe Webhook Guard
                          </p>
                        </div>
                        <span className="font-mono text-xs font-semibold text-fg">$29.00</span>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[10px]">
                        <div className="rounded-lg border border-border bg-[var(--surface)] px-2.5 py-2">
                          <span className="block text-fg-subtle">1. Boundary</span>
                          <span className="mt-0.5 block font-medium text-emerald-500">Zod Validated</span>
                        </div>
                        <div className="rounded-lg border border-border bg-[var(--surface)] px-2.5 py-2">
                          <span className="block text-fg-subtle">2. Session</span>
                          <span className="mt-0.5 block font-medium text-fg">NextAuth JWT</span>
                        </div>
                        <div className="rounded-lg border border-border bg-[var(--surface)] px-2.5 py-2">
                          <span className="block text-fg-subtle">3. Entitlement</span>
                          <span
                            className={cn(
                              "mt-0.5 block font-medium transition-colors",
                              verified ? "text-emerald-500" : "text-[var(--accent-text)]",
                            )}
                          >
                            {verified ? "Unlocked ✓" : "Awaiting Stripe"}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3">
                        <button
                          type="button"
                          onClick={() => setVerified((v) => !v)}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all",
                            verified
                              ? "bg-emerald-500/15 text-emerald-500"
                              : "bg-[var(--accent)] text-[#0a0a0b] hover:brightness-105",
                          )}
                        >
                          <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                          {verified ? "Access Granted (Reset)" : "Simulate Purchase Webhook"}
                        </button>
                        <Link
                          href="/work/molearn"
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-fg-muted transition-colors hover:text-fg"
                        >
                          Case study
                          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="mobile-demo"
                      initial={reduced ? { opacity: 1 } : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduced ? { opacity: 0 } : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col justify-between rounded-xl border border-border bg-[var(--bg-subtle)] p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-text)]">
                            Run Buddy · Flutter &amp; Dart
                          </span>
                          <h3 className="mt-1 font-display text-sm font-semibold text-fg">
                            Live Runner Discovery &amp; Pace Match
                          </h3>
                          <p className="mt-0.5 text-xs text-fg-muted">
                            Protected Route Guards · Persistent Session State
                          </p>
                        </div>
                        <span className="font-mono text-[11px] text-emerald-500">5:15 /km</span>
                      </div>

                      <div className="mt-3.5 flex items-center justify-between rounded-lg border border-border bg-[var(--surface)] p-2.5">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-soft)] font-mono text-xs font-semibold text-[var(--accent-text)]">
                            TK
                          </span>
                          <div>
                            <p className="text-xs font-medium text-fg">Tobi K. · 1.2 km away</p>
                            <p className="font-mono text-[10px] text-fg-subtle">
                              Morning 8K · Protected Route
                            </p>
                          </div>
                        </div>
                        <span
                          className={cn(
                            "font-mono text-[10.5px]",
                            runnerMatched ? "text-emerald-500" : "text-fg-subtle",
                          )}
                        >
                          {runnerMatched ? "Matched ✓" : "Online"}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3">
                        <button
                          type="button"
                          onClick={() => setRunnerMatched((v) => !v)}
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-xs font-medium transition-all",
                            runnerMatched
                              ? "bg-emerald-500/15 text-emerald-500"
                              : "bg-[var(--accent)] text-[#0a0a0b] hover:brightness-105",
                          )}
                        >
                          <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                          {runnerMatched ? "Run Scheduled (Reset)" : "Send Run Invite"}
                        </button>
                        <Link
                          href="/work/run-buddy-app"
                          className="inline-flex items-center gap-1 font-mono text-[11px] text-fg-muted transition-colors hover:text-fg"
                        >
                          Case study
                          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
