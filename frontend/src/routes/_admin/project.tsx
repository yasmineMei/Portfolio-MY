import { createFileRoute } from '@tanstack/react-router'

import { useState } from "react";
import { useData } from "../../contexts/DataContext";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { Plus, Edit, Trash2, ExternalLink, Github, Star } from "lucide-react";
import { toast } from "sonner";
import { Project } from "../types";
import { ProjectForm } from "../../components/project-form";

export const Route = createFileRoute('/_admin/project')({
  component: RouteComponent,
})

function RouteComponent() {
  const { projects, addProject, updateProject, deleteProject } = useData();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);


  const handleCreate = ()  => {
    setEditingProject(null);
    setIsFormOpen(true);
  }

  




  return <div>Hello "/_admin/project"!</div>
}
