const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");

// Middleware to protect routes
const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer")) {
      token = token.split(" ")[1]; // Extract token

      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token

      if (!decoded || !decoded.id) {
        return res.status(401).json({ message: "Token is invalid" });
      }

      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      req.user = user;
      next();
    } else {
      return res.status(401).json({ message: "Not authorized, token missing" });
    }
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res
      .status(401)
      .json({ message: "Token verification failed", error: error.message });
  }
};

module.exports = { protect };
