const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: null,
    required: "First name is required!",
    trim: true,
  },
  lastName: {
    type: String,
    default: null,
    required: "Last name is required!",
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required!",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: String,
    required: "Password is required!",
  },
  token: { type: String },
});

module.exports = mongoose.model("User", UserSchema);
