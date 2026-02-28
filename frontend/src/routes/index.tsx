/**
 * Page d'accueil du site web personnel de Meite Yasmine.
 * Contenu 1 : Image de fond, photo de profil, nom et métier.
 * contenu 2 : Section des compétences avec logos.
 * Contenu 3 : Section "About Me" avec une brève description avec bouton de téléchargement de CV.
 * Contenu 4 : Section des projets (à implémenter)."
 *
 * Utilisation des composants Header et Footer pour la navigation et les informations de bas de page.
 */

import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";

import Background from "../images/background.jpg";
import Profile from "../images/profile.jpg";
import Profile2 from "../images/profile2.jpeg"
import React from "../images/react.png";
import Mongo from "../images/mongo.png";
import Prisma from "../images/prisma.png";
import Aws from "../images/aws.png";
import Nodejs from "../images/node.png";
import Express from "../images/express.png";
import Hospital from "../images/hospital.avif" 
import SignLanguage from "../images/sign.jpg"
import AppClinic from "../images/app-clinic.jpg"

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [, /*isVisible*/ setIsVisible] = useState(false);

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
        "Impossible de télécharger le CV. Vérifiez que le fichier existe à l'emplacement : /public/assets/doc/CV_yasmine_compressed.pdf",
      );
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      {/* Image en arrière-plan avec overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-white/0 to-white/30" />
      </div>

      {/* Contenu au-dessus */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1  ">
          {/* Section Principale : Profil */}
          <section className="flex-1 flex flex-col items-center justify-center w-full px-4 py-16 md:py-20 ">
            <div className="space-y-8 max-w-2xl">
              {/* Photo */}
              <div className="relative flex justify-center">
                <div className="absolute -inset-6 bg-gradient-to-r rounded-full blur-2xl animate-pulse" />

                <img
                  src={Profile}
                  alt="Portrait de Meite Yasmine"
                  className="relative w-50 h-50 md:w-48 md:h-48 rounded-full object-cover shadow-2xl border-4 border-white"
                />
              </div>

              {/* Nom & métier */}
              <div className="space-y-4 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  Meite <span className="text-[#c76140]">Yasmine</span>
                </h1>

                <p className="text-sm md:text-base text-orange-200 font-bold tracking-wide">
                  Développeur Full-Stack Web & Mobile
                </p>
              </div>
            </div>
          </section>

          {/* Section Logo Compétences */}
          <section className="py-2 mt-[-45px] mb-4">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 items-center justify-items-center">
                <img
                  src={React}
                  alt="React"
                  className="w-12 h-12 md:w-18 md:h-18 object-contain"
                />
                <img
                  src={Mongo}
                  alt="MongoDB"
                  className="w-14 h-14 md:w-18 md:h-18 object-contain"
                />
                <img
                  src={Prisma}
                  alt="Prisma"
                  className="w-12 h-12 md:w-19 md:h-19 object-contain"
                />
                <img
                  src={Aws}
                  alt="AWS"
                  className="w-14 h-14 md:w-18 md:h-18 object-contain"
                />
                <img
                  src={Nodejs}
                  alt="Node.js"
                  className="w-14 h-14 md:w-18 md:h-18 object-contain"
                />
                <img
                  src={Express}
                  alt="Express"
                  className="w-14 h-14 md:w-18 md:h-18 object-contain"
                />
              </div>
            </div>
          </section>

          {/* Section About Me  */}
          <section className="py-10 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              {/* Titre */}
              <div className="text-center mb-17">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  À Propos de <span className="text-[#c76140]">Moi</span>
                </h2>
                <div className="w-20 h-1 bg-[#c76140] mx-auto rounded-full"></div>
              </div>

              {/* Contenu */}
              <div className="grid md:grid-cols-5 gap-12 items-start">
                {/* Colonne gauche : Photo et stats */}
                <div className="md:col-span-2 space-y-8">
                  {/* Photo */}
                  <div className="relative mx-auto w-fit">
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#c76140] to-orange-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    <img
                      src={Profile2}
                      alt="Meite Yasmine"
                      className="relative w-64 h-64 rounded-full object-cover shadow-2xl border-8 border-white"
                    />
                  </div>

                  {/* Mini stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gradient-to-br from-[#c76140]/10 to-orange-100 rounded-xl p-4">
                      <p className="text-2xl font-bold text-[#c76140]">6+</p>
                      <p className="text-xs text-gray-600 font-medium">
                        Projets
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#c76140]/10 to-orange-100 rounded-xl p-4">
                      <p className="text-2xl font-bold text-[#c76140]">3+</p>
                      <p className="text-xs text-gray-600 font-medium">
                        Années
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#c76140]/10 to-orange-100 rounded-xl p-4">
                      <p className="text-2xl font-bold text-[#c76140]">2</p>
                      <p className="text-xs text-gray-600 font-medium">
                        Entreprise
                      </p>
                    </div>
                  </div>
                </div>

                {/* Colonne droite : Texte */}
                <div className="md:col-span-3 space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Développeur Full-Stack passionnée 🚀
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Passionnée par le développement web et mobile, je suis
                    constamment à la recherche de nouvelles technologies et de
                    défis stimulants pour améliorer mes compétences et créer des
                    solutions innovantes.
                  </p>

                  <p className="text-gray-600 leading-relaxed">
                    Spécialisée dans la création d'applications performantes et
                    intuitives, j'aime transformer des idées complexes en
                    expériences utilisateur fluides et engageantes.
                  </p>

                  {/* Boutons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      onClick={handleDownloadCV}
                      className="inline-flex items-center px-8 py-4 rounded-xl bg-[#c76140] text-white font-semibold hover:bg-[#b15438] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <span className="font-semibold">Télécharger CV</span>
                    </button>
                    <button className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:border-[#c76140] hover:text-[#c76140] transition-all duration-300">
                      <Link to="/projet">Voir mes projets</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Projets Phares */}
          <section className="container py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
              {/* Titre de section */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Mes Projets <span className="text-[#c76140]">Phares</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Découvrez mes réalisations les plus significatives qui
                  démontrent mon expertise en développement Full-Stack
                </p>
                <div className="w-20 h-1 bg-[#c76140] mx-auto mt-6 rounded-full"></div>
              </div>

              {/* Grille de projets */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Projet 1 : Système de gestion hospitalier */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                  {/* Image/Icône du projet */}
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <img src={Hospital} alt="" />
                  </div>

                  {/* Contenu */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#c76140] transition-colors">
                      Système de Gestion Hospitalier
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Application complète pour la gestion des patients,
                      rendez-vous, dossiers médicaux et ressources
                      hospitalières.
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        React
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        MongoDB
                      </span>
                    </div>

                    {/* Bouton */}
                    <button className="w-full mt-4 py-3 border-2 border-[#c76140] text-[#c76140] rounded-xl font-semibold hover:bg-[#c76140] hover:text-white transition-all duration-300">
                      Voir le projet
                    </button>
                  </div>
                </div>

                {/* Projet 2 : Traduction langue des signes */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                  {/* Image/Icône du projet */}
                  <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <img src={SignLanguage} alt="" />
                  </div>

                  {/* Contenu */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#c76140] transition-colors">
                      Traduction Langue des Signes
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Solution innovante utilisant l'IA pour traduire la langue
                      des signes en temps réel et faciliter la communication.
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        TensorFlow
                      </span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                        React
                      </span>
                    </div>

                    {/* Bouton */}
                    <button className="w-full mt-4 py-3 border-2 border-[#c76140] text-[#c76140] rounded-xl font-semibold hover:bg-[#c76140] hover:text-white transition-all duration-300">
                      Voir le projet
                    </button>
                  </div>
                </div>

                {/* Projet 3 : Application Mobile Clinique */}
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
                  {/* Image/Icône du projet */}
                  <div className="h-48 bg-gradient-to-br from-[#c76140] to-orange-500 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <img src={AppClinic} alt="" />
                  </div>

                  {/* Contenu */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#c76140] transition-colors">
                      Application Mobile Clinique
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Application mobile intuitive permettant la prise de
                      rendez-vous en ligne et le suivi médical pour les
                      patients.
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        React Native
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Express
                      </span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                        Firebase
                      </span>
                    </div>

                    {/* Bouton */}
                    <button className="w-full mt-4 py-3 border-2 border-[#c76140] text-[#c76140] rounded-xl font-semibold hover:bg-[#c76140] hover:text-white transition-all duration-300">
                      Voir le projet
                    </button>
                  </div>
                </div>
              </div>

              {/* Bouton Voir tous les projets */}
              <div className="text-center mt-12">
                <Link
                  to="/projet"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#c76140] text-white font-semibold hover:bg-[#b15438] hover:scale-105 transition-all duration-300 shadow-lg group"
                >
                  <span>Voir tous mes projets</span>
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
                </Link>
              </div>
            </div>
          </section>

          {/* Section Mon approche */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-6">
              {/* Titre de section */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Mon <span className="text-[#c76140]">Approche</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Une méthodologie éprouvée pour transformer vos idées en
                  solutions digitales performantes
                </p>
                <div className="w-20 h-1 bg-[#c76140] mx-auto mt-6 rounded-full"></div>
              </div>

              {/* Grille des étapes */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Étape 1 : Écoute */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    1
                  </div>

                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Écoute & Analyse
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprendre vos besoins, vos objectifs et les défis à relever
                    pour définir une solution adaptée.
                  </p>
                </div>

                {/* Étape 2 : Conception */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    2
                  </div>

                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Conception & Design
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Création de maquettes et prototypes pour visualiser la
                    solution avant le développement.
                  </p>
                </div>

                {/* Étape 3 : Développement */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#c76140] to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    3
                  </div>

                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-[#c76140]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Développement
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Code propre, performant et maintenable avec les meilleures
                    pratiques du secteur.
                  </p>
                </div>

                {/* Étape 4 : Livraison */}
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    4
                  </div>

                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Test & Livraison
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tests rigoureux, déploiement sécurisé et accompagnement
                    post-livraison.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section Expérience */}
          <section className="py-20 px-4 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-5xl mx-auto">
              {/* Titre de section */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Mon <span className="text-[#c76140]">Expérience</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Mon parcours professionnel m'a permis de développer des
                  compétences solides en développement Full-Stack
                </p>
                <div className="w-20 h-1 bg-[#c76140] mx-auto mt-6 rounded-full"></div>
              </div>

              {/* Timeline des expériences */}
              <div className="relative">
                {/* Ligne verticale */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c76140] to-orange-300"></div>

                {/* Expérience 1 - TOPECI */}
                <div className="relative mb-16 md:mb-20">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    {/* Timeline point */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#c76140] rounded-full -translate-x-1/2 border-4 border-white shadow-lg"></div>

                    {/* Contenu */}
                    <div className="md:w-1/2 md:pr-12 md:text-right ml-20 md:ml-0">
                      <div className="inline-block px-4 py-1 bg-[#c76140] text-white rounded-full text-sm font-semibold mb-3">
                        2024 - Présent
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Développeur Full-Stack
                      </h3>
                      <p className="text-[#c76140] font-semibold mb-4">
                        TOPECI
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Développement d'une plateforme e-commerce complète pour
                        la vente d'audiolivres et de matériel éducatif sur les
                        langues africaines. Mise en place d'une architecture
                        robuste avec gestion multi-devises et intégration de
                        moyens de paiement locaux.
                      </p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          React
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          Node.js
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          MongoDB
                        </span>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                          Prisma
                        </span>
                      </div>
                    </div>

                    {/* Espace vide pour desktop */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </div>

                {/* Expérience 2 - Clinique Médicale Eniazou */}
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    {/* Timeline point */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#c76140] rounded-full -translate-x-1/2 border-4 border-white shadow-lg"></div>

                    {/* Espace vide pour desktop */}
                    <div className="hidden md:block md:w-1/2"></div>

                    {/* Contenu */}
                    <div className="md:w-1/2 md:pl-12 ml-20 md:ml-0">
                      <div className="inline-block px-4 py-1 bg-orange-500 text-white rounded-full text-sm font-semibold mb-3">
                        2023 - 2024
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Stagiaire Développeur
                      </h3>
                      <p className="text-[#c76140] font-semibold mb-4">
                        Clinique Médicale Eniazou
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        Contribution à la digitalisation des processus de la
                        clinique. Développement d'une application de gestion des
                        rendez-vous patients et des dossiers médicaux. Formation
                        du personnel à l'utilisation des nouveaux outils.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                          React
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          Express
                        </span>
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                          PostgreSQL
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Travaillons Ensemble */}
          <section className="py-10 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
                Travaillons Ensemble
              </h2>

              <p className="text-black/90 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                Vous avez un projet en tête ? Je serais ravie de discuter avec
                vous et de transformer vos idées en solutions digitales
                innovantes et performantes.
              </p>

              <Link 
  to="/contact"
  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c76140] text-white rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
>
  <span>Me Contacter</span>
  <svg
    className="w-6 h-6 group-hover:translate-x-1 transition-transform"
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
</Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
