import { createFileRoute } from "@tanstack/react-router";
import { useState, FormEvent, ChangeEvent } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaMailBulk,
  FaMapPin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export const Route = createFileRoute("/_home/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire avec timeout
    try {
      // Ici vous pourriez appeler une API réelle
      // Exemple: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulation délai réseau

      console.log("Formulaire envoyé:", formData);
      setSubmitSuccess(true);

      // Réinitialiser le formulaire après succès
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Cacher le message de succès après 5 secondes
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.subject.trim() !== "" &&
      formData.message.trim() !== ""
    );
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

          <p className="text-white dark:text-gray-300 font-medium max-w-2xl mx-auto mt-2 text-sm sm:text-base">
            Une question ? Un projet ? N'hésitez pas à me contacter, je vous
            répondrai dans les plus brefs délais.
          </p>
        </div>
      </section>

      {/* Message de succès */}
      {submitSuccess && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  <span className="font-medium">
                    Message envoyé avec succès !
                  </span>{" "}
                  Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section Formulaire et Infos de Contact */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Formulaire à gauche */}
            <div className="w-full p-6 sm:p-8 md:p-10 ">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Envoyez-moi un message
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base">
                Remplissez le formulaire ci-dessous et je vous répondrai sous
                24h.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Nom */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                  >
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-700 
                       rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                       focus:border-[#c76140] focus:ring-2 focus:ring-[#c76140]/20 
                       transition-all outline-none text-sm sm:text-base"
                    placeholder="Votre nom et prénom"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-700 
                       rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                       focus:border-[#c76140] focus:ring-2 focus:ring-[#c76140]/20 
                       transition-all outline-none text-sm sm:text-base"
                    placeholder="exemple@domaine.com"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Sujet */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base"
                  >
                    Sujet <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-700 
                       rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                       focus:border-[#c76140] focus:ring-2 focus:ring-[#c76140]/20 
                       transition-all outline-none text-sm sm:text-base"
                    placeholder="Objet de votre demande"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 dark:border-gray-700 
                       rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                       focus:border-[#c76140] focus:ring-2 focus:ring-[#c76140]/20 
                       transition-all outline-none resize-none text-sm sm:text-base"
                    placeholder="Décrivez votre projet ou votre besoin..."
                    disabled={isSubmitting}
                  />
                </div>

                {/* Bouton */}
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  className={`w-full py-3 sm:py-4 mt-4 text-white font-bold text-base sm:text-lg 
                    rounded-xl transition-all duration-300 hover:scale-105 
                    shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group
                    ${
                      isSubmitting || !isFormValid()
                        ? "bg-[#c76140] cursor-not-allowed"
                        : "bg-gray-400 hover:bg-[#b15438]"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Infos de contact à droite */}
            <div className="w-full py-6 sm:py-8 lg:py-10">
              <div className="space-y-4 sm:space-y-6 max-w-md mx-auto lg:mx-0">
                {/* Badge Téléphone */}
                <div className="w-full rounded-xl bg-gray-100 dark:bg-gray-900 p-5 sm:p-6 flex flex-col items-center text-center space-y-3 sm:space-y-4 shadow-md">
                  <FaPhone className="text-[#c76140] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white">
                    Numéro de téléphone
                  </h2>
                  <a
                    href="tel:+21654665760"
                    className="text-gray-700 dark:text-gray-300 text-sm sm:text-base hover:text-[#c76140] dark:hover:text-[#e07b5c] transition-colors"
                  >
                    +216 54 665 760
                  </a>
                </div>

                {/* Badge Email */}
                <div className="w-full rounded-xl bg-gray-100 dark:bg-gray-900 p-5 sm:p-6 flex flex-col items-center text-center space-y-3 sm:space-y-4 shadow-md">
                  <FaMailBulk className="text-[#c76140] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white">
                    Email
                  </h2>
                  <a
                    href="mailto:meiteyasmine90@gmail.com"
                    className="text-gray-700 dark:text-gray-300 text-sm sm:text-base break-all hover:text-[#c76140] dark:hover:text-[#e07b5c] transition-colors"
                  >
                    meiteyasmine90@gmail.com
                  </a>
                </div>

                {/* Badge Localisation */}
                <div className="w-full rounded-xl bg-gray-100 dark:bg-gray-900 p-5 sm:p-6 flex flex-col items-center text-center space-y-3 sm:space-y-4 shadow-md">
                  <FaMapPin className="text-[#c76140] w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white">
                    Localisation
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    Monastir, Tunisie
                  </p>
                </div>

                {/* Badge Réseaux sociaux */}
                <div className="w-full rounded-xl bg-gray-100 dark:bg-gray-900 p-5 sm:p-6 space-y-3 sm:space-y-4 shadow-md">
                  <h2 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white text-center">
                    Réseaux sociaux
                  </h2>

                  <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center 
                        hover:bg-[#c76140] dark:hover:bg-[#c76140] transition-all duration-300 group shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-[#c76140] dark:text-gray-300 group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors" />
                    </a>

                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center 
                        hover:bg-[#c76140] dark:hover:bg-[#c76140] transition-all duration-300 group shadow-sm"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-[#c76140] dark:text-gray-300 group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors" />
                    </a>

                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center 
                        hover:bg-[#c76140] dark:hover:bg-[#c76140] transition-all duration-300 group shadow-sm"
                      aria-label="GitHub"
                    >
                      <FaGithub className="text-[#c76140] dark:text-gray-300 group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors" />
                    </a>

                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center 
                        hover:bg-[#c76140] dark:hover:bg-[#c76140] transition-all duration-300 group shadow-sm"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-[#c76140] dark:text-gray-300 group-hover:text-white w-5 h-5 sm:w-6 sm:h-6 transition-colors" />
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
