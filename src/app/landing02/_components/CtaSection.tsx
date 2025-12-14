export default function CtaSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#4A1D24] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-display text-4xl lg:text-[3.5rem] font-bold text-white mb-4 leading-tight">
          Don't Leave Your Financial
          <br />
          Future to Chance
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light">
          Register now and take the first step toward predictable, hands-off
          income that grows — even when markets don't.
        </p>
        <button
          type="button"
          className="bg-[#C68C32] hover:bg-[#B07925] text-white font-bold py-3.5 px-12 rounded-md shadow-xl transition-all hover:scale-105 text-sm"
        >
          Sign Me Up
        </button>
      </div>
    </section>
  );
}
