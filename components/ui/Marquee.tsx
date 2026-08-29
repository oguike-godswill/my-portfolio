import { cn } from "@/lib/cn";

export function Marquee({
  children,
  className,
  reverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="flex gap-8 animate-marquee whitespace-nowrap" style={reverse ? { animationDirection: "reverse" } : undefined}>
        {children}
        {children}
      </div>
    </div>
  );
}
