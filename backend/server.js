require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Traffic = require("./models/Traffic");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/incidents", require("./routes/incidentRoutes"));
app.use("/api/cameras", require("./routes/cameraRoutes"));
app.use("/api/traffic", require("./routes/trafficRoutes"));

// Test Route
app.get("/", (req, res) => {
  res.send("Smart Highway Backend Running");
});



setInterval(async () => {
  const densities = ["Low", "Medium", "High"];
  const randomDensity = densities[Math.floor(Math.random() * 3)];

  await Traffic.create({
    roadName: "NH44",
    density: randomDensity,
    lat: 12.97,
    lng: 77.59
  });

  console.log("Traffic simulated");
}, 10000);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});