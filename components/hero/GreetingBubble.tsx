"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return { text: "Good morning", emoji: "☀️", sub: "Rise and shine" };
  if (hour < 17) return { text: "Good afternoon", emoji: "🌤️", sub: "Hope you're having a great day" };
  if (hour < 21) return { text: "Good evening", emoji: "🌅", sub: "Winding down nicely" };
  return { text: "Good night", emoji: "🌙", sub: "Burning the midnight oil?" };
}

const funFacts = [
  "Currently sipping coffee ☕",
  "Shipping features 🚀",
  "Debugging life 🐛",
  "Writing clean code ✨",
  "Making pixels perfect 🎨",
  "Thinking in components 🧩",
];

export function GreetingBubble() {
  const [greeting, setGreeting] = useState(getGreeting());
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-end gap-4"
    >
      {/* Main greeting */}
      <div className="rounded-2xl border border-line bg-surface/80 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{greeting.emoji}</span>
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              {greeting.text}
            </p>
            <p className="text-sm text-secondary">{greeting.sub}</p>
          </div>
        </div>
      </div>

      {/* Time indicator */}
      <div className="flex items-center gap-2 text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
        <span>Available for work</span>
      </div>
    </motion.div>
  );
}
