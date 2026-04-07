const express = require("express");
const router = express.Router();
const { createIncident, getIncidents } = require("../controllers/incidentController");

router.post("/", createIncident);
router.get("/", getIncidents);

module.exports = router;