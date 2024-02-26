import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: Buffer,
  },
  First_Name: {
    type: String,
  },
  Last_Name: {
    type: String,
  },
  Pronoun: {
    type: String,
  },
  Gender: {
    type: String,
  },
  Race: {
    type: String,
  },
  Country: {
    type: String,
  },
  State: {
    type: String,
  },
  City: {
    type: String,
  },
  Role: {
    type: String,
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
  },
  Education: {
    type: String,
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

export default User;
