const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema({
  name: String,
  lat: Number,
  lng: Number,
  status: { type: String, default: "active" }
});

module.exports = mongoose.model("Camera", cameraSchema);