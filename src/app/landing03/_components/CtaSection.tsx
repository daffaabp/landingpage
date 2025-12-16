import type React from "react";

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Selesaikan Tesis & Jurnal Anda Bulan Ini
        </h2>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
          Jangan biarkan "Kebuntuan Ide" menghambat karir akademik Anda.
          Dapatkan strateginya, gunakan alatnya, dan lihat hasilnya.
        </p>
        <button
          type="button"
          className="bg-[#2563EB] text-white hover:bg-blue-700 text-lg font-bold py-4 px-12 rounded-lg shadow-xl transition-all hover:scale-105 cursor-pointer"
        >
          Ya, Saya Ingin Ikut Webinar
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
