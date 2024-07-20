require("./Connection.js");

const mongoose = require("mongoose");

const ticker = new mongoose.Schema({
  Name: { type: String },
  Last: { type: Number },
  Buy: { type: String },
  Sell: { type: String },
 Volume: { type: String },
 BaseUnit:{type:String}
});

const Tickers = mongoose.model("Tickers", ticker);
module.exports = Tickers;
