"use client";

import { useState, useEffect } from "react";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Ajouter l'écouteur d'événement
    window.addEventListener("resize", handleResize);
    
    // Appeler le gestionnaire immédiatement pour mettre à jour l'état avec les dimensions initiales
    handleResize();
    
    // Nettoyer l'écouteur d'événement lors du démontage
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
} 