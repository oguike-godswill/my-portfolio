import Link from "next/link";
import { cn } from "@/lib/cn";

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-accent text-background hover:bg-accent-dark"
          : "border border-line text-foreground hover:border-muted hover:bg-surface",
        className
      )}
    >
      {children}
    </Link>
  );
}
