export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  accent: string;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  role: string;
  features: string[];
  challenges: string[];
  results: string[];
}

export const projects: Project[] = [
  {
    slug: "molearn",
    title: "MoLearn",
    category: "EdTech",
    description:
      "Full-stack learning marketplace connecting students and teachers with digital educational products.",
    longDescription:
      "MoLearn is a full-stack online learning marketplace that connects students and teachers with digital educational products. Built with role-based authentication, video and book products, course discovery, purchases, enrollments, reviews, notifications, and payouts.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "NextAuth", "Stripe"],
    accent: "#8B5CF6",
    liveUrl: "https://molearn.vercel.app/",
    year: "2025",
    role: "Full Stack Developer",
    features: [
      "Role-based authentication for students, teachers, agents, and admins",
      "Video and book product listings",
      "Course discovery, purchases, and enrollment tracking",
      "Reviews, notifications, and payout system",
      "Stripe payment integration",
    ],
    challenges: [
      "Building complex role-based dashboards",
      "Implementing Stripe payment workflows",
      "Managing relational data with Prisma/PostgreSQL",
    ],
    results: [
      "Full-stack learning marketplace live in production",
      "Seamless student-teacher connection",
      "Secure payment and enrollment flow",
    ],
  },
  {
    slug: "legitautos",
    title: "LegitAutos",
    category: "Automotive Marketplace",
    description:
      "Full-stack automotive marketplace for discovering vehicles and connecting buyers with sellers.",
    longDescription:
      "LegitAutos is a full-stack automotive marketplace built with Next.js and MongoDB. It features vehicle listings, detail pages, search, filtering, location/budget discovery, authentication, seller listing management, and image handling with direct WhatsApp contact.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB"],
    accent: "#F59E0B",
    liveUrl: "https://legitautomobile.com/",
    year: "2025",
    role: "Full Stack Developer",
    features: [
      "Vehicle listings with detail pages",
      "Search, filtering, and location/budget discovery",
      "Seller listing management and image handling",
      "Authentication and user dashboards",
      "Direct WhatsApp contact for buyers and sellers",
    ],
    challenges: [
      "Building complex search and filter logic",
      "Implementing seller management workflows",
      "Optimizing image handling and delivery",
    ],
    results: [
      "Live production marketplace",
      "Streamlined buyer-seller connection",
      "Responsive across all devices",
    ],
  },
  {
    slug: "ai-messaging-responder",
    title: "AI Messaging Responder",
    category: "AI Automation",
    description:
      "AI-powered messaging automation system for generating automated responses across WhatsApp and Telegram.",
    longDescription:
      "An AI-powered messaging automation system that integrates OpenAI API for context-aware responses and built WhatsApp automation with Node.js and Baileys. Also integrates Telegram messaging through an AI-powered response pipeline.",
    tags: ["Node.js", "OpenAI API", "Baileys", "WhatsApp", "Telegram"],
    accent: "#10B981",
    year: "2025",
    role: "Backend Developer",
    features: [
      "OpenAI API integration for context-aware responses",
      "WhatsApp automation with Baileys",
      "Telegram messaging integration",
      "AI-powered response pipeline",
    ],
    challenges: [
      "Integrating with WhatsApp Web protocol",
      "Building reliable message processing pipeline",
      "Handling API rate limits and errors",
    ],
    results: [
      "Automated cross-platform messaging",
      "Context-aware AI responses",
      "Scalable message processing",
    ],
  },
  {
    slug: "tastybitz",
    title: "TastyBitz",
    category: "Recipe Platform",
    description:
      "Recipe discovery platform allowing users to search for dishes and learn how to prepare them.",
    longDescription:
      "TastyBitz is a recipe discovery platform built with Next.js and TypeScript. It features responsive recipe search, dynamic recipe detail pages, and integration with an external recipe API displaying ingredients and cooking instructions across desktop and mobile.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API Integration"],
    accent: "#EF4444",
    liveUrl: "https://tastybitz.vercel.app/",
    year: "2024",
    role: "Frontend Developer",
    features: [
      "Responsive recipe search and discovery",
      "Dynamic recipe detail pages",
      "External recipe API integration",
      "Ingredients and cooking instructions display",
    ],
    challenges: [
      "Integrating with external recipe API",
      "Building responsive search interfaces",
      "Optimizing for mobile-first experience",
    ],
    results: [
      "Live production application",
      "Seamless recipe discovery experience",
      "Fully responsive across devices",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
