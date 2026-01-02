/**
 * Page Mes Projets
 *
 * 
 *
 */

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_home/projet")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 dark:bg-gray-900 dark:text-white">
      {/* Section Principale : About */}
      <section
        className="flex flex-col items-center justify-center w-full mx-auto px-4 sm:px-6 lg:px-8
        pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-10 md:pb-12"
      >
        <div className="max-w-xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h1>

          <div className="w-20 h-1 bg-[#c76140] mx-auto mt-6 rounded-full mb-3"></div>

          <p className="text-white font-bold max-w-2xl mx-auto mt-2 text-sm sm:text-base">
            Développeuse web et mobile, passionnée par la création d’interfaces
            modernes, performantes et centrées sur l’utilisateur.
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white h-195">
        <div className="max-w-7xl mx-auto"></div>
      </section>
    </main>
  );
}
