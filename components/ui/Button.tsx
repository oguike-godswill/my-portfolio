import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 whitespace-nowrap disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-[#0a0a0b] hover:brightness-105 hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-border-strong text-fg hover:bg-surface-hover hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-fg-muted hover:text-fg",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

function classes(variant: Variant, size: Size, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size }) {
  return <button className={classes(variant, size, className)} {...props} />;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  const cls = classes(variant, size, className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  );
}
