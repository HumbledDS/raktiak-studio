"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaPalette, FaTools, FaBook, FaGamepad, FaMusic, FaPlane, FaCamera, FaRunning } from "react-icons/fa";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import CTAButton from "@/components/CTAButton";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#0D0D16]">
      {/* Hero Section */}
      <motion.section 
        className="py-12 px-6 relative"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D16] via-[#141420] to-[#8A2BE2]/10 z-0"></div>
        <div className="absolute right-0 top-0 w-96 h-96 opacity-70">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#8A2BE2]/10 to-[#40E0D0]/10 opacity-50 blur-3xl animate-pulse-slow"></div>
            <div className="w-80 h-80 rounded-full border border-[#8A2BE2]/10 animate-spin-slower"></div>
            <div className="absolute w-64 h-64 rounded-full border border-[#40E0D0]/5 animate-spin-reverse-slower"></div>
            <div className="absolute w-48 h-48 rounded-full border border-[#8A2BE2]/10 animate-spin-slower"></div>
          </div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="w-full md:w-1/3 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-square relative rounded-xl overflow-hidden border-2 border-[#8A2BE2]/30">
                <Image 
                  src="/projects/asiantechguy2.png" 
                  alt="Babacar GUEYE" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl border-2 border-[#40E0D0]/30 -z-10"></div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-2/3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">À propos de moi</h1>
              <p className="text-xl mb-6 text-[#F5F5F5]/80">
                Bonjour, je suis <span className="text-[#40E0D0] font-semibold">Babacar</span>, développeur fullstack et Data Engineer passionné par la création d'expériences web innovantes et l'analyse de données.
              </p>
              <p className="text-[#F5F5F5]/70 mb-6">
                Basé à Paris, je combine expertise en développement web et en Cloud/Data Engineering et Marketing pour créer des solutions digitales complètes. Mon approche unique mêle design moderne, fonctionnalités robustes et analyse de données sectorielles pour des projets à forte valeur ajoutée pour votre business.
              </p>
              <p className="text-[#F5F5F5]/70">
                Avec une approche centrée sur l'utilisateur notamment avec la view Mobile et un souci constant de la qualité, je m'engage à livrer des projets qui dépassent vos attentes et qui contribuent réellement à la croissance de votre activité.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Section Parcours professionnel */}
      <section className="py-24 px-6 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Mon parcours professionnel</h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Ligne verticale */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8A2BE2] to-[#40E0D0] transform md:-translate-x-1/2"></div>
            
            {/* Expériences */}
            <div className="space-y-24">
              {[
                {
                  period: "2023-Présent",
                  title: "Freelance : Web Dev & Data Engineer",
                  company: "RakTiak Studio",
                  description: "Création de sites web et applications sur mesure, conseil en Data Engineering et solutions cloud pour divers secteurs d'activité."
                },
                {
                  period: "2022-2023",
                  title: "Cloud/Data Engineer",
                  company: "Orange Sonatel Telecom",
                  description: "Conception et implémentation de solutions Big Data, développement d'algorithmes d'analyse prédictive et mise en place de pipelines de données cloud."
                },
                {
                  period: "2021-2022",
                  title: "Data Analyst BI",
                  company: "Laboratoire de Mathématiques ORESNE",
                  description: "Analyse de données, création de tableaux de bord, reporting et KPIs, optimisation des processus décisionnels."
                },
                {
                  period: "2019-2021",
                  title: "Développeur Backend",
                  company: "Socodis",
                  description: "Développement d'applications web avec Django, gestion de bases de données, API REST et optimisation des performances."
                }
              ].map((experience, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-[#0A0A0A] border-4 border-[#8A2BE2] rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Contenu */}
                  <div className={`flex-1 ${
                    index % 2 === 0 
                      ? 'md:pr-16 pl-16 md:pl-0 text-left' 
                      : 'md:pl-16 pl-16 md:text-right'
                  }`}>
                    <div className="glass rounded-xl p-6 border border-[#8A2BE2]/20 hover:border-[#40E0D0]/50 transition-all">
                      <div className="text-[#40E0D0] font-semibold mb-1">{experience.period}</div>
                      <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                      <div className="text-[#F5F5F5]/80 mb-3">{experience.company}</div>
                      <div className="text-[#F5F5F5]/70">{experience.description}</div>
                    </div>
                  </div>
                  
                  {/* Espace pour l'autre côté */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <ScrollReveal direction="up" distance={20} duration={1000} delay={600}>
        <section className="py-40 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#0D0D16] z-0"></div>
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à collaborer ensemble ?</h2>
            <p className="text-xl text-[#F5F5F5]/80 mb-8 max-w-2xl mx-auto">
              Discutons de votre projet et voyons comment je peux vous aider à atteindre vos objectifs.
            </p>
            <CTAButton 
              text="Me contacter" 
              href="/contact" 
              className="text-lg px-8 py-4"
            />
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
