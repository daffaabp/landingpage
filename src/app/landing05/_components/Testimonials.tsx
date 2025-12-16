import { Star } from "lucide-react";
import type React from "react";
import { TESTIMONIALS } from "../constants";
import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="fill-brand-orange text-brand-orange"
                size={24}
              />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Dipercaya oleh Rekan Sejawat Anda
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Jangan hanya percaya kata-kata kami. Lihat apa kata dosen dan
            mahasiswa yang telah menerapkan metode ini.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-center gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-gray-200 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
          {/* Dummy Logos for Authority */}
          <span className="text-2xl font-bold font-heading">UNIVERSITAS A</span>
          <span className="text-2xl font-bold font-heading">INSTITUT B</span>
          <span className="text-2xl font-bold font-heading">POLITEKNIK C</span>
          <span className="text-2xl font-bold font-heading">AKADEMI D</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
