import { BookOpen } from "lucide-react";
import type React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 py-6 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 text-slate-900">
          <div className="bg-[#2563EB] p-2 rounded-lg">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <div className="leading-tight font-bold tracking-wide text-lg">
            Akademia<span className="text-[#2563EB] font-light">.AI</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
