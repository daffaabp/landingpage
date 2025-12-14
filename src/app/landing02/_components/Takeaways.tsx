import { Check } from "lucide-react";
import Image from "next/image";

export default function Takeaways() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-none lg:mr-12">
            <Image
              alt="People discussing"
              className="w-full h-auto object-cover rounded-xl shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXu7qj-Oji-iZxtxyYhpCJyDPosCqkUYEHcxEP7ZmCrtieYkPey7ZtdLqE7Qn6Hr_N35L_Bw7-KluWulGx2Dau0wLhUR7UsPRSZRHhxpTyjmxi6KtfczIQ637a9uoXoOVrueMWJCdwMPFgrWi2wyAsa2bZx40YJLkNM2QvW_kJtxcK9hHpeswK_1j4hObl0xMX4-lRDvKqW_vUCmIc9PAUoI2mKj_aMwzJJqZNLe6vwSxCFY1iWx5XD5q9G-SCY-qYUnxyLOPFWRE"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 right-0 bg-white p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-xs z-10">
            <p className="font-display font-bold text-lg mb-1">
              "Truly eye-opening strategy."
            </p>
            <p className="text-xs text-gray-500">- Recent Attendee</p>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-[#C68C32] font-bold tracking-widest uppercase text-xs mb-3 block">
            Key Takeaways
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            What You'll <span className="text-[#C68C32]">Walk Away</span> With
          </h2>
          <p className="text-gray-600 mb-10 text-lg font-light leading-relaxed">
            By the end of this session, you'll understand exactly how to pivot
            your portfolio for maximum stability.
          </p>
          <ul className="space-y-8">
            <li className="flex items-start gap-4">
              <div className="shrink-0 w-5 h-5 rounded-full bg-[#C68C32]/20 flex items-center justify-center mt-1">
                <Check
                  className="text-[#C68C32] w-[14px] h-[14px]"
                  strokeWidth={3}
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Active vs. Passive Income
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  How to spot the difference between active hustle and true
                  passive income.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 w-5 h-5 rounded-full bg-[#C68C32]/20 flex items-center justify-center mt-1">
                <Check
                  className="text-[#C68C32] w-[14px] h-[14px]"
                  strokeWidth={3}
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Inflation Protection
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  Ways to preserve buying power against rising costs
                  effectively.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 w-5 h-5 rounded-full bg-[#C68C32]/20 flex items-center justify-center mt-1">
                <Check
                  className="text-[#C68C32] w-[14px] h-[14px]"
                  strokeWidth={3}
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Alignment & Lifestyle
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  How to align your investments with your time and lifestyle
                  goals.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="shrink-0 w-5 h-5 rounded-full bg-[#C68C32]/20 flex items-center justify-center mt-1">
                <Check
                  className="text-[#C68C32] w-[14px] h-[14px]"
                  strokeWidth={3}
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">
                  Structure is Secret
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  Why structure — not just strategy — is the secret to calm,
                  predictable returns.
                </p>
              </div>
            </li>
          </ul>
          <div className="mt-10">
            <button
              type="button"
              className="bg-[#C68C32] hover:bg-[#B07925] text-white font-bold py-3 px-8 rounded-md shadow-md transition-colors text-sm"
            >
              Reserve My Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
