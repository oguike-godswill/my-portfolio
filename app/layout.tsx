import type { Metadata } from "next";
import { Manrope, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { PageLoader } from "@/components/ui/PageLoader";
import { SpotifyPlayer } from "@/components/ui/SpotifyPlayer";
import { BackToTop } from "@/components/ui/BackToTop";
import { Footer } from "@/components/ui/Footer";


const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: {
    default: "Oguike Godswill — Frontend Engineer",
    template: "%s | Oguike Godswill",
  },
  description:
    "Frontend Engineer building modern, responsive, and interactive web applications with a focus on clean interfaces and thoughtful user experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="has-custom-cursor">
        <PageLoader />
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <SpotifyPlayer />
        <BackToTop />
      </body>
    </html>
  );
}
