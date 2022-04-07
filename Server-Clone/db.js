const mongoose = require("mongoose");

const url =
  "mongodb://zeeshansarwar:byqFDCfCQCYeplY4@cluster0-shard-00-00.1g2p0.mongodb.net:27017,cluster0-shard-00-01.1g2p0.mongodb.net:27017,cluster0-shard-00-02.1g2p0.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-k516my-shard-0&authSource=admin&retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};