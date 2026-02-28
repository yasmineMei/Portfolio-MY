/**
 * Page Mes Projets
 *
 * Système de gestion hospitalier
 * Traduction de la langue des signes
 * Application Mobile de prise rendez-vous clinique
 */

import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  FaCode,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobileAlt,
  FaPython,
  FaHospital,
  FaSign,
  FaCalendarCheck,
} from "react-icons/fa";
import Hospital from "../../images/hospital.avif";
import SignLanguage from "../../images/sign.jpg";
import AppClinic from "../../images/app-clinic.jpg";

export const Route = createFileRoute("/_home/projet")({
  component: RouteComponent,
});

function RouteComponent() {

  
  // Données des projets
  const projects = [
    {
      id: 1,
      title: "Système de Gestion Hospitalier",
      category: "Application Web",
      description:
        "Plateforme complète de gestion hospitalière permettant la gestion des patients, des rendez-vous, des dossiers médicaux et des ressources hospitalières. Interface intuitive et sécurisée conforme aux normes RGPD.",
      image: Hospital,
      technologies: [
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "MongoDB", icon: FaDatabase, color: "text-green-600" },
        { name: "Express", icon: FaCode, color: "text-gray-600" },
      ],
      features: [
        "Gestion complète des patients et dossiers médicaux",
        "Système de prise de rendez-vous en ligne",
        "Tableau de bord pour le personnel médical",
        "Gestion des ressources et du personnel",
        "Rapports et statistiques en temps réel",
      ],
      
      icon: FaHospital,
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      links: {
        demo: "#",
        github: "#",
      },
      details: "/projet/hospital-management", // Lien vers une page détaillée
    },
    {
      id: 2,
      title: "Traduction Langue des Signes",
      category: "Intelligence Artificielle",
      description:
        "Application innovante utilisant l'intelligence artificielle et la vision par ordinateur pour traduire la langue des signes en temps réel. Facilite la communication avec les personnes malentendantes.",
      image: SignLanguage,
      technologies: [
        { name: "Python", icon: FaPython, color: "text-yellow-500" },
        { name: "TensorFlow", icon: FaCode, color: "text-orange-500" },
        { name: "React", icon: FaReact, color: "text-blue-500" },
        { name: "WebRTC", icon: FaCode, color: "text-purple-500" },
      ],
      features: [
        "Reconnaissance gestuelle en temps réel",
        "Traduction instantanée en texte et audio",
        "Support de plusieurs langues des signes",
        "Interface accessible et intuitive",
        "Mode d'apprentissage intégré",
      ],
     
      icon: FaSign,
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      links: {
        demo: "#",
        github: "#",
      },
      details: "/projet/sign-language", // Lien vers une page détaillée
    },
    {
      id: 3,
      title: "Application Mobile Clinique",
      category: "Application Mobile",
      description:
        "Application mobile intuitive permettant aux patients de prendre rendez-vous en ligne, consulter leurs dossiers médicaux et recevoir des rappels automatiques. Interface moderne et facile à utiliser.",
      image: AppClinic,
      technologies: [
        { name: "React Native", icon: FaMobileAlt, color: "text-blue-500" },
        { name: "Express", icon: FaNodeJs, color: "text-green-500" },
        { name: "Firebase", icon: FaDatabase, color: "text-yellow-600" },
        { name: "Node.js", icon: FaCode, color: "text-green-600" },
      ],
      features: [
        "Prise de rendez-vous en quelques clics",
        "Consultation des dossiers médicaux",
        "Notifications et rappels automatiques",
        "Historique des consultations",
        "Chat en direct avec le personnel",
      ],
      
      icon: FaCalendarCheck,
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      links: {
        demo: "#",
        github: "#",
      },
      details: "/projet/clinic-app", // Lien vers une page détaillée
    },
  ];

  return (
    <main className="flex-1  dark:bg-gray-900">
      {/* Section Hero */}
      <section className="w-full px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Mes <span className="text-[#c76140]">Projets</span>
          </h1>

          <div className="w-16 h-1 bg-gradient-to-r from-[#c76140] to-orange-500 mx-auto rounded-full mb-6 md:mb-8"></div>

          <p className="text-white dark:text-gray-300 font-medium max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-4">
            Découvrez mes réalisations les plus significatives qui démontrent
            mon expertise en développement Full-Stack et mes capacités à créer
            des solutions innovantes.
          </p>
        </div>
      </section>

      {/* Section Grille de projets */}
      <section className="w-full px-4 py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Image du projet */}
                <div className="h-48 md:h-56 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badge Catégorie */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${project.gradient}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-5 md:p-6 space-y-4">
                  {/* Titre et icône */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#c76140] transition-colors">
                      {project.title}
                    </h3>
                    <project.icon
                      className={`w-5 h-5 md:w-6 md:h-6 ${project.gradient.replace("from-", "text-").split(" ")[0]}`}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium flex items-center gap-1"
                      >
                        <tech.icon className={`w-3 h-3 ${tech.color}`} />
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex gap-3 pt-4">
                    <Link
                      to={project.details}
                      className="flex-1 py-2.5 text-center border-2 border-[#c76140] text-[#c76140] rounded-lg font-semibold hover:bg-[#c76140] hover:text-white transition-all duration-300 text-sm md:text-base"
                    >
                      Voir la demo
                    </Link>

                    <div className="flex gap">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-[#c76140] hover:text-[#c76140] transition-all duration-300"
                        aria-label="Voir le code source"
                      >
                        <FaGithub className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      
    </main>
  );
}
