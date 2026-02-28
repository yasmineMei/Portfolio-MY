import mongoose from "mongoose";
import { User } from "../models/User.model";
import { config } from "../config/env";
import bcrypt from "bcryptjs";

const createAdmin = async () => {
  try {
    await mongoose.connect(config.mongodbUri);
    console.log("Connecté à MongoDB");

    const adminEmail = config.admin.email || "admin@portfolio.com";
    const adminPassword = config.admin.password || "Admin123!";

    // Vérifiez si l’administrateur existe
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log("Admin existe déjà.");
      process.exit(0);
    }

    // Create admin
    await User.create({
      email: adminEmail,
      password: adminPassword,
      name: "Admin",
      role: "admin",
    });

    console.log("Admin créé avec succès !");
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);

    process.exit(0);
  } catch (error) {
    console.error("Erreur lors de la création de l'administrateur:", error);
    process.exit(1);
  }
};

createAdmin();
