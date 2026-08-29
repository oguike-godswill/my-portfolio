"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Code, Palette, Zap, Layout } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Web Development",
    desc: "Custom websites built with modern frameworks",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive user interfaces",
  },
  {
    icon: Code,
    title: "Frontend Engineering",
    desc: "Clean, maintainable, scalable code",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Fast, optimized web experiences",
  },
];

export function Services() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <p className="label mb-4 text-accent">What I Do</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Services
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-xl border border-line bg-surface/50 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-surface"
            >
              <service.icon
                size={28}
                className="text-accent transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
