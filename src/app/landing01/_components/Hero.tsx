import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import type React from "react";
import RegistrationForm from "@/app/landing01/_components/RegistrationForm";

const Hero: React.FC = () => {
  const bgImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCDgKNF6LStf06J3TTJg0SZn4GXHu6wpvKENr2VLgi0B27lM7u99jSNTMdkvQNQVcDYfkABUJEhixjl88ngEITvGhunKQQJcrBQwlPByGxH55uUd6k1ZfvUQg_GmdsWBbBJAOp-ZlbQL2nNl8mrLVJ1JDTnIECpLxxmAJx7KGSbmTdJZxjQPdtM1zQMxTCWFDjzUxYImLrhT8-B7V0l5J32HgSV2anCX9UrYvSSvlkFNLZWVAMLah6r3cxEtgB_sELJtJYfJGJsyjA";

  return (
    <header
      className="relative min-h-screen lg:min-h-[85vh] flex items-center pt-32 pb-16 px-6 lg:px-12 bg-brand-dark"
      style={{
        backgroundImage: `linear-gradient(rgba(74, 29, 36, 0.85), rgba(74, 29, 36, 0.9)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 text-white space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 text-sm font-medium">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Live Webinar Event
          </div>

          <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight">
            The 3 Hidden Risks That Keep Investors from{" "}
            <span className="text-primary italic">Truly Passive</span> Income
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
            How to protect your wealth, your lifestyle, & your peace of mind in
            an unpredictable market.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-gray-200 border-t border-white/20 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="text-primary w-5 h-5" />
              <span>Friday, October 31, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-primary w-5 h-5" />
              <span>11:00 AM EST / 8:00 AM PST</span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-xl p-4 max-w-md border border-white/10">
            <Image
              alt="Abby Robinson"
              className="rounded-full object-cover border-2 border-primary"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3t-wk96B8VMhUHuu4EzAyg_cas84lOTUmTONVawWvDPM6E1gS0Xlxv0asE0h0B1dptCUH5Xi3d289f9YUiz7YVBX4unFb39tCK6iQEch9AjTr_DYQCYAZO7nZS6-9kRqUyrqwTbbTipdNtUSe849CcHcQmoy0EXr4YB_3p2hA6UPSG_69-fDAEs_6TNpKdP_tQ4s07bxUgTAEOwvOE0LzGf_fRzptDjz1gVnyUU-JUmEeyMMdi5QNgIXCoXEsDSFqm6b3iuz5cSE"
              width={64}
              height={64}
            />
            <div>
              <span className="text-xs uppercase tracking-wider text-primary font-bold mb-1 block">
                Featuring
              </span>
              <h3 className="font-display text-lg font-bold">Abby Robinson</h3>
              <p className="text-xs text-gray-300">
                Managing Partner, Hands-Off Investing
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-5">
          <RegistrationForm />
        </div>
      </div>
    </header>
  );
};

export default Hero;
