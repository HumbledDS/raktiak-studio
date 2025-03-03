"use client";

import { useState, useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function Counter({ value, suffix = "", label, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTime: number;
          let animationFrame: number;
          
          const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsedTime = timestamp - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const easedProgress = 1 - Math.pow(1 - progress, 4);
            
            setCount(Math.floor(easedProgress * value));
            
            if (progress < 1) {
              animationFrame = requestAnimationFrame(animateCount);
            } else {
              setCount(value);
            }
          };
          
          animationFrame = requestAnimationFrame(animateCount);
          
          return () => {
            if (animationFrame) {
              cancelAnimationFrame(animationFrame);
            }
          };
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [value, duration]);
  
  return (
    <div ref={counterRef} className="text-center">
      <div className="flex items-center justify-center">
        <span className="text-4xl md:text-5xl font-bold text-[#40E0D0]">
          {count}
        </span>
        {suffix && (
          <span className="text-4xl md:text-5xl font-bold text-[#40E0D0] ml-1">{suffix}</span>
        )}
      </div>
      <p className="text-[#F5F5F5]/70 mt-2">{label}</p>
    </div>
  );
} 