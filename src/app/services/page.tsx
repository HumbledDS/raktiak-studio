import Image from "next/image";
import { Metadata } from "next";
import { FaCheck, FaTimes } from "react-icons/fa";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Services | RakTiak Studio",
  description: "Découvrez mes services de développement web sur mesure pour votre entreprise. Sites vitrines, e-commerce et applications web personnalisées.",
};

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
    <div className={`glass rounded-xl overflow-hidden border ${popular ? 'border-[#40E0D0]' : 'border-[#8A2BE2]/20'} h-full flex flex-col`}>
      {popular && (
        <div className="bg-[#40E0D0] text-[#0A0A0A] text-center py-1 font-semibold">
          Populaire
        </div>
      )}
      
      <div className="relative h-48">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="text-3xl font-bold text-[#40E0D0] mb-4">{price}</div>
        <p className="text-[#F5F5F5]/70 mb-6">{description}</p>
        
        <div className="mb-6">
          <div className="text-sm text-[#F5F5F5]/50 mb-2">Délai: {timeframe}</div>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCheck className="text-green-400 mt-1 flex-shrink-0" />
              <span className="text-[#F5F5F5]/80">{feature}</span>
            </li>
          ))}
          
          {excludedFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaTimes className="text-red-400 mt-1 flex-shrink-0" />
              <span className="text-[#F5F5F5]/50">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 pt-0 mt-auto">
        <CTAButton 
          text="Demander un devis" 
          href="/contact" 
          className="w-full text-center"
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
    <div className="glass rounded-xl p-6 border border-[#8A2BE2]/20 flex flex-col h-full">
      <div className="text-[#40E0D0] mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-lg font-semibold text-[#40E0D0] mb-3">{price}</div>
      <p className="text-[#F5F5F5]/70">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="py-12 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#8A2BE2]/10 to-transparent z-0"></div>
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
      </section>
      
      {/* Main Services */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Mes offres</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              timeframe="2-3 semaines"
            />
            
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
              popular={true}
              timeframe="3-4 semaines"
            />
            
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
              timeframe="4-8 semaines"
            />
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-12 px-6 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Services additionnels</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Maintenance",
                price: "100€/mois",
                description: "Mises à jour, sécurité, sauvegardes et support technique prioritaire.",
                icon: <span className="text-3xl">🛠️</span>
              },
              {
                title: "SEO Avancé",
                price: "300€",
                description: "Optimisation approfondie, suivi de performance et rapport mensuel.",
                icon: <span className="text-3xl">📈</span>
              },
              {
                title: "Intégration CRM",
                price: "250€",
                description: "Connexion avec vos outils existants pour une gestion centralisée.",
                icon: <span className="text-3xl">🔄</span>
              },
              {
                title: "Formation",
                price: "200€",
                description: "Session de 3h pour maîtriser votre interface d'administration.",
                icon: <span className="text-3xl">👨‍🏫</span>
              },
              {
                title: "Hébergement Premium",
                price: "50€/mois",
                description: "Serveur haute performance, support prioritaire et certificat SSL.",
                icon: <span className="text-3xl">☁️</span>
              }
            ].map((addon, index) => (
              <AddonCard 
                key={index}
                title={addon.title}
                price={addon.price}
                description={addon.description}
                icon={addon.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Section Processus de travail */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Mon processus de travail</h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Ligne verticale */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8A2BE2] to-[#40E0D0] transform md:-translate-x-1/2"></div>
            
            {/* Étapes */}
            <div className="space-y-24">
              {[
                {
                  step: "Étape 1",
                  title: "Consultation initiale",
                  description: "Discussion approfondie pour comprendre vos besoins et objectifs."
                },
                {
                  step: "Étape 2",
                  title: "Proposition et devis",
                  description: "Élaboration d'une proposition détaillée avec planning et devis précis."
                },
                {
                  step: "Étape 3",
                  title: "Design et maquettage",
                  description: "Création de maquettes pour visualiser l'interface avant développement."
                },
                {
                  step: "Étape 4",
                  title: "Développement",
                  description: "Développement de votre projet avec des points d'étape réguliers."
                },
                {
                  step: "Étape 5",
                  title: "Tests et optimisation",
                  description: "Phase de tests approfondis et optimisations finales."
                },
                {
                  step: "Étape 6",
                  title: "Livraison et formation",
                  description: "Mise en ligne et formation à l'utilisation de votre solution."
                }
              ].map((item, index) => (
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
                      <span className="text-sm text-[#40E0D0] font-medium">{item.step}</span>
                      <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                      <p className="text-[#F5F5F5]/70">{item.description}</p>
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
      
      {/* FAQ */}
      <section className="py-12 px-6 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Questions fréquentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Quels sont les délais de réalisation ?",
                answer: "Les délais varient selon la complexité du projet. Un site vitrine prend généralement 2-3 semaines, un e-commerce 3-4 semaines, et une application web personnalisée 4-8 semaines."
              },
              {
                question: "Comment se déroule le paiement ?",
                answer: "Je demande un acompte de 30% à la signature du devis, 40% à la livraison des maquettes, et le solde de 30% à la mise en ligne du projet."
              },
              {
                question: "Que comprend exactement la maintenance ?",
                answer: "La maintenance inclut les mises à jour de sécurité, les sauvegardes régulières, les corrections de bugs, et un support technique prioritaire par email et téléphone."
              },
              {
                question: "Puis-je modifier mon site moi-même après la livraison ?",
                answer: "Oui, tous mes sites sont livrés avec un système d'administration intuitif. Je propose également une formation pour vous permettre de gérer votre contenu en toute autonomie."
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
              <div key={index} className="glass rounded-xl p-6 border border-[#8A2BE2]/20">
                <h3 className="text-xl font-bold mb-3 text-[#40E0D0]">{faq.question}</h3>
                <p className="text-[#F5F5F5]/70">{faq.answer}</p>
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
