"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: "div" | "article" | "li";
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  as: Component = "div",
  spotlightColor = "rgba(255, 138, 61, 0.13)",
  ...props
}: SpotlightCardProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <Component
      ref={ref as React.RefObject<never>}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "group/spotlight relative overflow-hidden rounded-2xl border border-border bg-[var(--surface)] transition-all duration-300 hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--border))]",
        className,
      )}
      {...props}
    >
      {/* Top specular highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent opacity-75 transition-opacity duration-500 group-hover/spotlight:via-[var(--accent)]/50"
      />
      {/* Cursor-tracking radial spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 45%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}
