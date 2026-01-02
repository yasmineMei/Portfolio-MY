/**
 * Page Experience 
 * 
 * Clinique Médicale Eniazou 
 * Abidjan, Côte d'Ivoire 
 * 
 * TOPECI 
 * Abidjan, Côte d'Ivoire
 * 
 * Mettre les images des personnes qui me recommandent 
 * Jean Marc Bonny - Fondateur de TOPECI
 * Samir Belaid - Enseignant universitaire chez Faculté des Sciences Monastir
 */

import { createFileRoute } from "@tanstack/react-router";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaQuoteLeft,
  FaStar,
  FaLinkedin,
  FaCode,
  FaLaptopCode,
  FaDatabase,
} from "react-icons/fa";
import JeanMarc from "@/images/jean_marc.jpg";
import Belaid from "@/images/belaid.jfif";

export const Route = createFileRoute("/_home/experience")({
  component: RouteComponent,
});

function RouteComponent() {
  // Données des expériences professionnelles
  const experiences = [
    {
      id: 1,
      company: "TOPECI",
      position: "Développeuse Full-Stack",
      location: "Abidjan, Côte d'Ivoire",
      period: "2024 - Présent",
      type: "CDI",
      description:
        "Développement d'une plateforme e-commerce complète dédiée à la promotion et à la préservation du patrimoine culturel africain à travers des produits éducatifs innovants.",
      achievements: [
        "Conception et développement d'une application e-commerce avec React et Node.js",
        "Intégration de systèmes de paiement multi-devises (FCFA, EUR)",
        "Implémentation de moyens de paiement mobile locaux (Wave, Orange Money)",
        "Gestion de base de données MongoDB avec Prisma ORM",
        "Déploiement et maintenance sur AWS",
      ],
      technologies: [
        { name: "React", icon: FaCode, color: "blue" },
        { name: "Node.js", icon: FaLaptopCode, color: "green" },
        { name: "MongoDB", icon: FaDatabase, color: "purple" },
        { name: "Prisma", icon: FaDatabase, color: "cyan" },
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-white",
    },
    {
      id: 2,
      company: "Clinique Médicale Eniazou",
      position: "Stagiaire Développeuse",
      location: "Abidjan, Côte d'Ivoire",
      period: "2023 - 2024",
      type: "Stage",
      description:
        "Contribution à la digitalisation des processus de la clinique avec développement d'outils de gestion modernes pour les patients et le personnel médical.",
      achievements: [
        "Développement d'une application de gestion des rendez-vous patients",
        "Création d'un système de gestion des dossiers médicaux numériques",
        "Formation du personnel médical aux nouveaux outils digitaux",
        "Amélioration de l'efficacité opérationnelle de 40%",
      ],
      technologies: [
        { name: "React", icon: FaCode, color: "blue" },
        { name: "Express", icon: FaLaptopCode, color: "green" },
        { name: "PostgreSQL", icon: FaDatabase, color: "blue" },
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-white",
    },
  ];

  // Données des recommandations
  const testimonials = [
    {
      id: 1,
      name: "Jean Marc Bonny",
      position: "Fondateur de TOPECI",
      company: "TOPECI",
      image: JeanMarc,
      text: "Yasmine est une développeuse talentueuse et passionnée. Son travail sur notre plateforme e-commerce a été exceptionnel. Elle a su comprendre nos besoins et transformer notre vision en une solution technique performante et élégante.",
      rating: 5,
      linkedin: "#",
    },
    {
      id: 2,
      name: "Samir Belaid",
      position: "Enseignant Universitaire",
      company: "Faculté des Sciences de Monastir",
      image: Belaid,
      text: "Étudiante brillante et rigoureuse, Yasmine a toujours démontré une grande capacité d'apprentissage et d'adaptation. Son expertise technique et sa créativité en font une développeuse Full-Stack de grande qualité.",
      rating: 5,
      linkedin: "#",
    },
  ];

  return (
    <main className="flex-1  dark:bg-gray-900">
      {/* Section Hero */}
      <section className="w-full px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#c76140] to-orange-500 rounded-2xl mb-6">
            <FaBriefcase className="text-white w-10 h-10" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Mon <span className="text-[#c76140]">Expérience</span>
          </h1>

          <div className="w-20 h-1 bg-[#c76140] mx-auto rounded-full mb-6"></div>

          <p className="text-gray-600 dark:text-gray-300 font-medium max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Parcours professionnel marqué par des projets concrets et des
            contributions significatives dans le développement web et mobile.
          </p>
        </div>
      </section>

      {/* Section Expériences Professionnelles */}
      <section className="w-full px-4 py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Expériences{" "}
              <span className="text-[#c76140]">Professionnelles</span>
            </h2>
            <div className="w-16 h-1 bg-[#c76140] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={`${exp.bgColor} dark:from-gray-800 dark:to-gray-800/50 
                          rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 
                          hover:-translate-y-2 border border-gray-100 dark:border-gray-700`}
              >
                {/* En-tête */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <FaBriefcase className="text-white w-8 h-8" />
                  </div>
                  <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-md">
                    {exp.type}
                  </span>
                </div>

                {/* Poste */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {exp.position}
                </h3>

                {/* Entreprise */}
                <p className="text-xl font-semibold text-[#c76140] dark:text-orange-400 mb-4">
                  {exp.company}
                </p>

                {/* Localisation et Période */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Réalisations */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    Réalisations clés :
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div
                          className={`w-1.5 h-1.5 bg-gradient-to-br ${exp.color} rounded-full mt-2 flex-shrink-0`}
                        ></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                    Technologies utilisées :
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => {
                      const TechIcon = tech.icon;
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                        >
                          <TechIcon className="w-4 h-4" />
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Recommandations */}
      <section className="w-full px-4 py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Recommandations{" "}
              <span className="text-[#c76140]">Professionnelles</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Ce que mes collaborateurs et mentors disent de mon travail
            </p>
            <div className="w-16 h-1 bg-[#c76140] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 
                   rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 
                   hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <FaQuoteLeft className="text-[#c76140]/20 w-12 h-12" />
                </div>

                {/* Photo et infos */}
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#c76140] shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#c76140] dark:text-orange-400 mb-1">
                      {testimonial.position}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <FaStar key={idx} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>

                {/* Texte de recommandation */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* LinkedIn */}
                <a
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                  <span>Voir le profil LinkedIn</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Stats */}
      <section className="w-full px-4 py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-[#c76140] mb-2">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Années d'expérience
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-[#c76140] mb-2">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Entreprises
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-[#c76140] mb-2">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Projets réalisés
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-[#c76140] mb-2">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Satisfaction client
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="w-full px-4 py-16 md:py-20 bg-gradient-to-br from-[#c76140] to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vous avez un projet en tête ?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Discutons de vos besoins et créons ensemble quelque chose
            d'exceptionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#c76140] rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg group">
              <span>Me Contacter</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#c76140] transition-all duration-300">
              Télécharger mon CV
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}