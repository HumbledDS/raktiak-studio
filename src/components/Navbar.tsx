"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Gérer le défilement pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-[#0A0A0A]/90 backdrop-blur-md shadow-lg" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold group relative overflow-hidden"
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            RakTiak<span className="text-[#40E0D0] group-hover:text-[#8A2BE2] transition-colors duration-300">Studio</span>
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#40E0D0] to-[#8A2BE2] transition-all duration-300 group-hover:w-full"></span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "Projets", href: "/projects" },
            { name: "Services", href: "/services" },
            { name: "À propos", href: "/about" },
            { name: "Contact", href: "/contact" }
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[#F5F5F5]/80 hover:text-[#40E0D0] transition-colors ${
                pathname === link.href ? "text-[#40E0D0]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Bouton Menu Mobile */}
        <button 
          className="md:hidden text-[#F5F5F5] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-lg z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {[
            { name: "Accueil", href: "/" },
            { name: "Projets", href: "/projects" },
            { name: "Services", href: "/services" },
            { name: "À propos", href: "/about" },
            { name: "Contact", href: "/contact" }
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-2xl text-[#F5F5F5]/80 hover:text-[#40E0D0] transition-colors ${
                pathname === link.href ? "text-[#40E0D0]" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
} 