import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Blog from "./_components/Blog";
import BrandTrust from "./_components/BrandTrust";
import Courses from "./_components/Courses";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Process from "./_components/Process";
import PromoCTA from "./_components/PromoCTA";
import Teachers from "./_components/Teachers";
import Testimonials from "./_components/Testimonials";
import Ticker from "./_components/Ticker";
import ValueProp from "./_components/ValueProp";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webinar Akselerasi Riset Ilmiah dengan AI",
  description:
    "Temukan Novelty & Tulis Karya Ilmiah 3x Lebih Cepat Bebas Plagiasi",
};

export default function LandingPage04() {
  return (
    <div
      className={`font-sans antialiased text-gray-800 bg-[#F8FAFC] ${lora.variable}`}
    >
      <Hero />
      <Ticker />
      <ValueProp />
      <Teachers />
      <BrandTrust />
      <Courses />
      <Process />
      <Testimonials />
      <PromoCTA />
      <Blog />
      <Footer />
    </div>
  );
}
