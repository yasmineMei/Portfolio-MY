/**
 * Ce code configure Multer, un middleware pour Node.js et Express.

👉 Il permet de gérer l’upload d’images côté serveur :

Stockage en mémoire

Vérification que le fichier est bien une image

Limitation de taille (5MB maximum)
 */

import multer from "multer";
import { AppError } from "../utils/AppError";

const storage = multer.memoryStorage();

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      new AppError(
        "Pas une image ! Veuillez télécharger uniquement des images.",
        400,
      ),
      false,
    );
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});
