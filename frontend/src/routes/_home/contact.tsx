import { createFileRoute } from "@tanstack/react-router";

import { useState } from "react";
import 
{ 
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMailBulk,
  FaMapPin,
  FaFacebook,
  FaInstagram
} from "react-icons/fa";


export const Route = createFileRoute("/_home/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
    console.log("Formulaire envoyé:", formData);
    // Réinitialiser le formulaire après l'envoi
    setFormData({ name: "", email: "", message: "" });
    alert("Merci pour votre message ! Je vous répondrai dès que possible.");
  };

  return (
    <main className="flex-1 dark:bg-gray-900 dark:text-white">
      {/* Section Principale : Contact */}
      <section
        className="flex flex-col items-center justify-center w-full mx-auto px-4 sm:px-6 lg:px-8
        pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-12"
      >
        <div className="max-w-xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez-
            <span className="text-[#c76140] dark:text-[#e07b5c]">Moi</span>
          </h1>

          <div className="w-20 h-1 bg-[#c76140] mx-auto mt-6 rounded-full mb-3"></div>

          <p className="text-white font-bold max-w-2xl mx-auto mt-2 text-sm sm:text-base">
            Une question ? Un projet ? N'hésitez pas à me contacter, je vous
            répondrai dans les plus brefs délais.
          </p>
        </div>
      </section>

      {/* Section Formulaire et Infos de Contact */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-9">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Formulaire à gauche */}
            <div className="w-full p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Envoyez-moi un message
              </h3>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Remplissez le formulaire ci-dessous et je vous répondrai sous
                24h.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Nom */}
                <div className="space-y-2">
                  <label
                    htmlFor="nom"
                    className="block font-semibold text-gray-700 text-sm sm:text-base"
                  >
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 
                       focus:border-[#c76140] focus:ring-2 focus:ring-[#c76140]/20 
                       transition-all outline-none text-sm sm:text-base"
                    placeholder="Votre nom et prénom"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-gray-700 text-sm sm:text-base"
                  >
                    Adresse email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 
                       focus:border-[#c76140] focus:ring-2 focus:ring-[#c76140]/20 
                       transition-all outline-none text-sm sm:text-base"
                    placeholder="exemple@domaine.com"
                  />
                </div>

                {/* Sujet */}
                <div className="space-y-2">
                  <label
                    htmlFor="sujet"
                    className="block font-semibold text-gray-700 text-sm sm:text-base"
                  >
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="sujet"
                    name="sujet"
                    type="text"
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 
                       focus:border-[#c76140] focus:ring-2 focus:ring-[#c76140]/20 
                       transition-all outline-none text-sm sm:text-base"
                    placeholder="Objet de votre demande"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block font-semibold text-gray-700 text-sm sm:text-base"
                  >
                    Votre message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 
                       focus:border-[#c76140] focus:ring-2 focus:ring-[#c76140]/20 
                       transition-all outline-none resize-none text-sm sm:text-base"
                    placeholder="Décrivez votre projet ou votre besoin..."
                  />
                </div>

                {/* Bouton */}
                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 mt-4 bg-[#c76140] hover:bg-[#b15438] text-white font-bold text-base sm:text-lg 
                     rounded-xl transition-all duration-300 hover:scale-105 
                     shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Envoyer le message</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            </div>

            {/* Infos de contact à droite */}
            <div className="w-full py-6 sm:py-8 lg:py-10">
              <div className="space-y-4 sm:space-y-6 max-w-md mx-auto lg:mx-0">
                {/* Badge Téléphone */}
                <div className="w-full rounded-xl bg-gray-100 p-5 sm:p-6 flex flex-col items-center text-center space-y-3 sm:space-y-4">
                  <FaPhone className="text-[#c76140] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="font-semibold text-base sm:text-lg text-gray-900">
                    Numéro de téléphone
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base">
                    +216 54 665 760
                  </p>
                </div>

                {/* Badge Email */}
                <div className="w-full rounded-xl bg-gray-100 p-5 sm:p-6 flex flex-col items-center text-center space-y-3 sm:space-y-4">
                  <FaMailBulk className="text-[#c76140] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="font-semibold text-base sm:text-lg text-gray-900">
                    Email
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base break-all">
                    meiteyasmine90@gmail.com
                  </p>
                </div>

                {/* Badge Localisation */}
                <div className="w-full rounded-xl bg-gray-100 p-5 sm:p-6 flex flex-col items-center text-center space-y-3 sm:space-y-4">
                  <FaMapPin className="text-[#c76140] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="font-semibold text-base sm:text-lg text-gray-900">
                    Localisation
                  </h2>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Monastir, Tunisie
                  </p>
                </div>

                {/* Badge Réseaux sociaux */}
                <div className="w-full rounded-xl bg-gray-100 p-5 sm:p-6 space-y-3 sm:space-y-4">
                  <h2 className="font-semibold text-base sm:text-lg text-gray-900 text-center">
                    Réseaux sociaux
                  </h2>

                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <a
                      href="https://linkedin.com/in/votre-profil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#c76140] transition-all duration-300 group"
                    >
                      <FaLinkedin className="text-[#c76140] group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors" />
                    </a>

                    <a
                      href="https://facebook.com/votre-profil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#c76140] transition-all duration-300 group"
                    >
                      <FaFacebook className="text-[#c76140] group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors" />
                    </a>

                    <a
                      href="https://github.com/votre-profil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#c76140] transition-all duration-300 group"
                    >
                      <FaGithub className="text-[#c76140] group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors" />
                    </a>

                    <a
                      href="https://instagram.com/votre-profil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#c76140] transition-all duration-300 group"
                    >
                      <FaInstagram className="text-[#c76140] group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}