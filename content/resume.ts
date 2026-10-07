export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
}

export interface EducationEntry {
  qualification: string;
  institution: string;
  period: string;
  detail?: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: "Frontend Engineer",
    company: "ConnectNigeria",
    period: "June 2025 — Present",
    points: [
      "Develop and maintain the main ConnectNigeria.com platform, contributing new features and improvements across the existing product.",
      "Contributed to the redesign and frontend implementation of the ConnectNigeria landing page, translating updated designs into responsive, interactive interfaces.",
      "Implemented discount code functionality within the checkout flow, integrating frontend interactions with APIs to support the purchasing experience.",
      "Build and maintain responsive UI components, integrate APIs and dynamic data, and resolve frontend bugs and functional issues across production applications.",
      "Contribute across multiple existing and new projects while adapting to different requirements, interfaces and codebases.",
    ],
  },
  {
    role: "Frontend Engineering Intern",
    company: "ConnectNigeria",
    period: "September 2025 — May 2026",
    points: [
      "Converted Figma designs into responsive, production-ready frontend implementations.",
      "Contributed to RedHotConcepts, translating design concepts into functional web interfaces.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    qualification: "B.Sc. Computer Science",
    institution: "ESCAE University, Benin Republic",
    period: "2019 — 2023",
  },
  {
    qualification: "Computer Education & Web Development",
    institution: "Aptech Computer School",
    period: "Training",
    detail: "Structured training in computing fundamentals and web development.",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Responsive UI"],
  },
  {
    label: "App development",
    items: ["Flutter", "Dart", "Mobile navigation", "Auth flows", "State management"],
  },
  {
    label: "Backend & data",
    items: ["Node.js", "REST APIs", "Prisma", "PostgreSQL", "MongoDB", "Authentication", "JWT"],
  },
  {
    label: "Tools & practice",
    items: ["Git", "Figma to code", "Vercel", "Zod", "Recharts", "Accessibility", "Performance"],
  },
  {
    label: "AI tooling",
    items: ["ChatGPT", "Gemini", "opencode", "Claude Code", "OpenAI API", "AI agents"],
  },
];
