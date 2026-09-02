"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "4+", label: "Projects Built" },
  { value: "3+", label: "Happy Clients" },
  { value: "100%", label: "Client Satisfaction" },
];

export function Stats() {
  return (
    <section className="border-y border-line py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <span className="font-display text-4xl font-bold text-accent sm:text-5xl">
                {stat.value}
              </span>
              <p className="mt-2 text-sm text-secondary">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
