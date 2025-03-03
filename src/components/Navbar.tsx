"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "glass-dark py-2" : "bg-transparent py-4"
    } border-b border-[#8A2BE2]/30`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#F5F5F5] hover:text-[#40E0D0] transition-colors">
          RakTiak Studio
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <div className="flex items-center gap-8">
            <Link href="/projects" className="hover:text-[#40E0D0] transition-colors">Projets</Link>
            <Link href="/services" className="hover:text-[#40E0D0] transition-colors">Services</Link>
            <Link href="/about" className="hover:text-[#40E0D0] transition-colors">À propos</Link>
            <Link href="/contact" className="hover:text-[#40E0D0] transition-colors">Contact</Link>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-[#F5F5F5] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-dark absolute top-full left-0 w-full py-4 px-6 border-b border-[#8A2BE2]/30 animate-fade-down">
          <div className="flex flex-col space-y-4">
            {[
              { href: "/projects", label: "Projets" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "À propos" },
              { href: "/contact", label: "Contact" }
            ].map((link, index) => (
              <Link 
                key={index}
                href={link.href} 
                className="hover:text-[#40E0D0] transition-colors py-2 px-3 rounded-lg hover:bg-[#8A2BE2]/10"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
} 