"use client";

import { motion } from "framer-motion";

const moods = [
  { text: "Building", emoji: "🚀", x: "8%", y: "5%" },
  { text: "Coding", emoji: "💻", x: "85%", y: "8%" },
  { text: "Creating", emoji: "🎨", x: "15%", y: "18%" },
  { text: "Learning", emoji: "📚", x: "78%", y: "22%" },
  { text: "Shipping", emoji: "✨", x: "5%", y: "35%" },
  { text: "Debugging", emoji: "🐛", x: "90%", y: "40%" },
  { text: "Coffee", emoji: "☕", x: "12%", y: "52%" },
  { text: "Focused", emoji: "🎯", x: "88%", y: "55%" },
  { text: "Designing", emoji: "🖌️", x: "3%", y: "68%" },
  { text: "Thinking", emoji: "🧠", x: "92%", y: "70%" },
  { text: "Iterating", emoji: "🔄", x: "10%", y: "82%" },
  { text: "Deploying", emoji: "📦", x: "82%", y: "85%" },
  { text: "Refactoring", emoji: "♻️", x: "6%", y: "95%" },
  { text: "Testing", emoji: "🧪", x: "88%", y: "95%" },
  { text: "Optimizing", emoji: "⚡", x: "35%", y: "25%" },
  { text: "Hacking", emoji: "🖥️", x: "60%", y: "30%" },
  { text: "Designing", emoji: "🎯", x: "25%", y: "45%" },
  { text: "Brainstorming", emoji: "💡", x: "70%", y: "48%" },
  { text: "Collaborating", emoji: "🤝", x: "45%", y: "60%" },
  { text: "Innovating", emoji: "🔮", x: "55%", y: "72%" },
  { text: "Prototyping", emoji: "🧪", x: "30%", y: "75%" },
  { text: "Automating", emoji: "⚙️", x: "65%", y: "55%" },
  { text: "Debugging", emoji: "🔍", x: "40%", y: "88%" },
  { text: "Shipping", emoji: "🚀", x: "50%", y: "15%" },
  { text: "Crafting", emoji: "✍️", x: "72%", y: "65%" },
];

export function GlobalPills() {
  return (
    <div className="fixed inset-0 z-[1] overflow-hidden pointer-events-none">
      {moods.map((mood, i) => (
        <motion.div
          key={mood.text}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
          className="absolute flex items-center gap-1.5 rounded-full border border-line/30 bg-surface/30 px-3 py-1.5 backdrop-blur-sm"
          style={{ left: mood.x, top: mood.y }}
        >
          <span className="text-xs">{mood.emoji}</span>
          <span className="text-[10px] text-secondary/40">{mood.text}</span>
        </motion.div>
      ))}
    </div>
  );
}
