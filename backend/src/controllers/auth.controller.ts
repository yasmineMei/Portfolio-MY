import { Request, Response } from "express";
import jwt, { SignOptions } from "jsonwebtoken";
import { User } from "../models/User.model";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/AppError";
import { config } from "../config/env";

// Interface pour Request avec utilisateur
interface AuthRequest extends Request {
  user?: any; // On utilise any pour simplifier
}

// Fonction pour générer un token JWT
const signToken = (id: string) => {
  return jwt.sign({ id }, config.jwtSecret, { expiresIn: config.jwtExpire });
};

// Contrôleur pour l'inscription
export const register = catchAsync(async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  // Vérifier si l'utilisateur existe déjà
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new AppError("User already exists with this email", 400);
  }

  // Créer le nouvel utilisateur
  const user = await User.create({
    email,
    password,
    name,
  });

  // Générer le token
  const token = signToken(user._id.toString());

  // Réponse
  res.status(201).json({
    success: true,
    token,
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

// Contrôleur pour la connexion
export const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Vérifier si email et password sont fournis
  if (!email || !password) {
    throw new AppError(
      "Veuillez fournir votre e-mail et votre mot de passe",
      400,
    );
  }

  // Chercher l'utilisateur et inclure le password
  const user = await User.findOne({ email }).select("+password");

  // Vérifier si l'utilisateur existe et si le mot de passe est correct
  if (!user || !(await user.comparePassword(password))) {
    throw new AppError("Email ou mot de passe incorrect", 401);
  }

  // Générer le token
  const token = signToken(user._id.toString());

  // Réponse
  res.status(200).json({
    success: true,
    token,
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

// Contrôleur pour récupérer les informations de l'utilisateur connecté
export const getMe = catchAsync(async (req: AuthRequest, res: Response) => {
  // Vérifier si l'utilisateur est authentifié
  if (!req.user) {
    throw new AppError("Non authentifié", 401);
  }

  // Récupérer les informations de l'utilisateur
  const user = await User.findById(req.user._id);

  // Réponse
  res.status(200).json({
    success: true,
    user: {
      id: user?._id.toString(),
      name: user?.name,
      email: user?.email,
      role: user?.role,
    },
  });
});
