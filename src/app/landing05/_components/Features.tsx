import type React from "react";
import { FEATURES } from "../constants";
import FeatureBlock from "./FeatureBlock";

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-brand-bgAlt overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-darkOrange font-bold tracking-wider uppercase text-sm bg-brand-orange/20 px-4 py-1.5 rounded-full">
            Kenyataan di Lapangan
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Mengapa Banyak Peneliti{" "}
            <span className="text-brand-darkOrange">Gagal Publikasi?</span>
          </h2>
        </div>

        <div className="space-y-0">
          {FEATURES.map((feature) => (
            <FeatureBlock key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
