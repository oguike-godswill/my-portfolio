"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  { text: "Code is poetry.", author: "WordPress" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
];

function useTime() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

export function ClockWidget() {
  const time = useTime();

  if (!time) return null;

  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
      <span className="font-mono text-2xl font-bold text-foreground">
        {hours}
        <span className="text-accent">:</span>
        {minutes}
        <span className="text-muted text-lg">:{seconds}</span>
      </span>
    </div>
  );
}

export function RandomQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const quote = quotes[index];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="max-w-xs"
      >
        <p className="text-sm italic text-secondary">
          &ldquo;{quote.text}&rdquo;
        </p>
        <p className="mt-1 text-xs text-muted">— {quote.author}</p>
      </motion.div>
    </AnimatePresence>
  );
}

export function MiniStats() {
  const stats = [
    { value: "50K+", label: "Lines Written" },
    { value: "1K+", label: "Cups of Coffee" },
    { value: "∞", label: "Bugs Fixed" },
  ];

  return (
    <div className="flex gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <span className="font-mono text-lg font-bold text-accent">{stat.value}</span>
          <p className="mt-0.5 text-[10px] text-muted">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
