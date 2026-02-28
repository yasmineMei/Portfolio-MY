/**
 * Footer Option 2 : Layout Centré Minimaliste
 * Design épuré et moderne
 * couleur #c76141
 *
 * Pour les lien Termes & Conditions et Politique de Confidentialité, le contenu des liens
 *  seront affichés sous forme de modales refermables
 */
import { useState } from "react";
import { Facebook, Github, Instagram, Linkedin, X } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const closeModal = () => {
    setShowTermsModal(false);
    setShowPrivacyModal(false);
  };

  return (
    <>
      <footer className="relative text-white">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="relative block fill-white"
            ></path>
          </svg>

          <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 p-20">
            {/* About Section */}
            <div className="flex flex-col gap-5">
              <h2 className="text-xl text-orange-500">Meite Yasmine</h2>
              <p className="mt-10px">
                Développeuse web et mobile full-stack, passionnée par le code et
                l'expérience utilisateur.
              </p>
            </div>

            {/* Links Section */}
            <div className="flex flex-col gap-5 lg:ml-26">
              <ul>
                <li className="text-[16px] list-none font-bold text-orange-500 py-2 uppercase bottom-10">
                  Liens
                </li>
                <li className="mb-3 list-none">
                  <a href="/" className="">
                    Accueil
                  </a>
                </li>
                <li className="mb-3 list-none">
                  <a href="/about" className="">
                    À propos
                  </a>
                </li>
                <li className="mb-3 list-none">
                  <a href="/projet" className="">
                    Projets
                  </a>
                </li>
                <li className="bottom-10 list-none">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className="flex flex-col gap-5">
              <ul>
                <li className="text-[16px] list-none font-bold text-orange-500 py-2 uppercase bottom-10">
                  Legal
                </li>
                <li className="mb-3 list-none">
                  <button
                    onClick={() => setShowTermsModal(true)}
                    className="hover:text-orange-500 transition-colors duration-200"
                  >
                    Termes & Conditions
                  </button>
                </li>
                <li className="list-none">
                  <button
                    onClick={() => setShowPrivacyModal(true)}
                    className="hover:text-orange-500 transition-colors duration-200"
                  >
                    Politique de Confidentialité
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col gap-5 ml-20px">
              <ul>
                <li className="text-[16px] list-none font-bold text-orange-500 py-2 uppercase bottom-10">
                  Contact
                </li>
                <li className="mb-3 font-bold list-none">
                  Email : meiteyasmine90@gmail.com
                </li>
                <li className="font-bold list-none">
                  Télephone : +216 54 665 760
                </li>
              </ul>

              <div className="flex space-x-4">
                <a
                  href=""
                  className="w-9 h-9 flex items-center justify-center border-none bg-white rounded-full text-black hover:scale-110 transition-transform duration-200"
                >
                  <Github size={20}/>
                </a>
                <a
                  className="w-9 h-9 flex items-center justify-center border-none bg-white rounded-full text-black hover:scale-110 transition-transform duration-200"
                  href=""
                >
                  <Facebook size={20}/>
                </a>
                <a
                  className="w-9 h-9 flex items-center justify-center border-none bg-white rounded-full text-black hover:scale-110 transition-transform duration-200"
                  href=""
                >
                  <Linkedin size={20}/>
                </a>
                <a
                  className="w-9 h-9 flex items-center justify-center border-none bg-white rounded-full text-black hover:scale-110 transition-transform duration-200"
                  href=""
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h6 className="text-center text-black">
              &copy; {currentYear} Meite Yasmine — Tous droits réservés.
            </h6>
          </div>
        </div>
      </footer>

      {/* Modal pour Termes & Conditions */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-white/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4">
              <h2 className="text-xl font-bold text-[#c76141]">
                Termes & Conditions
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)] -mt-3.75">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    1. Acceptation des conditions
                  </h3>
                  <p className="text-sm">
                    En accédant à ce site web et en utilisant mes services, vous
                    acceptez d'être lié par ces termes et conditions. Si vous
                    n'acceptez pas l'intégralité des termes, vous ne devez pas
                    utiliser ce site.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    2. Services proposés
                  </h3>
                  <p className="text-sm">
                    Je propose des services de développement web et mobile
                    full-stack, incluant mais sans s'y limiter :
                  </p>
                  <ul className="text-sm list-disc pl-6 mt-2 space-y-1">
                    <li>Développement d'applications web</li>
                    <li>Création d'applications mobiles</li>
                    <li>Conception d'interfaces utilisateur</li>
                    <li>Maintenance et optimisation de sites existants</li>
                    <li>Consulting en développement logiciel</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    3. Propriété intellectuelle
                  </h3>
                  <p className="text-sm">
                    Tous les contenus présents sur ce site (textes, images,
                    logos, code source) sont ma propriété exclusive ou font
                    l'objet d'une licence d'utilisation. Toute reproduction sans
                    autorisation préalable est strictement interdite.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    4. Limitation de responsabilité
                  </h3>
                  <p className="text-sm">
                    Je m'efforce de maintenir ce site à jour et exempt
                    d'erreurs, mais je ne peux garantir l'exactitude complète
                    des informations. Je décline toute responsabilité pour les
                    dommages directs ou indirects résultant de l'utilisation de
                    ce site.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    5. Modification des conditions
                  </h3>
                  <p className="text-sm">
                    Je me réserve le droit de modifier ces termes et conditions
                    à tout moment. Les modifications prendront effet dès leur
                    publication sur cette page. Il est de votre responsabilité
                    de consulter régulièrement cette page.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    6. Droit applicable
                  </h3>
                  <p className="text-sm">
                    Ces termes et conditions sont régis par le droit français.
                    Tout litige relatif à l'utilisation de ce site sera soumis à
                    la compétence exclusive des tribunaux français.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal pour Politique de Confidentialité */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-white/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4">
              <h2 className="text-xl font-bold text-[#c76141]">
                Politique de Confidentialité
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto max-h-[calc(90vh-120px)] -mt-3.75">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Introduction
                  </h3>
                  <p className="text-sm">
                    Cette politique de confidentialité décrit comment je
                    collecte, utilise et protège vos informations personnelles
                    lorsque vous utilisez mon site web. Je suis engagée à
                    protéger votre vie privée.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Données collectées
                  </h3>
                  <p className="text-sm">
                    Je peux collecter les informations suivantes :
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                    <li>Nom et prénom</li>
                    <li>Adresse e-mail</li>
                    <li>Numéro de téléphone</li>
                    <li>Informations de projet</li>
                    <li>Données de navigation via Google Analytics</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Utilisation des données
                  </h3>
                  <p className="text-sm">
                    Les données collectées sont utilisées pour :
                  </p>
                  <ul className=" text-sm list-disc pl-6 mt-2 space-y-1">
                    <li>Répondre à vos demandes de contact</li>
                    <li>Vous fournir des services de développement</li>
                    <li>Améliorer l'expérience utilisateur du site</li>
                    <li>Envoyer des mises à jour (avec votre consentement)</li>
                    <li>Analyser l'utilisation du site via Google Analytics</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Protection des données
                  </h3>
                  <p className="text-sm">
                    Je mets en œuvre des mesures de sécurité appropriées pour
                    protéger vos informations personnelles contre tout accès,
                    modification, divulgation ou destruction non autorisés.
                    Cependant, aucune méthode de transmission sur Internet n'est
                    totalement sécurisée.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Cookies
                  </h3>
                  <p className="text-sm">
                    Ce site utilise des cookies pour améliorer votre expérience.
                    Les cookies sont de petits fichiers texte stockés sur votre
                    appareil. Vous pouvez désactiver les cookies dans les
                    paramètres de votre navigateur.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Vos droits
                  </h3>
                  <p className="text-sm">
                    Conformément au RGPD, vous avez le droit de :
                  </p>
                  <ul className="text-sm list-disc pl-6 mt-2 space-y-1">
                    <li>Accéder à vos données personnelles</li>
                    <li>Rectifier vos données inexactes</li>
                    <li>Demander l'effacement de vos données</li>
                    <li>Vous opposer au traitement de vos données</li>
                    <li>Limiter le traitement de vos données</li>
                    <li>Demander la portabilité de vos données</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Partage des données
                  </h3>
                  <p className="text-sm">
                    Je ne vends, n'échange ni ne transfère vos informations
                    personnelles à des tiers sans votre consentement, sauf si
                    requis par la loi ou pour fournir les services demandés.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Conservation des données
                  </h3>
                  <p className="text-sm">
                    Vos données personnelles sont conservées uniquement aussi
                    longtemps que nécessaire pour les finalités pour lesquelles
                    elles ont été collectées, conformément aux exigences
                    légales.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">
                    Contact
                  </h3>
                  <p className="text-sm">
                    Pour toute question concernant cette politique de
                    confidentialité ou pour exercer vos droits, vous pouvez me
                    contacter à :
                  </p>
                  <div className="text-sm mt-2 p-4 bg-gray-50 rounded">
                    <p className="font-semibold">Meite Yasmine</p>
                    <p>Email : meiteyasmine90@gmail.com</p>
                    <p>Téléphone : +216 54 665 760</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;