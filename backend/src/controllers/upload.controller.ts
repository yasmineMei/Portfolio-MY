import { Request, Response } from "express";
import cloudinary from "../config/cloudinary";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/AppError";

// Types pour les réponses Cloudinary
interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  [key: string]: any;
}

interface CloudinaryDeleteResult {
  result: string;
}

export const uploadImage = catchAsync(async (req: Request, res: Response) => {
  // Vérifier si un fichier a été uploadé
  if (!req.file) {
    throw new AppError("Veuillez télécharger un fichier", 400);
  }

  try {
    // Convertir le buffer en base64
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    // Upload vers Cloudinary
    const result = (await cloudinary.uploader.upload(dataURI, {
      folder: "portfolio",
      resource_type: "auto",
    })) as CloudinaryUploadResult;

    // Réponse succès
    res.status(200).json({
      success: true,
      message: "Image téléchargée avec succès",
      image: {
        publicId: result.public_id,
        url: result.secure_url,
      },
    });
  } catch (error) {
    console.error("Erreur lors de l'upload vers Cloudinary:", error);
    throw new AppError("Erreur lors du téléchargement de l'image", 500);
  }
});

export const deleteImage = catchAsync(async (req: Request, res: Response) => {
  const { publicId } = req.params;

  // Vérifier si publicId est fourni
  if (!publicId) {
    throw new AppError("L'identifiant public de l'image est requis", 400);
  }

  // S'assurer que publicId est une string (pas un tableau)
  const publicIdString = Array.isArray(publicId) ? publicId[0] : publicId;

  try {
    // Supprimer l'image de Cloudinary
    const result = (await cloudinary.uploader.destroy(
      publicIdString,
    )) as CloudinaryDeleteResult;

    if (result.result === "ok") {
      res.status(200).json({
        success: true,
        message: "Image supprimée avec succès",
      });
    } else if (result.result === "not found") {
      throw new AppError("Image non trouvée sur Cloudinary", 404);
    } else {
      throw new AppError("Échec de la suppression de l'image", 400);
    }
  } catch (error) {
    console.error("Erreur lors de la suppression sur Cloudinary:", error);
    throw new AppError("Erreur lors de la suppression de l'image", 500);
  }
});

export const uploadMultipleImages = catchAsync(
  async (req: Request, res: Response) => {
    // Vérifier si des fichiers ont été uploadés
    const files = req.files as Express.Multer.File[] | undefined;

    if (!files || files.length === 0) {
      throw new AppError("Veuillez télécharger au moins un fichier", 400);
    }

    // Limiter le nombre d'images (optionnel)
    const MAX_IMAGES = 10;
    if (files.length > MAX_IMAGES) {
      throw new AppError(
        `Vous ne pouvez pas télécharger plus de ${MAX_IMAGES} images à la fois`,
        400,
      );
    }

    try {
      // Uploader toutes les images en parallèle
      const uploadPromises = files.map(async (file) => {
        const b64 = Buffer.from(file.buffer).toString("base64");
        const dataURI = `data:${file.mimetype};base64,${b64}`;

        const result = (await cloudinary.uploader.upload(dataURI, {
          folder: "portfolio/gallery",
          resource_type: "auto",
        })) as CloudinaryUploadResult;

        return {
          publicId: result.public_id,
          url: result.secure_url,
        };
      });

      const images = await Promise.all(uploadPromises);

      // Réponse succès
      res.status(200).json({
        success: true,
        message: `${images.length} image(s) téléchargée(s) avec succès`,
        count: images.length,
        images,
      });
    } catch (error) {
      console.error("Erreur lors de l'upload multiple vers Cloudinary:", error);
      throw new AppError("Erreur lors du téléchargement des images", 500);
    }
  },
);

// Fonction utilitaire pour uploader une image depuis une URL (optionnel)
export const uploadImageFromUrl = catchAsync(
  async (req: Request, res: Response) => {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      throw new AppError("L'URL de l'image est requise", 400);
    }

    try {
      const result = (await cloudinary.uploader.upload(imageUrl, {
        folder: "portfolio",
      })) as CloudinaryUploadResult;

      res.status(200).json({
        success: true,
        message: "Image téléchargée avec succès depuis l'URL",
        image: {
          publicId: result.public_id,
          url: result.secure_url,
        },
      });
    } catch (error) {
      console.error("Erreur lors de l'upload depuis l'URL:", error);
      throw new AppError(
        "Erreur lors du téléchargement de l'image depuis l'URL",
        500,
      );
    }
  },
);
