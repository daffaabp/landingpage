"use client";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import type React from "react";
import Button from "./Button";
import { Sparkle, Squiggle } from "./Decorations";

const Hero: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("register");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-24 relative overflow-hidden">
      {/* Background Elements */}
      {/* Background Elements */}
      <div className="absolute top-28 left-4 md:top-20 md:left-10 text-brand-orange animate-pulse opacity-60">
        <Sparkle className="w-8 h-8 md:w-12 md:h-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Center Content - Focused Copy */}
          <div className="w-full lg:w-3/5 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-lightPurple/50 rounded-full text-brand-purple font-semibold text-sm mb-2 border border-brand-purple/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-purple"></span>
              </span>
              Webinar Eksklusif Akademisi
            </div>

            {/* NEW HOOK: Pain Point Focus */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
              Lelah Naskah Ditolak & <br />
              <span className="text-brand-purple relative inline-block">
                Sulit Lolos Plagiasi?
                {/* Squiggle positioned absolutely relative to this span */}
                <Squiggle className="absolute -bottom-2 left-0 w-full text-brand-orange h-3" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Akhiri siklus revisi yang melelahkan. Pelajari cara etis
              menggunakan <strong>Artificial Intelligence</strong> untuk
              menghasilkan karya ilmiah bereputasi (Scopus/WoS) 10x lebih cepat
              dan orisinal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg px-10 shadow-xl shadow-brand-purple/20"
                onClick={scrollToForm}
              >
                Amankan Slot Gratis Saya
              </Button>
              <div className="flex items-center gap-4 text-sm text-gray-500 px-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                </div>
                <span>Bergabung dengan 15,000+ Peneliti</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-gray-100 mt-8">
              <p className="text-sm text-gray-400 font-medium mb-4 uppercase tracking-wider">
                Metode yang aman untuk:
              </p>
              <div className="flex flex-wrap gap-6 opacity-70 grayscale hover:grayscale-0 transition-all">
                <div className="font-heading font-bold text-gray-400 text-xl flex items-center gap-2">
                  <ShieldCheck size={20} /> Scopus
                </div>
                <div className="font-heading font-bold text-gray-400 text-xl flex items-center gap-2">
                  <ShieldCheck size={20} /> SINTA
                </div>
                <div className="font-heading font-bold text-gray-400 text-xl flex items-center gap-2">
                  <ShieldCheck size={20} /> WoS
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Representation */}
          <div className="w-full lg:w-2/5 relative hidden md:block">
            <div className="absolute inset-0 bg-brand-lightPurple rounded-[3rem] transform rotate-6 scale-105 z-0"></div>
            <div className="relative z-10 bg-white p-2 rounded-4xl shadow-2xl border-4 border-white/50">
              <Image
                src="https://picsum.photos/id/445/500/600"
                alt="Academic Success"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-4xl"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-50 animate-bounce duration-4000">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Status Submission</p>
                  <p className="font-bold text-gray-900">Accepted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
