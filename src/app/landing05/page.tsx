import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import CTA from "./_components/CTA";
import Features from "./_components/Features";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webinar Eksklusif Akademisi - AI Akademik Pro",
  description:
    "Akhiri siklus revisi yang melelahkan. Pelajari cara etis menggunakan Artificial Intelligence untuk menghasilkan karya ilmiah bereputasi.",
};

export default function LandingPage05() {
  return (
    <div
      className={`min-h-screen bg-brand-bg overflow-x-hidden text-gray-900 ${inter.variable} ${poppins.variable} font-sans`}
    >
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
