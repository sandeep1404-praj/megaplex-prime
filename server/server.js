require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
// CORS configuration: allow specific origins or allow all when ALLOW_ALL_ORIGINS=true
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((s) => s.trim())
  : ["http://localhost:5173", "http://megaplex-prime.netlify.app", "https://megaplex-prime.netlify.app"];

if (process.env.ALLOW_ALL_ORIGINS === "true") {
  // Accept any origin (useful when you don't want CORS to block requests)
  app.use(cors({ origin: true, credentials: true }));
} else {
  app.use(
    cors({
      origin: function (origin, callback) {
        // allow requests with no origin (e.g., curl, Postman)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
          return callback(null, true);
        }
        return callback(new Error("CORS policy: Origin not allowed"));
      },
      credentials: true,
    })
  );
}

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    console.log("Connection string:", process.env.MONGO_URI);
  });

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/content", require("./routes/content"));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
