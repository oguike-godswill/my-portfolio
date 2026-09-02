"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const skills = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Tailwind", icon: "🎨", color: "#06B6D4" },
  { name: "JavaScript", icon: "JS", color: "#F7DF1E" },
  { name: "Node.js", icon: "⬡", color: "#339933" },
  { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
  { name: "Prisma", icon: "P", color: "#2D3748" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "Git", icon: "⎇", color: "#F05032" },
  { name: "Figma", icon: "F", color: "#F24E1E" },
  { name: "Vercel", icon: "△", color: "#ffffff" },
  { name: "Flutter", icon: "🦋", color: "#02569B" },
];

export function TechStack() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <Container>
        <p className="label mb-4 text-accent">Tech Stack</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Tools I use daily
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group flex items-center gap-4 rounded-xl border border-line bg-surface/50 p-4 transition-all duration-300 hover:border-muted hover:bg-surface"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg text-lg font-bold"
                style={{ color: skill.color, background: `${skill.color}15` }}
              >
                {skill.icon}
              </span>
              <span className="font-display text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
