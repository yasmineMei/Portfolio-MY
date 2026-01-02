/**
 * Page Education
 *
 * Cette page décrit mon parcours scolaire
 * Baccalauréat Scientifique mention Bien Groupe Sainte Foi Abidjan
 * Licence Génie Logiciel et système d'information mention Assez-bien Faculté des Sciences de Monastir
 *
 * Certificats obtenus
 */

import { createFileRoute } from "@tanstack/react-router";
import {
  FaGraduationCap,
  FaCertificate,
  FaAward,
  FaUniversity,
  FaSchool,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

export const Route = createFileRoute("/_home/education")({
  component: RouteComponent,
});

function RouteComponent() {
  // Données du parcours académique
  const education = [
    {
      id: 1,
      degree: "Licence en Génie Logiciel et Système d'Information",
      institution: "Faculté des Sciences de Monastir",
      location: "Monastir, Tunisie",
      period: "2021 - 2024",
      mention: "Mention Assez Bien",
      description:
        "Formation approfondie en développement logiciel, bases de données, génie logiciel et systèmes d'information.",
      highlights: [
        "Développement d'applications web et mobile",
        "Conception et gestion de bases de données",
        "Architecture logicielle et design patterns",
        "Gestion de projets informatiques",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      icon: FaUniversity,
    },
    {
      id: 2,
      degree: "Baccalauréat Scientifique",
      institution: "Groupe Sainte Foi",
      location: "Abidjan, Côte d'Ivoire",
      period: "2020 - 2021",
      mention: "Mention Bien",
      description:
        "Diplôme d'études secondaires scientifiques avec une solide base en mathématiques et sciences.",
      highlights: [
        "Mathématiques appliquées",
        "Sciences physiques",
        "Algorithmique de base",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      icon: FaSchool,
    },
  ];

  // Données des certificats
  const certificates = [
    {
      id: 1,
      title: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2023",
      icon: FaCertificate,
      color: "blue",
    },
    {
      id: 2,
      title: "Node.js - Backend Development",
      issuer: "Coursera",
      date: "2023",
      icon: FaCertificate,
      color: "green",
    },
    {
      id: 3,
      title: "MongoDB Certification",
      issuer: "MongoDB University",
      date: "2023",
      icon: FaCertificate,
      color: "purple",
    },
    {
      id: 4,
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      icon: FaCertificate,
      color: "orange",
    },
  ];

  return (
    <main className="flex-1  dark:bg-gray-900">
      {/* Section Hero */}
      <section className="w-full px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Mon Parcours <span className="text-[#c76140]">Académique</span>
          </h1>

          <div className="w-20 h-1 bg-[#c76140] mx-auto rounded-full mb-6"></div>

          <p className="text-white dark:text-gray-300 font-medium max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Un parcours académique construit à travers des formations solides et
            une montée progressive en compétences dans le développement web et
            mobile.
          </p>
        </div>
      </section>

      {/* Section Parcours Académique */}
      <section className="w-full px-4 py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Formation <span className="text-[#c76140]">Universitaire</span>
            </h2>
            <div className="w-16 h-1 bg-[#c76140] mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Ligne verticale */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#c76140] to-orange-300 transform -translate-x-1/2"></div>

            <div className="space-y-12 md:space-y-16">
              {education.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8`}
                  >
                    {/* Point sur la timeline */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#c76140] rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                    {/* Espace vide pour équilibrer */}
                    <div className="hidden md:block md:w-1/2"></div>

                    {/* Carte */}
                    <div className="w-full md:w-1/2">
                      <div
                        className={`bg-gradient-to-br ${item.bgColor} dark:from-gray-800 dark:to-gray-800/50 
                                  rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 
                                  hover:-translate-y-2 border border-gray-100 dark:border-gray-700`}
                      >
                        {/* Icône et période */}
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}
                          >
                            <Icon className="text-white w-7 h-7" />
                          </div>
                          <span className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-md">
                            {item.period}
                          </span>
                        </div>

                        {/* Diplôme */}
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          {item.degree}
                        </h3>

                        {/* Institution */}
                        <div className="flex items-center gap-2 text-[#c76140] dark:text-orange-400 font-semibold mb-2">
                          <FaUniversity className="w-4 h-4" />
                          <span>{item.institution}</span>
                        </div>

                        {/* Localisation */}
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-3">
                          <FaMapMarkerAlt className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>

                        {/* Mention */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mb-4">
                          <FaStar className="text-white w-4 h-4" />
                          <span className="text-white font-bold text-sm">
                            {item.mention}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Points clés */}
                        <div className="space-y-2">
                          {item.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div
                                className={`w-1.5 h-1.5 bg-gradient-to-br ${item.color} rounded-full mt-2 flex-shrink-0`}
                              ></div>
                              <span className="text-sm text-gray-600 dark:text-gray-300">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section Certificats */}
      <section className="w-full px-4 py-12 md:py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications &{" "}
              <span className="text-[#c76140]">Formations</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Formation continue pour rester à jour avec les dernières
              technologies
            </p>
            <div className="w-16 h-1 bg-[#c76140] mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => {
              const Icon = cert.icon;
              const colorClasses = {
                blue: "from-blue-500 to-blue-600",
                green: "from-green-500 to-green-600",
                purple: "from-purple-500 to-purple-600",
                orange: "from-orange-500 to-orange-600",
              };

              return (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl 
                           transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${colorClasses[cert.color]} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              );
            })}
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
                Années d'études
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-[#c76140] mb-2">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Diplômes
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-[#c76140] mb-2">4+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Certificats
              </div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-[#c76140] mb-2">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                Projets réalisés
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="w-full px-4 py-16 md:py-20 bg-gradient-to-br from-[#c76140] to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Intéressé par mon profil ?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Téléchargez mon CV complet ou contactez-moi pour discuter de vos
            projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#c76140] rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg group">
              <span>Télécharger mon CV</span>
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform"
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
            </button>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#c76140] transition-all duration-300">
              Me Contacter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
