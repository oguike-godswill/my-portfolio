import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { navLinks, site } from "@/lib/site";

const socials = [
  { href: site.github, label: "GitHub", icon: Github },
  { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="hairline">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-lg font-semibold tracking-normal">Godswill Oguike</p>
            <p className="muted mt-2 max-w-sm text-sm leading-relaxed">
              Frontend &amp; app developer building production-ready web and mobile products.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-1 text-sm text-fg underline decoration-border-strong underline-offset-4 transition-colors hover:text-[var(--accent-text)]"
            >
              {site.email}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="section-label mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="section-label mb-4">Elsewhere</p>
            <ul className="space-y-2.5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Designed &amp; built by Godswill — Next.js, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
