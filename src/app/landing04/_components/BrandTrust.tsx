import type React from "react";

const BrandTrust: React.FC = () => {
  return (
    <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <p className="text-gray-500 font-semibold uppercase tracking-widest text-xs">
          Dipercaya oleh Akademisi dari Institusi Ternama
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 items-center">
        {/* Placeholder Academic Logos */}
        <div className="text-xl md:text-2xl font-(family-name:--font-lora) font-bold text-gray-400">
          Universitas Indonesia
        </div>
        <div className="text-xl md:text-2xl font-(family-name:--font-lora) font-bold text-gray-400">
          ITB
        </div>
        <div className="text-xl md:text-2xl font-(family-name:--font-lora) font-bold text-gray-400">
          UGM
        </div>
        <div className="text-xl md:text-2xl font-(family-name:--font-lora) font-bold text-gray-400">
          BRIN
        </div>
        <div className="text-xl md:text-2xl font-(family-name:--font-lora) font-bold text-gray-400">
          Kemdikbudristek
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;
