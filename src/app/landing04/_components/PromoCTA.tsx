"use client";

import { ArrowRight, Lock } from "lucide-react";
import type React from "react";
import Button from "./Button";

const PromoCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-linear-to-br from-[#1E3A8A] via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: Persuasive Copy */}
        <div className="lg:w-1/2 relative z-10 text-white">
          <h2 className="text-3xl md:text-5xl font-(family-name:--font-lora) font-bold mb-6 leading-tight">
            Segera Daftar Sekarang!
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-md leading-relaxed">
            Jangan biarkan deadline menghantui Anda. Bergabunglah dengan 500+
            dosen lainnya dan mulai menulis cerdas hari ini.
          </p>
          <div className="flex items-start space-x-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Lock className="text-[#D97706]" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white">Garansi Kepuasan</h4>
              <p className="text-sm text-blue-200">
                Materi gratis, premium value. Tidak ada risiko.
              </p>
            </div>
          </div>
        </div>

        {/* Right: The Conversion Form (Visual Representation) */}
        <div className="lg:w-1/2 w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl relative z-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Formulir Pendaftaran
          </h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                htmlFor="name-input"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nama Lengkap
              </label>
              <input
                id="name-input"
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                placeholder="Contoh: Dr. Budi Santoso"
              />
            </div>
            <div>
              <label
                htmlFor="email-input"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Institusi
              </label>
              <input
                id="email-input"
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                placeholder="budi@universitas.ac.id"
              />
            </div>
            <Button
              variant="primary"
              className="w-full justify-center text-lg mt-2 shadow-orange-500/20 bg-[#D97706] hover:bg-amber-600 border-none text-white"
            >
              Daftarkan Saya Sekarang <ArrowRight size={20} className="ml-2" />
            </Button>
            <p className="text-xs text-center text-gray-500 mt-4">
              <Lock size={12} className="inline mr-1" /> Data Anda aman. Kami
              tidak akan membagikan email Anda.
            </p>
          </form>
        </div>

        {/* Background Decorations */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D97706] rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </div>
    </section>
  );
};

export default PromoCTA;
