import type React from "react";

const WhyNow: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-slate-900 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-8">
          Mengapa Anda Harus{" "}
          <span className="text-[#2563EB]">Bergabung Sekarang?</span>
        </h2>
        <p className="text-lg text-slate-100 mb-6 leading-relaxed">
          Lanskap akademik berubah drastis. Jurnal predator semakin canggih, dan
          standar rejection jurnal bereputasi semakin ketat.
        </p>
        <p className="text-lg text-slate-100 mb-8 leading-relaxed">
          Rekan sejawat Anda mungkin sudah menggunakan tools ini untuk
          mempublikasikan 2-3 paper per semester. Apakah Anda ingin tertinggal
          dalam kompetisi hibah dan jabatan fungsional?
        </p>

        <div className="inline-block p-1 rounded-xl bg-slate-800 shadow-xl border border-slate-700">
          <button
            type="button"
            className="bg-[#2563EB] hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Daftar Webinar Gratis Sekarang</span>
          </button>
        </div>

        <p className="mt-6 text-sm text-slate-100">
          *Biaya normal Rp 500.000. Gratis khusus pendaftaran hari ini.
        </p>
      </div>
    </section>
  );
};

export default WhyNow;
