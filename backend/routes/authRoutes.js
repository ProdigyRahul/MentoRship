import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../controllers/authController.js";
import jwtMiddleware from "../middlewares/jwtMiddleware.js"; // Import JWT middleware

const router = express.Router();

// Registration route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Protected route - User profile
router.get("/profile", jwtMiddleware, getUserProfile);

export default router;
