const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add a title"],
  },
  amount: {
    type: Number,
    required: [true, "Please add an amount"],
  },
  typeOfEntry: {
    type: String,
    required: [true, "Please select budget or expense for typeOfEntry"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TransactionModel = mongoose.model("Transaction", TransactionSchema);

module.exports = TransactionModel;
