import type { Metadata } from "next";
import CtaSection from "./_components/CtaSection";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Speaker from "./_components/Speaker";
import Takeaways from "./_components/Takeaways";
import WhoShouldAttend from "./_components/WhoShouldAttend";
import WhyNow from "./_components/WhyNow";

export const metadata: Metadata = {
  title: "Webinar Akselerasi Riset Ilmiah dengan AI",
  description:
    "Temukan Novelty & Tulis Karya Ilmiah 3x Lebih Cepat Bebas Plagiasi",
};

export default function LandingPage03() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-[#F8FAFC]">
      <Navbar />
      <Hero />
      <Takeaways />
      <WhoShouldAttend />
      <Speaker />
      <WhyNow />
      <CtaSection />
      <Footer />
    </div>
  );
}
