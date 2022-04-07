const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema({
  //   userID: String,
  
  user: Object,
});

module.exports = mongoose.model("Users", usersSchema);