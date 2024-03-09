import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";
import { createWriteStream } from "fs";
import morgan from "morgan";

// Environment Variables
dotenv.config();

const app = express();

// Cors
app.use(cors());

const accessLogStream = createWriteStream("access.log", { flags: "a" }); // Use createWriteStream directly

// Log HTTP requests to a file
app.use(morgan("combined", { stream: accessLogStream }));
app.use(morgan("dev"));

// Database Connection
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Start the server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
