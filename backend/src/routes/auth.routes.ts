import { Router } from "express";
import { register, login, getMe } from "../controllers/auth.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

// URL complète: POST http://localhost:5000/api/auth/register
// router.post("/register", register); // Désactivé pour que personne d'autre ne s'inscrive que l'admin initial

// URL complète: POST http://localhost:5000/api/auth/login
router.post("/login", login);

// URL complète: GET http://localhost:5000/api/auth/me
router.get("/me", protect, getMe);

export default router;
