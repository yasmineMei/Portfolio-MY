import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { X, Plus } from "lucide-react";
import { useState } from "react";
import { type Project } from "../types";

// Schéma Zod mis à jour pour correspondre au Backend
const projectSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères"),
  category: z.enum(["Web", "Mobile", "Data Science", "Other"], {
    errorMap: () => ({ message: "Veuillez choisir une catégorie valide" }),
  }),
  description: z
    .string()
    .min(10, "La description doit contenir au moins 10 caractères"),
  image: z.string().url("URL d'image invalide"),
  // On gère les URLs optionnelles proprement : si vide -> undefined
  githubUrl: z.string().url("URL GitHub invalide").optional().or(z.literal("")),
  liveUrl: z.string().url("URL live invalide").optional().or(z.literal("")),
  featured: z.boolean().default(false),
  order: z.number().default(0),
  createdAt: z.date().default(() => new Date()), // Ajout de createdAt avec une valeur par défaut
  updateAt: z.date().default(() => new Date()), // Ajout de updatedAt avec une valeur par défaut
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  project?: Project;
  // Correction ici : On utilise 'technologies' au lieu de 'stack'
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export function ProjectForm({ project, onSubmit, onCancel }: ProjectFormProps) {
  // On utilise 'technologies' pour matcher le backend
  const [technologies, setTechnologies] = useState<string[]>(
    project?.technologies || [],
  );
  const [techInput, setTechInput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: project?.title || "",
      category: (project?.category as any) || "Web",
      description: project?.description || "",
      image: project?.image || "",
      githubUrl: project?.githubUrl || "",
      liveUrl: project?.liveUrl || "",
      featured: project?.featured || false,
    },
  });

  const featured = watch("featured");
  const selectedCategory = watch("category");

  const handleAddTech = () => {
    const trimmed = techInput.trim();
    if (trimmed && !technologies.includes(trimmed)) {
      setTechnologies([...technologies, trimmed]);
      setTechInput("");
    }
  };

  const handleRemoveTech = (tech: string) => {
    setTechnologies(technologies.filter((t) => t !== tech));
  };

  const onFormSubmit = (data: ProjectFormData) => {
    if (technologies.length === 0) {
      alert("Veuillez ajouter au moins une technologie");
      return;
    }

    // Nettoyage des données avant envoi
    const finalData = {
      ...data,
      technologies, // On envoie 'technologies' au lieu de 'stack'
      githubUrl: data.githubUrl === "" ? undefined : data.githubUrl,
      liveUrl: data.liveUrl === "" ? undefined : data.liveUrl,
    };

    onSubmit(finalData);
  };

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="space-y-6 max-h-[80vh] overflow-y-auto px-1"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Titre */}
        <div className="space-y-2">
          <Label htmlFor="title">Titre du projet *</Label>
          <Input
            id="title"
            {...register("title")}
            placeholder="Ex: Dashboard Admin"
          />
          {errors.title && (
            <p className="text-sm text-red-600">{errors.title.message}</p>
          )}
        </div>

        {/* Catégorie - Nouveau champ */}
        <div className="space-y-2">
          <Label>Catégorie *</Label>
          <Select
            onValueChange={(value) => setValue("category", value as any)}
            defaultValue={selectedCategory}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choisir une catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Web">Web</SelectItem>
              <SelectItem value="Mobile">Mobile</SelectItem>
              <SelectItem value="Data Science">Data Science</SelectItem>
              <SelectItem value="Other">Autre</SelectItem>
            </SelectContent>
          </Select>
          {errors.category && (
            <p className="text-sm text-red-600">{errors.category.message}</p>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description *</Label>
        <Textarea id="description" {...register("description")} rows={3} />
        {errors.description && (
          <p className="text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      {/* Image */}
      <div className="space-y-2">
        <Label htmlFor="image">URL de l'image (Cloudinary ou externe) *</Label>
        <Input id="image" {...register("image")} placeholder="https://..." />
        {errors.image && (
          <p className="text-sm text-red-600">{errors.image.message}</p>
        )}
      </div>

      {/* Technologies */}
      <div className="space-y-2">
        <Label>Technologies utilisées *</Label>
        <div className="flex gap-2">
          <Input
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            placeholder="Ex: TypeScript"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddTech();
              }
            }}
          />
          <Button type="button" variant="secondary" onClick={handleAddTech}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
            >
              {tech}
              <button
                type="button"
                onClick={() => handleRemoveTech(tech)}
                className="hover:text-red-600"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* URLs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="githubUrl">Lien GitHub</Label>
          <Input
            id="githubUrl"
            {...register("githubUrl")}
            placeholder="https://github.com/..."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="liveUrl">Lien Démo Live</Label>
          <Input
            id="liveUrl"
            {...register("liveUrl")}
            placeholder="https://..."
          />
        </div>
      </div>

      {/* Featured Switch */}
      <div className="flex items-center justify-between p-3 border rounded-lg">
        <div className="space-y-0.5">
          <Label htmlFor="featured">Mettre en avant</Label>
          <p className="text-xs text-muted-foreground">
            Apparaîtra dans la section "Projets Vedettes"
          </p>
        </div>
        <Switch
          id="featured"
          checked={featured}
          onCheckedChange={(checked) => setValue("featured", checked)}
        />
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-end pt-4 border-t">
        <Button type="button" variant="ghost" onClick={onCancel}>
          Annuler
        </Button>
        <Button type="submit" className="bg-[#c76140] hover:bg-[#b15438]">
          {project ? "Enregistrer les modifications" : "Créer le projet"}
        </Button>
      </div>
    </form>
  );
}
