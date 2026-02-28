import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  category: "Web" | "Mobile" | "Data Science" | "Other";
  description: string;
  image: {
    publicId: string;
    url: string;
  };
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, "Le titre du projet est requis"],
      trim: true,
    },
    category: {
      type: String,
      enum: ["Web", "Mobile", "Data Science", "Other"],
      default: "Web",
    },
    description: {
      type: String,
      required: [true, "La description du projet est requise"],
      trim: true,
    },
    image: {
      publicId: { type: String, required: true },
      url: { type: String, required: true },
    },
    
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
    liveUrl: String,
    githubUrl: String,
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export const Project = mongoose.model<IProject>("Project", ProjectSchema);
