import type React from "react";

const CtaSection: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-brand-dark relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl lg:text-6xl font-bold text-white mb-6">
          Don't Leave Your Financial Future to Chance
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Register now and take the first step toward predictable, hands-off
          income that grows — even when markets don't.
        </p>
        <button
          type="button"
          className="bg-primary hover:bg-yellow-600 text-white text-lg font-bold py-4 px-12 rounded-lg shadow-xl transition-all hover:scale-105 cursor-pointer"
        >
          Sign Me Up
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
