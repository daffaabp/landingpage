import { Award, Brain, FileCheck, Search } from "lucide-react";
import NextImage from "next/image";
import type React from "react";

const takeaways = [
  {
    icon: <Search className="w-6 h-6 text-[#2563EB]" />,
    title: "Instant Literature Review",
    description:
      "Cara memetakan ratusan jurnal dalam hitungan menit untuk menemukan Research Gap yang valid.",
  },
  {
    icon: <Brain className="w-6 h-6 text-[#2563EB]" />,
    title: "AI sebagai Mitra Berpikir",
    description:
      "Bukan untuk copy-paste, tapi untuk brainstorming argumen kritis dan perumusan Novelty.",
  },
  {
    icon: <FileCheck className="w-6 h-6 text-[#2563EB]" />,
    title: "Parafrase & Humanisasi",
    description:
      "Teknik menulis ulang kalimat agar lolos uji Turnitin dan terdengar natural (Human Touch).",
  },
  {
    icon: <Award className="w-6 h-6 text-[#2563EB]" />,
    title: "Strategi Publikasi",
    description:
      "Memilih jurnal target yang tepat dan menyusun Cover Letter otomatis yang memikat editor.",
  },
];

const Takeaways: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image - Visualizing Data/AI */}
        <div className="order-2 lg:order-1 relative">
          {/* <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#2563EB]/20 rounded-full blur-2xl"></div> */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <NextImage
              alt="Analisa Data Riset"
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop"
              width={2070}
              height={1380}
            />
            {/* Overlay Card - Social Proof */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 p-4 rounded-xl shadow-lg border border-slate-100 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase text-slate-500">
                  Hasil Riset
                </span>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                  +300% Produktivitas
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div
                  className="bg-[#2563EB] h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="text-xs text-slate-500 mt-2 italic">
                "Saya menyelesaikan bab pembahasan Tesis hanya dalam 3 hari
                dengan metode ini."
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2">
          <span className="text-[#2563EB] font-bold tracking-wider uppercase text-xs mb-2 block">
            Metode Kami
          </span>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Menulis Karya Ilmiah Tidak Harus{" "}
            <span className="text-[#2563EB] decoration-4 underline decoration-[#2563EB]/20">
              Menyiksa
            </span>
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Kami menggabungkan ketajaman akademis dengan kecepatan teknologi.
            Inilah yang akan Anda kuasai:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {takeaways.map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 p-5 rounded-xl border border-slate-100 hover:border-[#2563EB]/50 transition-colors"
              >
                <div className="mb-4 bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 font-display text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Takeaways;
