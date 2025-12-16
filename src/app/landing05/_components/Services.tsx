import type React from "react";
import { SERVICES } from "../constants";
import ServiceCard from "./ServiceCard";

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Bukan Sekadar Teori. <br /> Ini Adalah{" "}
            <span className="text-brand-purple">Blueprint Publikasi.</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Kami membongkar strategi yang sering disembunyikan untuk
            menghasilkan karya ilmiah berkualitas tinggi dalam waktu singkat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
