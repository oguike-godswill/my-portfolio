import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { Capabilities } from "@/components/sections/Capabilities";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CraftLab } from "@/components/sections/CraftLab";
import { TechStack } from "@/components/sections/TechStack";
import { WritingPreview } from "@/components/sections/WritingPreview";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Frontend & App Developer`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStack />
      <SelectedWork />
      <CraftLab />
      <Capabilities />
      <WritingPreview />
      <ContactCTA />
    </>
  );
}
