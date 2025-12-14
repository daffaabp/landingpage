export default function WhyNow() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#FAF6F3] text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="font-display text-5xl lg:text-6xl font-bold text-gray-900 mb-10">
          Why <span className="text-[#C68C32]">Now?</span>
        </h2>
        <div className="space-y-6 text-gray-700 text-base leading-relaxed font-light max-w-2xl mx-auto">
          <p>
            The investment landscape is shifting — fast. Between high interest
            rates, inflation, and volatility, many investors are unknowingly
            taking on more risk for less reward.
          </p>
          <p>
            This webinar will show you how to take control of your financial
            future before those risks impact your income and peace of mind.
          </p>
          <p className="font-medium text-gray-900 pt-2">
            Don't wait for the next market cycle to decide your future. Learn
            how to protect your wealth now — with structures designed for calm,
            consistent returns.
          </p>
        </div>
        <div className="mt-10">
          <button
            type="button"
            className="bg-[#C68C32] hover:bg-[#B07925] text-white font-bold py-3.5 px-10 rounded-md shadow-lg transition-transform hover:-translate-y-0.5 text-sm"
          >
            Save My Seat
          </button>
        </div>
      </div>
    </section>
  );
}
