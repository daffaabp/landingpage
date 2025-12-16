import { BookOpen, Instagram, Linkedin, Twitter } from "lucide-react";
import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6 lg:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#2563EB] p-1.5 rounded-lg">
              <BookOpen className="text-white w-6 h-6" />
            </div>
            <div className="leading-tight font-bold tracking-wide text-lg">
              Akademia<span className="text-[#2563EB] font-light">.AI</span>
            </div>
          </div>
          <p className="text-slate-400 text-sm max-w-xs mb-6">
            Platform edukasi terdepan untuk integrasi teknologi AI dalam
            penelitian akademik yang etis dan produktif.
          </p>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="font-bold text-lg mb-4">Informasi</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a className="hover:text-[#2563EB] transition-colors" href="/">
                Tentang Kami
              </a>
            </li>
            <li>
              <a className="hover:text-[#2563EB] transition-colors" href="/">
                Kebijakan Privasi
              </a>
            </li>
            <li>
              <a className="hover:text-[#2563EB] transition-colors" href="/">
                Syarat & Ketentuan
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Column */}
        <div>
          <h4 className="font-bold text-lg mb-4">Komunitas</h4>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2563EB] transition-colors group"
              href="/"
            >
              <Instagram className="text-white w-4 h-4" />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2563EB] transition-colors group"
              href="/"
            >
              <Linkedin className="text-white w-4 h-4" />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2563EB] transition-colors group"
              href="/"
            >
              <Twitter className="text-white w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        © 2025 Akademia AI Indonesia. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
