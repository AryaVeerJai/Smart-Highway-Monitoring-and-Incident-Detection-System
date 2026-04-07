const express = require("express");
const router = express.Router();
const { getCameras, addCamera } = require("../controllers/cameraController");

router.get("/", getCameras);
router.post("/", addCamera);

module.exports = router;