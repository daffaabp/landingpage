import { Award, BookCheck, Mic, Quote, Users } from "lucide-react";
import Image from "next/image";
import type React from "react";

const Teachers: React.FC = () => {
  return (
    <section id="narasumber" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-(family-name:--font-lora) font-bold text-center text-gray-900 mb-12">
          Dihadiri oleh sang Ahli Prompt Engineer
        </h2>

        {/* Expert Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden">
          {/* Background Texture */}
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-5 z-0"></div>

          {/* Left Column: Image & Identity */}
          <div className="w-full md:w-1/3 flex flex-col items-center relative z-10 shrink-0">
            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-lg mb-6 relative bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                alt="M. Arianto"
                fill
                className="object-cover object-top"
              />
            </div>
            <h3 className="text-2xl font-(family-name:--font-lora) font-bold text-gray-900 mb-2">
              M. Arianto
            </h3>
            <span className="bg-blue-100 text-[#1E3A8A] px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
              AI Engineer and Researcher
            </span>
          </div>

          {/* Right Column: Quote */}
          <div className="w-full md:w-2/3 relative z-10">
            <div className="hidden md:block mb-4">
              <Quote className="text-gray-300 fill-gray-100" size={64} />
            </div>
            <p className="text-gray-700 text-lg md:text-xl leading-loose font-(family-name:--font-lora) italic relative">
              <span className="md:hidden inline-block mr-2">
                <Quote size={20} className="inline text-gray-400" />
              </span>
              "Dengan pengalaman{" "}
              <strong className="text-gray-900">10+ tahun</strong> dan{" "}
              <strong className="text-gray-900">195+ proyek AI</strong>, saya
              siap membahas tips{" "}
              <strong className="text-gray-900">menguasai AI</strong>,{" "}
              <strong className="text-gray-900">teknik penulisan</strong>, dan{" "}
              <strong className="text-gray-900">research methodology</strong>{" "}
              sebagai <strong className="text-gray-900">AI Engineer</strong>,{" "}
              <strong className="text-gray-900">Researcher</strong>, dan{" "}
              <strong className="text-gray-900">Mentor profesional</strong>."
            </p>
          </div>
        </div>

        {/* Stats Strip - Social Proof */}
        <div className="mt-20 bg-[#1E3A8A] rounded-3xl shadow-2xl p-10 md:p-12 relative overflow-hidden">
          {/* Background decorative pattern */}
          <div className="absolute top-0 right-0 p-20 opacity-5">
            <svg
              width="300"
              height="300"
              fill="white"
              viewBox="0 0 100 100"
              role="presentation"
            >
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/20 relative z-10 text-white">
            {[
              { val: "100+", label: "Jurnal Terpublikasi", icon: BookCheck },
              { val: "15 Ribu+", label: "Alumni Webinar", icon: Users },
              { val: "4.9/5", label: "Rating Kepuasan", icon: Award },
              { val: "Live", label: "Sesi Interaktif", icon: Mic },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center flex flex-col items-center justify-center"
              >
                <stat.icon className="w-8 h-8 text-[#D97706] mb-3 opacity-90" />
                <h4 className="text-4xl font-(family-name:--font-lora) font-bold mb-1">
                  {stat.val}
                </h4>
                <p className="text-blue-200 font-medium text-sm uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
