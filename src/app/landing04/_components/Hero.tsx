import { AlertCircle, ArrowRight } from "lucide-react";
import type React from "react";
import Button from "./Button";
import { HERO_FEATURES } from "./constants";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F8FAFC] pt-20 pb-24 overflow-hidden">
      {/* Abstract Background - slightly darker for seriousness */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Agitation Badge */}
        <div className="inline-flex items-center bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-8 animate-pulse">
          <AlertCircle size={16} className="text-red-600 mr-2" />
          <span className="text-sm font-bold text-red-700 uppercase tracking-wide">
            Masalah Utama Akademisi Saat Ini
          </span>
        </div>

        {/* The Hook: Pain Point First */}
        <h1 className="text-3xl md:text-5xl font-(family-name:--font-lora) font-bold text-gray-900 mb-6 leading-tight">
          Apakah Naskah Anda Masih{" "}
          <span className="text-red-600 underline decoration-red-200 decoration-4">
            Stuck di Bab 1
          </span>{" "}
          Sementara Deadline Jurnal Semakin Dekat?
        </h1>

        {/* Empathy & Logic */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
          Jujur saja, mencari referensi yang benar-benar relevan itu melelahkan.
          Belum lagi tuntutan mencari <i>Novelty</i> (kebaruan) yang seringkali
          membuat kita frustrasi dan berakhir dengan 'Writer's Block'
          berkepanjangan.
        </p>

        {/* The Solution Promise */}
        <p className="text-base md:text-lg text-[#1E3A8A] font-semibold mb-10 bg-blue-50 py-3 px-6 rounded-xl inline-block border border-blue-100">
          Tapis solusinya bukan bekerja lebih keras, tapi lebih cerdas. <br />
          Pelajari cara <span className="underline">etis</span> memanfaatkan AI
          untuk memangkas waktu riset hingga 50%.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Button
            variant="primary"
            className="shadow-2xl shadow-blue-900/30 px-12 py-5 text-lg w-full sm:w-auto bg-[#D97706] hover:bg-amber-600 border-none transition-transform hover:scale-105"
          >
            Ya, Ajarkan Saya Caranya <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          *Webinar Gratis. Kuota Terbatas untuk menjaga kualitas diskusi.
        </p>
      </div>

      {/* Feature Cards - Problem Solvers (Modified context to be solutions to the pain) */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HERO_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="relative p-6 rounded-xl shadow-md bg-white border-l-4 border-[#1E3A8A] hover:shadow-lg transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-blue-50 text-[#1E3A8A] rounded-lg mr-4">
                  <feature.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-(family-name:--font-lora) font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
