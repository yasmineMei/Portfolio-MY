import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User, IUser } from "../models/User.model";
import { AppError } from "../utils/AppError";
import { config } from "../config/env";

interface AuthRequest extends Request {
  user?: IUser;
}

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    let token;

    if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return next(new AppError("Non autorisé à accéder à cette route", 401));
    }

    const decoded = jwt.verify(token, config.jwtSecret) as { id: string };
    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new AppError("Utilisateur non trouvé", 401));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(new AppError("Non autorisé à accéder à cette route", 401));
  }
};

export const restrictTo = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(
        new AppError("Vous n'avez pas la permission d'effectuer cette action", 403),
      );
    }
    next();
  };
};
