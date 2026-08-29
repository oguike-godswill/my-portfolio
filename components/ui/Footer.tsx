import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: site.github, label: "GitHub" },
  { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: site.twitter, label: "Twitter" },
  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-line py-5">
      <Container>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold text-foreground">
            {site.name}
            <span className="text-accent">.</span>
          </span>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-secondary transition-all duration-300 hover:border-accent hover:text-accent"
                aria-label={social.label}
              >
                <social.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
