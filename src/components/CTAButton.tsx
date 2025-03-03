"use client";

import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";

interface CTAButtonProps {
  text: string;
  mobileText?: string;
  href: string;
  className?: string;
}

export default function CTAButton({ text, mobileText, href, className = "" }: CTAButtonProps) {
  const { width } = useWindowSize();
  const isMobile = width !== undefined && width < 640;
  const displayText = isMobile && mobileText ? mobileText : text;

  return (
    <Link 
      href={href} 
      className={`px-6 py-3 bg-[#8A2BE2] hover:bg-[#8A2BE2]/80 rounded-lg transition-colors ${className}`}
    >
      {displayText}
    </Link>
  );
} 