import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import type React from "react";
import type { Feature } from "../types";
import { BlobShape1, BlobShape2 } from "./Decorations";

interface FeatureBlockProps {
  feature: Feature;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ feature }) => {
  const isLeft = feature.layout === "left";

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-12 py-12 md:py-24 ${!isLeft ? "md:flex-row-reverse" : ""}`}
    >
      {/* Image Side */}
      <div className="w-full md:w-1/2 relative">
        <div
          className={`absolute top-0 ${isLeft ? "-left-10" : "-right-10"} w-full h-full text-brand-lightPurple z-0 opacity-60 scale-125`}
        >
          {isLeft ? <BlobShape1 /> : <BlobShape2 />}
        </div>

        <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
          <Image
            src={feature.image}
            alt={feature.title}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />

          {/* Floating UI Element Simulation */}
          <div
            className={`absolute bottom-6 ${isLeft ? "-right-6" : "-left-6"} bg-white p-4 rounded-xl shadow-lg max-w-[200px] hidden lg:block animate-bounce duration-3000`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="h-2 bg-gray-100 rounded mb-2 w-3/4"></div>
            <div className="h-2 bg-gray-100 rounded mb-2 w-1/2"></div>
            <div className="flex gap-1 mt-3">
              <div className="h-8 w-2 bg-brand-purple rounded-sm opacity-40"></div>
              <div className="h-8 w-2 bg-brand-purple rounded-sm opacity-60"></div>
              <div className="h-8 w-2 bg-brand-purple rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Side */}
      <div className="w-full md:w-1/2 space-y-6">
        <span className="inline-block px-4 py-1 bg-brand-lightPurple text-brand-purple rounded-full text-sm font-bold tracking-wide uppercase">
          {feature.tags[0]}
        </span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 leading-tight">
          {feature.title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {feature.description}
        </p>

        <ul className="space-y-3">
          {feature.tags.map((tag) => (
            <li
              key={tag}
              className="flex items-center gap-3 text-gray-700 font-medium"
            >
              <CheckCircle2 className="text-brand-orange shrink-0" size={20} />
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureBlock;
