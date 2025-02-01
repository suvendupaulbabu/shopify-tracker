const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");

// Save tracking data
router.post("/track", async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json({ message: "Tracking data saved" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all tracking data
router.get("/data", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
