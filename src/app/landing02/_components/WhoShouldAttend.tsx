import { Check } from "lucide-react";
import Image from "next/image";

export default function WhoShouldAttend() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-[#FAF6F3]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F3EBE6] rounded-4xl overflow-hidden grid lg:grid-cols-2 shadow-sm">
          <div className="p-10 lg:p-20 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="font-display text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-8 leading-tight">
              Who Should <span className="text-[#C68C32]">Attend</span>
            </h2>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <Check className="text-[#C68C32] w-5 h-5 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium">
                  Retirees protecting what they've built
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#C68C32] w-5 h-5 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium">
                  Professionals tired of market uncertainty
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#C68C32] w-5 h-5 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium">
                  Real estate investors seeking more predictability
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#C68C32] w-5 h-5 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium">
                  Business owners ready to create hands-off income streams
                </span>
              </li>
            </ul>
            <div>
              <button
                type="button"
                className="bg-[#C68C32] hover:bg-[#B07925] text-white font-bold py-3 px-10 rounded-md shadow-sm transition-colors text-sm inline-block"
              >
                I'm In
              </button>
            </div>
          </div>
          <div className="relative h-64 lg:h-auto order-1 lg:order-2">
            <Image
              alt="Modern luxury house"
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-GeL4xW8sXyd0R6NP_jqGhfIyZ1uv6wH36GxyBUoc0rSCzAJ_PX1NnSN062dSqrbVUYfedRzHKkaLAb0sQ-15sdxidf7LhSRt520TP-6iwrcCyB40V2NDkOYaFSm0PDzFNsaA0G9svasc2DgT8RISJsZ_gjWfJe_DAHwuuhut6L_pDRurKyoXGU1G3zXEOpUZNP8YH9yqqYAIMS4CF6ZI7cmgiPhuoL11Ia0aqbHNPy1xSEcOLeM-iDIo7MpCH7H7TswOODblDbc"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#F3EBE6] to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
