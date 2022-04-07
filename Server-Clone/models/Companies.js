const mongoose = require("mongoose");
const companiesSchema = new mongoose.Schema({
  //   commentID: String,
  
  user: Object,
});

module.exports = mongoose.model("Companies",companiesSchema);