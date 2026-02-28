import { Router } from "express";
import { 
    createMessage,
    getAllMessages,
    getMessage,
    markAsRead,
    deleteMessage,
} from "../controllers/message.controller";
import { protect, restrictTo } from "../middleware/auth.middleware";
import { validate, messageValidator } from "../middleware/validation.middleware";

const router = Router();

// Routes publiques
router.post("/", validate(messageValidator), createMessage);

// Routes protégées (admin uniquement)
router.use(protect, restrictTo("admin"));
router.get("/", getAllMessages);
router.get("/:id", getMessage);
router.patch("/:id/read", markAsRead);
router.delete("/:id", deleteMessage);

export default router;