"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const skills = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#ffffff" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Tailwind", icon: "🎨", color: "#06B6D4" },
  { name: "Node.js", icon: "⬡", color: "#339933" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "Framer", icon: "F", color: "#05F" },
  { name: "Git", icon: "⎇", color: "#F05032" },
  { name: "Figma", icon: "F", color: "#F24E1E" },
  { name: "Vercel", icon: "△", color: "#ffffff" },
];

export function Skills() {
  return (
    <section className="py-16 md:py-24 border-t border-line">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label mb-4 text-accent"
        >
          Tech Stack
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Tools I use daily
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-3 rounded-xl border border-line bg-surface/50 p-4 transition-all duration-300 hover:border-accent/30 hover:bg-surface"
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold"
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
