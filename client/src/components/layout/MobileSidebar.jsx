import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

import { X, MessageCircle } from "lucide-react";

const MobileSidebar = () => {
  const { showSidebar, setShowSidebar, navLinks } = useAppContext();
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
        showSidebar
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white p-6 transition-transform duration-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <img
            src="/logo-circular-sin-fondo-abastecedora-valette-2026.webp"
            alt="logo"
            className="h-16"
          />

          <button onClick={() => setShowSidebar(false)}>
            <X className="size-7 text-main" />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setShowSidebar(false)}
              className="border-b border-neutral-200 pb-3 text-lg font-semibold uppercase text-main"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="https://wa.me/5491122556038"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center justify-center gap-2 rounded-full bg-red-600 py-4 text-white font-semibold"
        >
          <MessageCircle className="size-5" />
          Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default MobileSidebar;
