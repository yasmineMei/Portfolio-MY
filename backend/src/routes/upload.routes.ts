import { Router } from "express";
import { upload } from "../middleware/upload.middleware";
import {
  uploadImage,
  deleteImage,
  uploadMultipleImages,
} from "../controllers/upload.controller";
import { protect, restrictTo } from "../middleware/auth.middleware";

const router = Router();

// All upload routes are protected (admin only)
router.use(protect, restrictTo("admin"));

router.post("/single", upload.single("image"), uploadImage);
router.post("/multiple", upload.array("images", 10), uploadMultipleImages);
router.delete("/:publicId", deleteImage);

export default router;
