const Camera = require("../models/Camera");

exports.getCameras = async (req, res) => {
  try {
    const cameras = await Camera.find();
    res.json(cameras);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addCamera = async (req, res) => {
  try {
    const camera = new Camera(req.body);
    await camera.save();
    res.status(201).json(camera);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};