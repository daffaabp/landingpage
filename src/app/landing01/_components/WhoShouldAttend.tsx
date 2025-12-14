import { Check } from "lucide-react";
import type React from "react";

const audience = [
  "Retirees protecting what they've built",
  "Professionals tired of market uncertainty",
  "Real estate investors seeking more predictability",
  "Business owners ready to create hands-off income streams",
];

const WhoShouldAttend: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F7EFE9] dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg grid lg:grid-cols-2">
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Who Should <span className="text-primary">Attend</span>
            </h2>
            <ul className="space-y-5 mb-10">
              {audience.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check className="text-primary w-5 h-5 shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div>
              <button
                type="button"
                className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors inline-block cursor-pointer"
              >
                I'm In
              </button>
            </div>
          </div>

          <div className="relative h-64 lg:h-auto">
            {/* biome-ignore lint/performance/noImgElement: Standard img tag used in original design */}
            <img
              alt="Modern luxury house"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-GeL4xW8sXyd0R6NP_jqGhfIyZ1uv6wH36GxyBUoc0rSCzAJ_PX1NnSN062dSqrbVUYfedRzHKkaLAb0sQ-15sdxidf7LhSRt520TP-6iwrcCyB40V2NDkOYaFSm0PDzFNsaA0G9svasc2DgT8RISJsZ_gjWfJe_DAHwuuhut6L_pDRurKyoXGU1G3zXEOpUZNP8YH9yqqYAIMS4CF6ZI7cmgiPhuoL11Ia0aqbHNPy1xSEcOLeM-iDIo7MpCH7H7TswOODblDbc"
            />
            {/* Gradient Overlay for visual blending */}
            <div className="absolute inset-0 bg-linear-to-r from-[#F7EFE9] dark:from-gray-800 to-transparent lg:w-1/3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;
