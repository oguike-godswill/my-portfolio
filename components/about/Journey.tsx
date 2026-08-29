"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function Journey() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Today */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label mb-4 text-accent">Today</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What I do now
            </h2>
            <p className="mt-6 text-base leading-relaxed text-secondary">
              I&apos;m a frontend developer building modern web applications for clients worldwide.
              I focus on creating fast, responsive, and visually compelling digital products
              using React, Next.js, and TypeScript.
            </p>
            <p className="mt-4 text-base leading-relaxed text-secondary">
              When I&apos;m not coding, you&apos;ll find me exploring new design trends,
              contributing to open source, or learning about emerging technologies.
            </p>
          </motion.div>

          {/* Growth */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="label mb-4 text-accent">Growth</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How I got here
            </h2>
            <p className="mt-6 text-base leading-relaxed text-secondary">
              My journey started with curiosity — tinkering with websites and wondering
              how they worked. That curiosity turned into passion, and passion into profession.
            </p>
            <p className="mt-4 text-base leading-relaxed text-secondary">
              I&apos;ve grown from writing my first HTML to building full-stack applications,
              always driven by the desire to create things that matter and make people&apos;s
              lives easier.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
