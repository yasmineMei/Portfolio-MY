import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// 1. Interface unique et cohérente
export interface Message {
  _id: string; // MongoDB utilise _id par défaut
  id?: string; // Optionnel au cas où ton backend transforme l'id
  name: string;
  email: string;
  subject: string;
  message: string; // On utilise "message" (pas content) pour correspondre au formulaire
  status: "lu" | "non-lu";
  createdAt: string;
}

interface Project {
  id: string;
  title: string;
  category: "Web" | "Mobile" | "Data Science" | "Other";
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

interface DataContextType {
  messages: Message[];
  projects: Project[];
  loading: boolean;
  refreshData: () => void;
  updateMessage: (id: string, data: Partial<Message>) => Promise<void>;
  deleteMessage: (id: string) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // 2. Fonction de récupération des données
  const fetchData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.warn("Accès dashboard : Pas de token trouvé.");
      setLoading(false);
      return;
    }

    try {
      const resMsg = await fetch("http://localhost:5000/api/messages", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const dataMsg = await resMsg.json();
      console.log("Debug API Messages:", dataMsg);

      if (resMsg.ok) {
        // On gère les différents formats de réponse possibles du backend
        const extractedMessages = Array.isArray(dataMsg)
          ? dataMsg
          : dataMsg.messages || dataMsg.data || [];

        setMessages(extractedMessages);
      } else {
        console.error("Erreur API:", resMsg.status);
      }
    } catch (error) {
      console.error("Erreur de connexion au serveur :", error);
    } finally {
      setLoading(false);
    }
  };

  // 3. Mise à jour d'un message (ex: marquer comme lu)
  const updateMessage = async (id: string, updates: Partial<Message>) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/messages/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updates),
      });
      if (res.ok) {
        await fetchData(); // On rafraîchit la liste locale
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
    }
  };

  // 4. Suppression d'un message
  const deleteMessage = async (id: string) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:5000/api/messages/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        await fetchData();
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        messages,
        projects,
        loading,
        refreshData: fetchData,
        updateMessage,
        deleteMessage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};
