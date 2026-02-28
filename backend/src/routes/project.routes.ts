import { Router } from "express";
import { 
    getAllProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
 } from "../controllers/project.controller";
import { protect, restrictTo } from "../middleware/auth.middleware";
import { validate, projectValidator } from "../middleware/validation.middleware";

const router = Router();

// Routes public
router.get("/", getAllProjects);
router.get("/:id", getProject);

// Routes protégées (admin uniquement)
router.use(protect, restrictTo("admin"));
router.post("/", validate(projectValidator), createProject);
router.patch("/:id", validate(projectValidator), updateProject);
router.delete("/:id", deleteProject);

export default router;