"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";
import { MapPin, Mail, ExternalLink, Github, Linkedin } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="label mb-4 text-accent">{children}</p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <Container>
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 font-display text-xl text-accent md:text-2xl">
            {site.role}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-secondary">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-muted" />
              {site.location}
            </span>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
              <Mail size={14} className="text-muted" />
              {site.email}
            </a>
            <a href={site.portfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
              <ExternalLink size={14} className="text-muted" />
              Portfolio
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
              <Github size={14} className="text-muted" />
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-accent">
              <Linkedin size={14} className="text-muted" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Profile */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mt-16">
          <SectionLabel>Profile</SectionLabel>
          <SectionTitle>About Me</SectionTitle>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-secondary normal-case">
            {site.profile}
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="mt-16">
          <SectionLabel>Experience</SectionLabel>
          <SectionTitle>Where I&apos;ve Worked</SectionTitle>
          <div className="mt-8 space-y-10">
            {[
              {
                company: "ConnectNigeria",
                role: "Frontend Engineer",
                period: "June 2025 — Present",
                items: [
                  "Develop and maintain the main ConnectNigeria.com platform, contributing to new features and improvements across the existing product.",
                  "Contributed to the redesign and frontend implementation of the ConnectNigeria landing page, translating updated designs into responsive, interactive interfaces.",
                  "Implemented discount code functionality within the checkout flow, integrating frontend interactions with APIs to support the purchasing experience.",
                  "Build and maintain responsive UI components, integrate APIs and dynamic data, and resolve frontend bugs and functional issues across production applications.",
                  "Contribute across multiple existing and new projects while adapting to different requirements, interfaces, and codebases.",
                ],
              },
              {
                company: "ConnectNigeria",
                role: "Frontend Engineering Intern",
                period: "September 2025 — May 2026",
                items: [
                  "Converted Figma designs into responsive, production-ready frontend implementations.",
                  "Contributed to RedHotConcepts, translating design concepts into functional web interfaces.",
                  "Built interactive UI components and responsive layouts across desktop and mobile breakpoints.",
                ],
              },
            ].map((job, i) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border-l-2 border-line pl-8"
              >
                <p className="label text-muted">{job.period}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                  {job.role}
                </h3>
                <p className="text-sm text-accent">{job.company}</p>
                <ul className="mt-3 space-y-2">
                  {job.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-secondary normal-case">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mt-16">
          <SectionLabel>Projects</SectionLabel>
          <SectionTitle>Selected Work</SectionTitle>
          <div className="mt-8 space-y-10">
            {[
              {
                title: "MoLearn — Online Learning Platform",
                stack: "Next.js · React · TypeScript · Tailwind CSS · PostgreSQL · Prisma · NextAuth · Stripe",
                url: "https://molearn.vercel.app/",
                items: [
                  "Full-stack learning marketplace connecting students and teachers with digital educational products.",
                  "Built role-based authentication and dashboards for students, teachers, agents, and admins using NextAuth.",
                  "Implemented video and book products, teacher-managed listings, course discovery, purchases, enrollments/progress, reviews, notifications, and payouts.",
                  "Built API routes and database-backed workflows with Prisma/PostgreSQL and integrated Stripe payment functionality.",
                ],
              },
              {
                title: "LegitAutos — Automotive Marketplace",
                stack: "Next.js · React · TypeScript · Tailwind CSS · MongoDB",
                url: "https://legitautomobile.com/",
                items: [
                  "Full-stack automotive marketplace for discovering vehicles and connecting buyers with sellers.",
                  "Built vehicle listings, detail pages, search, filtering, location/budget discovery, authentication, seller listing management, and image handling.",
                  "Integrated dynamic vehicle data and seller communication workflows, including direct WhatsApp contact.",
                ],
              },
              {
                title: "AI Messaging Responder",
                stack: "Node.js · OpenAI API · Baileys · WhatsApp · Telegram",
                items: [
                  "AI-powered messaging automation system for generating automated responses across messaging platforms.",
                  "Integrated OpenAI API for context-aware responses and built WhatsApp automation with Node.js and Baileys.",
                  "Integrated Telegram messaging and processed incoming messages through an AI-powered response pipeline.",
                ],
              },
              {
                title: "TastyBitz — Recipe Discovery Platform",
                stack: "Next.js · React · TypeScript · API Integration",
                url: "https://tastybitz.vercel.app/",
                items: [
                  "Recipe discovery platform allowing users to search for dishes and learn how to prepare them.",
                  "Built responsive recipe search and discovery interfaces with dynamic recipe detail pages.",
                  "Integrated an external recipe API and displayed ingredients and cooking instructions across desktop and mobile.",
                ],
              },
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="border-l-2 border-line pl-8"
              >
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-muted">{project.stack}</p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1 text-xs text-accent transition-colors hover:text-accent-dark"
                  >
                    <ExternalLink size={12} />
                    Live
                  </a>
                )}
                <ul className="mt-3 space-y-2">
                  {project.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-secondary normal-case">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.25 }} className="mt-16">
          <SectionLabel>Skills</SectionLabel>
          <SectionTitle>Technical Skills</SectionTitle>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries({
              Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
              Frontend: ["React", "Next.js", "Tailwind CSS", "Responsive Design", "Component Architecture"],
              "Backend & APIs": ["Node.js", "REST APIs", "OpenAI API", "API Integration", "Authentication", "CRUD"],
              Database: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose"],
              Tools: ["Git", "GitHub", "Figma", "Vercel", "Cloudflare"],
              Other: ["State Management", "SEO", "Performance", "Accessibility", "UI/UX"],
            }).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="rounded-xl border border-line bg-surface/50 p-5"
              >
                <p className="text-[10px] font-medium tracking-[0.08em] text-accent">{category.toUpperCase()}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-secondary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mt-16">
          <SectionLabel>Education</SectionLabel>
          <SectionTitle>Academic Background</SectionTitle>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 border-l-2 border-line pl-8"
          >
            <p className="label text-muted">2019 — 2023</p>
            <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
              B.Sc. Computer Science
            </h3>
            <p className="text-sm text-accent">ESCAE University, Benin Republic</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
