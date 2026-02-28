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
  { label: "Accueil", href: "/", icon: FaHome },
  { label: "À Propos", href: "/about", icon: FaUser },
  { label: "Projets", href: "/projet", icon: FaBriefcase },
  { label: "Education", href: "/education", icon: FaBookOpen },
  { label: "Experience", href: "/experience", icon: FaBuilding },
  { label: "Contact", href: "/contact", icon: FaMailBulk },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Fonction améliorée pour le téléchargement du CV
  const handleDownloadCV = () => {
    try {
      // IMPORTANT: Si votre fichier est dans le dossier public/
      // Il faut le mettre dans public/ et y accéder directement sans /public

      // Option 1: Téléchargement direct (si fichier dans public/)
      const cvUrl = "/assets/doc/CV_yasmine_compressed.pdf";

      // Option 2: Alternative si dans un sous-dossier
      // const cvUrl = "/doc/CV_yasmine_compressed.pdf";

      console.log("Tentative de téléchargement depuis:", cvUrl);

      // Créer un lien temporaire
      const link = document.createElement("a");
      link.href = cvUrl;
      link.download = "CV_Yasmine_Meite_Developpeuse_Fullstack.pdf";
      link.target = "_blank"; // Permet la prévisualisation dans un nouvel onglet

      // Pour forcer le téléchargement sans prévisualisation
      // link.setAttribute('download', 'CV_Yasmine_Meite.pdf');

      // Ajouter au DOM et déclencher le clic
      document.body.appendChild(link);
      link.click();

      // Nettoyer
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);

      // Option alternative: ouvrir dans un nouvel onglet pour prévisualisation
      // window.open(cvUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error("Erreur lors du téléchargement du CV :", err);
      // Message d'erreur plus informatif
      alert(
        "Impossible de télécharger le CV. Vérifiez que le fichier existe à l'emplacement : /public/assets/doc/CV_yasmine_compressed.pdf"
      );
    }
  };

  // Vérifier l'existence du fichier CV
  const checkCVExists = async () => {
    try {
      // Testez plusieurs chemins possibles
      const possiblePaths = [
        "/assets/doc/CV_yasmine_compressed.pdf",
        "/assets/doc/CV_yasmine.pdf",
        "/doc/CV_yasmine_compressed.pdf",
        "/CV_yasmine_compressed.pdf",
      ];

      for (const path of possiblePaths) {
        const response = await fetch(path);
        if (response.ok) {
          console.log(`✅ Fichier CV trouvé à : ${path}`);
          return path;
        }
      }

      console.warn("❌ Aucun fichier CV trouvé aux emplacements testés");
      return null;
    } catch (error) {
      console.warn("Impossible de vérifier le fichier CV:", error);
      return null;
    }
  };

  useEffect(() => {
    // Vérifier l'existence du fichier au chargement
    const verifyCV = async () => {
      const cvPath = await checkCVExists();
      if (cvPath) {
        console.log("CV disponible à:", cvPath);
      }
    };
    verifyCV();
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Titre */}
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
                  className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#c76140] to-[#ff8c47] rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>

              <div className="hidden sm:block">
                <h3 className="text-black text-xl font-bold bg-gradient-to-r from-[#c76140] to-[#ff6c17] bg-clip-text text-transparent">
                  Meite Yasmine
                </h3>
                <p className="text-xs text-gray-600">Développeuse Fullstack</p>
              </div>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#c76140] transition-colors group"
                activeProps={{
                  className: "!text-[#c76140] font-semibold",
                }}
                activeOptions={{ exact: item.href === "/" }}
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#c76140] transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            ))}
          </nav>

          {/* Bouton Télécharger CV Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleDownloadCV}
              className="px-4 py-2 text-white bg-gradient-to-r from-[#c76141] to-[#e07b5c] 
                rounded-lg hover:from-[#b55637] hover:to-[#c76141] transition-all 
                duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              <span className="font-semibold">Télécharger CV</span>
            </button>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-gray-700"></span>
                <span className="block w-6 h-0.5 bg-gray-700"></span>
                <span className="block w-4 h-0.5 bg-gray-700 ml-auto"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Overlay pour mobile */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-white to-gray-50 shadow-2xl z-50 md:hidden 
          transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        {/* En-tête du menu mobile */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <div>
              <h3 className="text-lg font-bold text-gray-900">Menu</h3>
              <p className="text-xs text-gray-500">Navigation</p>
            </div>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Navigation Mobile */}
        <nav className="p-6">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gradient-to-r hover:from-[#c76140]/10 hover:to-[#ff8c47]/5 hover:text-[#c76140] transition-all group"
                    activeProps={{
                      className:
                        "bg-gradient-to-r from-[#c76140]/10 to-[#ff8c47]/5 text-[#c76140] font-semibold",
                    }}
                    activeOptions={{ exact: item.href === "/" }}
                  >
                    <Icon className="w-5 h-5 text-[#c76140] group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-gray-900 group-hover:text-[#c76140]">
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Bouton Télécharger CV Mobile */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handleDownloadCV}
              className="w-full py-3 text-white bg-gradient-to-r from-[#c76141] to-[#e07b5c] 
                rounded-lg hover:from-[#b55637] hover:to-[#c76141] transition-all 
                duration-300 shadow-md active:scale-95 flex items-center justify-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="font-semibold">Télécharger CV</span>
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              PDF - 1.2 MB
            </p>
          </div>
        </nav>

        {/* Footer du menu mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
          <div className="text-center">
            <p className="text-sm font-medium text-gray-900">Meite Yasmine</p>
            <p className="text-xs text-gray-500 mt-1">Développeuse Fullstack</p>
            <p className="text-xs text-gray-400 mt-3">
              © {new Date().getFullYear()} Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
