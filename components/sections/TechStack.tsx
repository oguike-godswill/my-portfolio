import { Braces } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const stack = [
  { name: "React", icon: "/tech/react.svg" },
  { name: "Next.js", icon: "/tech/nextdotjs.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "JavaScript", icon: "/tech/javascript.svg" },
  { name: "Node.js", icon: "/tech/nodedotjs.svg" },
  { name: "Flutter", icon: "/tech/flutter.svg" },
  { name: "Dart", icon: "/tech/dart.svg" },
  { name: "MongoDB", icon: "/tech/mongodb.svg" },
  { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
  { name: "REST APIs", icon: null },
];

function Logo({ src }: { src: string }) {
  return (
    <span
      aria-hidden="true"
      className="block h-5 w-5 shrink-0 bg-current transition-colors duration-200"
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
    />
  );
}

export function TechStack() {
  return (
    <section aria-label="Technology stack" className="border-y border-border bg-[var(--bg-subtle)]">
      <Container>
        <div className="py-7">
          <p className="section-label mb-5 text-center">Stack I build with</p>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 sm:gap-x-9">
            {stack.map((item) => (
              <li key={item.name}>
                <span className="group inline-flex items-center gap-2.5 text-fg-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-fg">
                  <span className="text-fg-muted/80 transition-colors duration-200 group-hover:text-[var(--accent-text)]">
                    {item.icon ? (
                      <Logo src={item.icon} />
                    ) : (
                      <Braces className="h-5 w-5" aria-hidden="true" />
                    )}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] sm:text-xs">{item.name}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
