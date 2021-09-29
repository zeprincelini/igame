const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("User", UserSchema);

module.exports = userModel;
