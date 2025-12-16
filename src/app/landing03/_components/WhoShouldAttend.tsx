import { Check, X } from "lucide-react";
import NextImage from "next/image";
import type React from "react";

const audience = [
  "Dosen yang terbebani beban kerja administrasi & tridharma",
  "Mahasiswa S2/S3 yang stuck mencari Novelty Tesis/Disertasi",
  "Peneliti yang mengejar target publikasi jurnal internasional",
  "Akademisi yang ingin memanfaatkan AI secara etis & legal",
];

const WhoShouldAttend: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 grid lg:grid-cols-2">
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Webinar Ini Dirancang Khusus Untuk{" "}
              <span className="text-[#2563EB]">Anda</span>
            </h2>
            <p className="text-slate-600 mb-8">
              Jika Anda merasa penulisan manual terlalu lambat dan tidak
              efisien, Anda berada di tempat yang tepat.
            </p>
            <ul className="space-y-4 mb-10">
              {audience.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="text-green-600 w-3 h-3" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-100 dark:border-slate-700 pt-6">
              <p className="font-bold text-red-500 mb-4 flex items-center gap-2 text-sm">
                <X className="w-4 h-4" /> BUKAN UNTUK:
              </p>
              <p className="text-sm text-slate-500">
                Mereka yang ingin hasil instan copy-paste bebas proses
                verifikasi ilmiah. Kami mengajarkan integritas.
              </p>
            </div>
          </div>

          <div className="relative h-80 lg:h-auto bg-slate-900 flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-[#2563EB]/20 mix-blend-overlay z-10"></div>
            <NextImage
              alt="Focus Researcher"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="relative z-20 text-center p-8 bg-black/40 backdrop-blur-sm rounded-xl m-8 border border-white/20">
              <p className="text-white font-display text-2xl font-bold italic">
                "Publish or Perish"
              </p>
              <p className="text-slate-200 text-sm mt-2">
                Jangan biarkan karir akademik Anda terhambat deadline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
