import { Building2, Facebook, Instagram, Linkedin } from "lucide-react";
import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] text-white py-16 px-6 lg:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="text-primary w-8 h-8" />
            <div className="leading-tight uppercase font-bold tracking-widest text-sm">
              Hands-Off
              <br />
              Investing
            </div>
          </div>
          <p className="text-gray-400 text-sm max-w-xs mb-6">
            Empowering investors with strategies for sustainable, hands-off
            wealth creation.
          </p>
          <a
            className="text-primary hover:text-white transition-colors underline text-sm"
            href="/"
          >
            Visit Hands-Off Investing
          </a>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="font-bold text-lg mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a className="hover:text-primary transition-colors" href="/">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="/">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="/">
                Disclosures
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Column */}
        <div>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors group"
              href="https://facebook.com"
            >
              <Facebook className="text-white w-4 h-4" />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors group"
              href="https://example.com"
            >
              <Instagram className="text-white w-4 h-4" />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors group"
              href="https://example.com"
            >
              <Linkedin className="text-white w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        © 2025 Hands-Off Investing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
