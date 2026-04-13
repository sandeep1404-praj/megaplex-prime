const express = require("express");
const Content = require("../models/Content");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// GET all content (public)
router.get("/", async (req, res) => {
  try {
    const contents = await Content.find();
    const result = {};
    contents.forEach((doc) => {
      result[doc.sectionKey] = doc.contentValue;
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT update content (protected)
router.put("/:sectionKey", authMiddleware, async (req, res) => {
  try {
    const { sectionKey } = req.params;
    const { contentValue } = req.body;

    const updated = await Content.findOneAndUpdate(
      { sectionKey },
      { contentValue, updatedAt: new Date() },
      { upsert: true, new: true }
    );

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
