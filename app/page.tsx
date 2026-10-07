import type { Metadata } from "next";
import { Hero } from "@/components/hero/Hero";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { Capabilities } from "@/components/sections/Capabilities";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { CurrentlyBuilding } from "@/components/sections/CurrentlyBuilding";
import { TechStack } from "@/components/sections/TechStack";
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
      <CurrentlyBuilding />
      <Capabilities />
      <ContactCTA />
    </>
  );
}
