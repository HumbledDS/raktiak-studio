import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "@/components/CTAButton";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative px-6 pt-24 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#8A2BE2]/20 z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transformez votre <span className="text-[#40E0D0] animate-glow">vision</span> en réalité digitale
              </h1>
              <div className="h-12 mb-6 overflow-hidden">
                <p className="text-xl text-[#F5F5F5]/80 animate-pulse">
                  Sites web performants • Expériences utilisateur captivantes • Solutions sur mesure
                </p>
              </div>
              <p className="text-[#F5F5F5]/70 mb-8">
                Développeur fullstack basé à Paris, je conçois et développe des sites web et applications qui allient esthétique moderne et fonctionnalités robustes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton 
                  text="Découvrir mes projets" 
                  href="/projects" 
                  className="flex items-center justify-center gap-2"
                />
                <CTAButton 
                  text="Discutons de votre projet" 
                  href="/contact" 
                  className="bg-transparent border border-[#8A2BE2] hover:bg-[#8A2BE2]/20 flex items-center justify-center gap-2"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#40E0D0] opacity-20 blur-3xl"></div>
                <Image 
                  src="/hero-image.png" 
                  alt="Développement web" 
                  width={500}
                  height={500}
                  className="relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-6 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Mon expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Développement Web",
                description: "Sites vitrines, e-commerce et applications web sur mesure avec les technologies modernes (React, Next.js).",
                icon: "💻",
                animation: "animate-glow"
              },
              {
                title: "UI/UX Design",
                description: "Interfaces élégantes et intuitives qui offrent une expérience utilisateur exceptionnelle sur tous les appareils.",
                icon: "🎨",
                animation: "opacity-0 animate-fade-in"
              },
              {
                title: "SEO & Performance",
                description: "Optimisation pour les moteurs de recherche et amélioration des performances pour un meilleur classement.",
                icon: "📈",
                animation: "translate-x-[-20px] animate-slide-in"
              },
              {
                title: "Maintenance & Support",
                description: "Suivi régulier, mises à jour de sécurité et assistance technique pour garder votre site au top.",
                icon: "🛠️",
                animation: "scale-95 animate-scale-in"
              }
            ].map((expertise, index) => (
              <div 
                key={index} 
                className={`glass rounded-xl p-6 border border-[#8A2BE2]/20 hover:border-[#40E0D0]/50 transition-all ${expertise.animation} group hover:transform hover:scale-105 hover:shadow-[0_0_20px_rgba(64,224,208,0.3)] duration-300`}
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">{expertise.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-[#40E0D0] group-hover:text-white transition-colors">{expertise.title}</h3>
                <p className="text-[#F5F5F5]/70 group-hover:text-[#F5F5F5] transition-colors">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Projets phares</h2>
            <Link 
              href="/projects" 
              className="flex items-center gap-2 text-[#40E0D0] hover:text-[#40E0D0]/80 transition-colors mt-4 md:mt-0"
            >
              Voir tous les projets <FaArrowRight />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "E-commerce",
                description: "Boutique en ligne avec +200% de conversion",
                image: "/projects/ecommerce-thumb.jpg"
              },
              {
                title: "Fast-Food",
                description: "Site de commande en ligne avec livraison intégrée",
                image: "/projects/food-thumb.jpg"
              },
              {
                title: "Boulangerie",
                description: "Vitrine digitale et système de réservation",
                image: "/projects/bakery-thumb.jpg"
              },
              {
                title: "Salon de beauté",
                description: "Plateforme de prise de RDV et gallerie interactive",
                image: "/projects/beauty-thumb.jpg"
              }
            ].map((project, index) => (
              <Link 
                key={index} 
                href="/projects" 
                className="group"
              >
                <div className="glass rounded-xl overflow-hidden border border-[#8A2BE2]/20 hover:border-[#40E0D0]/50 transition-all h-full">
                  <div className="relative h-48">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white">Voir le projet</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-[#F5F5F5]/70">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-black/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 35, suffix: "+", label: "Projets réalisés" },
              { value: 28, suffix: "", label: "Clients satisfaits" },
              { value: 5, suffix: "", label: "Années d'expérience" },
              { value: 98, suffix: "%", label: "Taux de satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="glass rounded-xl p-6 border border-[#8A2BE2]/20 text-center">
                <div className="text-5xl font-bold text-[#40E0D0] mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#F5F5F5]/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Ce que disent mes clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Babacar a transformé ma vision en un site e-commerce qui convertit exceptionnellement bien. Son design moderne et son attention aux détails ont fait toute la différence.",
                author: "Merehcation",
                role: "Influenceuse E-commerce"
              },
              {
                text: "Collaborer avec RakTiak Studio a été une révélation. Notre site est maintenant à la hauteur de notre créativité, avec une expérience utilisateur fluide et intuitive.",
                author: "Comjam",
                role: "Agence de communication"
              },
              {
                text: "Notre système de commande en ligne a triplé notre chiffre d'affaires. Babacar a vraiment compris nos besoins et a livré au-delà de nos attentes.",
                author: "Les Douceurs de Jeanne",
                role: "Restauration"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass rounded-xl p-6 border border-[#8A2BE2]/20">
                <p className="text-[#F5F5F5]/70 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-[#40E0D0]">{testimonial.author}</p>
                  <p className="text-sm text-[#F5F5F5]/50">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#0A0A0A] z-0"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à donner vie à votre projet ?</h2>
          <p className="text-xl text-[#F5F5F5]/80 mb-8 max-w-2xl mx-auto">
            Contactez-moi dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé.
          </p>
          <CTAButton 
            text="Propose-moi ton projet" 
            href="/contact" 
            className="text-lg px-8 py-4"
          />
        </div>
      </section>
    </div>
  );
}
