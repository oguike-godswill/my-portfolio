"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const interests = [
  { emoji: "🎮", text: "Gaming" },
  { emoji: "🎵", text: "Music" },
  { emoji: "📚", text: "Reading" },
  { emoji: "✈️", text: "Travel" },
  { emoji: "☕", text: "Coffee" },
  { emoji: "🎬", text: "Movies" },
  { emoji: "🏋️", text: "Fitness" },
  { emoji: "🎨", text: "Design" },
];

export function Interests() {
  return (
    <section className="py-16 md:py-24 border-t border-line">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label mb-4 text-accent"
        >
          Beyond Code
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          What I enjoy
        </motion.h2>

        <div className="mt-10 flex flex-wrap gap-3">
          {interests.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 rounded-full border border-line bg-surface/50 px-5 py-3 transition-all duration-300 hover:border-accent/30 hover:bg-surface"
            >
              <span className="text-lg">{item.emoji}</span>
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
