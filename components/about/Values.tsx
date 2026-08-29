"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Code, Palette, Zap, Heart } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Clean Code",
    desc: "Writing maintainable, readable code that scales.",
  },
  {
    icon: Palette,
    title: "Design First",
    desc: "Every pixel matters in creating great experiences.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Fast, optimized applications that users love.",
  },
  {
    icon: Heart,
    title: "User Focused",
    desc: "Building with empathy and accessibility in mind.",
  },
];

export function Values() {
  return (
    <section className="py-16 md:py-24 border-t border-line">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label mb-4 text-accent"
        >
          Principles
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          What drives me
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group rounded-xl border border-line bg-surface/50 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-surface"
            >
              <value.icon size={28} className="text-accent" />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
