import { Building2 } from "lucide-react";
import type React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 py-6 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <Building2 className="text-primary w-8 h-8" />
          <div className="leading-tight uppercase font-bold tracking-widest text-sm">
            Hands-Off
            <br />
            Investing
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
