"use client";

import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaPalette, FaTools, FaBook, FaGamepad, FaMusic, FaPlane, FaCamera, FaRunning } from "react-icons/fa";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Section Introduction */}
      <ScrollReveal>
        <section className="py-12 px-6">
          <div className="container mx-auto">
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
        </section>
      </ScrollReveal>
      
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
      
      {/* Section Formation */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Formation</h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Ligne verticale */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8A2BE2] to-[#40E0D0] transform md:-translate-x-1/2"></div>
            
            {/* Formations */}
            <div className="space-y-24">
              {[
                {
                  period: "2023-2024",
                  title: "DU Big Data, Data Science et Analyse des risques",
                  school: "Université de Montpellier",
                  details: "Mention Très Bien"
                },
                {
                  period: "2021-2023",
                  title: "Master 2 Statistiques Appliquées et Analyse Décisionnelle",
                  school: "Université de Caen",
                  details: "Mention Bien"
                },
                {
                  period: "2019-2021",
                  title: "Double Licence",
                  school: "Université de Caen",
                  details: "Licence 3 Mathématiques Appliquées et Licence 3 Informatique"
                }
              ].map((education, index) => (
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
                      <div className="text-[#40E0D0] font-semibold mb-1">{education.period}</div>
                      <h3 className="text-xl font-bold mb-2">{education.title}</h3>
                      <div className="text-[#F5F5F5]/80 mb-3">{education.school}</div>
                      <div className="text-[#F5F5F5]/70">{education.details}</div>
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
      
      {/* Section Compétences */}
      <section className="py-12 px-6 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Compétences techniques</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                icon: <FaCode className="text-4xl text-[#40E0D0] mb-4" />,
                title: "Frontend",
                skills: ["React/Next.js", "HTML/CSS", "JavaScript/TypeScript", "Tailwind CSS"]
              },
              {
                icon: <FaServer className="text-4xl text-[#40E0D0] mb-4" />,
                title: "Backend",
                skills: ["Node.js", "Express", "Python", "API REST/GraphQL"]
              },
              {
                icon: <FaDatabase className="text-4xl text-[#40E0D0] mb-4" />,
                title: "Bases de données",
                skills: ["MySQL", "PostgreSQL", "Firebase", "Redis"]
              },
              {
                icon: <FaPalette className="text-4xl text-[#40E0D0] mb-4" />,
                title: "Design",
                skills: ["Figma", "Photoshop", "UI/UX", "Responsive Design"]
              },
              {
                icon: <FaTools className="text-4xl text-[#40E0D0] mb-4" />,
                title: "Outils",
                skills: ["Git", "Docker", "AWS", "CI/CD"]
              }
            ].map((category, index) => (
              <div key={index} className="glass rounded-xl p-6 border border-[#8A2BE2]/20 text-center">
                {category.icon}
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-[#F5F5F5]/70">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section Centres d'intérêt */}
      <ScrollReveal>
        <section className="py-24 px-6 bg-gradient-to-b from-black/30 to-transparent">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Centres d'intérêt</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <FaBook className="text-4xl" />,
                  title: "Lecture",
                  description: "Passionné de science-fiction et d'ouvrages techniques"
                },
                {
                  icon: <FaGamepad className="text-4xl" />,
                  title: "Gaming",
                  description: "Amateur de jeux de stratégie et de RPG"
                },
                {
                  icon: <FaMusic className="text-4xl" />,
                  title: "Musique",
                  description: "Production musicale et découverte de nouveaux genres"
                },
                {
                  icon: <FaPlane className="text-4xl" />,
                  title: "Voyage",
                  description: "Exploration de nouvelles cultures et destinations"
                },
                {
                  icon: <FaCamera className="text-4xl" />,
                  title: "Photographie",
                  description: "Capture de moments et paysages urbains"
                },
                {
                  icon: <FaRunning className="text-4xl" />,
                  title: "Sport",
                  description: "Pratique de la musculation et du running"
                }
              ].map((interest, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-8 border border-[#8A2BE2]/20 hover:border-[#40E0D0]/50 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-[#8A2BE2]/20 to-[#40E0D0]/20 group-hover:from-[#8A2BE2]/30 group-hover:to-[#40E0D0]/30 transition-all">
                      <span className="text-[#40E0D0] group-hover:scale-110 transition-transform duration-300 inline-block">
                        {interest.icon}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#40E0D0] transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-[#F5F5F5]/70 text-base">
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
      
      {/* Section Valeurs */}
      <section className="py-12 px-6 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Mes valeurs professionnelles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualité et excellence",
                description: "Je m'engage à livrer un travail de la plus haute qualité, en portant une attention particulière aux détails."
              },
              {
                title: "Communication transparente",
                description: "Je privilégie une communication claire et honnête tout au long du processus de développement."
              },
              {
                title: "Innovation constante",
                description: "Je reste à l'affût des dernières technologies et tendances pour proposer des solutions innovantes."
              }
            ].map((value, index) => (
              <div key={index} className="glass rounded-xl p-6 border border-[#8A2BE2]/20">
                <h3 className="text-xl font-bold mb-4 text-[#40E0D0]">{value.title}</h3>
                <p className="text-[#F5F5F5]/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-16 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#0A0A0A] z-0"></div>
          <motion.div 
            className="container mx-auto relative z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à collaborer ensemble?</h2>
            <p className="text-xl text-[#F5F5F5]/80 mb-8 max-w-2xl mx-auto">
              Si mon profil correspond à vos besoins, n'hésitez pas à me contacter pour discuter de votre projet.
            </p>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-[#8A2BE2] hover:bg-[#8A2BE2]/80 rounded-full text-white text-lg inline-block transition-all hover:shadow-[0_0_20px_rgba(138,43,226,0.6)]"
            >
              Propose-moi ton projet
            </a>
          </motion.div>
        </section>
      </ScrollReveal>
    </div>
  );
}
