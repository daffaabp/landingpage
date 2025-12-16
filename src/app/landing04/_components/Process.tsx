import type React from "react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    num: 1,
    title: "Mindset & Etika",
    desc: "Berhenti sekadar 'copy-paste'. Pahami cara menjadikan AI sebagai asisten riset yang etis, bukan penulis pengganti.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    num: 2,
    title: "Prompt Engineering",
    desc: "Pelajari struktur perintah (prompt) khusus untuk menghasilkan tinjauan pustaka dan metodologi yang akurat.",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    num: 3,
    title: "Implementasi Penulisan & Validasi",
    desc: "Teknik langsung menerapkan hasil AI ke dalam draf tulisan dan memverifikasi data agar bebas halusinasi.",
    color: "bg-orange-100 text-orange-700",
  },
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Kurikulum Berbasis Praktik"
          subtitle="Alur Pembelajaran"
          highlightWord="Praktik"
        />

        <div className="relative mt-20">
          {/* Dashed Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
            <div className="border-t-4 border-dashed border-gray-200 w-full h-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center transform transition-all hover:scale-105 ${idx === 1 ? "md:mt-12" : ""}`}
              >
                <div
                  className={`w-14 h-14 ${step.color} rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-md ring-8 ring-white -mt-16`}
                >
                  {step.num}
                </div>
                <h3 className="text-xl font-(family-name:--font-lora) font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
