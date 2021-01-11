const express = require("express");
const router = express.Router();
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require("../controllers/transaction");

router
  .get("/", getTransactions)
  .post("/", addTransaction)
  .delete("/:id", deleteTransaction);

module.exports = router;
