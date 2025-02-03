const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const trackerRoutes = require("./routes/tracker");

dotenv.config();
connectDB();

const app = express();

// CORS Middleware (Allow Shopify domain)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://pueronline.in"); // Allow only this domain
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

app.use(express.json());
app.use("/api", trackerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));