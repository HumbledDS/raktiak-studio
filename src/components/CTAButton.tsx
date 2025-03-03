"use client";

import Link from "next/link";

interface CTAButtonProps {
  text?: string;
  href: string;
  className?: string;
}

export default function CTAButton({ 
  text = "Propose-moi ton projet", 
  href = "/contact",
  className = ""
}: CTAButtonProps) {
  return (
    <Link 
      href={href} 
      className={`px-6 py-3 bg-[#8A2BE2] hover:bg-[#8A2BE2]/80 rounded-full text-white text-center transition-all hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] ${className}`}
    >
      {text}
    </Link>
  );
} 