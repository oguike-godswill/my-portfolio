"use client";

import { motion } from "framer-motion";

const moods = [
  { text: "Building", emoji: "🚀", x: "25%", y: "15%" },
  { text: "Coding", emoji: "💻", x: "45%", y: "8%" },
  { text: "Creating", emoji: "🎨", x: "65%", y: "18%" },
  { text: "Learning", emoji: "📚", x: "28%", y: "72%" },
  { text: "Shipping", emoji: "✨", x: "52%", y: "82%" },
  { text: "Debugging", emoji: "🐛", x: "35%", y: "88%" },
  { text: "Coffee", emoji: "☕", x: "72%", y: "60%" },
  { text: "Focused", emoji: "🎯", x: "40%", y: "12%" },
  { text: "Designing", emoji: "🖌️", x: "60%", y: "75%" },
  { text: "Thinking", emoji: "🧠", x: "30%", y: "45%" },
  { text: "Iterating", emoji: "🔄", x: "55%", y: "48%" },
  { text: "Deploying", emoji: "📦", x: "75%", y: "35%" },
  { text: "Refactoring", emoji: "♻️", x: "22%", y: "58%" },
  { text: "Testing", emoji: "🧪", x: "48%", y: "62%" },
  { text: "Optimizing", emoji: "⚡", x: "68%", y: "85%" },
];

export function MoodPills() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {moods.map((mood, i) => (
        <motion.div
          key={mood.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
          className="absolute flex items-center gap-1.5 rounded-full border border-line/50 bg-surface/40 px-3 py-1.5 backdrop-blur-sm"
          style={{ left: mood.x, top: mood.y }}
        >
          <span className="text-xs">{mood.emoji}</span>
          <span className="text-[10px] text-secondary/60">{mood.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
