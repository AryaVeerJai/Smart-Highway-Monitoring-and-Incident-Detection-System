const mongoose = require("mongoose");

const trafficSchema = new mongoose.Schema({
  roadName: String,
  density: String, // Low / Medium / High
  lat: Number,
  lng: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Traffic", trafficSchema);