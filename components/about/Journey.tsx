"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

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
            <p className="mt-6 text-base leading-relaxed text-secondary normal-case">
              I&apos;m a Frontend Engineer at ConnectNigeria, building and maintaining production web applications. I work across the stack — from translating Figma designs into responsive interfaces to integrating APIs and building database-backed features with Prisma and PostgreSQL.
            </p>
            <p className="mt-4 text-base leading-relaxed text-secondary normal-case">
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
            <p className="mt-6 text-base leading-relaxed text-secondary normal-case">
              My journey started with curiosity — tinkering with websites and wondering
              how they worked. That curiosity turned into passion, and passion into profession. I studied Computer Science at ESCAE University and built projects to sharpen my skills.
            </p>
            <p className="mt-4 text-base leading-relaxed text-secondary normal-case">
              I&apos;ve grown from writing my first HTML to building full-stack applications
              with React, Next.js, TypeScript, and Prisma — always driven by the desire to create things that matter.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
