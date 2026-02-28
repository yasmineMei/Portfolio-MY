import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useCallback,
} from "react";

interface User {
  id?: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Regrouper l'initialisation pour éviter les désynchronisations
  const [authState, setAuthState] = useState<{
    user: User | null;
    token: string | null;
  }>(() => {
    try {
      const savedUser = localStorage.getItem("user");
      const savedToken = localStorage.getItem("token");
      return {
        user: savedUser ? JSON.parse(savedUser) : null,
        token: savedToken || null,
      };
    } catch (error) {
      console.error("Erreur lecture localStorage:", error);
      return { user: null, token: null };
    }
  });

  const login = async (
    email: string,
    password: string,
  ): Promise<{ success: boolean; message?: string }> => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || "Identifiants invalides",
        };
      }

      // Mise à jour atomique de l'état
      const userData = data.user;
      const token = data.token;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData));

      setAuthState({ user: userData, token });

      return { success: true };
    } catch (error) {
      console.error("Erreur réseau login:", error);
      return { success: false, message: "Le serveur ne répond pas" };
    }
  };

  // Utilisation de useCallback pour éviter des re-rendus inutiles
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthState({ user: null, token: null });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!authState.token, // Déduit du token
        user: authState.user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
