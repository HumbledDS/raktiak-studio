"use client";

import { useState, useEffect, useRef } from "react";

interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Dupliquer les témoignages pour créer un effet de boucle infinie
  const allTestimonials = [...testimonials, ...testimonials];

  // Changer automatiquement le témoignage actif toutes les 5 secondes
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  return (
    <div 
      className="overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      <div 
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ 
          transform: `translateX(-${activeIndex * (100 / allTestimonials.length)}%)`,
          width: `${allTestimonials.length * 100}%`
        }}
      >
        {allTestimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="px-4"
            style={{ width: `${100 / allTestimonials.length}%` }}
          >
            <div className="glass rounded-xl p-6 border border-[#8A2BE2]/20 h-full">
              <p className="text-[#F5F5F5]/70 italic mb-3">&quot;{testimonial.text}&quot;</p>
              <div>
                <p className="font-semibold text-[#40E0D0]">{testimonial.author}</p>
                <p className="text-sm text-[#F5F5F5]/50">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicateurs */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? "bg-[#40E0D0] w-6" : "bg-[#8A2BE2]/30"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Voir témoignage ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 