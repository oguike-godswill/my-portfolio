import type { Metadata } from "next";
import { Manrope, Inter, Instrument_Serif } from "next/font/google";
import { Navbar } from "@/components/navigation/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { PageLoader } from "@/components/ui/PageLoader";
import { SpotifyPlayer } from "@/components/ui/SpotifyPlayer";
import { BackToTop } from "@/components/ui/BackToTop";
import { Footer } from "@/components/ui/Footer";
import "./globals.css";

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
    default: "Godswill — Frontend Developer",
    template: "%s | Godswill",
  },
  description:
    "Frontend developer building fast, responsive and engaging web products with clean design and modern frontend engineering.",
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
