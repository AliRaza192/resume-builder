// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const ConnectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const resumeRoutes = require("./routes/resumeRoutes");

// const app = express();
// // Middleware to handle CORS
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// // Connect to MongoDB
// ConnectDB();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/resume", resumeRoutes);

// // Serve upload folder
// app.use(
//   "/uploads",
//   express.static(path.join(__dirname, "uploads"), {
//     setHeaders: (res, path) => {
//       res.set("Access-Control-Allow-Origin", "http://localhost:5173");
//     },
//   })
// );

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const ConnectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

// CORS Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Connect to MongoDB
ConnectDB();

// Body parser
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

// Serve static files (uploads)
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res) => {
      res.set("Access-Control-Allow-Origin", process.env.CLIENT_URL || "*");
    },
  })
);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
