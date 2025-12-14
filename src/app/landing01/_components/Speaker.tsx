import Image from "next/image";
import type React from "react";

const Speaker: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Image */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl relative z-10">
            <Image
              alt="Abby Robinson Portrait"
              className="object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMrKCuswRgTeEsCgUyHAfpnlIai44iOiJmd0btwIm6zaCDqKpmlR_orvHW9u3y3zNlzmXWoOzxY4yMIgzGSXCe7nYw1fQ--W8hRhc41nqJr51zqjfxVdmpIeV9Tdy_4aattggVY_eYJL5T3lIJsbk1rqjcEAckPMw02ZN_kkK7gDhO5sNNzyx30woJyktfi-f7SBGyK_Gh5e_B-XBp2BQb7cnbqLgJjlmvBJiSq4WMJuR1oIRXD_j_j9Dt1szWQpbeZjitZNnBnFc"
              fill
            />
          </div>
          {/* Decorative Border */}
          <div className="absolute top-10 -left-10 w-full h-full border-2 border-primary rounded-2xl z-0 hidden lg:block"></div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Abby <span className="text-primary">Robinson</span>, CPA
          </h2>
          <div className="prose prose-lg text-gray-600 dark:text-gray-300 mb-8 space-y-4">
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
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg shadow-md transition-colors cursor-pointer"
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
