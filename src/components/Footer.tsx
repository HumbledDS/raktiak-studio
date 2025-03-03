import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 px-6 glass-dark border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RakTiak Studio</h3>
            <p className="text-[#F5F5F5]/70 mb-4">
              Développement web sur mesure pour donner vie à vos projets digitaux.
            </p>
            <div className="text-[#F5F5F5]/70">
              <div>Paris, France</div>
              <div>babacar.work2024@gmail.com</div>
              <div>06 64 12 73 08</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#F5F5F5]/70 hover:text-[#40E0D0]">Accueil</Link></li>
              <li><Link href="/projects" className="text-[#F5F5F5]/70 hover:text-[#40E0D0]">Projets</Link></li>
              <li><Link href="/services" className="text-[#F5F5F5]/70 hover:text-[#40E0D0]">Services</Link></li>
              <li><Link href="/about" className="text-[#F5F5F5]/70 hover:text-[#40E0D0]">À propos</Link></li>
              <li><Link href="/contact" className="text-[#F5F5F5]/70 hover:text-[#40E0D0]">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-moi</h3>
            <div className="flex gap-4">
              <a href="#" className="text-[#F5F5F5]/70 hover:text-[#40E0D0] text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-[#F5F5F5]/70 hover:text-[#40E0D0] text-2xl">
                <FaGithub />
              </a>
              <a href="#" className="text-[#F5F5F5]/70 hover:text-[#40E0D0] text-2xl">
                <FaTwitter />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-[#F5F5F5]/50 text-sm">
                © {new Date().getFullYear()} RakTiak Studio. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 