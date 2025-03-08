"use client";
import Image from "next/image";
import { FaCheck, FaTimes } from "react-icons/fa";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  excludedFeatures?: string[];
  image: string;
  popular?: boolean;
  timeframe: string;
}

function ServiceCard({
  title,
  price,
  description,
  features,
  excludedFeatures = [],
  image,
  popular = false,
  timeframe
}: ServiceCardProps) {
  return (
    <div className={`glass rounded-xl overflow-hidden border ${
      popular ? 'border-[#40E0D0] shadow-[0_0_15px_rgba(64,224,208,0.2)]' : 'border-[#8A2BE2]/20'
    } h-full flex flex-col transform transition-all duration-300 hover:scale-[1.02] hover:border-[#40E0D0]/40`}>
      {popular && (
        <div className="bg-[#40E0D0] text-[#0A0A0A] text-center py-2 font-semibold text-sm tracking-wider">
          RECOMMANDÉ
        </div>
      )}
      
      <div className="p-6 md:p-8 flex-grow flex flex-col bg-[#0A0A0A]/95">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-[#40E0D0] transition-colors">{title}</h3>
          <div className="text-3xl font-bold text-[#40E0D0] mb-4 flex items-baseline justify-center gap-2">
            {price}
            <span className="text-sm font-normal text-[#F5F5F5]/50">TTC</span>
          </div>
          <p className="text-[#F5F5F5]/70">{description}</p>
        </div>
        
        <div className="mb-6 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-[#8A2BE2]/20 text-sm text-[#40E0D0]">
            Délai: {timeframe}
          </div>
        </div>
        
        <div className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheck className="text-[#40E0D0] mt-1 flex-shrink-0" />
                <span className="text-[#F5F5F5]/80 text-sm">{feature}</span>
              </li>
            ))}
            
            {excludedFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaTimes className="text-red-400 mt-1 flex-shrink-0" />
                <span className="text-[#F5F5F5]/50 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="p-6 md:p-8 pt-0 mt-auto text-center">
        <CTAButton 
          text="Demander un devis" 
          href="/contact" 
          className="inline-block px-8 py-3 text-sm font-medium tracking-wider hover:shadow-[0_0_15px_rgba(138,43,226,0.4)]"
        />
      </div>
    </div>
  );
}

interface AddonCardProps {
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
}

