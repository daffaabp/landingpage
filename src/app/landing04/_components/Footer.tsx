import {
  BrainCircuit,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-white border-t border-gray-200 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-[#1E3A8A] rounded-lg flex items-center justify-center mr-2 text-white">
                <BrainCircuit fill="none" size={18} />
              </div>
              <span className="font-(family-name:--font-lora) font-bold text-xl text-[#1E3A8A]">
                Akademia<span className="text-[#D97706]">AI</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              Platform edukasi terdepan yang membantu akademisi Indonesia
              mengadopsi teknologi AI secara etis dan produktif.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1E3A8A] hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="/"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1E3A8A] hover:text-white transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="/"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1E3A8A] hover:text-white transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-gray-900 text-base mb-6">Navigasi</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="/" className="hover:text-[#1E3A8A] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#masalah"
                  className="hover:text-[#1E3A8A] transition-colors"
                >
                  Tantangan Riset
                </a>
              </li>
              <li>
                <a
                  href="#materi"
                  className="hover:text-[#1E3A8A] transition-colors"
                >
                  Kurikulum Webinar
                </a>
              </li>
              <li>
                <a
                  href="#narasumber"
                  className="hover:text-[#1E3A8A] transition-colors"
                >
                  Profil Pembicara
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gray-900 text-base mb-6">
              Hubungi Panitia
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start">
                <MapPin className="mr-3 text-[#1E3A8A] shrink-0" size={18} />
                <span>
                  Gedung Riset Terpadu, Lt. 3<br />
                  Jl. Pendidikan No. 45, Jakarta
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-[#1E3A8A] shrink-0" size={18} />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-[#1E3A8A] shrink-0" size={18} />
                <span>sekretariat@akademia.ai</span>
              </li>
            </ul>
          </div>

          {/* Trust Badge */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100">
            <h4 className="font-bold text-gray-900 text-sm mb-2">
              Didukung Oleh
            </h4>
            <p className="text-xs text-gray-500 mb-4">
              Aliansi Peneliti Indonesia & Forum Dosen Digital.
            </p>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 AkademiaAI. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/" className="hover:text-gray-900">
              Kebijakan Privasi
            </a>
            <a href="/" className="hover:text-gray-900">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
