"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

const images = [
  { label: "creative", color: "rgba(150,40,26,0.6)", span: "col-span-2 row-span-2" },
  { label: "music", color: "rgba(60,81,134,0.6)", span: "col-span-1 row-span-1" },
  { label: "flow", color: "rgba(0,83,147,0.6)", span: "col-span-1 row-span-1" },
  { label: "drives", color: "rgba(0,89,117,0.6)", span: "col-span-1 row-span-2" },
  { label: "design", color: "rgba(100,60,134,0.6)", span: "col-span-1 row-span-1" },
];

export function HeroAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="relative pt-24 pb-8 md:pt-40 md:pb-16 overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[10%] top-[20%] h-24 w-24 md:h-32 md:w-32 rounded-full bg-accent/10 blur-[40px] md:blur-[60px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[15%] top-[40%] h-28 w-28 md:h-40 md:w-40 rounded-full bg-purple-500/10 blur-[50px] md:blur-[70px]"
        />
      </div>

      <Container>
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            {site.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 text-lg md:mt-4 md:text-xl text-muted"
          >
            Building digital experiences that matter.
          </motion.p>
        </div>

        {/* Bento image grid with parallax */}
        <motion.div
          style={{ y }}
          className="mt-6 grid grid-cols-2 grid-rows-3 gap-3 h-[300px] md:mt-10 md:grid-cols-3 md:grid-rows-3 md:gap-4 md:h-[500px]"
        >
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
              transition={{
                delay: 0.3 + i * 0.12,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`${img.span} relative overflow-hidden rounded-xl md:rounded-[23px] border border-line group cursor-pointer`}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundColor: img.color }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                <p className="text-[10px] md:text-xs text-white/80">&apos;26 08 29</p>
                <p className="text-xs md:text-sm font-medium text-white">{img.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
