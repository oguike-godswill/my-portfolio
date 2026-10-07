"use client";

import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

export function DownloadCV({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={cn(
        "inline-flex h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-6 text-sm font-medium text-[#0a0a0b] transition-all hover:-translate-y-0.5 hover:brightness-105",
        className,
      )}
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      Download CV
    </button>
  );
}
