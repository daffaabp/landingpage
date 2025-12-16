"use client";

import type React from "react";

const RegistrationForm: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border-t-4 border-[#2563EB] ring-1 ring-slate-900/5">
      <div className="text-center mb-6">
        <h2 className="font-display text-2xl font-bold text-slate-900">
          Daftar Webinar Gratis
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Slot terbatas untuk 100 pendaftar pertama hari ini.
        </p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="sr-only" htmlFor="full-name">
            Nama Lengkap & Gelar
          </label>
          <input
            className="w-full rounded-lg border-slate-300 bg-slate-50 focus:border-[#2563EB] focus:ring-[#2563EB] py-3 px-4"
            id="full-name"
            placeholder="Nama Lengkap & Gelar *"
            type="text"
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="email">
            Email Institusi/Pribadi
          </label>
          <input
            className="w-full rounded-lg border-slate-300 bg-slate-50 focus:border-[#2563EB] focus:ring-[#2563EB] py-3 px-4"
            id="email"
            placeholder="Email Institusi/Pribadi *"
            type="email"
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="phone">
            Nomor WhatsApp
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-sm font-bold text-slate-500">
              +62
            </span>
            <input
              className="w-full rounded-lg border-slate-300 bg-slate-50 focus:border-[#2563EB] focus:ring-[#2563EB] py-3 pl-12 px-4"
              id="phone"
              placeholder="Nomor WhatsApp (Untuk Link Zoom) *"
              type="tel"
              required
            />
          </div>
        </div>

        <button
          className="w-full bg-[#2563EB] hover:bg-[#1E40AF] text-white font-bold py-4 rounded-lg transition-colors shadow-lg mt-2 cursor-pointer text-lg"
          type="submit"
        >
          Amankan Kursi Saya
        </button>

        <div className="flex items-center justify-center gap-2 mt-4 opacity-70">
          <svg
            className="w-3 h-3 text-slate-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <title>Secure</title>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
          <p className="text-xs text-slate-500 text-center leading-relaxed">
            Data Anda aman. Kami tidak mengirim SPAM.
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
