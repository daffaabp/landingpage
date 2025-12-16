import {
  ArrowRight,
  BrainCircuit,
  Layout,
  Palette,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import LightRays from "../component/LightRays";
import SplitText from "../component/SplitText";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden relative selection:bg-blue-500/30 font-sans">
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <LightRays
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>
      {/* Background Gradients - Commented out to prefer LightRays */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10"></div> */}

      <main className="container mx-auto px-6 py-24 min-h-screen flex flex-col justify-center items-center relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-400 mb-6 hover:bg-white/10 transition-colors backdrop-blur-sm cursor-default">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span>Project Showcase</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-linear-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            <SplitText
              text="Landing Page"
              className="block text-white pb-4"
              delay={30}
            />
            <SplitText
              text="Variations"
              className="block text-[#2563EB] pb-4"
              delay={30}
            />
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
            Explore different design approaches and conversion strategies
            implemented across multiple aesthetic versions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 w-full max-w-4xl px-4 lg:px-0">
          {/* Variant 01 Button */}
          <Link
            href="/landing01"
            className="group relative px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#C68C32] hover:border-[#C68C32] hover:text-white transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
          >
            <Palette className="w-4 h-4 text-[#C68C32] group-hover:text-white transition-colors" />
            <span className="font-medium text-slate-300 group-hover:text-white">
              Variant 01
            </span>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white -ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>

          {/* Variant 02 Button */}
          <Link
            href="/landing02"
            className="group relative px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#4A1D24] hover:border-[#4A1D24] hover:text-white transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
          >
            <Layout className="w-4 h-4 text-[#ff8a98] group-hover:text-white transition-colors" />
            <span className="font-medium text-slate-300 group-hover:text-white">
              Variant 02
            </span>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white -ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>

          {/* Variant 03 Button */}
          <Link
            href="/landing03"
            className="group relative px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-[#2563EB] group-hover:text-white transition-colors" />
            <span className="font-medium text-slate-300 group-hover:text-white">
              Variant 03
            </span>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white -ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>

          {/* Variant 04 Button */}
          <Link
            href="/landing04"
            className="group relative px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#1E3A8A] hover:border-[#1E3A8A] hover:text-white transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
          >
            <BrainCircuit className="w-4 h-4 text-[#D97706] group-hover:text-white transition-colors" />
            <span className="font-medium text-slate-300 group-hover:text-white">
              Variant 04
            </span>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-white -ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

        <footer className="mt-20 text-center text-slate-600 text-sm">
          <p>© 2025 Akademia AI Landing Page Showcase</p>
        </footer>
      </main>
    </div>
  );
}
