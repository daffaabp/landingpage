import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import RegistrationForm from "./RegistrationForm";

export default function Hero() {
  return (
    <header
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-12"
      style={{
        backgroundImage:
          "linear-gradient(rgba(74, 29, 36, 0.9), rgba(74, 29, 36, 0.92))",
      }}
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-start lg:items-center">
        <div className="lg:col-span-7 text-white space-y-8 pr-0 lg:pr-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide border border-white/10">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Live Webinar Event
          </div>
          <h1 className="font-display text-5xl lg:text-[4rem] font-bold leading-[1.1]">
            The 3 Hidden Risks That Keep Investors from{" "}
            <span className="text-[#C68C32] italic">Truly Passive</span> Income
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl leading-relaxed font-light">
            How to protect your wealth, your lifestyle, & your peace of mind in
            an unpredictable market.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 text-sm font-medium text-gray-300 border-t border-white/10 pt-8 mt-8">
            <div className="flex items-center gap-2">
              <Calendar className="text-[#C68C32] w-5 h-5" />
              <span>Friday, October 31, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-[#C68C32] w-5 h-5" />
              <span>11:00 AM EST / 8:00 AM PST</span>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 max-w-md border border-white/5 mt-4">
            <Image
              alt="Abby Robinson"
              className="rounded-full object-cover border-2 border-[#C68C32]/50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3t-wk96B8VMhUHuu4EzAyg_cas84lOTUmTONVawWvDPM6E1gS0Xlxv0asE0h0B1dptCUH5Xi3d289f9YUiz7YVBX4unFb39tCK6iQEch9AjTr_DYQCYAZO7nZS6-9kRqUyrqwTbbTipdNtUSe849CcHcQmoy0EXr4YB_3p2hA6UPSG_69-fDAEs_6TNpKdP_tQ4s07bxUgTAEOwvOE0LzGf_fRzptDjz1gVnyUU-JUmEeyMMdi5QNgIXCoXEsDSFqm6b3iuz5cSE"
              width={56}
              height={56}
            />
            <div>
              <span className="text-[0.65rem] uppercase tracking-wider text-[#C68C32] font-bold mb-0.5 block">
                Featuring
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Abby Robinson
              </h3>
              <p className="text-xs text-gray-400">
                Managing Partner, Hands-Off Investing
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <RegistrationForm />
        </div>
      </div>
    </header>
  );
}
