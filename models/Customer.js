const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  sessionId: String,
  event: String,
  url: String,
  referrer: String,
  userAgent: String,
  screenWidth: Number,
  deviceType: String,
  timestamp: Date,
  timeSpent: Number,
});

module.exports = mongoose.model("Customer", CustomerSchema);
