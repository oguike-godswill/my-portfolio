import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export function Section({
  id,
  className,
  children,
  label,
  bordered = true,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  label?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("section", bordered && "hairline", className)}
      aria-label={label}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {label ? <p className="section-label mb-4">{label}</p> : null}
      <h2 className="display-heading text-3xl sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {description ? <p className="muted mt-4 text-base leading-relaxed sm:text-lg">{description}</p> : null}
    </div>
  );
}
