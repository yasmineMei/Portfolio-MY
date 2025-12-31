import { createFileRoute, Outlet } from "@tanstack/react-router";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

import Background from "../images/background.jpg";

export const Route = createFileRoute("/_home")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Image en arrière-plan avec overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-white/0 to-white/20" />
      </div>

      {/* Contenu au-dessus */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* Main content */}
        <main className="flex-1">
          <div className="">
            {/* Contenu principal */}
            <Outlet />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
