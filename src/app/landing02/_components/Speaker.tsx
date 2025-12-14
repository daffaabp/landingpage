import Image from "next/image";

export default function Speaker() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative pl-4 pb-4">
          <div className="absolute top-6 left-0 w-[95%] h-[95%] border border-[#C68C32] rounded-4xl z-0 hidden lg:block"></div>
          <div className="aspect-4/5 rounded-4xl overflow-hidden relative z-10">
            <Image
              alt="Abby Robinson Portrait"
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMrKCuswRgTeEsCgUyHAfpnlIai44iOiJmd0btwIm6zaCDqKpmlR_orvHW9u3y3zNlzmXWoOzxY4yMIgzGSXCe7nYw1fQ--W8hRhc41nqJr51zqjfxVdmpIeV9Tdy_4aattggVY_eYJL5T3lIJsbk1rqjcEAckPMw02ZN_kkK7gDhO5sNNzyx30woJyktfi-f7SBGyK_Gh5e_B-XBp2BQb7cnbqLgJjlmvBJiSq4WMJuR1oIRXD_j_j9Dt1szWQpbeZjitZNnBnFc"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pl-8">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Abby <span className="text-[#C68C32]">Robinson</span>, CPA
          </h2>
          <div className="space-y-6 text-gray-600 mb-10 text-base leading-relaxed font-light">
            <p>
              Abby is an experienced Certified Public Accountant helping
              accredited investors diversify into real estate lending.
            </p>
            <p>
              She combines her background in tax and finance with a passion for
              investor education. Abby has guided hundreds of clients through
              the complexities of alternative investments, helping them build
              resilient portfolios that withstand market volatility.
            </p>
            <p>
              Her philosophy is simple: investments should serve your life, not
              consume it.
            </p>
          </div>
          <button
            type="button"
            className="bg-[#C68C32] hover:bg-[#B07925] text-white font-bold py-3 px-8 rounded-md shadow-md transition-colors text-sm"
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
}
