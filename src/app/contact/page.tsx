"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget: string;
  deadline: string;
  description: string;
  source: string;
};

interface ErrorResponse {
  message: string;
  error?: string;
  code?: string;
}

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [debugInfo, setDebugInfo] = useState<string>("");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");
    setDebugInfo("");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json() as ErrorResponse;

      if (!response.ok) {
        let errorMessage = "Une erreur est survenue.";
        
        switch (result.code) {
          case 'SMTP_CONNECTION_FAILED':
            errorMessage = "Impossible de se connecter au serveur d'envoi d'emails.";
            break;
          case 'INVALID_SENDER':
            errorMessage = "L'adresse d'expédition n'est pas valide.";
            break;
          case 'INVALID_RECIPIENT':
            errorMessage = "L'adresse email fournie n'est pas valide.";
            break;
          case 'RATE_LIMIT':
            errorMessage = "Trop de tentatives. Veuillez réessayer dans quelques minutes.";
            break;
          default:
            errorMessage = result.message || "Une erreur inattendue est survenue.";
        }

        setSubmitError(errorMessage);
        if (process.env.NODE_ENV === 'development') {
          setDebugInfo(result.error || 'Pas de détails supplémentaires');
        }
        throw new Error(errorMessage);
      }

      reset();
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      if (!submitError) { // Si pas déjà défini par le switch
        setSubmitError("Erreur de connexion. Vérifiez votre connexion internet et réessayez.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* En-tête */}
      <section className="py-12 px-6">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discutons de votre projet
          </motion.h1>
          <motion.p 
            className="text-xl text-[#F5F5F5]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Je suis impatient de transformer votre idée en réalité digitale
          </motion.p>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Formulaire */}
            <div className="w-full lg:w-2/3">
              <div className="glass rounded-xl p-8 border border-[#8A2BE2]/20">
                <h2 className="text-2xl font-bold mb-6">Parlez-moi de votre projet</h2>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                    Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                  </div>
                )}
                
                {submitError && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 mb-2">{submitError}</p>
                    {debugInfo && process.env.NODE_ENV === 'development' && (
                      <p className="text-xs text-red-400/70 mt-2">
                        Debug: {debugInfo}
                      </p>
                    )}
                  </div>
                )}
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-[#F5F5F5]/80">
                        Nom et prénom *
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`w-full p-3 bg-[#0A0A0A] border ${errors.name ? 'border-red-500/50' : 'border-[#8A2BE2]/30'} rounded-lg focus:outline-none focus:border-[#40E0D0]`}
                        placeholder="Votre nom complet"
                        {...register("name", { required: "Ce champ est requis" })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 text-[#F5F5F5]/80">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full p-3 bg-[#0A0A0A] border ${errors.email ? 'border-red-500/50' : 'border-[#8A2BE2]/30'} rounded-lg focus:outline-none focus:border-[#40E0D0]`}
                        placeholder="votre.email@exemple.com"
                        {...register("email", { 
                          required: "Ce champ est requis",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Adresse email invalide"
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-[#F5F5F5]/80">
                      Téléphone (optionnel)
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full p-3 bg-[#0A0A0A] border border-[#8A2BE2]/30 rounded-lg focus:outline-none focus:border-[#40E0D0]"
                      placeholder="Votre numéro de téléphone"
                      {...register("phone")}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block mb-2 text-[#F5F5F5]/80">
                        Type de projet *
                      </label>
                      <select
                        id="projectType"
                        className={`w-full p-3 bg-[#0A0A0A] border ${errors.projectType ? 'border-red-500/50' : 'border-[#8A2BE2]/30'} rounded-lg focus:outline-none focus:border-[#40E0D0]`}
                        {...register("projectType", { required: "Ce champ est requis" })}
                      >
                        <option value="">Sélectionnez une option</option>
                        <option value="site-vitrine">Site vitrine</option>
                        <option value="e-commerce">E-commerce</option>
                        <option value="application-web">Application web</option>
                        <option value="refonte">Refonte de site existant</option>
                        <option value="autre">Autre</option>
                      </select>
                      {errors.projectType && (
                        <p className="mt-1 text-red-400 text-sm">{errors.projectType.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block mb-2 text-[#F5F5F5]/80">
                        Budget approximatif *
                      </label>
                      <select
                        id="budget"
                        className={`w-full p-3 bg-[#0A0A0A] border ${errors.budget ? 'border-red-500/50' : 'border-[#8A2BE2]/30'} rounded-lg focus:outline-none focus:border-[#40E0D0]`}
                        {...register("budget", { required: "Ce champ est requis" })}
                      >
                        <option value="">Sélectionnez une option</option>
                        <option value="moins-1000">Moins de 1000€</option>
                        <option value="1000-1500">1000€ - 1500€</option>
                        <option value="1500-2500">1500€ - 2500€</option>
                        <option value="plus-2500">Plus de 2500€</option>
                      </select>
                      {errors.budget && (
                        <p className="mt-1 text-red-400 text-sm">{errors.budget.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="deadline" className="block mb-2 text-[#F5F5F5]/80">
                      Échéance souhaitée *
                    </label>
                    <input
                      id="deadline"
                      type="date"
                      className={`w-full p-3 bg-[#0A0A0A] border ${errors.deadline ? 'border-red-500/50' : 'border-[#8A2BE2]/30'} rounded-lg focus:outline-none focus:border-[#40E0D0]`}
                      {...register("deadline", { required: "Ce champ est requis" })}
                    />
                    {errors.deadline && (
                      <p className="mt-1 text-red-400 text-sm">{errors.deadline.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block mb-2 text-[#F5F5F5]/80">
                      Description du projet *
                    </label>
                    <textarea
                      id="description"
                      rows={5}
                      className={`w-full p-3 bg-[#0A0A0A] border ${errors.description ? 'border-red-500/50' : 'border-[#8A2BE2]/30'} rounded-lg focus:outline-none focus:border-[#40E0D0]`}
                      placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                      {...register("description", { 
                        required: "Ce champ est requis",
                        minLength: {
                          value: 20,
                          message: "Veuillez fournir une description plus détaillée (minimum 20 caractères)"
                        }
                      })}
                    ></textarea>
                    {errors.description && (
                      <p className="mt-1 text-red-400 text-sm">{errors.description.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="source" className="block mb-2 text-[#F5F5F5]/80">
                      Comment avez-vous découvert RakTiak Studio ?
                    </label>
                    <select
                      id="source"
                      className="w-full p-3 bg-[#0A0A0A] border border-[#8A2BE2]/30 rounded-lg focus:outline-none focus:border-[#40E0D0]"
                      {...register("source")}
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="recherche">Moteur de recherche</option>
                      <option value="reseaux-sociaux">Réseaux sociaux</option>
                      <option value="recommandation">Recommandation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 bg-[#8A2BE2] hover:bg-[#8A2BE2]/80 rounded-lg text-white font-semibold transition-all hover:shadow-[0_0_15px_rgba(138,43,226,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Informations de contact */}
            <div className="w-full lg:w-1/3">
              <div className="glass rounded-xl p-8 border border-[#8A2BE2]/20 h-full">
                <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 bg-[#8A2BE2]/20 rounded-full">
                      <FaEnvelope className="text-[#40E0D0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-[#F5F5F5]/70">contact@raktiak-studio.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 bg-[#8A2BE2]/20 rounded-full">
                      <FaPhone className="text-[#40E0D0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <p className="text-[#F5F5F5]/70">06 64 12 73 08</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 bg-[#8A2BE2]/20 rounded-full">
                      <FaMapMarkerAlt className="text-[#40E0D0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Localisation</h3>
                      <p className="text-[#F5F5F5]/70">Paris, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-3 bg-[#8A2BE2]/20 rounded-full">
                      <FaClock className="text-[#40E0D0]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Disponibilité</h3>
                      <p className="text-[#F5F5F5]/70">Lundi - Dimanche, 9h - 19h</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-semibold mb-4">Délai de réponse</h3>
                  <p className="text-[#F5F5F5]/70">Je m'engage à répondre à toutes les demandes dans un délai de 48 heures ouvrées.</p>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-semibold mb-4">Première consultation</h3>
                  <p className="text-[#F5F5F5]/70">
                    La première consultation sera pour discuter de votre projet et évaluer vos besoins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Questions fréquentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Quel est votre délai de réponse ?",
                answer: "Je m'engage à répondre à toutes les demandes dans un délai de 48 heures ouvrées."
              },
              {
                question: "Comment se déroule la première consultation ?",
                answer: "La première consultation se fait par visioconférence ou en personne selon votre préférence. Nous discuterons de votre projet, de vos objectifs et de vos attentes."
              },
              {
                question: "Quels sont les modes de paiement acceptés ?",
                answer: "J'accepte les paiements par virement bancaire et PayPal. Un acompte de 50% est demandé au démarrage du projet."
              },
              {
                question: "Proposez-vous des services de maintenance ?",
                answer: "Oui, je propose des forfaits de maintenance mensuelle pour assurer le bon fonctionnement de votre site et effectuer les mises à jour nécessaires."
              }
            ].map((faq, index) => (
              <div key={index} className="glass rounded-xl p-6 border border-[#8A2BE2]/20">
                <h3 className="text-lg font-semibold mb-3 text-[#40E0D0]">{faq.question}</h3>
                <p className="text-[#F5F5F5]/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
