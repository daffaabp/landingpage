import { Building2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-20 py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <Building2 className="text-[#C68C32] w-8 h-8" />
          <div className="leading-none uppercase font-bold tracking-widest text-[0.7rem]">
            Hands-Off
            <br />
            Investing
          </div>
        </div>
      </div>
    </nav>
  );
}
