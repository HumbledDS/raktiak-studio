import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import CTAButton from "@/components/CTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import CounterSection from "@/components/CounterSection";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative px-6 pt-24 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a1a1a] to-[#8A2BE2]/20 z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Transformez votre <span className="text-[#40E0D0] animate-glow">vision</span> en réalité digitale
              </h1>
              <div className="mb-6">
                <p className="text-xl text-[#F5F5F5]/80">
                  Sites web performants • Expériences utilisateur captivantes • Solutions sur mesure
                </p>
              </div>
              <p className="text-[#F5F5F5]/70 mb-8">
                Développeur fullstack basé à Paris, je conçois et développe des sites web et applications qui allient esthétique moderne et fonctionnalités robustes.
              </p>
              <div className="flex flex-row gap-3">
                <CTAButton 
                  text="Découvrir mes projets" 
                  mobileText="Mes projets"
                  href="/projects" 
                  className="flex-1 flex items-center justify-center gap-2 text-sm py-3"
                />
                <CTAButton 
                  text="Discutons de votre projet" 
                  mobileText="Me contacter"
                  href="/contact" 
                  className="flex-1 bg-transparent border border-[#8A2BE2] hover:bg-[#8A2BE2]/20 flex items-center justify-center gap-2 text-sm py-3"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#40E0D0] opacity-20 blur-3xl"></div>
                <Image 
                  src="/projects/hero_image.png" 
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
      <ScrollReveal direction="up" distance={20} duration={1000}>
        <section className="py-24 px-6 bg-[#0A0A0A]">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">Mon Expertise</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Développement Web",
                  description: "Sites vitrines, e-commerce et applications web sur mesure avec les technologies modernes (React, Next.js).",
                  icon: "💻"
                },
                {
                  title: "UI/UX Design",
                  description: "Interfaces élégantes et intuitives qui offrent une expérience utilisateur exceptionnelle sur tous les appareils.",
                  icon: "🎨"
                },
                {
                  title: "SEO & Performance",
                  description: "Optimisation pour les moteurs de recherche et amélioration des performances pour un meilleur classement.",
                  icon: "📈"
                },
                {
                  title: "Maintenance & Support",
                  description: "Suivi régulier, mises à jour de sécurité et assistance technique pour garder votre site au top.",
                  icon: "🛠️"
                }
              ].map((expertise, index) => (
                <div 
                  key={index} 
                  className={`glass rounded-xl p-6 border border-[#8A2BE2]/20 hover:border-[#40E0D0]/50 transition-all group hover:transform hover:scale-105 hover:shadow-[0_0_20px_rgba(64,224,208,0.3)] duration-300 h-full flex flex-col`}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    opacity: 0,
                    animation: 'fadeUp 0.8s ease-out forwards'
                  }}
                >
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{expertise.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-[#40E0D0] group-hover:text-white transition-colors">{expertise.title}</h3>
                  <p className="text-[#F5F5F5]/70 group-hover:text-[#F5F5F5] transition-colors flex-grow">{expertise.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Projects Section */}
      <ScrollReveal direction="up" distance={20} duration={1000} delay={200}>
        <section className="py-40 px-6 bg-[#0A0A0A]">
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
                  image: "/projects/ecommerce-mereh.png"
                },
                {
                  title: "Fast-Food",
                  description: "Site de commande en ligne avec livraison intégrée",
                  image: "/projects/food-thumb3.png"
                },
                {
                  title: "Boulangerie",
                  description: "Vitrine digitale et système de réservation",
                  image: "/projects/food-thumb2.png"
                },
                {
                  title: "Salon de beauté",
                  description: "Plateforme de prise de RDV et gallerie interactive",
                  image: "/projects/beauty-thumb.png"
                }
              ].map((project, index) => (
                <Link 
                  key={index} 
                  href="/projects" 
                  className="group"
                >
                  <div className="glass rounded-xl overflow-hidden border border-[#8A2BE2]/20 hover:border-[#40E0D0]/50 transition-all h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-medium flex items-center gap-2">
                          Voir le projet <FaArrowRight size={14} />
                        </span>
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
      </ScrollReveal>

      {/* Stats Section */}
      <ScrollReveal direction="up" distance={20} duration={1000} delay={300}>
        <section className="py-24 px-6 bg-[#0A0A0A]">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">En chiffres</h2>
            <p className="text-[#F5F5F5]/70 max-w-2xl mx-auto">
              Des résultats concrets qui témoignent de mon engagement envers la qualité et la satisfaction client.
            </p>
          </div>
          <CounterSection 
            stats={[
              { value: 35, suffix: "+", label: "Projets réalisés" },
              { value: 28, suffix: "", label: "Clients satisfaits" },
              { value: 5, suffix: "", label: "Années d'expérience" },
              { value: 98, suffix: "%", label: "Taux de satisfaction" }
            ]}
          />
        </section>
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal direction="up" distance={20} duration={1000} delay={400}>
        <section className="py-32 px-6 bg-[#0A0A0A]">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 text-center">Ce que disent mes clients</h1>
            
            <TestimonialSlider 
              testimonials={[
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
              ]}
              speed={60}
            />
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal direction="up" distance={20} duration={1000} delay={600}>
        <section className="py-40 px-6 relative bg-[#0A0A0A]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#0A0A0A] z-0"></div>
          <div className="container mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à donner vie à votre projet ?</h2>
            <p className="text-xl text-[#F5F5F5]/80 mb-8 max-w-2xl mx-auto">
              Contactez-moi dès aujourd&apos;hui pour discuter de vos besoins et obtenir un devis personnalisé.
            </p>
            <CTAButton 
              text="Propose-moi ton projet" 
              href="/contact" 
              className="text-lg px-8 py-4"
            />
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
