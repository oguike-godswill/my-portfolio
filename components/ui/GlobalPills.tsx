"use client";

import { motion } from "framer-motion";

const moods = [
  { text: "Building", emoji: "🚀", x: "8%", y: "10%" },
  { text: "Coding", emoji: "💻", x: "85%", y: "15%" },
  { text: "Learning", emoji: "📚", x: "75%", y: "60%" },
  { text: "Designing", emoji: "🎨", x: "5%", y: "70%" },
  { text: "Focused", emoji: "🎯", x: "90%", y: "45%" },
  { text: "Crafting", emoji: "✍️", x: "15%", y: "85%" },
  { text: "Deploying", emoji: "📦", x: "80%", y: "85%" },
  { text: "Thinking", emoji: "🧠", x: "50%", y: "20%" },
];

export function GlobalPills() {
  return (
    <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none">
      {moods.map((mood, i) => (
        <motion.div
          key={mood.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.25, scale: 1 }}
          transition={{ delay: 1 + i * 0.15, duration: 0.6 }}
          className="absolute flex items-center gap-1.5 rounded-full border border-line/30 bg-surface/30 px-3 py-1.5 backdrop-blur-sm"
          style={{ left: mood.x, top: mood.y }}
        >
          <span className="text-xs">{mood.emoji}</span>
          <span className="text-[10px] text-secondary/50">{mood.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
