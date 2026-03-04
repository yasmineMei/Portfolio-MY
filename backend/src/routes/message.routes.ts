import { Router } from "express";
import {
  createMessage,
  getAllMessages,
  getMessage,
  markAsRead,
  deleteMessage,
  replyToMessage, // Ajoute l'import ici
} from "../controllers/message.controller"; // Vérifie bien que le nom du fichier est exact
import { protect, restrictTo } from "../middleware/auth.middleware";
import {
  validate,
  messageValidator,
} from "../middleware/validation.middleware";

const router = Router();

// Routes publiques
router.post("/", validate(messageValidator), createMessage);

// Routes protégées (admin uniquement)
router.use(protect, restrictTo("admin"));

router.get("/", getAllMessages);
router.get("/:id", getMessage);
router.patch("/:id/read", markAsRead);
router.delete("/:id", deleteMessage);
router.post("/:id/reply", replyToMessage); // Plus besoin de messageController.xxx

export default router;
