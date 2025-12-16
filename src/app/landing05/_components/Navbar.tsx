"use client";
import type React from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("register");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center text-white font-bold text-2xl font-heading">
              AI
            </div>
            <span className="text-xl font-bold font-heading text-gray-900 tracking-tight">
              Akademik<span className="text-brand-purple">Pro</span>
            </span>
          </div>

          {/* CTA Only in Nav */}
          <div className="hidden md:block">
            <Button variant="secondary" size="md" onClick={scrollToForm}>
              Daftar Webinar Gratis
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
