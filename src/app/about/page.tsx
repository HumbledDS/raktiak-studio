import Image from "next/image";
import { Metadata } from "next";
import { FaCode, FaServer, FaPalette, FaDatabase, FaTools } from "react-icons/fa";

export const metadata: Metadata = {
  title: "À propos | RakTiak Studio",
  description: "Découvrez mon parcours, mes compétences et ma passion pour le développement web.",
};

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Section Introduction */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 relative">
              <div className="aspect-square relative rounded-xl overflow-hidden border-2 border-[#8A2BE2]/30">
                <Image 
                  src="/profile.jpg" 
                  alt="Babacar GUEYE" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl border-2 border-[#40E0D0]/30 -z-10"></div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">À propos de moi</h1>
              <p className="text-xl mb-6 text-[#F5F5F5]/80">
                Bonjour, je suis <span className="text-[#40E0D0] font-semibold">Babacar GUEYE</span>, développeur fullstack passionné par la création d&apos;expériences web innovantes.
              </p>
              <p className="text-[#F5F5F5]/70 mb-6">
                Basé à Paris, je conçois et développe des sites web et applications sur mesure qui allient esthétique moderne et fonctionnalités robustes. Mon objectif est de transformer vos idées en solutions digitales performantes qui répondent parfaitement à vos besoins.
              </p>
              <p className="text-[#F5F5F5]/70">
                Avec une approche centrée sur l&apos;utilisateur et un souci constant de la qualité, je m&apos;engage à livrer des projets qui dépassent vos attentes et qui contribuent réellement à la croissance de votre activité.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section Parcours professionnel */}
      <section className="py-12 px-6 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Mon parcours professionnel</h2>
          
          <div className="relative border-l-2 border-[#8A2BE2] ml-4 md:ml-[calc(50%-1px)] pl-8 md:pl-0">
            {[
              {
                period: "2023-Présent",
                title: "Fondateur",
                company: "RakTiak Studio",
                description: "Création de sites web et applications sur mesure pour des clients de divers secteurs."
              },
              {
                period: "2021-2023",
                title: "Développeur Fullstack",
                company: "Entreprise précédente",
                description: "Développement d&apos;applications web complexes, optimisation des performances et expérience utilisateur."
              },
              {
                period: "2019-2021",
                title: "Développeur Frontend",
                company: "Autre entreprise",
                description: "Création d&apos;interfaces utilisateur modernes et responsives, intégration avec des API REST."
              },
              {
                period: "2018-2019",
                title: "Stage en développement web",
                company: "Entreprise de stage",
                description: "Première expérience professionnelle, participation à des projets web variés."
              }
            ].map((experience, index) => (
              <div 
                key={index} 
                className={`mb-12 relative ${
                  index % 2 === 0 ? "md:ml-[calc(50%+2rem)]" : "md:mr-[calc(50%+2rem)] md:text-right"
                }`}
              >
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? "md:-left-[calc(2rem+10px)]" : "md:-right-[calc(2rem+10px)]"
                } -left-[calc(1rem+1px)] w-5 h-5 rounded-full bg-[#8A2BE2]`}></div>
                
                <div className="glass rounded-xl p-6 border border-[#8A2BE2]/20">
                  <div className="text-[#40E0D0] font-semibold mb-1">{experience.period}</div>
                  <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                  <div className="text-[#F5F5F5]/80 mb-3">{experience.company}</div>
                  <div className="text-[#F5F5F5]/70">{experience.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section Formation */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Formation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                year: "2018",
                degree: "Master en Développement Web",
                school: "Université/École",
                description: "Spécialisation en technologies web modernes et méthodologies agiles."
              },
              {
                year: "2016",
                degree: "Licence en Informatique",
                school: "Université/École",
                description: "Fondamentaux de la programmation, algorithmes et structures de données."
              }
            ].map((education, index) => (
              <div key={index} className="glass rounded-xl p-6 border border-[#8A2BE2]/20">
                <div className="text-[#40E0D0] font-semibold mb-1">{education.year}</div>
                <h3 className="text-xl font-bold mb-2">{education.degree}</h3>
                <div className="text-[#F5F5F5]/80 mb-3">{education.school}</div>
                <p className="text-[#F5F5F5]/70">{education.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "AWS Certified Developer",
                "React Advanced",
                "Next.js Mastery",
                "MongoDB Certified Developer",
                "UI/UX Design Fundamentals"
              ].map((cert, index) => (
                <div key={index} className="bg-[#8A2BE2]/20 px-4 py-2 rounded-full border border-[#8A2BE2]/30">
                  {cert}
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
                skills: ["React/Next.js", "HTML/CSS", "JavaScript/TypeScript", "Tailwind CSS", "GSAP/Framer Motion"]
              },
              {
                icon: <FaServer className="text-4xl text-[#40E0D0] mb-4" />,
                title: "Backend",
                skills: ["Node.js", "Express", "PHP", "Python", "API REST/GraphQL"]
              },
              {
                icon: <FaDatabase className="text-4xl text-[#40E0D0] mb-4" />,
                title: "Bases de données",
                skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Redis"]
              },
              {
                icon: <FaPalette className="text-4xl text-[#40E0D0] mb-4" />,
                title: "Design",
                skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Responsive Design"]
              },
              {
                icon: <FaTools className="text-4xl text-[#40E0D0] mb-4" />,
                title: "Outils",
                skills: ["Git", "Docker", "AWS", "CI/CD", "Jest/Testing Library"]
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
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Centres d&apos;intérêt</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Nouvelles technologies",
              "Photographie",
              "Voyages",
              "Sports",
              "Musique"
            ].map((hobby, index) => (
              <div key={index} className="glass rounded-xl p-6 border border-[#8A2BE2]/20 text-center hover:border-[#40E0D0]/50 transition-all">
                <div className="text-xl">{hobby}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section Valeurs */}
      <section className="py-12 px-6 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Mes valeurs professionnelles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualité et excellence",
                description: "Je m&apos;engage à livrer un travail de la plus haute qualité, en portant une attention particulière aux détails."
              },
              {
                title: "Communication transparente",
                description: "Je privilégie une communication claire et honnête tout au long du processus de développement."
              },
              {
                title: "Innovation constante",
                description: "Je reste à l&apos;affût des dernières technologies et tendances pour proposer des solutions innovantes."
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
      <section className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/20 to-[#0A0A0A] z-0"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à collaborer ensemble?</h2>
          <p className="text-xl text-[#F5F5F5]/80 mb-8 max-w-2xl mx-auto">
            Si mon profil correspond à vos besoins, n&apos;hésitez pas à me contacter pour discuter de votre projet.
          </p>
          <a 
            href="/contact" 
            className="px-8 py-4 bg-[#8A2BE2] hover:bg-[#8A2BE2]/80 rounded-full text-white text-lg inline-block transition-all hover:shadow-[0_0_20px_rgba(138,43,226,0.6)]"
          >
            Propose-moi ton projet
          </a>
        </div>
      </section>
    </div>
  );
}
