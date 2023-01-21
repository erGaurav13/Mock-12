const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      
    },

    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);
const User = mongoose.model("user", usersSchema);
module.exports = User;
