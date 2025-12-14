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
  title: "Hands-Off Investing Webinar",
  description:
    "The 3 Hidden Risks That Keep Investors from Truly Passive Income",
};

export default function LandingPage02() {
  return (
    <div className="font-sans antialiased text-[#1F1F1F] bg-[#FAF6F3]">
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
