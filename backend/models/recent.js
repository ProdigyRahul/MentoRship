const mongoose = require("mongoose");

const recentSearchSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  searchQuery: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const RecentSearch = mongoose.model("RecentSearch", recentSearchSchema);

module.exports = RecentSearch;
