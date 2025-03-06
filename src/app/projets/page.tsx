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
    id: "MaisonKeylore",
    title: "Maison Keylore",
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
      role: "Directrice, Maison Keylore"
    }
  },
  {
    id: "merehcation",
    title: "Merehcation E-book",
    client: "Influence Voyage",
    category: "E-commerce",
    technologies: ["Shopify", "Liquid", "DigitalProducts"],
    description: "E-book de voyage avec expérience d'achat immersive et fonctionnalités avancées de personnalisation.",
    features: [
      "Visualisation des produits",
      "Page d'accueil avec Video Background",
      "Section avec carrousel de Vlog Youtube",
      "Integration Reseaux Sociaux",
      "Page Produit avec gestion d'avis",
      "Personalisation complete avec charte visuelle",
      "Campagne de mailing de relance"

    ],
    results: [
      "Taux de conversion forte de 5.8%",
      "Taux d'abandon du panier faible de 1.2%",
      
    ],
    images: ["/projects/ecommerce-mereh.png", "/projects/ecommerce-mereh.png", "/projects/ecommerce-mereh.png"],
    link: "#",
    testimonial: {
      text: "Notre boutique en ligne a connu une croissance exceptionnelle depuis son lancement. Les fonctionnalités innovantes ont vraiment séduit nos clients et nous démarquent de la concurrence.",
      author: "Meredithe",
      role: "Propriétaire, Merehcation"
    }
  },
  {
    id: "L'antalya",
    title: "L'antalya",
    client: "Restaurant",
    category: "Restauration",
    technologies: ["React", "Django", "Tailwind CSS"],
    description: "Site vitrine pour un restaurant de cuisine turque, kebab, grill et pizza.",
    features: [
      "Menu interactif avec personnalisation des commandes",
      "Intégration des réseaux sociaux",
      "Optimisation SEO locale",
      "Formation à l'utilisation"
    ],
    results: [
      "visibilité locale améliorée",
      "Formation à l'utilisation"
    ],
    images: ["/projects/food-thumb2.png", "/projects/food-thumb2.png", "/projects/food-thumb3.png"],
    link: "#",
    testimonial: {
      text: "L'application développée par Babacar a révolutionné notre service de livraison. Nos clients apprécient la facilité de commande et notre équipe gagne un temps précieux.",
      author: "Omar Senoufi",
      role: "Fondateur, L'antalya"
    }
  },
  {
    id: "Artisan Boulanger",
    title: "Artisan Boulanger",
    client: "Boulangerie artisanale",
    category: "Commerce local",
    technologies: ["Next.js", "Tailwind CSS", "Google Analytics"],
    description: "Site vitrine élégant et blog de recettes pour une boulangerie artisanale primée.",
    features: [
      "Catalogue de produits avec filtres",
      "Blog de recettes et conseils",
      "Intégration des réseaux sociaux",
      "Optimisation SEO locale"
    ],
    results: [
      "Visibilité locale améliorée",
      "Formation à l'utilisation",
      "Intégration des réseaux sociaux"
    ],
    images: ["/projects/food-thumb3.png", "/projects/bakery-thumb2.jpg", "/projects/bakery-thumb3.jpg"],
    testimonial: {
      text: "Notre boulangerie a gagné en notoriété grâce au site développé par RakTiak Studio. Le système de précommande nous permet de mieux gérer notre production et de réduire le gaspillage.",
      author: "Emmanuel Faye",
      role: "Propriétaire, Artisan Boulanger"
    }
  },
  
  
  {
    id: "Fleurs & Sens",
    title: "Fleurs  & Sens",
    client: "Fleuriste artisanal",
    category: "Commerce local",
    technologies: ["Next.js", "Tailwind CSS", "Google Analytics"],
    description: "Site vitrine élégant pour un fleuriste local, mettant en valeur leurs créations florales et services événementiels.",
    features: [
      "Galerie photo des créations",
      "Section événements spéciaux",
      "Formulaire de demande de devis pour les événements",
      "Intégration Instagram",
      "Optimisation SEO local"
    ],
    results: [
      "Visibilité locale améliorée",
      "Nouveau canal de vente (événements)",
      "Intégration des réseaux sociaux"
    ],
    images: ["/projects/flower-3.png", "/projects/flower-2.jpg", "/projects/flower-1.jpg"],
    testimonial: {
      text: "Le site capture parfaitement l'essence de notre boutique. Nos clients apprécient particulièrement la galerie photos et la facilité de contact pour les événements.",
      author: "Marie Madeleine Lemaire",
      role: "Gérante, Fleur & Sens"
    }
  },
  {
    id: "Coach Vitalité",
    title: "Coach Vitalité",
    client: "Coach sportif indépendant",
    category: "Services",
    technologies: ["Shopify", "Liquid", "Mailchimp", "DigitalProducts", "Google Analytics", "Stripe"],
    description: "Plateforme de coaching en ligne avec vente de programmes personnalisés et e-books de nutrition et musculation.",
    features: [
      "Boutique en ligne pour e-books et programmes",
      "Blog fitness et nutrition",
      "Newsletter automatisée",
      "Intégration des réseaux sociaux",
      "Optimisation SEO locale"
    ],
    results: [
      "Vente de 500+ e-books en 3 mois",
      "Construction d'une liste email de 2000+ abonnés",
      "Revenus passifs établis"
    ],
    images: ["/projects/fitness-2.jpg", "/projects/fitness-1.jpg", "/projects/fitness-3.jpg"],
    link: "#",
    testimonial: {
      text: "RakTiak Studio a créé exactement ce dont j'avais besoin : une plateforme simple mais efficace pour vendre mes programmes et interagir avec ma communauté.",
      author: "André Recollet",
      role: "Fondateur, Coach Vitalité"
    }
  },
  {
    id: "Cabinet Martin & Associés",
    title: "Cabinet Martin & Associés",
    client: "Cabinet d'avocats",
    category: "Services",
    technologies: ["WordPress", "Calendly", "Google Workspace"],
    description: "Site professionnel pour un cabinet d'avocats, avec prise de rendez-vous en ligne et ressources juridiques.",
    features: [
      "Présentation des domaines d'expertise",
      "Système de rendez-vous en ligne",
      "Blog juridique",
      "Formulaire de contact sécurisé",
      "Espace ressources clients"
    ],
    results: [
      "Augmentation des prises de rendez-vous de 60%",
      "Présence numérique",
      "Nouveaux prospects",
      "Meilleur référencement local"
    ],
    images: ["/projects/lawyer-1.png", "/projects/lawyer-2.png", "/projects/lawyer-3.png"],
    testimonial: {
      text: "Un site qui reflète parfaitement notre professionnalisme tout en restant accessible. Le système de rendez-vous en ligne a transformé notre organisation.",
      author: "Me Claire Martin",
      role: "Associée principale"
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
                className="glass rounded-xl overflow-hidden border border-[#8A2BE2]/20 hover:border-[#40E0D0]/40 transition-all group"
                onClick={() => {
                  setActiveProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="relative h-64 w-full">
                  <Image 
                    src={project.images[0]} 
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
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
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto glass rounded-xl border border-[#8A2BE2]/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - Style modifié */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 p-3 rounded-full bg-[#0A0A0A] border border-[#8A2BE2]/20 text-white hover:bg-[#8A2BE2] hover:border-[#8A2BE2] transition-all"
            >
              <FaTimes size={20} />
            </button>

            {/* Image gallery avec hauteur augmentée */}
            <div className="relative">
              {/* Image principale */}
              <div className="relative h-[600px]">
                <Image
                  src={activeProject.images[currentImageIndex]}
                  alt={`${activeProject.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="100vw"
                />
              </div>

              {/* Navigation des images */}
              {activeProject.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => 
                        prev === 0 ? activeProject.images.length - 1 : prev - 1
                      );
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0A0A0A]/80 text-white hover:bg-[#8A2BE2] transition-colors"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => 
                        prev === activeProject.images.length - 1 ? 0 : prev + 1
                      );
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#0A0A0A]/80 text-white hover:bg-[#8A2BE2] transition-colors"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}

              {/* Miniatures */}
              {activeProject.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {activeProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImageIndex === index 
                          ? "bg-[#40E0D0] w-4" 
                          : "bg-white/50 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Contenu du projet */}
            <div className="p-8">
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
                  <p className="text-[#F5F5F5]/70 italic mb-3">&ldquo;{activeProject.testimonial.text}&rdquo;</p>
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
