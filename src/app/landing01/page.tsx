import CtaSection from "./_components/CtaSection";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Speaker from "./_components/Speaker";
import Takeaways from "./_components/Takeaways";
import WhoShouldAttend from "./_components/WhoShouldAttend";
import WhyNow from "./_components/WhyNow";

export default function LandingPage01() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow">
        <Hero />
        <Takeaways />
        <WhoShouldAttend />
        <Speaker />
        <WhyNow />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