function AddonCard({ title, price, description, icon }: AddonCardProps) {
  return (
    <div className="glass rounded-xl p-6 md:p-8 border border-[#8A2BE2]/20 flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02] hover:border-[#40E0D0]/40 bg-[#0A0A0A]/95">
      <div className="text-[#40E0D0] mb-6 transition-transform duration-300 hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#40E0D0] transition-colors">{title}</h3>
      <div className="text-lg font-semibold text-[#40E0D0] mb-4">{price}</div>
      <p className="text-[#F5F5F5]/80 text-sm">{description}</p>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-12 bg-[#0D0D16]">
      {/* Hero Section avec animation */}
      <motion.section 
        className="py-12 px-6 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D16] via-[#141420] to-[#8A2BE2]/10 z-0"></div>
        <div className="absolute right-0 top-0 w-96 h-96">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-[#8A2BE2]/10 to-[#40E0D0]/10 opacity-50 blur-3xl animate-pulse-slow"></div>
            <div className="w-80 h-80 rounded-full border border-[#8A2BE2]/10 animate-spin-slower"></div>
            <div className="absolute w-64 h-64 rounded-full border border-[#40E0D0]/5 animate-spin-reverse-slower"></div>
            <div className="absolute w-48 h-48 rounded-full border border-[#8A2BE2]/10 animate-spin-slower"></div>
          </div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Des solutions digitales sur mesure
            </h1>
            <p className="text-xl text-[#F5F5F5]/80 mb-8">
              Je conçois et développe des sites web et applications qui allient esthétique moderne et fonctionnalités robustes pour faire rayonner votre activité.
            </p>
          </div>
        </div>
      </motion.section>
      
      {/* Main Services */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Mes offres</h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="glass rounded-xl overflow-hidden border border-[#8A2BE2]/20"
            >
              <ServiceCard 
                title="Site Vitrine Premium"
                price="1000€"
                description="Site élégant et responsive pour présenter votre activité et attirer de nouveaux clients."
                features={[
                  "5 pages personnalisées",
                  "Design sur mesure",
                  "Formulaire de contact",
                  "Intégration Google Maps",
                  "Optimisation SEO de base",
                  "Responsive design",
                  "Formation à l'utilisation"
                ]}
                excludedFeatures={[
                  "Système de réservation",
                  "Boutique en ligne",
                  "Blog intégré"
                ]}
                image="/services/site-vitrine.jpg"
                timeframe="2 semaines"
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="glass rounded-xl overflow-hidden border border-[#8A2BE2]/20"
            >
              <ServiceCard 
                title="Site E-commerce Essentiel"
                price="1500€"
                description="Boutique en ligne complète pour vendre vos produits et développer votre activité commerciale."
                features={[
                  "Catalogue de produits",
                  "Panier d'achat",
                  "Système de paiement sécurisé",
                  "Gestion des stocks",
                  "Tableau de bord admin",
                  "Optimisation SEO de base",
                  "Responsive design",
                  "Formation à l'utilisation"
                ]}
                image="/services/ecommerce.jpg"
                popular={false}
                timeframe="3 semaines"
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="glass rounded-xl overflow-hidden border border-[#8A2BE2]/20"
            >
              <ServiceCard 
                title="Application Web Personnalisée"
                price="À partir de 1500€"
                description="Solution sur mesure adaptée à vos besoins spécifiques et à votre secteur d'activité."
                features={[
                  "Analyse des besoins",
                  "Conception UX/UI",
                  "Développement sur mesure",
                  "Fonctionnalités personnalisées",
                  "Tests approfondis",
                  "Déploiement",
                  "Formation à l'utilisation",
                  "Documentation technique"
                ]}
                image="/services/application-web.jpg"
                timeframe="4-6 semaines"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 px-6 bg-black/30">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Services additionnels</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Maintenance",
                price: "100€/mois ou par Intervention",
                description: "Mises à jour, sécurité, sauvegardes et support technique prioritaire.",
                icon: <span className="text-3xl">🛠️</span>
              },
              {
                title: "SEO Avancé ou Campagnes Meta Ads / Google Ads",
                price: "250€",
                description: "Optimisation approfondie, suivi de performance et rapport mensuel et mise en place de campagnes publicitaires.",
                icon: <span className="text-3xl">📈</span>
              },
              
              {
                title: "Formation",
                price: "200€",
                description: "Session de 2h pour savoir modifier votre site vous-même. Acces Github et Utilisation de IDE pour le code.",
                icon: <span className="text-3xl">👨‍🏫</span>
              },
              
            ].map((addon, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl p-6 md:p-8 border border-[#8A2BE2]/20 flex flex-col h-full"
              >
                <div className="text-[#40E0D0] mb-6 transition-transform duration-300 hover:scale-110">
                  {addon.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#40E0D0] transition-colors">{addon.title}</h3>
                <div className="text-lg font-semibold text-[#40E0D0] mb-4">{addon.price}</div>
                <p className="text-[#F5F5F5]/80 text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <ScrollReveal direction="up" distance={20} duration={1000} delay={300}>
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Mon processus de travail</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  step: "1",
                  title: "Analyse des besoins",
                  description: "Échange approfondi pour comprendre vos objectifs et définir la meilleure solution."
                },
                {
                  step: "2",
                  title: "Proposition & Devis",
                  description: "Élaboration d'une solution détaillée avec planning et devis précis."
                },
                {
                  step: "3",
                  title: "Design & Maquettes",
                  description: "Création des maquettes pour visualiser le rendu final avant développement."
                },
                {
                  step: "4",
                  title: "Développement",
                  description: "Développement itératif avec des points d'étape réguliers pour validation."
                },
                {
                  step: "5",
                  title: "Tests & Optimisation",
                  description: "Tests approfondis et optimisations pour garantir qualité et performance."
                },
                {
                  step: "6",
                  title: "Livraison & Support",
                  description: "Mise en ligne, formation et support technique continu."
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="glass rounded-lg p-5 border border-[#8A2BE2]/20 hover:border-[#40E0D0]/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#8A2BE2]/20 flex items-center justify-center text-[#40E0D0] font-semibold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                  </div>
                  <p className="text-[#F5F5F5]/70 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
      
      {/* FAQ */}
      <section className="py-12 px-6 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Questions fréquentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Quels sont les délais de réalisation ?",
                answer: "Les délais varient selon la complexité du projet. Un site vitrine prend généralement 2 semaines, un e-commerce 3 semaines, et une application web personnalisée 4-6 semaines."
              },
              {
                question: "Comment se déroule le paiement ?",
                answer: "Je demande un acompte de 50% à la signature du devis et le solde de 50% à la mise en ligne du projet."
              },
              {
                question: "Que comprend exactement la maintenance ?",
                answer: "La maintenance inclut les mises à jour de sécurité, les sauvegardes régulières, les corrections de bugs, et un support technique prioritaire par email et téléphone."
              },
              {
                question: "Puis-je modifier mon site moi-même après la livraison ?",
                answer: "Oui, tous mes sites sont livrés avec le code source via GitHub. Je propose également une formation pour vous permettre de gérer votre contenu en toute autonomie."
              },
              {
                question: "Proposez-vous des services sur mesure non listés ?",
                answer: "Absolument ! Chaque projet est unique et je peux adapter mes services à vos besoins spécifiques. N'hésitez pas à me contacter pour discuter de votre projet et obtenir un devis personnalisé."
              },
              {
                question: "Que se passe-t-il si je ne suis pas satisfait du résultat ?",
                answer: "Votre satisfaction est ma priorité. Je travaille de manière itérative avec des points de validation réguliers pour m'assurer que le projet correspond à vos attentes. Des révisions sont incluses dans chaque offre."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl p-6 border border-[#8A2BE2]/20"
              >
                <h3 className="text-xl font-bold mb-3 text-[#40E0D0]">{faq.question}</h3>
                <p className="text-[#F5F5F5]/70">{faq.answer}</p>
              </motion.div>
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
