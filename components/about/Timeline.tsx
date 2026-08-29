"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const experience = [
  {
    year: "2024 — Present",
    role: "Frontend Developer",
    company: "Freelance",
    desc: "Building modern web applications for clients worldwide.",
  },
  {
    year: "2023 — 2024",
    role: "Junior Developer",
    company: "Tech Studio",
    desc: "Worked on e-commerce platforms and SaaS products.",
  },
  {
    year: "2022 — 2023",
    role: "Intern Developer",
    company: "Digital Agency",
    desc: "Learned the fundamentals of professional web development.",
  },
];

export function Timeline() {
  return (
    <section className="py-16 md:py-24 border-t border-line">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label mb-4 text-accent"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Where I&apos;ve worked
        </motion.h2>

        <div className="mt-10 space-y-8">
          {experience.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative border-l-2 border-line pl-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-background"
              />
              <p className="label text-muted">{item.year}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                {item.role}
              </h3>
              <p className="text-sm text-accent">{item.company}</p>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
