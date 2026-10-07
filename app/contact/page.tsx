import type { Metadata } from "next";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with Godswill Oguike for frontend and app development work — freelance projects, contracts or full-time roles.`,
  alternates: { canonical: "/contact" },
};

const directLinks = [
  { href: `mailto:${site.email}`, label: site.email, icon: Mail },
  { href: site.github, label: "GitHub", icon: Github },
  { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
];

export default function ContactPage() {
  return (
    <div className="section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="section-label mb-4">Contact</p>
            <h1 className="display-heading text-4xl sm:text-5xl">Let&apos;s build something useful.</h1>
            <p className="muted mt-5 max-w-md text-base leading-relaxed sm:text-lg">
              Have a product to build, an interface to fix, or a role to fill? Send a message — I read
              everything that comes in.
            </p>

            <ul className="mt-9 space-y-3">
              {directLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-3 text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-[var(--surface)] transition-colors group-hover:border-border-strong">
                      <link.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 pt-2 text-sm text-fg-subtle">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-[var(--surface)]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                {site.location} · Available remotely
              </li>
            </ul>

            <div className="mt-9 rounded-2xl border border-border bg-[var(--accent-soft)] p-5">
              <p className="flex items-center gap-2 text-sm text-fg">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                {site.availability}
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
