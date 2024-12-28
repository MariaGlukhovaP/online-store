const { Schema, model } = require("mongoose");

const User = new Schema({
  login: {
    type: String,
    uniqued: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = model("User", User);
