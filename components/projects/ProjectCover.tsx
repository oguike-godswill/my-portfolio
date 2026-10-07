import { cn } from "@/lib/utils";
import type { CoverVariant } from "@/content/projects";

function Shell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-[var(--bg-subtle)]",
        className,
      )}
    >
      <div className="grid-pattern absolute inset-0 opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-8">{children}</div>
    </div>
  );
}

function Bar({ className }: { className?: string }) {
  return <div className={cn("rounded-full bg-[var(--fg)] opacity-15", className)} />;
}

function MockBrowser({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-md rounded-xl border border-border bg-[var(--surface)] p-3 shadow-xl shadow-black/20">
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[var(--fg)] opacity-20" />
        <span className="h-2 w-2 rounded-full bg-[var(--fg)] opacity-20" />
        <span className="h-2 w-2 rounded-full bg-[var(--accent)] opacity-80" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-[var(--fg)] opacity-10" />
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export function ProjectCover({ variant, className }: { variant: CoverVariant; className?: string }) {
  if (variant === "marketplace") {
    return (
      <Shell className={className}>
        <MockBrowser>
          <Bar className="h-2.5 w-32" />
          <Bar className="mt-2 h-2 w-48 opacity-10" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-border bg-[var(--bg-subtle)] p-2">
                <div className="h-8 rounded-md bg-[var(--fg)] opacity-10" />
                <div className="mt-2 h-1.5 w-full rounded-full bg-[var(--fg)] opacity-15" />
                <div className="mt-1 h-1.5 w-2/3 rounded-full bg-[var(--accent)] opacity-70" />
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="h-1.5 w-20 rounded-full bg-[var(--fg)] opacity-10" />
            <div className="h-5 w-16 rounded-full bg-[var(--accent)] opacity-90" />
          </div>
        </MockBrowser>
      </Shell>
    );
  }

  if (variant === "dashboard") {
    return (
      <Shell className={className}>
        <MockBrowser>
          <div className="flex gap-3">
            <div className="hidden w-16 shrink-0 space-y-2 sm:block">
              <div className="h-1.5 w-full rounded-full bg-[var(--accent)] opacity-80" />
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-1.5 w-4/5 rounded-full bg-[var(--fg)] opacity-12" />
              ))}
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-lg border border-border bg-[var(--bg-subtle)] p-2">
                    <div className="h-1.5 w-8 rounded-full bg-[var(--fg)] opacity-15" />
                    <div className="mt-1.5 h-2.5 w-12 rounded-full bg-[var(--fg)] opacity-25" />
                  </div>
                ))}
              </div>
              <div className="mt-2 rounded-lg border border-border bg-[var(--bg-subtle)] p-3">
                <div className="flex h-16 items-end gap-1.5">
                  {[40, 65, 35, 80, 55, 95, 60, 75].map((h, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex-1 rounded-sm",
                        i === 5 ? "bg-[var(--accent)]" : "bg-[var(--fg)] opacity-15",
                      )}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MockBrowser>
      </Shell>
    );
  }

  if (variant === "mobile") {
    return (
      <Shell className={className}>
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="w-24 rounded-[18px] border border-border bg-[var(--surface)] p-2 shadow-xl shadow-black/20 sm:w-28">
            <div className="mx-auto h-1 w-8 rounded-full bg-[var(--fg)] opacity-20" />
            <div className="mt-3 space-y-1.5">
              <div className="h-1.5 w-10 rounded-full bg-[var(--fg)] opacity-25" />
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-1.5 rounded-md border border-border bg-[var(--bg-subtle)] p-1.5">
                  <span className="h-4 w-4 rounded bg-[var(--accent)] opacity-70" />
                  <span className="h-1 flex-1 rounded-full bg-[var(--fg)] opacity-15" />
                </div>
              ))}
            </div>
            <div className="mt-3 h-6 rounded-md bg-[var(--accent)] opacity-90" />
          </div>
          <div className="hidden w-24 rounded-[18px] border border-border bg-[var(--surface)] p-2 shadow-xl shadow-black/20 sm:block sm:w-28">
            <div className="mx-auto h-1 w-8 rounded-full bg-[var(--fg)] opacity-20" />
            <div className="mt-3 h-12 rounded-md bg-[var(--fg)] opacity-10" />
            <div className="mt-2 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-[var(--fg)] opacity-15" />
              <div className="h-1.5 w-3/4 rounded-full bg-[var(--fg)] opacity-15" />
            </div>
            <div className="mt-3 flex gap-1.5">
              <span className="h-6 flex-1 rounded-md border border-border bg-[var(--bg-subtle)]" />
              <span className="h-6 flex-1 rounded-md bg-[var(--accent)] opacity-90" />
            </div>
          </div>
        </div>
      </Shell>
    );
  }

  if (variant === "auto") {
    return (
      <Shell className={className}>
        <MockBrowser>
          <div className="flex items-center justify-between">
            <div className="h-2 w-16 rounded-full bg-[var(--accent)] opacity-90" />
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-1.5 w-6 rounded-full bg-[var(--fg)] opacity-15" />
              ))}
            </div>
          </div>
          <div className="mt-3 h-14 rounded-lg bg-[var(--fg)] opacity-10" />
          <div className="mt-2 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg border border-border bg-[var(--bg-subtle)] p-2">
                <div className={cn("h-8 rounded-md", i === 0 ? "bg-[var(--accent)] opacity-60" : "bg-[var(--fg)] opacity-10")} />
                <div className="mt-2 h-1.5 w-3/4 rounded-full bg-[var(--fg)] opacity-20" />
                <div className="mt-1 h-1.5 w-1/2 rounded-full bg-[var(--fg)] opacity-12" />
              </div>
            ))}
          </div>
        </MockBrowser>
      </Shell>
    );
  }

  if (variant === "recipe") {
    return (
      <Shell className={className}>
        <MockBrowser>
          <div className="flex items-center gap-2 rounded-full border border-border bg-[var(--bg-subtle)] px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            <span className="h-1.5 w-24 rounded-full bg-[var(--fg)] opacity-15" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[0, 1].map((i) => (
              <div key={i} className="rounded-lg border border-border bg-[var(--bg-subtle)] p-2">
                <div className={cn("h-10 rounded-md", i === 1 ? "bg-[var(--accent)] opacity-50" : "bg-[var(--fg)] opacity-10")} />
                <div className="mt-2 h-1.5 w-3/4 rounded-full bg-[var(--fg)] opacity-20" />
                <div className="mt-1 space-y-1">
                  <div className="h-1 w-full rounded-full bg-[var(--fg)] opacity-10" />
                  <div className="h-1 w-5/6 rounded-full bg-[var(--fg)] opacity-10" />
                </div>
              </div>
            ))}
          </div>
        </MockBrowser>
      </Shell>
    );
  }

  return (
    <Shell className={className}>
      <div className="w-full max-w-xs space-y-2">
        <div className="flex">
          <div className="max-w-[70%] rounded-2xl rounded-tl-sm border border-border bg-[var(--surface)] px-3 py-2">
            <div className="h-1.5 w-24 rounded-full bg-[var(--fg)] opacity-15" />
            <div className="mt-1.5 h-1.5 w-16 rounded-full bg-[var(--fg)] opacity-10" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[70%] rounded-2xl rounded-tr-sm bg-[var(--accent)] px-3 py-2">
            <div className="h-1.5 w-28 rounded-full bg-[#0a0a0b] opacity-60" />
            <div className="mt-1.5 h-1.5 w-20 rounded-full bg-[#0a0a0b] opacity-40" />
          </div>
        </div>
        <div className="flex">
          <div className="max-w-[60%] rounded-2xl rounded-tl-sm border border-border bg-[var(--surface)] px-3 py-2">
            <div className="h-1.5 w-20 rounded-full bg-[var(--fg)] opacity-15" />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="h-6 w-24 rounded-full border border-border bg-[var(--surface)]" />
        </div>
      </div>
    </Shell>
  );
}
