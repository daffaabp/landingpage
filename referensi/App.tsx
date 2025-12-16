import React, { useState } from 'react';
import { Menu, X, CheckCircle2, Star, ShieldCheck, Users } from 'lucide-react';
import Button from './components/Button';
import ServiceCard from './components/ServiceCard';
import FeatureBlock from './components/FeatureBlock';
import TestimonialCard from './components/TestimonialCard';
import RegistrationForm from './components/RegistrationForm';
import { SERVICES, FEATURES, TESTIMONIALS } from './constants';
import { Sparkle, Squiggle, DoodleUnderline, BlobShape1 } from './components/Decorations';

function App() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    const formElement = document.getElementById('register');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans overflow-x-hidden text-gray-900">
      
      {/* Navigation (Simplified for High Conversion - No distractiing links) */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center text-white font-bold text-2xl font-heading">AI</div>
               <span className="text-xl font-bold font-heading text-gray-900 tracking-tight">Akademik<span className="text-brand-purple">Pro</span></span>
            </div>
            
            {/* CTA Only in Nav */}
            <div>
              <Button variant="secondary" size="md" onClick={scrollToForm}>Daftar Webinar Gratis</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 text-brand-orange animate-pulse opacity-60">
            <Sparkle className="w-12 h-12" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Center Content - Focused Copy */}
            <div className="w-full lg:w-3/5 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-lightPurple/50 rounded-full text-brand-purple font-semibold text-sm mb-2 border border-brand-purple/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-purple"></span>
                </span>
                Webinar Eksklusif Akademisi
              </div>

              {/* NEW HOOK: Pain Point Focus */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight">
                  Lelah Naskah Ditolak & <br />
                  <span className="text-brand-purple relative inline-block">
                      Sulit Lolos Plagiasi?
                      {/* Squiggle positioned absolutely relative to this span */}
                      <Squiggle className="absolute -bottom-2 left-0 w-full text-brand-orange h-3" />
                  </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Akhiri siklus revisi yang melelahkan. Pelajari cara etis menggunakan <strong>Artificial Intelligence</strong> untuk menghasilkan karya ilmiah bereputasi (Scopus/WoS) 10x lebih cepat dan orisinal.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <Button size="lg" className="w-full sm:w-auto text-lg px-10 shadow-xl shadow-brand-purple/20" onClick={scrollToForm}>
                    Amankan Slot Gratis Saya
                 </Button>
                 <div className="flex items-center gap-4 text-sm text-gray-500 px-2">
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                    </div>
                    <span>Bergabung dengan 15,000+ Peneliti</span>
                 </div>
              </div>
              
              {/* Trust Badges */}
              <div className="pt-8 border-t border-gray-100 mt-8">
                  <p className="text-sm text-gray-400 font-medium mb-4 uppercase tracking-wider">Metode yang aman untuk:</p>
                  <div className="flex flex-wrap gap-6 opacity-70 grayscale hover:grayscale-0 transition-all">
                      <div className="font-heading font-bold text-gray-400 text-xl flex items-center gap-2"><ShieldCheck size={20}/> Scopus</div>
                      <div className="font-heading font-bold text-gray-400 text-xl flex items-center gap-2"><ShieldCheck size={20}/> SINTA</div>
                      <div className="font-heading font-bold text-gray-400 text-xl flex items-center gap-2"><ShieldCheck size={20}/> WoS</div>
                  </div>
              </div>
            </div>

            {/* Right Side - Visual Representation */}
            <div className="w-full lg:w-2/5 relative hidden md:block">
                <div className="absolute inset-0 bg-brand-lightPurple rounded-[3rem] transform rotate-6 scale-105 z-0"></div>
                <div className="relative z-10 bg-white p-2 rounded-[2.5rem] shadow-2xl border-4 border-white/50">
                    <img 
                        src="https://picsum.photos/id/445/500/600" 
                        alt="Academic Success" 
                        className="w-full h-auto object-cover rounded-[2rem]"
                    />
                    {/* Floating Badge */}
                    <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-50 animate-bounce duration-[4000ms]">
                        <div className="bg-green-100 p-3 rounded-full text-green-600">
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500">Status Submission</p>
                            <p className="font-bold text-gray-900">Accepted</p>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section (Renamed to Learning Outcomes) */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                Bukan Sekadar Teori. <br/> Ini Adalah <span className="text-brand-purple">Blueprint Publikasi.</span>
             </h2>
             <p className="mt-4 text-gray-600 text-lg">
                Kami membongkar strategi yang sering disembunyikan untuk menghasilkan karya ilmiah berkualitas tinggi dalam waktu singkat.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map(service => (
                <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section (Pain Points & Solution) */}
      <section className="py-20 bg-brand-bgAlt overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                <span className="text-brand-darkOrange font-bold tracking-wider uppercase text-sm bg-brand-orange/20 px-4 py-1.5 rounded-full">Kenyataan di Lapangan</span>
                <h2 className="mt-6 text-3xl md:text-4xl font-heading font-bold text-gray-900">
                    Mengapa Banyak Peneliti <span className="text-brand-darkOrange">Gagal Publikasi?</span>
                </h2>
             </div>
             
             <div className="space-y-0">
                {FEATURES.map(feature => (
                    <FeatureBlock key={feature.id} feature={feature} />
                ))}
             </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-gray-50 relative border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <div className="flex justify-center gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="fill-brand-orange text-brand-orange" size={24} />)}
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                 Dipercaya oleh Rekan Sejawat Anda
              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                 Jangan hanya percaya kata-kata kami. Lihat apa kata dosen dan mahasiswa yang telah menerapkan metode ini.
              </p>
           </div>

           <div 
             className="flex flex-wrap md:flex-nowrap justify-center gap-6"
           >
              {TESTIMONIALS.map(testimonial => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
           </div>

           <div className="mt-16 pt-10 border-t border-gray-200 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
               {/* Dummy Logos for Authority */}
               <span className="text-2xl font-bold font-heading">UNIVERSITAS A</span>
               <span className="text-2xl font-bold font-heading">INSTITUT B</span>
               <span className="text-2xl font-bold font-heading">POLITEKNIK C</span>
               <span className="text-2xl font-bold font-heading">AKADEMI D</span>
           </div>
        </div>
      </section>

      {/* Bottom CTA / Registration Section */}
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
                            <CheckCircle2 className="flex-shrink-0 text-brand-orange" /> 
                            <span>Akses Materi Prompting Eksklusif</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="flex-shrink-0 text-brand-orange" /> 
                            <span>Sertifikat Kehadiran Webinar</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="flex-shrink-0 text-brand-orange" /> 
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

      {/* Footer (Minimalist) */}
      <footer className="bg-gray-50 py-12 border-t border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-lg font-heading">AI</div>
                <span className="text-xl font-bold font-heading text-gray-900">Akademik<span className="text-brand-purple">Pro</span></span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
                Membantu dosen dan peneliti Indonesia mempublikasikan karya terbaik mereka.
            </p>
            <div className="text-sm text-gray-400">
                <p>&copy; 2024 AI Akademik Pro. All Rights Reserved.</p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="#" className="hover:text-gray-600">Kebijakan Privasi</a>
                    <a href="#" className="hover:text-gray-600">Syarat & Ketentuan</a>
                </div>
            </div>
         </div>
      </footer>
    </div>
  );
}

export default App;