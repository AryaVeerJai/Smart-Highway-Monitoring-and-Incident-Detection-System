const express = require("express");
const router = express.Router();
const { getTraffic, addTraffic } = require("../controllers/trafficController");

router.get("/", getTraffic);
router.post("/", addTraffic);

module.exports = router;