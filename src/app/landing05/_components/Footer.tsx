import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold text-lg font-heading">
            AI
          </div>
          <span className="text-xl font-bold font-heading text-gray-900">
            Akademik<span className="text-brand-purple">Pro</span>
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Membantu dosen dan peneliti Indonesia mempublikasikan karya terbaik
          mereka.
        </p>
        <div className="text-sm text-gray-400">
          <p>&copy; 2024 AI Akademik Pro. All Rights Reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="/" className="hover:text-gray-600">
              Kebijakan Privasi
            </a>
            <a href="/" className="hover:text-gray-600">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
