import { Calendar, CheckCircle, Clock } from "lucide-react";
import NextImage from "next/image";
import type React from "react";
import RegistrationForm from "./RegistrationForm";

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen lg:min-h-[90vh] flex items-center pt-32 pb-16 px-6 lg:px-12 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      {/* Subtle Background Pattern Removed for Clean Look */}
      {/* <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 text-sm font-medium text-blue-700">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
            Webinar Nasional Akademisi 2025
          </div>

          <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
            Temukan <span className="text-[#2563EB] italic">Novelty</span> &
            Tulis Karya Ilmiah 3x Lebih Cepat{" "}
            <span className="text-[#2563EB] underline decoration-4 decoration-blue-100">
              Bebas
            </span>{" "}
            Plagiasi
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Hentikan pemborosan waktu mencari referensi manual. Pelajari cara
            etis menggunakan AI untuk menembus jurnal terakreditasi dan Scopus.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
              <span>
                Teknik Prompting untuk Gap Analysis & Literature Review
              </span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
              <span>Strategi Menghindari Deteksi AI & Menjaga Integritas</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-slate-600 border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="text-[#2563EB] w-5 h-5" />
              <span>Sabtu, 25 November 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-[#2563EB] w-5 h-5" />
              <span>09:00 - 12:00 WIB</span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white shadow-lg shadow-slate-200/50 rounded-xl p-4 max-w-md border border-slate-100">
            <div className="flex -space-x-3">
              <NextImage
                className="rounded-full border-2 border-white ring-1 ring-slate-100"
                src="https://i.pravatar.cc/100?img=33"
                alt="Peserta 1"
                width={40}
                height={40}
              />
              <NextImage
                className="rounded-full border-2 border-white ring-1 ring-slate-100"
                src="https://i.pravatar.cc/100?img=47"
                alt="Peserta 2"
                width={40}
                height={40}
              />
              <NextImage
                className="rounded-full border-2 border-white ring-1 ring-slate-100"
                src="https://i.pravatar.cc/100?img=12"
                alt="Peserta 3"
                width={40}
                height={40}
              />
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                +2k
              </div>
            </div>
            <div>
              <div className="flex text-yellow-400 text-xs mb-1">★★★★★</div>
              <p className="text-xs text-slate-600">
                Dipercaya oleh{" "}
                <span className="font-bold text-slate-900">
                  2.500+ Dosen & Peneliti
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-5 relative">
          {/* Decorative blob behind form */}
          <div className="absolute top-10 right-10 w-full h-full bg-slate-100 rounded-2xl -z-10 transform translate-x-4 translate-y-4 hidden lg:block"></div>
          <RegistrationForm />
        </div>
      </div>
    </header>
  );
};

export default Hero;
