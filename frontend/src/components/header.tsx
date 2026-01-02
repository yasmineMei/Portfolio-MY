import { useState, useEffect } from "react";
import { X } from "lucide-react";
import {
  FaMailBulk,
  FaHome,
  FaBookOpen,
  FaUser,
  FaBriefcase,
  FaBuilding,
} from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import Logo from "../images/logo.png";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "À Propos", href: "/about" },
  { label: "Projets", href: "/projet" },
  { label: "Education", href: "/education" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fonction corrigée pour le téléchargement du CV
  const handleDownloadCV = () => {
    try {
      // Si le fichier est dans public/assets/doc/
      const cvUrl = "/assets/doc/CV_yasmine.pdf";

      // Créer un lien temporaire
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "CV_Yasmine_Meite.pdf"; // Nom personnalisé pour le téléchargement
      link.target = "_blank"; // Pour ouvrir dans un nouvel onglet si nécessaire

      // Ajouter au DOM et déclencher le clic
      document.body.appendChild(link);
      link.click();

      // Nettoyer
      document.body.removeChild(link);

      // Alternative: ouvrir dans un nouvel onglet pour prévisualisation
      // window.open(cvUrl, '_blank');
    } catch (err) {
      console.error("Erreur lors du téléchargement du CV :", err);
      alert("Impossible de télécharger le CV. Veuillez réessayer.");
    }
  };

  // Vérifier que le fichier existe (optionnel)
  const checkCVExists = async () => {
    try {
      const response = await fetch("/assets/doc/CV_yasmine.pdf");
      if (!response.ok) {
        console.warn("Le fichier CV n'existe pas à l'emplacement spécifié");
      }
    } catch (error) {
      console.warn("Impossible de vérifier le fichier CV:", error);
    }
  };

  useEffect(() => {
    // Vérifier l'existence du fichier au chargement
    checkCVExists();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le défilement quand le menu mobile est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`bg-transparent top-0 z-50 transition-all duration-300 flex flex-col min-h-screen${
        isScrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16 md:h-20 text-center">
          {/* Logo / Titre amélioré */}
          <Link
            to="/"
            className="flex items-center group"
            aria-label="Retour à l'accueil"
          >
            <div className="relative flex items-center space-x-3">
              <div className="relative">
                <img
                  src={Logo}
                  alt="Logo Portfolio"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -inset-1 bg-linear-to-r from-[#c76140] to-[#ff8c47] rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>

              <h3 className="text-black text-xl md:text-2xl sm:text-xl bg-linear-to-r from-[#c76140] to-[#ff6c17] bg-clip-text ">
                Meite Yasmine
              </h3>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex flex-1 justify-end">
            <div className="flex items-center gap-4 lg:gap-2 mr-4 md:mr-6 ">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="relative px-2 py-2 text-sm font-medium text-black h transition-colors group"
                  activeProps={{
                    className: "!text-[#c76140] font-semibold",
                  }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c76140] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Bouton Télécharger CV Desktop */}
          <button
            onClick={handleDownloadCV}
            className="hidden md:flex justify-center items-center text-center w-35 h-9
            text-white bg-[#c76141] rounded-lg cursor-pointer hover:bg-[#b55637] transition-colors"
          >
            Télécharger CV
          </button>

          {/* Hamburger Menu Button Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger-button md:hidden p-2 rounded-lg transition-colors mr-4 cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-transparent cursor-pointer" />
            ) : (
              <div className="text-lg cursor-pointer"> Menu </div>
            )}
          </button>
        </div>
      </div>

      {/* Overlay sombre quand le menu est ouvert */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Navigation Mobile - Slide depuis la droite */}
      <div
        className={`mobile-menu fixed right-0 h-full w-75 max-w-sm bg-white/8 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header du menu mobile */}
        <div className="flex items-center justify-between p-6 top text-center">
          <h3 className="text-2xl text-orange-500 text center ml-14px">Menu</h3>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-white cursor-pointer" strokeWidth={3} />
          </button>
        </div>

        {/* Navigation Centré */}
        <nav className="p-6 space-y-3 flex flex-col items-center">
          <ul className="space-y-1">
            <li className="py-4 list-none flex items-center justify-start">
              <FaHome className="h-5 w-5 mr-4 text-orange-500" />
              <a href="/" className="text-white font-bold">
                Accueil
              </a>
            </li>

            <li className="list-none flex items-center justify-start">
              <FaUser className="w-5 h-5 mr-4 text-orange-500" />
              <a href="/about" className="text-white font-bold">
                À Propos
              </a>
            </li>

            <li className="py-5 list-none flex items-center justify-start">
              <FaBriefcase className="w-5 h-5 mr-4 text-orange-500" />
              <a href="/projet" className="text-white font-bold">
                Projets
              </a>
            </li>

            <li className="list-none flex items-center justify-start">
              <FaBookOpen className="w-5 h-5 mr-4 text-orange-500" />
              <a href="/education" className="text-white font-bold">
                Education
              </a>
            </li>

            <li className="py-5 list-none flex items-center justify-start">
              <FaBuilding className="w-5 h-5 mr-4 text-orange-500" />
              <a href="/experience" className="text-white font-bold">
                Expérience
              </a>
            </li>

            <li className="list-none flex items-center justify-start">
              <FaMailBulk className="w-5 h-5 mr-4 text-orange-500" />
              <a href="/contact" className="text-white font-bold">
                Contact
              </a>
            </li>
          </ul>

          {/* Bouton Télécharger CV Mobile */}
          <button
            onClick={handleDownloadCV}
            className="w-full h-9 text-white font-bold bg-[#c76141] rounded-lg hover:bg-[#b55637] transition-colors mt-5"
          >
            Télécharger CV
          </button>
        </nav>

        {/* Footer du menu mobile avec infos supplémentaires */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 from-[#ff6c17]/5 to-[#ff8c47]/5">
          <p className="text-sm text-white text-center">
            © 2025 Mariama Yasmine Meite
          </p>
        </div>
      </div>
    </header>
  );
}
