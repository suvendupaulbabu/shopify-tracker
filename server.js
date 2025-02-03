const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const trackerRoutes = require("./routes/tracker");

dotenv.config();
connectDB();

const app = express();

// Enable CORS for your Shopify domain
app.use(cors({
  origin: "https://pueronline.in", // Allow only Shopify site
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());
app.use("/api", trackerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));