import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";

// 1. Importe ton AuthProvider
import { AuthProvider } from "./contexts/AuthContext";

// 1. Importe ton DataProvider
import { DataProvider } from "./contexts/DataContext";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";


// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <DataProvider>
          <RouterProvider router={router} />
        </DataProvider>
      </AuthProvider>
    </StrictMode>,
  );
}
