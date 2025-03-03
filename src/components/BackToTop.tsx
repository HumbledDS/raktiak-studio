"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          className="fixed bottom-6 right-6 p-3 bg-[#8A2BE2]/80 hover:bg-[#8A2BE2] rounded-full text-white shadow-lg backdrop-blur-sm z-50 transition-all hover:shadow-[0_0_15px_rgba(138,43,226,0.5)]"
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
} 