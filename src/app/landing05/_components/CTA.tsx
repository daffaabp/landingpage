import { CheckCircle2 } from "lucide-react";
import type React from "react";
import { BlobShape1, Squiggle } from "./Decorations";
import RegistrationForm from "./RegistrationForm";

const CTA: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-brand-purple relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <BlobShape1 className="w-[800px] h-[800px] text-white absolute -top-40 -left-40" />
        <Squiggle className="text-brand-orange w-48 h-48 absolute top-10 right-10" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Text */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Siap Mengubah Cara Anda Menulis Selamanya?
            </h2>
            <ul className="space-y-4 mb-8 text-lg text-brand-lightPurple text-left mx-auto lg:mx-0 max-w-md">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="shrink-0 text-brand-orange" />
                <span>Akses Materi Prompting Eksklusif</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="shrink-0 text-brand-orange" />
                <span>Sertifikat Kehadiran Webinar</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="shrink-0 text-brand-orange" />
                <span>Q&A Langsung dengan Pakar</span>
              </li>
            </ul>

            {/* Urgency Element */}
            <div className="inline-block bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <p className="font-bold text-brand-orange animate-pulse flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                Webinar akan dimulai segera!
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
