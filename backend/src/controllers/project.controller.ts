import { Request, Response } from "express";
import { Project } from "../models/Project.model";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/AppError";
import cloudinary from "../config/cloudinary";

export const getAllProjects = catchAsync(
  async (req: Request, res: Response) => {
    const projects = await Project.find().sort({ featured: -1, order: 1 });
    res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  },
);

export const getProject = catchAsync(async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    throw new AppError("Projet non trouvé", 404);
  }
  res.status(200).json({
    success: true,
    project,
  });
});

export const createProject = catchAsync(async (req: Request, res: Response) => {
  const project = await Project.create(req.body);
  res.status(201).json({
    success: true,
    project,
  });
});

export const updateProject = catchAsync(async (req: Request, res: Response) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!project) {
    throw new AppError("Projet non trouvé", 404);
  }
  res.status(200).json({
    success: true,
    project,
  });
});

export const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    throw new AppError("Projet non trouvé", 404);
  }

  // ✅ Supprimer uniquement l'image principale de Cloudinary
  if (project.image?.publicId) {
    await cloudinary.uploader.destroy(project.image.publicId);
  }

  // ❌ La partie gallery a été supprimée car elle n'existe plus dans le modèle
  // if (project.gallery && project.gallery.length > 0) {
  //   for (const image of project.gallery) {
  //     await cloudinary.uploader.destroy(image.publicId);
  //   }
  // }

  await project.deleteOne();

  res.status(200).json({
    success: true,
    message: "Projet supprimé avec succès",
  });
});
