import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import type React from "react";
import type { Service } from "../types";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative bg-white rounded-3xl shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Purple Header Block */}
      <div className="bg-brand-purple text-white p-6 rounded-t-3xl relative z-10">
        <h3 className="text-xl font-heading font-bold pr-8">{service.title}</h3>
        <div className="absolute top-4 right-4 bg-brand-orange text-brand-purple p-2 rounded-full transform transition-transform group-hover:rotate-45">
          <ArrowUpRight size={20} strokeWidth={3} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="rounded-2xl overflow-hidden mb-4 relative h-48 w-full bg-gray-100">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
