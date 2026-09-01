"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GreetingBubble } from "./GreetingBubble";
import { ClockWidget } from "./HeroExtras";
import { Scene3DWrapper } from "./Scene3DWrapper";
import { site } from "@/lib/site";

const accentWords = ["experiences", "interfaces", "products", "ideas"];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % accentWords.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section className="relative min-h-[80vh] pt-24 pb-8 md:pt-32 md:pb-12">
      {/* 3D Background - fixed via Scene3DWrapper */}
      <Scene3DWrapper />

      <Container className="relative z-10 h-full">
        <div className="grid h-full min-h-[60vh] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: Hero content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="label mb-6 inline-flex items-center gap-2 text-secondary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {site.role}
              </p>
            </motion.div>

            <h1 className="font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] tracking-tight text-foreground">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  I build digital
                </motion.span>
              </span>
              <span className="block overflow-hidden" style={{ minHeight: "0.9em" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={accentWords[wordIndex]}
                    initial={{ y: "100%", opacity: 0, rotateX: -20 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: "-100%", opacity: 0, rotateX: 20 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="block serif-accent text-accent"
                  >
                    {accentWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 max-w-md text-lg leading-relaxed text-secondary"
            >
              Building fast, responsive web products with clean design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button href="/contact" variant="secondary">
                  Let&apos;s Talk
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Widgets */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex lg:flex-col lg:items-end lg:gap-8"
          >
            <GreetingBubble />
            <ClockWidget />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
