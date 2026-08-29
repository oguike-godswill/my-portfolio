"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function HeroPortrait() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="label mb-4 text-accent"
            >
              About Me
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            >
              I&apos;m {site.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-base leading-relaxed text-secondary"
            >
              A frontend developer based in Nigeria, passionate about crafting digital experiences
              that feel seamless and intentional. I specialize in building modern web applications
              with React, Next.js, and TypeScript.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 text-base leading-relaxed text-secondary"
            >
              With a strong foundation in both design and development, I bridge the gap
              between aesthetics and functionality — ensuring every project looks great
              and performs even better.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
              <div className="h-full w-full bg-gradient-to-br from-accent/20 via-purple-500/10 to-cyan-500/20" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
