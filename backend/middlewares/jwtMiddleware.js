import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const jwtMiddleware = (req, res, next) => {
  const token = req.header("Authorization");
  console.log(token);
  // Check if token is present
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization denied. Token not present." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Set userId in the request for further use
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid token." });
  }
};

export default jwtMiddleware;
