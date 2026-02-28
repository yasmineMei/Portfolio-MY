import { Request, Response } from "express";
import { Message } from "../models/Message.model";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/AppError";

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

  if (!message) {
    throw new AppError("Message non trouvé", 404);
  }

  res.status(200).json({
    success: true,
    message,
  });
});

export const markAsRead = catchAsync(async (req: Request, res: Response) => {
  const message = await Message.findByIdAndUpdate(
    req.params.id,
    { read: true },
    { new: true },
  );

  if (!message) {
    throw new AppError("Message non trouvé", 404);
  }

  res.status(200).json({
    success: true,
    message,
  });
});

export const deleteMessage = catchAsync(async (req: Request, res: Response) => {
  const message = await Message.findByIdAndDelete(req.params.id);

  if (!message) {
    throw new AppError("Message non trouvé", 404);
  }

  res.status(200).json({
    success: true,
    message: "Message supprimé avec succès",
  });
});
