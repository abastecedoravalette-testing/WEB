import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, X, Search, MessageCircle } from "lucide-react";

import AnnouncementBar from "./AnnouncementBar";
import { useAppContext } from "../../context/AppContext";

const linkStyles =
  "uppercase text-main font-semibold tracking-wide text-sm hover:text-red-600 transition-colors duration-200";

const Navbar = () => {
  const { showSidebar, setShowSidebar, navLinks } = useAppContext();

  return (
    <header className="sticky top-0 z-50 w-full">
      <AnnouncementBar />

      <nav className="relative border-b border-neutral-200 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          {/* MOBILE MENU */}
          <button
            onClick={() => setShowSidebar(true)}
            className="flex md:hidden"
          >
            <Menu className="size-7 text-main" />
          </button>

          {/* LEFT LINKS */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-end pr-16">
            <Link to="/" className={linkStyles}>
              Inicio
            </Link>

            <Link to="/productos" className={linkStyles}>
              Catálogo
            </Link>

            <Link to="/troceos" className={linkStyles}>
              Troceos
            </Link>
          </div>

          {/* LOGO */}
          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 top-1 md:top-2"
          >
            <img
              src="/logo-circular-sin-fondo-abastecedora-valette-2026.webp"
              alt="Abastecedora Valette"
              className="h-18 md:h-28 w-auto drop-shadow-md"
            />
          </Link>

          {/* RIGHT LINKS */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-start pl-16">
            <Link to="/sucursales" className={linkStyles}>
              Sucursales
            </Link>

            <Link to="/mayoristas" className={linkStyles}>
              Mayoristas
            </Link>

            <button className="cursor-pointer">
              <Search className="size-5 text-main hover:text-red-600 transition-colors" />
            </button>

            <a
              href="https://wa.me/5491122556038"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-red-700"
            >
              <MessageCircle className="size-4" />
              Contacto
            </a>
          </div>

          {/* MOBILE RIGHT */}
          <div className="flex items-center gap-3 md:hidden">
            <button>
              <Search className="size-6 text-main" />
            </button>

            <a
              href="https://wa.me/5491122556038"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-6 text-red-600" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
