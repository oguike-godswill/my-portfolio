"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Avatar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const eyeX = useSpring(mouseX, springConfig);
  const eyeY = useSpring(mouseY, springConfig);

  // Map mouse position to eye movement range (-10 to 10 px)
  const pupilX = useTransform(eyeX, [-1, 1], [-10, 10]);
  const pupilY = useTransform(eyeY, [-1, 1], [-8, 8]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / window.innerWidth);
      mouseY.set((e.clientY - centerY) / window.innerHeight);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      className="relative mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Subtle glow behind avatar */}
      <div className="absolute inset-0 -m-6 rounded-full bg-accent/5 blur-2xl" />

      <svg
        width="260"
        height="260"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[0_0_15px_rgba(216,255,62,0.15)]"
      >
        {/* Head shape */}
        <circle cx="90" cy="85" r="60" fill="#1a1a1a" stroke="#d8ff3e" strokeWidth="2" />
        {/* Inner glow */}
        <circle cx="90" cy="85" r="55" fill="url(#headGrad)" />

        {/* Eyes */}
        <g>
          {/* Left eye socket */}
          <ellipse cx="72" cy="78" rx="12" ry="10" fill="#0b0b0b" stroke="#333" strokeWidth="1" />
          {/* Left pupil - moves with cursor */}
          <motion.circle
            cx="72"
            cy="78"
            r="5"
            fill="#d8ff3e"
            style={{ cx: useTransform(pupilX, (v) => 72 + v), cy: useTransform(pupilY, (v) => 78 + v) }}
          />
          <motion.circle
            cx="72"
            cy="78"
            r="2"
            fill="#fff"
            style={{ cx: useTransform(pupilX, (v) => 73 + v * 0.5), cy: useTransform(pupilY, (v) => 76 + v * 0.5) }}
          />

          {/* Right eye socket */}
          <ellipse cx="108" cy="78" rx="12" ry="10" fill="#0b0b0b" stroke="#333" strokeWidth="1" />
          {/* Right pupil - moves with cursor */}
          <motion.circle
            cx="108"
            cy="78"
            r="5"
            fill="#d8ff3e"
            style={{ cx: useTransform(pupilX, (v) => 108 + v), cy: useTransform(pupilY, (v) => 78 + v) }}
          />
          <motion.circle
            cx="108"
            cy="78"
            r="2"
            fill="#fff"
            style={{ cx: useTransform(pupilX, (v) => 109 + v * 0.5), cy: useTransform(pupilY, (v) => 76 + v * 0.5) }}
          />
        </g>

        {/* Mouth - subtle smile */}
        <path
          d="M78 100 Q90 112 102 100"
          stroke="#d8ff3e"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Antenna */}
        <line x1="90" y1="25" x2="90" y2="10" stroke="#d8ff3e" strokeWidth="2" />
        <motion.circle
          cx="90"
          cy="8"
          r="4"
          fill="#d8ff3e"
          animate={{
            opacity: [1, 0.4, 1],
            r: [4, 5, 4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Ears / side details */}
        <rect x="24" y="70" width="6" height="20" rx="3" fill="#d8ff3e" opacity="0.5" />
        <rect x="150" y="70" width="6" height="20" rx="3" fill="#d8ff3e" opacity="0.5" />

        {/* Circuit lines on face */}
        <path d="M60 65 L50 65 L50 55" stroke="#d8ff3e" strokeWidth="0.8" opacity="0.25" fill="none" />
        <path d="M120 65 L130 65 L130 55" stroke="#d8ff3e" strokeWidth="0.8" opacity="0.25" fill="none" />
        <circle cx="50" cy="55" r="2" fill="#d8ff3e" opacity="0.3" />
        <circle cx="130" cy="55" r="2" fill="#d8ff3e" opacity="0.3" />

        {/* Neck */}
        <rect x="82" y="143" width="16" height="15" rx="3" fill="#1a1a1a" stroke="#333" strokeWidth="1" />

        {/* Body / shoulders hint */}
        <path
          d="M62 158 Q90 148 118 158 L125 180 L55 180 Z"
          fill="#1a1a1a"
          stroke="#d8ff3e"
          strokeWidth="1.5"
        />
        {/* Chest light */}
        <motion.circle
          cx="90"
          cy="168"
          r="4"
          fill="#d8ff3e"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <defs>
          <radialGradient id="headGrad" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#0b0b0b" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
