import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

// 1. Définition des types
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

// 2. Création du contexte
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

// 3. Le Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<{
    user: User | null;
    token: string | null;
  }>(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");
    return {
      user: savedUser ? JSON.parse(savedUser) : null,
      token: savedToken || null,
    };
  });

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) return { success: false, message: data.message };

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setAuthState({ user: data.user, token: data.token });
      return { success: true };
    } catch (error) {
      return { success: false, message: "Erreur serveur" };
    }
  };

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuthState({ user: null, token: null });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!authState.token,
        user: authState.user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// 4. Le Hook (À EXPORTER EN DERNIER)
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
