"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { TESTIMONIALS } from "./constants";

const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setActiveIdx(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );

  return (
    <section className="py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left Header & Controls */}
          <div className="md:w-1/3 flex flex-col justify-center">
            <span className="text-[#D97706] font-bold uppercase tracking-widest text-sm mb-2 block">
              Testimoni Peserta
            </span>
            <h2 className="text-3xl font-(family-name:--font-lora) font-bold text-gray-900 mb-6">
              Apa Kata{" "}
              <span className="text-[#1E3A8A] underline decoration-[#D97706] decoration-4 underline-offset-4">
                Alumni Kelas Inovatif
              </span>
              ?
            </h2>
            <p className="text-gray-600 mb-8">
              91% akademisi mempercayai rekomendasi rekan. Lihat bagaimana
              webinar ini membantu mereka menembus jurnal internasional.
            </p>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={prev}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Card Stack */}
          <div className="md:w-2/3 relative min-h-[300px] w-full">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                className={`absolute top-0 left-0 w-full bg-white border-l-4 border-[#D97706] p-8 md:p-10 rounded-r-2xl shadow-xl transition-all duration-500 ease-in-out
                        ${idx === activeIdx ? "opacity-100 z-10 translate-x-0 scale-100" : "opacity-0 z-0 translate-x-10 scale-95 pointer-events-none"}`}
              >
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-500 space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={String(i)}
                        size={18}
                        fill={i < t.rating ? "currentColor" : "none"}
                        strokeWidth={i < t.rating ? 0 : 2}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 text-lg md:text-xl font-(family-name:--font-lora) italic mb-8 relative z-10 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center border-t border-gray-100 pt-6">
                  <Image
                    src={t.avatarUrl}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="rounded-full mr-4 object-cover border-2 border-gray-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-500 font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>
                <Quote className="absolute top-8 right-8 text-gray-100 w-24 h-24 -z-10 transform rotate-180" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
