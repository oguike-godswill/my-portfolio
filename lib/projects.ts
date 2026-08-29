export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  tags: string[];
  accent: string;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  role: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    slug: "quotehub",
    title: "QuoteHub",
    category: "Marketplace",
    description: "A modern marketplace connecting freelancers with clients, featuring real-time bidding and secure payments.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe"],
    accent: "#FF9E5E",
    liveUrl: "https://quotehub.example.com",
    githubUrl: "https://github.com/dammybundlez/quotehub",
    year: "2024",
    role: "Full Stack Developer",
  },
  {
    slug: "velvet-and-roots",
    title: "Velvet & Roots",
    category: "E-Commerce",
    description: "An e-commerce platform for a premium hair care brand with subscription boxes and personalized recommendations.",
    tags: ["React", "Node.js", "Stripe", "Framer Motion", "PostgreSQL"],
    accent: "#C98B8B",
    liveUrl: "https://velvetandroots.example.com",
    githubUrl: "https://github.com/dammybundlez/velvet-and-roots",
    year: "2024",
    role: "Frontend Developer",
  },
  {
    slug: "grace-chapel",
    title: "Grace Chapel",
    category: "Church Website",
    description: "A community-focused church website with event management, sermon archives, and online giving integration.",
    tags: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
    accent: "#E3C878",
    liveUrl: "https://gracechapel.example.com",
    githubUrl: "https://github.com/dammybundlez/grace-chapel",
    year: "2023",
    role: "Full Stack Developer",
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    category: "SaaS",
    description: "A project management tool with Kanban boards, team collaboration, and real-time updates.",
    tags: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
    accent: "#6366F1",
    liveUrl: "https://taskflow.example.com",
    year: "2024",
    role: "Frontend Developer",
  },
  {
    slug: "bites",
    title: "Bites",
    category: "Food Delivery",
    description: "A food delivery platform with real-time order tracking, restaurant dashboard, and payment integration.",
    tags: ["Next.js", "Tailwind CSS", "Prisma", "Stripe"],
    accent: "#EF4444",
    liveUrl: "https://bites.example.com",
    year: "2023",
    role: "Full Stack Developer",
  },
  {
    slug: "finova",
    title: "Finova",
    category: "Fintech",
    description: "A personal finance dashboard with expense tracking, budgeting tools, and investment insights.",
    tags: ["React", "Chart.js", "Node.js", "MongoDB"],
    accent: "#10B981",
    liveUrl: "https://finova.example.com",
    year: "2024",
    role: "Frontend Developer",
  },
  {
    slug: "learnly",
    title: "Learnly",
    category: "EdTech",
    description: "An online learning platform with video courses, progress tracking, and interactive quizzes.",
    tags: ["Next.js", "TypeScript", "AWS", "Tailwind CSS"],
    accent: "#8B5CF6",
    liveUrl: "https://learnly.example.com",
    year: "2023",
    role: "Full Stack Developer",
  },
  {
    slug: "staybnb",
    title: "Staybnb",
    category: "Booking",
    description: "A vacation rental platform with property listings, booking system, and host management.",
    tags: ["React", "Node.js", "MongoDB", "Mapbox"],
    accent: "#F59E0B",
    liveUrl: "https://staybnb.example.com",
    year: "2024",
    role: "Frontend Developer",
  },
  {
    slug: "pulse",
    title: "Pulse",
    category: "Health & Fitness",
    description: "A fitness tracking app with workout plans, progress analytics, and social features.",
    tags: ["React Native", "TypeScript", "Firebase", "HealthKit"],
    accent: "#EC4899",
    liveUrl: "https://pulse.example.com",
    year: "2023",
    role: "Mobile Developer",
  },
  {
    slug: "artify",
    title: "Artify",
    category: "Creative Platform",
    description: "A digital art marketplace connecting artists with collectors, featuring NFT integration.",
    tags: ["Next.js", "TypeScript", "Solidity", "IPFS"],
    accent: "#14B8A6",
    liveUrl: "https://artify.example.com",
    year: "2024",
    role: "Full Stack Developer",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
