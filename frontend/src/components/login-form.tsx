import { useState } from "react"; // Ne pas oublier cet import
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner"; // Ou ta librairie de toast (react-hot-toast, etc.)
import { useAuth } from "@/hooks/useAuth"; // Ajuste le chemin selon ton projet

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const auth = useAuth();
const { login } = auth;
  console.log("Contenu de auth:", auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log("Données envoyées :", { email, password }); // Étape 1

    try {
      const result = await login(email, password);
      console.log("Résultat du login :", result); // Étape 2

      if (result.success) {
        toast.success("Connexion réussie !");
        navigate({ to: "/dashboard" });
      } else {
        toast.error(result.message || "Erreur inconnue");
      }
    } catch (error) {
      console.error("Crash complet :", error); // Étape 3
      toast.error("Le serveur a rencontré un problème (Erreur 500)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", "max-w-md mx-auto mt-10")}>
      <Card>
        <CardHeader>
          <CardTitle>Connexion</CardTitle>
          <CardDescription>
            Entrez votre email et mot de passe pour accéder à votre compte
            administrateur.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup className="space-y-1">
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email} // LIEN AVEC LE STATE
                  onChange={(e) => setEmail(e.target.value)} // MISE À JOUR DU STATE
                />
              </Field>
              <Field>
                <div className="flex items-center justify-between">
                  <FieldLabel htmlFor="password">Mot de passe</FieldLabel>
                  {/* Optionnel : Lien vers mot de passe oublié 
                  <button
                    type="button"
                    onClick={() => navigate("/forgot-password")}
                    className="text-xs text-primary hover:underline"
                  >
                    
                  </button>
                  */}
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password} // LIEN AVEC LE STATE
                  onChange={(e) => setPassword(e.target.value)} // MISE À JOUR DU STATE
                />
              </Field>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Connexion..." : "Se connecter"}
              </Button>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
