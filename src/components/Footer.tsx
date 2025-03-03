"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/projects/fond_footer.png" 
          alt="Footer background" 
          fill 
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 block">
              RakTiak<span className="text-[#40E0D0]">Studio</span>
            </Link>
            <p className="text-[#F5F5F5]/70 mb-6 max-w-md">
              Création de sites web et applications sur mesure pour donner vie à vos projets digitaux avec élégance et performance.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F5F5]/70 hover:text-[#40E0D0] transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F5F5]/70 hover:text-[#40E0D0] transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#F5F5F5]/70 hover:text-[#40E0D0] transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="mailto:contact@raktiak-studio.com" className="text-[#F5F5F5]/70 hover:text-[#40E0D0] transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#40E0D0]">Contact</h3>
            <address className="not-italic">
              <p className="text-[#F5F5F5]/70 mb-2">Paris, France</p>
              <p className="text-[#F5F5F5]/70 mb-2">contact@raktiak-studio.com</p>
              <p className="text-[#F5F5F5]/70">+33 6 12 34 56 78</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-[#F5F5F5]/10 mt-12 pt-8 text-center text-[#F5F5F5]/50">
          <p>&copy; {new Date().getFullYear()} RakTiak Studio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 