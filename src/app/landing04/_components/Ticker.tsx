import type React from "react";
import { TICKER_ITEMS } from "./constants";

const Ticker: React.FC = () => {
  return (
    <div className="py-6 bg-[#1E3A8A] overflow-hidden border-t border-blue-900">
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-scroll whitespace-nowrap flex space-x-12">
          {[
            ...TICKER_ITEMS,
            ...TICKER_ITEMS,
            ...TICKER_ITEMS,
            ...TICKER_ITEMS,
          ].map((item, idx) => (
            <div
              key={`${item.text}-${idx}`}
              className="inline-flex items-center space-x-2 text-blue-100 opacity-80"
            >
              <span>{item.icon}</span>
              <span className="text-sm font-semibold uppercase tracking-wider">
                {item.text}
              </span>
              <span className="mx-4 text-blue-500">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticker;
