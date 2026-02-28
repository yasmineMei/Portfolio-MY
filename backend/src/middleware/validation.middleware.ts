import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validate = (validations: any[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  };
};

// Validators
export const messageValidator = [
  body("name").notEmpty().withMessage("Le nom est requis").trim(),
  body("email")
    .isEmail()
    .withMessage("Veuillez fournir un e-mail valide")
    .normalizeEmail(),
  body("subject")
    .notEmpty()
    .withMessage("Le sujet est requis")
    .trim()
    .isLength({ min: 5 }),
  body("message")
    .notEmpty()
    .withMessage("Le message est requis")
    .trim()
    .isLength({ min: 10 }),
];

export const projectValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("category")
    .isIn(["Web", "Mobile", "Data Science", "Other"])
    .withMessage("La catégorie doit être l'une des suivantes : Web, Mobile, Data Science, Other"),
  body("description").notEmpty().withMessage("La description est requise"),
  body("technologies").isArray().withMessage("Les technologies doivent être un tableau"),
];