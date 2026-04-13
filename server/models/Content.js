const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  sectionKey: { type: String, unique: true, required: true, index: true },
  contentValue: mongoose.Schema.Types.Mixed,
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Content", contentSchema);
