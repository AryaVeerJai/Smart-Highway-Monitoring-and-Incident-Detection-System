const Traffic = require("../models/Traffic");

exports.getTraffic = async (req, res) => {
  try {
    const data = await Traffic.find().sort({ timestamp: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addTraffic = async (req, res) => {
  try {
    const traffic = new Traffic(req.body);
    await traffic.save();
    res.status(201).json(traffic);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};