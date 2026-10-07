import type { Metadata, Viewport } from "next";
import { DM_Sans, Geist_Mono, TikTok_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/shared/Footer";
import { CommandPalette } from "@/components/navigation/CommandPalette";
import { site } from "@/lib/site";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans", display: "swap" });
const tiktokSans = TikTok_Sans({ subsets: ["latin"], variable: "--font-tiktok", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Frontend & App Developer`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Godswill Oguike",
    "frontend developer",
    "app developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Flutter developer",
    "Nigeria",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Frontend & App Developer`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Frontend & App Developer`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
};

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':true;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: site.role,
  description: site.description,
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Flutter",
    "Dart",
    "REST APIs",
    "Database design",
    "Web accessibility",
    "Frontend performance",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${dmSans.variable} ${tiktokSans.variable} ${geistMono.variable}`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:text-[#0a0a0b]"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
