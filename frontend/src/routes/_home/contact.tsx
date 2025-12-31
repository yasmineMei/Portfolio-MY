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
        className="flex flex-col items-center justify-center w-full mx-auto px-4 
        lg:mt-3 md:mt-24 min-h-60"
      >
        <div className="max-w-xl text-center">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez-
            <span className="text-[#c76140] dark:text-[#e07b5c]">Moi</span>
          </h1>

          <p className="text-orange-300 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter, je vous
            répondrai dans les plus brefs délais.
          </p>
          <div className="w-20 h-1 bg-[#c76140] mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      {/* Section Formulaire et Infos de Contact */}
      <section className="py-1 px-4 bg-white">
        <div className="max-w-7xl lg:mx-30 justify-center items-center ">
          <div className="grid lg:grid-cols-2 gap-6 w-300 ">
            {/* Formulaire à gauche */}
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Envoyez-moi un message
              </h3>
              <p className="text-gray-600 mb-4">
                Remplissez le formulaire ci-dessous et je vous répondrai sous
                24h.
              </p>

              <form onSubmit={handleSubmit} className="space-y-2">
                {/* Nom */}
                <div className="space-y-3 ">
                  <label
                    htmlFor="nom"
                    className="block font-semibold text-gray-700"
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
                    className="w-full  px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 
                       focus:border-[#c76140] focus:ring-2 focus:ring-[#c76140]/20 
                       transition-all outline-none"
                    placeholder="Votre nom et prénom"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-gray-700"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 
                       focus:border-[#c76140] focus:ring-2 focus:ring-[#c76140]/20 
                       transition-all outline-none"
                    placeholder="exemple@domaine.com"
                  />
                </div>

                {/* Sujet */}
                <div className="space-y-2">
                  <label
                    htmlFor="sujet"
                    className="block font-semibold text-gray-700"
                  >
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="sujet"
                    name="sujet"
                    type="text"
                    required
                    className="w-full  px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 
                       focus:border-[#c76140] focus:ring-2 focus:ring-[#c76140]/20 
                       transition-all outline-none"
                    placeholder="Objet de votre demande"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block font-semibold text-gray-700"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 
                       focus:border-[#c76140] focus:ring-2 focus:ring-[#c76140]/20 
                       transition-all outline-none resize-none"
                    placeholder="Décrivez votre projet ou votre besoin..."
                  />
                </div>

                {/* Bouton */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#c76140] hover:bg-[#b15438] text-white font-bold text-lg 
                     rounded-xl transition-all duration-300 hover:scale-105 
                     shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Envoyer le message</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            <div className="flex-1 py-10 max-w-md w-full lg:w-auto">
              <div className="space-y-6">
                {/* Badge Téléphone */}
                <div className="w-full lg:w-95 rounded-xl bg-gray-100 p-6 flex flex-col items-center text-center space-y-4">
                  <div className="">
                    <FaPhone className="text-[#c76140] w-6 h-6" />
                  </div>
                  <h2 className="font-semibold text-lg text-gray-900">
                    Numéro de téléphone
                  </h2>
                  <p className="text-gray-700">+216 54 665 760</p>
                </div>

                {/* Badge Email */}
                <div className="w-full lg:w-95 rounded-xl bg-gray-100 p-6 flex flex-col items-center text-center space-y-4">
                  <div className="">
                    <FaMailBulk className="text-[#c76140] w-6 h-6" />
                  </div>
                  <h2 className="font-semibold text-lg text-gray-900">Email</h2>
                  <p className="text-gray-700">meiteyasmine90@gmail.com</p>
                </div>

                {/* Badge Localisation */}
                <div className="w-full lg:w-95 rounded-xl bg-gray-100 p-6 flex flex-col items-center text-center space-y-4">
                  <div className="">
                    <FaMapPin className="text-[#c76140] w-6 h-6" />
                  </div>
                  <h2 className="font-semibold text-lg text-gray-900">
                    Localisation
                  </h2>
                  <p className="text-gray-700">Monastir, Tunisie</p>
                </div>

                <div className="w-full lg:w-95 rounded-xl bg-gray-100 p-6 space-y-4">
                  <h2 className="font-semibold text-lg text-gray-900 text-center">
                    Réseaux sociaux
                  </h2>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href="https://linkedin.com/in/votre-profil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#c76140] hover:text-white transition-all duration-300 group"
                    >
                      <FaLinkedin className="text-[#c76140] group-hover:text-white w-6 h-6 transition-colors" />
                    </a>
                    <a
                      href="https://facebook.com/votre-profil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#c76140] hover:text-white transition-all duration-300 group"
                    >
                      <FaFacebook className="text-[#c76140] group-hover:text-white w-6 h-6 transition-colors" />
                    </a>
                    <a
                      href="https://github.com/votre-profil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#c76140] hover:text-white transition-all duration-300 group"
                    >
                      <FaGithub className="text-[#c76140] group-hover:text-white w-6 h-6 transition-colors" />
                    </a>
                    <a
                      href="https://instagram.com/votre-profil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white rounded-xl flex items-center justify-center hover:bg-[#c76140] hover:text-white transition-all duration-300 group"
                    >
                      <FaInstagram className="text-[#c76140] group-hover:text-white w-6 h-6 transition-colors" />
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
