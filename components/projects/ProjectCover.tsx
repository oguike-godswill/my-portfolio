import { cn } from "@/lib/utils";
import type { CoverVariant } from "@/content/projects";

function Shell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-[var(--bg-subtle)]",
        className,
      )}
    >
      <div className="grid-pattern absolute inset-0 opacity-35" />
      <div
        className="pointer-events-none absolute -top-16 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-[var(--accent-soft)] opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">{children}</div>
    </div>
  );
}

function MockBrowser({
  url,
  badge,
  children,
}: {
  url: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-md rounded-xl border border-border-strong bg-[var(--surface)] p-3 shadow-2xl shadow-black/25 transition-transform duration-500 ease-out group-hover:-translate-y-1">
      <div className="flex items-center justify-between gap-2 border-b border-border pb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[var(--fg)] opacity-20" />
          <span className="h-2 w-2 rounded-full bg-[var(--fg)] opacity-20" />
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] opacity-90" />
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-border bg-[var(--bg-subtle)] px-2.5 py-0.5 font-mono text-[9px] text-fg-subtle">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>{url}</span>
        </div>
        {badge ? (
          <span className="rounded bg-[var(--accent-soft)] px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider text-[var(--accent-text)]">
            {badge}
          </span>
        ) : (
          <span className="w-6" />
        )}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function ProjectCover({ variant, className }: { variant: CoverVariant; className?: string }) {
  if (variant === "marketplace") {
    return (
      <Shell className={className}>
        <MockBrowser url="molearn.vercel.app" badge="Stripe + Prisma">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-wider text-[var(--accent-text)]">
                Tutor &amp; Student Marketplace
              </p>
              <p className="mt-0.5 font-display text-xs font-semibold text-fg">
                Featured Video Courses &amp; Books
              </p>
            </div>
            <span className="rounded-full border border-border bg-[var(--bg-subtle)] px-2 py-0.5 font-mono text-[9px] text-fg-muted">
              Role: Student
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { title: "Calculus II Video", tag: "Video · 4h", price: "$18", active: true },
              { title: "System Design PDF", tag: "Book · 180p", price: "$14", active: false },
              { title: "Organic Chem Lab", tag: "Video · 6h", price: "$22", active: false },
            ].map((item) => (
              <div
                key={item.title}
                className={cn(
                  "rounded-lg border p-2 transition-all duration-300",
                  item.active
                    ? "border-[var(--accent)]/50 bg-[var(--accent-soft)]/40"
                    : "border-border bg-[var(--bg-subtle)]",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] text-fg-subtle">{item.tag}</span>
                  <span className="font-mono text-[9px] font-semibold text-[var(--accent-text)]">
                    {item.price}
                  </span>
                </div>
                <p className="mt-1.5 truncate font-display text-[10px] font-medium text-fg">
                  {item.title}
                </p>
                <div className="mt-2 flex items-center gap-1">
                  <span className="h-1 flex-1 rounded-full bg-[var(--accent)] opacity-75" />
                  <span className="font-mono text-[8px] text-emerald-500">Owned</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2.5 flex items-center justify-between rounded-lg border border-border bg-[var(--bg-subtle)] px-2.5 py-1.5">
            <span className="font-mono text-[9px] text-fg-muted">
              Server-verified purchase · NextAuth session
            </span>
            <span className="rounded-full bg-[var(--accent)] px-2 py-0.5 font-mono text-[8px] font-semibold text-[#0a0a0b]">
              Watch Lesson →
            </span>
          </div>
        </MockBrowser>
      </Shell>
    );
  }

  if (variant === "dashboard") {
    return (
      <Shell className={className}>
        <MockBrowser url="pocketguard.app/dashboard" badge="Recharts + Zod">
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Monthly Budget", val: "$4,250", delta: "+12.4%" },
              { label: "Planned Savings", val: "$1,480", delta: "34.8%" },
              { label: "Safe to Spend", val: "$920", delta: "On track" },
            ].map((stat, i) => (
              <div key={stat.label} className="rounded-lg border border-border bg-[var(--bg-subtle)] p-2">
                <p className="font-mono text-[8px] uppercase text-fg-subtle">{stat.label}</p>
                <div className="mt-1 flex items-baseline justify-between gap-1">
                  <span className="font-display text-xs font-semibold text-fg">{stat.val}</span>
                  <span
                    className={cn(
                      "font-mono text-[8px]",
                      i === 1 ? "text-[var(--accent-text)]" : "text-emerald-500",
                    )}
                  >
                    {stat.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2.5 rounded-lg border border-border bg-[var(--bg-subtle)] p-2.5">
            <div className="mb-2 flex items-center justify-between">
              <span className="font-mono text-[9px] text-fg-muted">Cashflow Allocation · Q3</span>
              <span className="font-mono text-[8px] text-[var(--accent-text)]">JWT Protected</span>
            </div>
            <div className="flex h-14 items-end gap-1.5">
              {[
                { m: "Jan", h: 42 },
                { m: "Feb", h: 64 },
                { m: "Mar", h: 48 },
                { m: "Apr", h: 78 },
                { m: "May", h: 58 },
                { m: "Jun", h: 94 },
                { m: "Jul", h: 72 },
                { m: "Aug", h: 84 },
              ].map((bar, i) => (
                <div key={bar.m} className="flex flex-1 flex-col items-center gap-1 h-full justify-end">
                  <div
                    className={cn(
                      "w-full rounded-t-xs transition-all duration-500",
                      i === 5
                        ? "bg-[var(--accent)]"
                        : i === 7
                          ? "bg-[var(--accent)]/60"
                          : "bg-[var(--fg)] opacity-15 group-hover:opacity-25",
                    )}
                    style={{ height: `${bar.h}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </MockBrowser>
      </Shell>
    );
  }

  if (variant === "mobile") {
    return (
      <Shell className={className}>
        <div className="flex items-center gap-4 sm:gap-5">
          {/* Phone 1: Runner Discovery */}
          <div className="w-36 rounded-[20px] border border-border-strong bg-[var(--surface)] p-2.5 shadow-2xl shadow-black/30 transition-transform duration-500 group-hover:-translate-y-1 sm:w-40">
            <div className="mx-auto h-1 w-10 rounded-full bg-[var(--fg)] opacity-20" />
            <div className="mt-2.5 flex items-center justify-between">
              <span className="font-mono text-[8px] uppercase tracking-wider text-[var(--accent-text)]">
                Run Buddy
              </span>
              <span className="font-mono text-[8px] text-emerald-500">● 3 nearby</span>
            </div>
            <div className="mt-2 space-y-1.5">
              {[
                { name: "Adaeze O.", pace: "5:10/km", dist: "0.8km" },
                { name: "David M.", pace: "4:55/km", dist: "1.4km" },
              ].map((r, idx) => (
                <div
                  key={r.name}
                  className={cn(
                    "flex items-center justify-between rounded-lg border p-1.5",
                    idx === 0
                      ? "border-[var(--accent)]/40 bg-[var(--accent-soft)]/30"
                      : "border-border bg-[var(--bg-subtle)]",
                  )}
                >
                  <div>
                    <p className="font-display text-[9px] font-semibold text-fg">{r.name}</p>
                    <p className="font-mono text-[8px] text-fg-subtle">{r.pace}</p>
                  </div>
                  <span className="rounded bg-[var(--surface)] px-1.5 py-0.5 font-mono text-[8px] text-fg-muted">
                    {r.dist}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-2.5 rounded-lg bg-[var(--accent)] py-1 text-center font-mono text-[8px] font-semibold text-[#0a0a0b]">
              Connect to Run →
            </div>
          </div>

          {/* Phone 2: Active Match */}
          <div className="hidden w-36 rounded-[20px] border border-border-strong bg-[var(--surface)] p-2.5 shadow-2xl shadow-black/30 transition-transform duration-500 group-hover:translate-y-1 sm:block sm:w-40">
            <div className="mx-auto h-1 w-10 rounded-full bg-[var(--fg)] opacity-20" />
            <div className="mt-2.5 rounded-lg border border-border bg-[var(--bg-subtle)] p-2 text-center">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 font-mono text-[9px] font-bold text-emerald-500">
                5K
              </span>
              <p className="mt-1 font-display text-[10px] font-semibold text-fg">
                Saturday 06:30 AM
              </p>
              <p className="font-mono text-[8px] text-fg-subtle">Lekki — Ikoyi Bridge</p>
            </div>
            <div className="mt-2 flex items-center justify-between px-1 font-mono text-[8px] text-fg-muted">
              <span>Auth Guard</span>
              <span className="text-emerald-500">Verified ✓</span>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <span className="rounded-md border border-border bg-[var(--bg-subtle)] py-1 text-center font-mono text-[8px] text-fg-muted">
                Route
              </span>
              <span className="rounded-md bg-[var(--accent)] py-1 text-center font-mono text-[8px] font-semibold text-[#0a0a0b]">
                Ready
              </span>
            </div>
          </div>
        </div>
      </Shell>
    );
  }

  if (variant === "auto") {
    return (
      <Shell className={className}>
        <MockBrowser url="legitautomobile.com" badge="Production">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-wider text-[var(--accent-text)]">
                Verified Dealership Showroom
              </p>
              <p className="font-display text-xs font-semibold text-fg">
                Curated Executive Inventory
              </p>
            </div>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[8px] text-emerald-500">
              In Stock
            </span>
          </div>

          <div className="mt-2.5 grid grid-cols-3 gap-2">
            {[
              { model: "Mercedes GLE 450", year: "2023 · 14k mi", highlight: true },
              { model: "Range Rover Sport", year: "2022 · 21k mi", highlight: false },
              { model: "Lexus RX 350 F", year: "2024 · 4k mi", highlight: false },
            ].map((car) => (
              <div
                key={car.model}
                className={cn(
                  "rounded-lg border p-2",
                  car.highlight
                    ? "border-[var(--accent)]/50 bg-[var(--accent-soft)]/30"
                    : "border-border bg-[var(--bg-subtle)]",
                )}
              >
                <div className="flex h-7 items-center justify-between rounded bg-[var(--surface)] px-1.5 font-mono text-[8px] text-fg-subtle">
                  <span>SUV</span>
                  <span className="text-[var(--accent-text)]">4MATIC</span>
                </div>
                <p className="mt-1.5 truncate font-display text-[9.5px] font-semibold text-fg">
                  {car.model}
                </p>
                <p className="font-mono text-[8px] text-fg-subtle">{car.year}</p>
              </div>
            ))}
          </div>

          <div className="mt-2.5 flex items-center justify-between rounded-lg border border-border bg-[var(--bg-subtle)] px-2.5 py-1.5 font-mono text-[8.5px]">
            <span className="text-fg-muted">SEO Structured · Instant Enquiry</span>
            <span className="text-[var(--accent-text)]">Book Inspection →</span>
          </div>
        </MockBrowser>
      </Shell>
    );
  }

  if (variant === "recipe") {
    return (
      <Shell className={className}>
        <MockBrowser url="tastybitsz.vercel.app" badge="React + Vite">
          <div className="flex items-center justify-between rounded-full border border-border bg-[var(--bg-subtle)] px-3 py-1">
            <span className="font-mono text-[9px] text-fg-muted">
              🔍 Search 1,200+ kitchen-tested recipes…
            </span>
            <span className="rounded-full bg-[var(--accent-soft)] px-1.5 py-0.5 font-mono text-[8px] text-[var(--accent-text)]">
              15 min
            </span>
          </div>

          <div className="mt-2.5 grid grid-cols-2 gap-2">
            {[
              { title: "Smoky Jollof & Plantain", prep: "35m · 6 steps", tag: "West African" },
              { title: "Garlic Herb Pasta", prep: "18m · 4 steps", tag: "Quick Dinner" },
            ].map((dish, i) => (
              <div
                key={dish.title}
                className={cn(
                  "rounded-lg border p-2.5",
                  i === 0
                    ? "border-[var(--accent)]/45 bg-[var(--accent-soft)]/30"
                    : "border-border bg-[var(--bg-subtle)]",
                )}
              >
                <span className="font-mono text-[8px] uppercase tracking-wider text-[var(--accent-text)]">
                  {dish.tag}
                </span>
                <p className="mt-1 font-display text-[10.5px] font-semibold text-fg">{dish.title}</p>
                <p className="mt-1 font-mono text-[8.5px] text-fg-subtle">{dish.prep}</p>
              </div>
            ))}
          </div>
        </MockBrowser>
      </Shell>
    );
  }

  return (
    <Shell className={className}>
      <div className="w-full max-w-sm space-y-2 rounded-xl border border-border-strong bg-[var(--surface)] p-3.5 shadow-2xl">
        <div className="flex items-center justify-between border-b border-border pb-2 font-mono text-[9px]">
          <span className="text-fg-muted">Baileys WA + Telegram Bot Pipeline</span>
          <span className="text-emerald-500">● Event Loop Active</span>
        </div>
        <div className="flex">
          <div className="max-w-[78%] rounded-2xl rounded-tl-xs border border-border bg-[var(--bg-subtle)] px-3 py-1.5 text-[10px] text-fg-muted">
            Hi! Are slots open for the Saturday cohort?
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[82%] rounded-2xl rounded-tr-xs bg-[var(--accent)] px-3 py-1.5 text-[10px] font-medium text-[#0a0a0b]">
            Yes — 4 seats remain. Here is your direct registration link ⚡
          </div>
        </div>
        <div className="flex items-center justify-between pt-1 font-mono text-[8px] text-fg-subtle">
          <span>OpenAI Guardrailed Prompt</span>
          <span>Latency: 340ms</span>
        </div>
      </div>
    </Shell>
  );
}
