"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MapPin, Target, TrendingUp, GraduationCap, Zap, Code, Palette, Layout, Sparkles } from "lucide-react";

const skills = [
  { name: "React", icon: Code, color: "#61DAFB" },
  { name: "Next.js", icon: Layout, color: "#ffffff" },
  { name: "TypeScript", icon: Code, color: "#3178C6" },
  { name: "Tailwind", icon: Palette, color: "#06B6D4" },
  { name: "Node.js", icon: Code, color: "#339933" },
  { name: "Framer", icon: Sparkles, color: "#05F" },
];

const services = [
  { icon: Layout, text: "Web Development" },
  { icon: Palette, text: "UI Implementation" },
  { icon: Zap, text: "Frontend Architecture" },
  { icon: Sparkles, text: "Motion Design" },
];

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.01 }}
      className={`group rounded-xl md:rounded-[23px] border border-line bg-surface/50 p-5 md:p-8 transition-all duration-500 hover:border-accent/30 hover:bg-surface hover:shadow-2xl hover:shadow-accent/5 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function BentoGrid() {
  return (
    <section className="py-8 md:py-16">
      <Container>
        <div className="grid gap-3 md:gap-4 md:grid-cols-2">
          {/* Narrative */}
          <Card className="md:col-span-2">
            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              {[
                { label: "TODAY", text: "I'm a frontend developer based in Nigeria, focused on building modern web applications that blend clean design with solid engineering.", icon: MapPin },
                { label: "GOAL", text: "To create digital experiences that not only look great but feel seamless and intuitive for everyone who uses them.", icon: Target },
                { label: "GROWTH", text: "From writing my first lines of HTML to shipping full-stack applications, every project has been a step forward in mastering the craft.", icon: TrendingUp },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-2 md:mb-3">
                    <s.icon size={16} className="text-accent md:w-[18px] md:h-[18px]" />
                    <p className="text-[10px] md:text-xs font-medium tracking-[0.08em] text-accent">{s.label}</p>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-secondary">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Education */}
          <Card>
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mb-3 flex h-10 w-10 md:mb-4 md:h-12 md:w-12 items-center justify-center rounded-xl md:rounded-2xl bg-accent/10"
            >
              <GraduationCap size={20} className="text-accent md:w-6 md:h-6" />
            </motion.div>
            <p className="text-[10px] md:text-xs font-medium tracking-[0.08em] text-accent mb-2 md:mb-3">EDUCATION</p>
            <p className="text-sm md:text-base leading-relaxed text-secondary">
              Self-taught developer with a passion for continuous learning. Studied Computer Science fundamentals and built real-world projects to sharpen my skills.
            </p>
            <div className="mt-3 flex items-center gap-2 text-[10px] md:mt-4 md:text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Always learning
            </div>
          </Card>

          {/* Currently */}
          <Card>
            <motion.div
              initial={{ scale: 0, rotate: 10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="mb-3 flex h-10 w-10 md:mb-4 md:h-12 md:w-12 items-center justify-center rounded-xl md:rounded-2xl bg-accent/10"
            >
              <Zap size={20} className="text-accent md:w-6 md:h-6" />
            </motion.div>
            <p className="text-[10px] md:text-xs font-medium tracking-[0.08em] text-accent mb-2 md:mb-3">CURRENTLY</p>
            <p className="text-sm md:text-base leading-relaxed text-secondary">
              Learning advanced animation techniques with Framer Motion and exploring backend development to build more complete products.
            </p>
            <div className="mt-3 flex items-center gap-2 text-[10px] md:mt-4 md:text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              Building something new
            </div>
          </Card>

          {/* Skills */}
          <Card>
            <p className="text-[10px] md:text-xs font-medium tracking-[0.08em] text-accent mb-3 md:mb-4">SKILLS</p>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex flex-col items-center gap-1.5 md:gap-2 rounded-lg md:rounded-xl border border-line bg-surface p-2 md:p-3 transition-all duration-300 hover:border-accent/30 hover:bg-surface-2 cursor-default"
                >
                  <skill.icon size={16} style={{ color: skill.color }} className="md:w-5 md:h-5" />
                  <span className="text-[9px] md:text-[10px] text-secondary">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </Card>

          {/* Services */}
          <Card>
            <p className="text-[10px] md:text-xs font-medium tracking-[0.08em] text-accent mb-3 md:mb-4">SERVICES</p>
            <div className="space-y-2 md:space-y-3">
              {services.map((s, i) => (
                <motion.div
                  key={s.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 md:gap-3 rounded-lg border border-line bg-surface p-2 md:p-3 transition-all duration-300 hover:border-accent/30 hover:bg-surface-2 cursor-default"
                >
                  <s.icon size={16} className="text-accent md:w-[18px] md:h-[18px]" />
                  <span className="text-xs md:text-sm text-secondary">{s.text}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}
