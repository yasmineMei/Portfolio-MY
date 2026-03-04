import { Request, Response } from "express";
import { Message } from "../models/Message.model";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/AppError";
import nodemailer from "nodemailer"; // Utilise import au lieu de require

// Configuration du transporteur
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Utilise SSL pour le port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const createMessage = catchAsync(async (req: Request, res: Response) => {
  const message = await Message.create(req.body);
  res.status(201).json({
    success: true,
    message: "Message envoyé avec succès",
    data: message,
  });
});

export const getAllMessages = catchAsync(
  async (req: Request, res: Response) => {
    const messages = await Message.find().sort("-createdAt");
    res.status(200).json({
      success: true,
      count: messages.length,
      messages,
    });
  },
);

export const getMessage = catchAsync(async (req: Request, res: Response) => {
  const message = await Message.findById(req.params.id);
  if (!message) throw new AppError("Message non trouvé", 404);
  res.status(200).json({ success: true, message });
});

export const markAsRead = catchAsync(async (req: Request, res: Response) => {
  const message = await Message.findByIdAndUpdate(
    req.params.id,
    { status: "lu" }, // Assure-toi que ton modèle utilise "status" ou "read"
    { new: true },
  );
  if (!message) throw new AppError("Message non trouvé", 404);
  res.status(200).json({ success: true, message });
});

export const deleteMessage = catchAsync(async (req: Request, res: Response) => {
  const message = await Message.findByIdAndDelete(req.params.id);
  if (!message) throw new AppError("Message non trouvé", 404);
  res.status(200).json({ success: true, message: "Message supprimé" });
});

// VERSION TS de replyToMessage
export const replyToMessage = catchAsync(
  async (req: Request, res: Response) => {
    const { email, subject, replyContent } = req.body;

    try {
      const mailOptions = {
        from: `"Portfolio Admin" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Re: ${subject}`,
        text: replyContent,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email envoyé: " + info.response);

      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error("DÉTAIL ERREUR NODEMAILER:", error); // <--- AJOUTE CECI
      res.status(500).json({
        success: false,
        error: error.message || "Erreur lors de l'envoi",
      });
    }
  },
);
