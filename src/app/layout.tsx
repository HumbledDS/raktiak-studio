import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollToTop from "@/components/ScrollToTop";

// Définition des polices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "RakTiak Studio | Développement Web & Design",
  description: "Création de sites web et applications sur mesure pour donner vie à vos projets digitaux avec élégance et performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${robotoMono.variable}`}>
        <ScrollToTop />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
