import app from "./app";
import { config } from "./config/env";

const port = config.port;

const server = app.listen(port, () => {
  console.log(`Server running on port ${port} in ${config.nodeEnv} mode`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: any) => {
  console.error("REJET NON GÉRÉ ! Fermeture en cours...");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handle SIGTERM
process.on("SIGTERM", () => {
  console.log("👋 SIGTERM REÇU. Arrêt en douceur");
  server.close(() => {
    console.log("💥 Processus terminé !");
  });
});

export default server;
