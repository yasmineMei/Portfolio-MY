/**
 * Page À Propos
 */
import { createFileRoute } from "@tanstack/react-router";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaCloud,
  /*
  FaGraduationCap,
  FaBriefcase,*/
  FaLightbulb,
  FaUsers,
  FaRocket,
  FaHeart,
} from "react-icons/fa";

// Importez votre photo de profil
import Profile from "@/images/profile.jpg";

export const Route = createFileRoute("/_home/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-white dark:bg-gray-900">
      {/* Section Hero */}
      <section className="w-full px-4 py-16 md:py-20 lg:py-24 bg-linear-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo et badges */}
            <div className="relative">
              {/* Photo principale */}
              <div className="relative mx-auto w-fit group">
                <div className="absolute -inset-4 bg-linear-to-r from-[#c76140] to-orange-400 rounded-2xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img
                  src={Profile} // Remplacez par votre photo
                  alt="Meite Yasmine - Développeuse Full-Stack"
                  className="relative w-full max-w-md mx-auto h-100 md:h-125 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800"
                />

                {/* Badge flottant - Années d'expérience */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border-4 border-[#c76140]">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#c76140]">3+</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 font-semibold">
                      Années
                      <br />
                      d'expérience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenu texte */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                  À Propos de <span className="text-[#c76140]">Moi</span>
                </h1>
                <div className="w-20 h-1 bg-[#c76140] rounded-full mb-6"></div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
                Développeuse Full-Stack Web & Mobile
              </h2>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Développeuse web et mobile passionnée par la création
                d'interfaces modernes, performantes et centrées sur
                l'utilisateur. Je transforme des idées complexes en applications
                intuitives et engageantes.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Spécialisée dans l'écosystème JavaScript/TypeScript, je maîtrise
                aussi bien le développement frontend avec React que le backend
                avec Node.js, ainsi que le mobile avec React Native.
              </p>

              {/* Stats rapides */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
                  <p className="text-3xl font-bold text-[#c76140]">15+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    Projets
                  </p>
                </div>
                <div className="text-center p-4 bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
                  <p className="text-3xl font-bold text-[#c76140]">3+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    Années
                  </p>
                </div>
                <div className="text-center p-4 bg-linear-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl">
                  <p className="text-3xl font-bold text-[#c76140]">10+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                    Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="w-full px-4 py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Mes <span className="text-[#c76140]">Compétences</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technologies et outils que j'utilise au quotidien pour créer des
              solutions innovantes
            </p>
            <div className="w-20 h-1 bg-[#c76140] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <FaReact className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Frontend
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  React.js & TypeScript
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  TailwindCSS
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Vue.js
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  HTML5/CSS3
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <FaNodeJs className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Backend
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Node.js & Express
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Django & Python
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  RESTful APIs
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  GraphQL
                </li>
              </ul>
            </div>

            {/* Database */}
            <div className="bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <FaDatabase className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Database
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  MongoDB
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  PostgreSQL
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Prisma ORM
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Firebase
                </li>
              </ul>
            </div>

            {/* Mobile */}
            <div className="bg-gradient-to-br from-orange-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c76140] to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <FaMobileAlt className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Mobile
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-[#c76140] rounded-full mr-3"></span>
                  React Native
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-[#c76140] rounded-full mr-3"></span>
                  Flutter
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-[#c76140] rounded-full mr-3"></span>
                  Expo
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-[#c76140] rounded-full mr-3"></span>
                  iOS & Android
                </li>
              </ul>
            </div>

            {/* DevOps & Cloud */}
            <div className="bg-gradient-to-br from-cyan-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-cyan-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <FaCloud className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                DevOps & Cloud
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  AWS
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Docker
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  Git & GitHub
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  CI/CD
                </li>
              </ul>
            </div>

            {/* Autres */}
            <div className="bg-gradient-to-br from-pink-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-pink-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <FaCode className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Autres
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Cybersécurité
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Data Science
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  UX/UI Design
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  Agile/Scrum
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Valeurs */}
      <section className="w-full px-4 py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Mes <span className="text-[#c76140]">Valeurs</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Les principes qui guident mon travail au quotidien
            </p>
            <div className="w-20 h-1 bg-[#c76140] mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Valeur 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaLightbulb className="text-white w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Toujours à la recherche de solutions créatives et modernes pour
                résoudre les problèmes.
              </p>
            </div>

            {/* Valeur 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaRocket className="text-white w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Des applications rapides, optimisées et scalables pour une
                expérience utilisateur fluide.
              </p>
            </div>

            {/* Valeur 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#c76140] to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaUsers className="text-white w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Travail d'équipe, communication claire et partage de
                connaissances.
              </p>
            </div>

            {/* Valeur 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaHeart className="text-white w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Passion
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                L'amour du code et du design, pour créer des produits dont je
                suis fière.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="w-full px-4 py-20 bg-gradient-to-br from-[#c76140] to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Travaillons Ensemble
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Vous avez un projet en tête ? Discutons de vos besoins et créons
            ensemble quelque chose d'exceptionnel.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-[#c76140] rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group">
            <span>Me Contacter</span>
            <svg
              className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform"
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
        </div>
      </section>
    </main>
  );
}
