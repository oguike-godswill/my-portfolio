"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: site.github, label: "GitHub" },
  { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: site.twitter, label: "Twitter" },
  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
];

export function Connect() {
  return (
    <section className="py-16 md:py-24 border-t border-line">
      <Container>
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label mb-4 text-accent"
          >
            Let&apos;s Connect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Get in touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-secondary"
          >
            Thanks for stopping by! I&apos;m always open to discussing new projects,
            creative ideas, or opportunities to be part of your vision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-center gap-4"
          >
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{ y: -5, scale: 1.1, borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-secondary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
