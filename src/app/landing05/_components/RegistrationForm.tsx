"use client";
import type React from "react";
import Button from "./Button";

const RegistrationForm: React.FC = () => {
  return (
    <div
      id="register"
      className="w-full max-w-lg mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-brand-purple"></div>

      <div className="text-center mb-8">
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
          Amankan Kursi Gratis Anda
        </h3>
        <p className="text-gray-500 text-sm">
          Kuota terbatas untuk 100 pendaftar pertama hari ini.
        </p>
      </div>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            placeholder="Masukkan nama Anda"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Alamat Email Institusi
          </label>
          <input
            type="email"
            id="email"
            placeholder="nama@kampus.ac.id"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Profesi Saat Ini
          </label>
          <select
            id="role"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent transition-all outline-none bg-gray-50 focus:bg-white"
          >
            <option value="">Pilih Profesi...</option>
            <option value="lecturer">Dosen / Pengajar</option>
            <option value="student">Mahasiswa (S1/S2/S3)</option>
            <option value="researcher">Peneliti</option>
            <option value="other">Lainnya</option>
          </select>
        </div>

        <div className="pt-2">
          <Button
            variant="primary"
            size="lg"
            className="w-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Daftarkan Saya Sekarang
          </Button>
          <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Data Anda aman. Kami tidak mengirimkan spam.
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
