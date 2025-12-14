import { Check } from "lucide-react";
import type React from "react";

const takeaways = [
  {
    title: "Active vs. Passive Income",
    description:
      "How to spot the difference between active hustle and true passive income.",
  },
  {
    title: "Inflation Protection",
    description:
      "Ways to preserve buying power against rising costs effectively.",
  },
  {
    title: "Alignment & Lifestyle",
    description:
      "How to align your investments with your time and lifestyle goals.",
  },
  {
    title: "Structure is Secret",
    description:
      "Why structure — not just strategy — is the secret to calm, predictable returns.",
  },
];

const Takeaways: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* biome-ignore lint/performance/noImgElement: Using standard img for external source */}
            <img
              alt="People discussing in a meeting"
              className="w-full h-auto object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXu7qj-Oji-iZxtxyYhpCJyDPosCqkUYEHcxEP7ZmCrtieYkPey7ZtdLqE7Qn6Hr_N35L_Bw7-KluWulGx2Dau0wLhUR7UsPRSZRHhxpTyjmxi6KtfczIQ637a9uoXoOVrueMWJCdwMPFgrWi2wyAsa2bZx40YJLkNM2QvW_kJtxcK9hHpeswK_1j4hObl0xMX4-lRDvKqW_vUCmIc9PAUoI2mKj_aMwzJJqZNLe6vwSxCFY1iWx5XD5q9G-SCY-qYUnxyLOPFWRE"
            />
          </div>
          <div className="hidden md:block absolute -bottom-10 -right-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-primary max-w-xs z-10">
            <p className="font-display font-bold text-lg mb-2 dark:text-white">
              "Truly eye-opening strategy."
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              - Recent Attendee
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Key Takeaways
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            What You'll <span className="text-primary">Walk Away</span> With
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            By the end of this session, you'll understand exactly how to pivot
            your portfolio for maximum stability.
          </p>

          <ul className="space-y-6">
            {takeaways.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <Check className="text-primary w-4 h-4" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white font-display text-lg">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <button
              type="button"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors cursor-pointer"
            >
              Reserve My Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Takeaways;
