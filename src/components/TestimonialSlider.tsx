"use client";

import { useRef, useEffect, useState } from "react";

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  speed?: number; // Vitesse de défilement en secondes
}

export default function TestimonialSlider({ testimonials, speed = 60 }: TestimonialSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Dupliquer les témoignages pour créer un effet de boucle infinie
  const allTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
  useEffect(() => {
    // Détecter si l'écran est mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Vérifier au chargement
    checkIfMobile();
    
    // Ajouter un écouteur pour les changements de taille d'écran
    window.addEventListener('resize', checkIfMobile);
    
    // Ajouter une animation CSS pour le défilement continu
    if (sliderRef.current) {
      // Vitesse plus lente sur desktop, un peu plus rapide sur mobile mais toujours confortable
      sliderRef.current.style.animationDuration = `${isMobile ? speed * 0.8 : speed}s`;
    }
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [speed, isMobile]);

  return (
    <div className="overflow-hidden relative">
      <div 
        ref={sliderRef}
        className="flex animate-scroll-x"
        style={{ 
          width: `${allTestimonials.length * (isMobile ? 85 : 33.33)}%`, // Ajustement pour mobile
        }}
      >
        {allTestimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="px-4"
            style={{ width: `${100 / allTestimonials.length}%` }}
          >
            <div className="glass rounded-xl p-5 md:p-6 border border-[#8A2BE2]/20 h-full hover:border-[#40E0D0]/50 hover:shadow-[0_0_20px_rgba(64,224,208,0.3)] transition-all duration-300">
              <p className="text-[#F5F5F5]/70 italic mb-3">&ldquo;{testimonial.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-[#40E0D0] text-sm md:text-base">{testimonial.author}</p>
                <p className="text-xs md:text-sm text-[#F5F5F5]/50">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 