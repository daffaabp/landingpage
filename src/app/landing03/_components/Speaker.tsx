import { Award, Book } from "lucide-react";
import NextImage from "next/image";
import type React from "react";

const Speaker: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Image */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl relative z-10 bg-slate-200">
            <NextImage
              alt="Dr. Handoko Wirawan"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          {/* Decorative Pattern Removed */}
          {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#2563EB] rounded-full opacity-20 blur-2xl z-0"></div>
          <div className="absolute top-10 -left-6 w-full h-full border-2 border-slate-200 dark:border-slate-700 rounded-2xl z-0 hidden lg:block"></div> */}
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7">
          <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold tracking-wider mb-4 border border-slate-200">
            PEMBICARA UTAMA
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Dr. Handoko Wirawan, <span className="text-[#2563EB]">M.Sc.</span>
          </h2>
          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
              <Award className="w-4 h-4 text-[#2563EB]" />
              <span>Scopus H-Index: 12</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600">
              <Book className="w-4 h-4 text-[#2563EB]" />
              <span>Reviewer Jurnal Q1</span>
            </div>
          </div>
          <div className="prose prose-lg text-slate-600 mb-8 space-y-4 leading-relaxed">
            <p>
              Dr. Handoko adalah pakar Scientometrics dan Data Science yang
              telah membantu lebih dari 10.000 akademisi mengoptimalkan riset
              mereka menggunakan teknologi.
            </p>
            <p>
              Beliau menjembatani kesenjangan antara{" "}
              <strong>metodologi penelitian tradisional</strong> dan{" "}
              <strong>kecerdasan buatan</strong>. Materi yang dibawakan berfokus
              pada efisiensi tanpa mengorbankan etika akademik.
            </p>
            <blockquote className="border-l-4 border-[#2563EB] pl-4 italic text-slate-700 bg-slate-50 p-4 rounded-r-lg">
              "AI bukan pengganti peneliti, tapi peneliti yang menggunakan AI
              akan menggantikan mereka yang tidak."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
