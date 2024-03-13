const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  friendRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  sentFriendRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  First_Name: {
    type: String,
    default: "",
  },
  Last_Name: {
    type: String,
    default: "",
  },
  Pronoun: {
    type: String,
    default: "",
  },
  Gender: {
    type: String,
    default: "",
  },
  Race: {
    type: String,
    default: "",
  },
  Country: {
    type: String,
    default: "",
  },
  State: {
    type: String,
    default: "",
  },
  City: {
    type: String,
    default: "",
  },
  Role: {
    type: String,
    default: "",
  },
  Student: {
    type: Boolean,
    default: false,
  },
  Mentor: {
    type: Boolean,
    default: false,
  },
  Affiliation: {
    type: String,
    default: "",
  },
  Education: {
    type: String,
    default: "",
  },
  Areas_of_Interest: {
    type: [String],
    default: [],
  },
  Career_Goals: {
    type: [String],
    default: [],
  },
  withOrgOnly: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
