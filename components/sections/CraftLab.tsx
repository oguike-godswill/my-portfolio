"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Lock, ShieldAlert, Sliders, Smartphone, Terminal } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Section, SectionHeading } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/utils";

const scenarios = [
  {
    id: "valid",
    label: "Valid Purchase",
    status: 200,
    zod: "Pass ✓",
    auth: "Session Valid ✓",
    db: "Entitlement Granted ✓",
    verdict: "200 OK — Stream unlocked from server record",
    tone: "emerald",
  },
  {
    id: "tampered",
    label: "Malformed Input",
    status: 400,
    zod: "Rejected ✕",
    auth: "Skipped",
    db: "Untouched",
    verdict: "400 Bad Request — Blocked at Zod API boundary",
    tone: "amber",
  },
  {
    id: "unauth",
    label: "Unpaid Link Share",
    status: 403,
    zod: "Pass ✓",
    auth: "No Purchase Record ✕",
    db: "Access Denied",
    verdict: "403 Forbidden — Server verifies Stripe webhook state",
    tone: "rose",
  },
] as const;

export function CraftLab() {
  // Workbench 1 state: API Boundary Simulator
  const [scenarioId, setScenarioId] = useState<(typeof scenarios)[number]["id"]>("valid");
  const activeScenario = scenarios.find((s) => s.id === scenarioId) ?? scenarios[0];

  // Workbench 2 state: Interactive Budget Scrubber
  const [savingsRate, setSavingsRate] = useState(30);
  const monthlyIncome = 4500;
  const fixedCosts = 1800;
  const savedAmount = Math.round((monthlyIncome * savingsRate) / 100);
  const safeToSpend = Math.max(0, monthlyIncome - fixedCosts - savedAmount);

  // Workbench 3 state: Flutter Route & Match State
  const [hasSession, setHasSession] = useState(true);
  const [pingedRunner, setPingedRunner] = useState<string | null>("Adaeze · 5:10/km");

  return (
    <Section id="craft" label="Interactive engineering lab">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          label="Interactive Craft Lab"
          title="Systems you can test right here."
          description="Great engineering isn't just screenshots. Interact with the validation, financial calculation, and mobile state patterns behind my products."
        />
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-3.5 py-1.5 font-mono text-[11px] text-fg-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
          Live interactive components
        </span>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {/* Card 1: API & Security Boundary Simulator */}
        <Reveal delay={0}>
          <SpotlightCard className="flex h-full flex-col p-6">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--accent-text)]">
                <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                01 · Boundary Guard
              </span>
              <Link
                href="/work/molearn"
                className="inline-flex items-center gap-1 font-mono text-[11px] text-fg-subtle transition-colors hover:text-fg"
              >
                Molearn
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>

            <h3 className="mt-3 font-display text-lg font-semibold text-fg">
              Server-Side Entitlement &amp; Zod Validation
            </h3>
            <p className="muted mt-1.5 text-xs leading-relaxed">
              Test how Molearn&apos;s API route handles valid buyers, malformed payloads, and shared links.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5" role="group" aria-label="Select payload scenario">
              {scenarios.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setScenarioId(s.id)}
                  className={cn(
                    "rounded-lg border px-2.5 py-1 font-mono text-[11px] transition-all",
                    scenarioId === s.id
                      ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent-text)]"
                      : "border-border bg-[var(--bg-subtle)] text-fg-muted hover:text-fg",
                  )}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex-1 space-y-2 rounded-xl border border-border bg-[var(--bg-subtle)] p-3.5 font-mono text-[11px]">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span className="text-fg-subtle">1. Zod Schema Parse</span>
                <span
                  className={cn(
                    activeScenario.id === "tampered" ? "text-amber-500" : "text-emerald-500",
                  )}
                >
                  {activeScenario.zod}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span className="text-fg-subtle">2. Stripe + Prisma Check</span>
                <span
                  className={cn(
                    activeScenario.id === "valid"
                      ? "text-emerald-500"
                      : activeScenario.id === "unauth"
                        ? "text-rose-400"
                        : "text-fg-subtle",
                  )}
                >
                  {activeScenario.auth}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-fg-subtle">3. Content Stream</span>
                <span className="text-fg">{activeScenario.db}</span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-[var(--bg-subtle)]/60 px-3 py-2 font-mono text-[11px]">
              {activeScenario.status === 200 ? (
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" aria-hidden="true" />
              ) : (
                <ShieldAlert className="h-3.5 w-3.5 shrink-0 text-[var(--accent-text)]" aria-hidden="true" />
              )}
              <span className="truncate text-fg-muted">{activeScenario.verdict}</span>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* Card 2: Interactive Financial Allocation Engine */}
        <Reveal delay={0.07}>
          <SpotlightCard className="flex h-full flex-col p-6">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--accent-text)]">
                <Sliders className="h-3.5 w-3.5" aria-hidden="true" />
                02 · Reactive Cashflow
              </span>
              <Link
                href="/work/pocketguard"
                className="inline-flex items-center gap-1 font-mono text-[11px] text-fg-subtle transition-colors hover:text-fg"
              >
                PocketGuard
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>

            <h3 className="mt-3 font-display text-lg font-semibold text-fg">
              Real-Time Budget &amp; Savings Allocation
            </h3>
            <p className="muted mt-1.5 text-xs leading-relaxed">
              Drag the savings target to see how PocketGuard dynamically recomputes safe-to-spend limits.
            </p>

            <div className="mt-4 rounded-xl border border-border bg-[var(--bg-subtle)] p-3.5">
              <div className="flex items-center justify-between font-mono text-xs">
                <label htmlFor="savings-slider" className="text-fg-muted">
                  Savings Target: <strong className="text-fg">{savingsRate}%</strong>
                </label>
                <span className="text-[var(--accent-text)]">${savedAmount.toLocaleString()}/mo</span>
              </div>
              <input
                id="savings-slider"
                type="range"
                min={10}
                max={50}
                step={5}
                value={savingsRate}
                onChange={(e) => setSavingsRate(Number(e.target.value))}
                className="mt-2.5 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-[var(--border-strong)] accent-[var(--accent)]"
              />

              {/* Stacked visual bar */}
              <div className="mt-4 flex h-3 w-full overflow-hidden rounded-full bg-[var(--surface)] p-0.5">
                <div
                  className="h-full rounded-l-full bg-fg-subtle/50 transition-all duration-300"
                  style={{ width: "40%" }}
                  title="Fixed bills (40%)"
                />
                <div
                  className="h-full bg-[var(--accent)] transition-all duration-300"
                  style={{ width: `${savingsRate}%` }}
                  title={`Savings (${savingsRate}%)`}
                />
                <div
                  className="h-full flex-1 rounded-r-full bg-emerald-500/80 transition-all duration-300"
                  title="Safe to spend"
                />
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 pt-1 font-mono text-[10px]">
                <div>
                  <span className="block text-fg-subtle">Fixed Bills</span>
                  <span className="font-semibold text-fg">${fixedCosts}</span>
                </div>
                <div>
                  <span className="block text-[var(--accent-text)]">Savings</span>
                  <span className="font-semibold text-fg">${savedAmount}</span>
                </div>
                <div>
                  <span className="block text-emerald-500">Safe to Spend</span>
                  <span className="font-semibold text-fg">${safeToSpend}</span>
                </div>
              </div>
            </div>

            <p className="mt-auto pt-3 font-mono text-[11px] text-fg-subtle">
              Server-aggregated metrics · Zero layout shift at 320px
            </p>
          </SpotlightCard>
        </Reveal>

        {/* Card 3: Mobile State & Protected Route Guard */}
        <Reveal delay={0.14}>
          <SpotlightCard className="flex h-full flex-col p-6">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--accent-text)]">
                <Smartphone className="h-3.5 w-3.5" aria-hidden="true" />
                03 · Mobile Auth Guard
              </span>
              <Link
                href="/work/run-buddy-app"
                className="inline-flex items-center gap-1 font-mono text-[11px] text-fg-subtle transition-colors hover:text-fg"
              >
                Run Buddy
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </Link>
            </div>

            <h3 className="mt-3 font-display text-lg font-semibold text-fg">
              Flutter Session &amp; Discovery State
            </h3>
            <p className="muted mt-1.5 text-xs leading-relaxed">
              Toggle the persistent auth session to test how protected mobile screens guard runner introductions.
            </p>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-[var(--bg-subtle)] px-3.5 py-2.5">
              <span className="font-mono text-xs text-fg-muted">
                Auth Session: <strong className="text-fg">{hasSession ? "Signed In" : "Guest"}</strong>
              </span>
              <button
                type="button"
                onClick={() => setHasSession((v) => !v)}
                className={cn(
                  "rounded-full px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider transition-colors",
                  hasSession
                    ? "bg-emerald-500/15 text-emerald-500"
                    : "bg-[var(--accent-soft)] text-[var(--accent-text)]",
                )}
              >
                {hasSession ? "Active · Toggle" : "Locked · Sign In"}
              </button>
            </div>

            <div className="mt-3 flex-1 rounded-xl border border-border bg-[var(--bg-subtle)] p-3">
              {hasSession ? (
                <div className="space-y-2">
                  {["Adaeze · 5:10/km", "Chidi · 4:45/km"].map((runner) => {
                    const active = pingedRunner === runner;
                    return (
                      <div
                        key={runner}
                        className="flex items-center justify-between rounded-lg border border-border bg-[var(--surface)] px-3 py-2"
                      >
                        <span className="font-mono text-xs text-fg">{runner}</span>
                        <button
                          type="button"
                          onClick={() => setPingedRunner(active ? null : runner)}
                          className={cn(
                            "rounded-md px-2.5 py-1 font-mono text-[10px] font-medium transition-colors",
                            active
                              ? "bg-emerald-500/15 text-emerald-500"
                              : "bg-[var(--accent)] text-[#0a0a0b]",
                          )}
                        >
                          {active ? "Connected ✓" : "Connect"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="flex h-full flex-col items-center justify-center py-4 text-center">
                  <Lock className="h-4 w-4 text-[var(--accent-text)]" aria-hidden="true" />
                  <p className="mt-1.5 font-mono text-[11px] text-fg">Route Guard Active</p>
                  <p className="mt-0.5 text-[11px] text-fg-subtle">
                    Runner profiles require a verified session token.
                  </p>
                </div>
              )}
            </div>

            <p className="mt-3 font-mono text-[11px] text-fg-subtle">
              Single source of truth · Predictable widget rebuilds
            </p>
          </SpotlightCard>
        </Reveal>
      </div>
    </Section>
  );
}

