import { HeroAbout } from "@/components/about/HeroAbout";
import { BentoGrid } from "@/components/about/BentoGrid";
import { Connect } from "@/components/about/Connect";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <HeroAbout />
      <BentoGrid />
      <Connect />
    </>
  );
}
