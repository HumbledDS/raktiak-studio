"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaFilter, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  technologies: string[];
  description: string;
  features: string[];
  results: string[];
  images: string[];
  link?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

const projects: Project[] = [
  {
    id: "luxebeauty",
    title: "LuxeBeauty",
    client: "Salon de beauté",
    category: "Beauté",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    description: "Plateforme complète pour un salon de beauté haut de gamme, avec système de réservation en ligne, galerie de réalisations et profils des experts.",
    features: [
      "Calendrier de réservation interactif",
      "Paiement d'acompte sécurisé",
      "Notifications automatiques par email et SMS",
      "Galerie de réalisations filtrables",
      "Profils détaillés des experts"
    ],
    results: [
      "+45% de réservations en ligne",
      "Réduction de 70% des no-shows",
      "Augmentation de 25% du panier moyen"
    ],
    images: ["/projects/beauty-thumb.png", "/projects/beauty-thumb2.png", "/projects/beauty-thumb3.png"],
    link: "#",
    testimonial: {
      text: "Grâce à RakTiak Studio, notre salon a fait un bond dans l'ère numérique. Le système de réservation a transformé notre organisation et nos clients adorent la facilité d'utilisation.",
      author: "Sophie Martin",
      role: "Directrice, LuxeBeauty"
    }
  },
  {
    id: "freshbite",
    title: "FreshBite",
    client: "Restaurant fast-food",
    category: "Restauration",
    technologies: ["React", "Firebase", "Stripe"],
    description: "Application de commande en ligne avec système de livraison et de suivi en temps réel pour une chaîne de fast-food healthy.",
    features: [
      "Menu interactif avec personnalisation des commandes",
      "Système de paiement sécurisé",
      "Suivi de livraison en temps réel",
      "Programme de fidélité intégré",
      "Tableau de bord pour la gestion des commandes"
    ],
    results: [
      "Augmentation du panier moyen de 28%",
      "Réduction des erreurs de commande de 95%",
      "Temps de traitement des commandes réduit de 40%"
    ],
    images: ["/projects/food-thumb2.png", "/projects/food-thumb2.png", "/projects/food-thumb3.png"],
    link: "#",
    testimonial: {
      text: "L'application développée par Babacar a révolutionné notre service de livraison. Nos clients apprécient la facilité de commande et notre équipe gagne un temps précieux.",
      author: "Thomas Dubois",
      role: "Fondateur, FreshBite"
    }
  },
  {
    id: "maitreboulanger",
    title: "MaîtreBoulanger",
    client: "Boulangerie artisanale",
    category: "Restauration",
    technologies: ["WordPress", "WooCommerce", "CSS personnalisé"],
    description: "Site vitrine élégant avec système de précommande et blog de recettes pour une boulangerie artisanale primée.",
    features: [
      "Catalogue de produits avec filtres",
      "Système de précommande avec paiement en ligne",
      "Blog de recettes et conseils",
      "Intégration des réseaux sociaux",
      "Optimisation SEO locale"
    ],
    results: [
      "Clientèle élargie de 40%",
      "Meilleure organisation de la production",
      "Visibilité locale améliorée de 60%"
    ],
    images: ["/projects/food-thumb3.png", "/projects/bakery-thumb2.jpg", "/projects/bakery-thumb3.jpg"],
    link: "#",
    testimonial: {
      text: "Notre boulangerie a gagné en notoriété grâce au site développé par RakTiak Studio. Le système de précommande nous permet de mieux gérer notre production et de réduire le gaspillage.",
      author: "Jean Lefevre",
      role: "Propriétaire, MaîtreBoulanger"
    }
  },
  {
    id: "modefusion",
    title: "ModeFusion",
    client: "Boutique de vêtements",
    category: "E-commerce",
    technologies: ["Next.js", "MongoDB", "AWS"],
    description: "Boutique en ligne de vêtements avec expérience d'achat immersive et fonctionnalités avancées de personnalisation.",
    features: [
      "Visualisation 3D des produits",
      "Recommandations personnalisées basées sur l'IA",
      "Essayage virtuel",
      "Système de fidélité multi-niveaux",
      "Intégration avec les réseaux sociaux"
    ],
    results: [
      "Taux de conversion de 5.8%",
      "Réduction du taux d'abandon du panier de 35%",
      "Augmentation du temps passé sur le site de 60%"
    ],
    images: ["/projects/ecommerce-mereh.png", "/projects/ecommerce-mereh.png", "/projects/ecommerce-mereh.png"],
    link: "#",
    testimonial: {
      text: "Notre boutique en ligne a connu une croissance exceptionnelle depuis son lancement. Les fonctionnalités innovantes ont vraiment séduit nos clients et nous démarquent de la concurrence.",
      author: "Emma Blanc",
      role: "CEO, ModeFusion"
    }
  },
  {
    id: "conseilsplus",
    title: "ConseilsPlus",
    client: "Cabinet d'expertise comptable",
    category: "Services",
    technologies: ["Vue.js", "Node.js", "PostgreSQL"],
    description: "Plateforme de consultation en ligne pour experts-comptables, permettant la gestion des clients, des documents et des rendez-vous.",
    features: [
      "Système de visioconférence intégré",
      "Partage de documents sécurisé",
      "Signature électronique",
      "Tableau de bord analytique",
      "Facturation automatisée"
    ],
    results: [
      "Digitalisation complète du processus client",
      "Expansion géographique sans bureaux physiques",
      "Réduction des coûts administratifs de 30%"
    ],
    images: ["/projects/dentist-thumb1.png", "/projects/dentist-thumb2.png", "/projects/dentist-thumb3.png"],
    link: "#",
    testimonial: {
      text: "La plateforme développée par Babacar nous a permis de moderniser notre cabinet et d'offrir un service à distance de qualité. Nos clients apprécient particulièrement la simplicité d'utilisation.",
      author: "Philippe Moreau",
      role: "Associé principal, ConseilsPlus"
    }
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("tous");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Extraire toutes les catégories uniques
  const categories = ["tous", ...Array.from(new Set(projects.map(project => project.category.toLowerCase())))];

  // Filtrer les projets selon la catégorie sélectionnée
  const filteredProjects = activeFilter === "tous" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter);
  
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="py-12 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8A2BE2]/10 to-transparent z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Mes réalisations
            </h1>
            <p className="text-xl text-[#F5F5F5]/80 mb-8">
              Découvrez une sélection de projets web que j'ai réalisés pour des clients de divers secteurs d'activité.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-6 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-8">
            <FaFilter className="text-[#40E0D0] mr-3" />
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm ${
                    activeFilter === category 
                      ? "bg-[#8A2BE2] text-white" 
                      : "bg-[#1a1a1a] text-[#F5F5F5]/70 hover:bg-[#8A2BE2]/30"
                  } transition-all`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-6 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="glass rounded-xl overflow-hidden border border-[#8A2BE2]/20 hover:border-[#40E0D0]/50 transition-all cursor-pointer group"
                onClick={() => {
                  setActiveProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={project.images[0]} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-[#40E0D0]">{project.category}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[#40E0D0] mb-3">{project.client}</p>
                  <p className="text-[#F5F5F5]/70 line-clamp-3">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="text-xs bg-[#1a1a1a] text-[#F5F5F5]/70 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-[#1a1a1a] text-[#F5F5F5]/70 px-2 py-1 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setActiveProject(null)}>
          <div className="glass-dark rounded-xl border border-[#8A2BE2]/20 max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64 md:h-80">
              <Image 
                src={activeProject.images[currentImageIndex]} 
                alt={activeProject.title}
                fill
                className="object-cover"
              />
              <button 
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProject(null);
                }}
              >
                <FaTimes />
              </button>
              
              {/* Image navigation buttons */}
              {activeProject.images.length > 1 && (
                <>
                  <button 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => 
                        prev === 0 ? activeProject.images.length - 1 : prev - 1
                      );
                    }}
                  >
                    <FaChevronLeft />
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/80 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => 
                        prev === activeProject.images.length - 1 ? 0 : prev + 1
                      );
                    }}
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
              
              {/* Image indicators */}
              {activeProject.images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {activeProject.images.map((_, index) => (
                    <button 
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        currentImageIndex === index ? "bg-[#40E0D0]" : "bg-white/50"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{activeProject.title}</h2>
                  <p className="text-[#40E0D0]">{activeProject.client}</p>
                </div>
                {activeProject.link && (
                  <a 
                    href={activeProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#8A2BE2]/20 hover:bg-[#8A2BE2]/40 rounded-full transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Voir le site</span>
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-[#F5F5F5]/70">{activeProject.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fonctionnalités</h3>
                  <ul className="space-y-1">
                    {activeProject.features.map((feature, index) => (
                      <li key={index} className="text-[#F5F5F5]/70 flex items-start gap-2">
                        <span className="text-[#40E0D0]">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Résultats</h3>
                  <ul className="space-y-1">
                    {activeProject.results.map((result, index) => (
                      <li key={index} className="text-[#F5F5F5]/70 flex items-start gap-2">
                        <span className="text-[#40E0D0]">•</span> {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Technologies utilisées</h3>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-[#1a1a1a] text-[#F5F5F5]/70 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {activeProject.testimonial && (
                <div className="glass rounded-xl p-4 border border-[#8A2BE2]/20">
                  <p className="text-[#F5F5F5]/70 italic mb-3">"{activeProject.testimonial.text}"</p>
                  <div className="text-right">
                    <p className="font-semibold text-[#40E0D0]">{activeProject.testimonial.author}</p>
                    <p className="text-sm text-[#F5F5F5]/50">{activeProject.testimonial.role}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* CTA Section */}
      <section className="py-16 px-6 mt-12 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#0A0A0A] z-0"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vous avez un projet en tête ?</h2>
          <p className="text-xl text-[#F5F5F5]/80 mb-8 max-w-2xl mx-auto">
            Je serais ravi de discuter de votre projet et de voir comment je peux vous aider à le concrétiser.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-[#8A2BE2] hover:bg-[#8A2BE2]/80 rounded-full text-white text-lg inline-block transition-all hover:shadow-[0_0_20px_rgba(138,43,226,0.6)]"
          >
            Propose-moi ton projet
          </Link>
        </div>
      </section>
    </div>
  );
}
