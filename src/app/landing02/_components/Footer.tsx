import { Building2, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-16 px-6 lg:px-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="text-[#C68C32] w-6 h-6" />
            <div className="leading-none uppercase font-bold tracking-widest text-[0.65rem]">
              Hands-Off
              <br />
              Investing
            </div>
          </div>
          <p className="text-gray-500 text-xs max-w-xs mb-6 leading-relaxed">
            Empowering investors with strategies for sustainable, hands-off
            wealth creation.
          </p>
          <a
            className="text-[#C68C32] hover:text-white transition-colors underline text-xs decoration-[#C68C32]/50 underline-offset-4"
            href="/"
          >
            Visit Hands-Off Investing
          </a>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-4 text-white">Legal</h4>
          <ul className="space-y-2 text-xs text-gray-500">
            <li>
              <a className="hover:text-[#C68C32] transition-colors" href="/">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className="hover:text-[#C68C32] transition-colors" href="/">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-[#C68C32] transition-colors" href="/">
                Disclosures
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-4 text-white">Follow Us</h4>
          <div className="flex gap-3">
            <a
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C68C32] transition-colors group"
              href="/"
            >
              <Facebook className="text-gray-400 w-[14px] h-[14px] group-hover:text-white" />
            </a>
            <a
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C68C32] transition-colors group"
              href="/"
            >
              <Instagram className="text-gray-400 w-[14px] h-[14px] group-hover:text-white" />
            </a>
            <a
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#C68C32] transition-colors group"
              href="/"
            >
              <Linkedin className="text-gray-400 w-[14px] h-[14px] group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-900 text-center text-[10px] text-gray-600 uppercase tracking-wider">
        © 2025 Hands-Off Investing. All rights reserved.
      </div>
    </footer>
  );
}
