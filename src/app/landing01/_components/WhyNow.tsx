import type React from "react";

const WhyNow: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-background-light dark:bg-background-dark text-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-[-50%] translate-y-[-50%]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-[20%] translate-y-[20%]"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Why <span className="text-primary">Now?</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          The investment landscape is shifting — fast. Between high interest
          rates, inflation, and volatility, many investors are unknowingly
          taking on more risk for less reward.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          This webinar will show you how to take control of your financial
          future before those risks impact your income and peace of mind.
        </p>
        <p className="text-lg font-medium text-gray-900 dark:text-white mb-10">
          Don't wait for the next market cycle to decide your future. Learn how
          to protect your wealth now — with structures designed for calm,
          consistent returns.
        </p>
        <button
          type="button"
          className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-lg shadow-lg transition-transform hover:-translate-y-1 cursor-pointer"
        >
          Save My Seat
        </button>
      </div>
    </section>
  );
};

export default WhyNow;
