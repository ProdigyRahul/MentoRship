import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"; // Import the authRoutes

// Environment Variables
dotenv.config();

const app = express();

// Database Connection
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Mount the auth routes
app.use("/api/auth", authRoutes);

// Start the server
app.listen(process.env.PORT || 8000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
