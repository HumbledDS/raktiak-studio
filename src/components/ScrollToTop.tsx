"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Réinitialiser la position de défilement lorsque le chemin change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant ne rend rien visuellement
} 