const TransactionModel = require("../models/Transaction");

// @desc    Get all transactions
// @route   /api/v1/transactions
// @access public
async function getTransactions(req, res, next) {
  try {
    const transactions = await TransactionModel.find({});
    return res.status(200).json({
      succcess: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      succcess: false,
      error: "Something went wrong :(",
    });
  }
}

// @desc    Add a transactions
// @route   /api/v1/transactions
// @access public
async function addTransaction(req, res, next) {
  try {
    const { text, amount } = req.body;
    const result = await TransactionModel.create(req.body);
    res.status(201).json({
      succcess: true,
      transaction: result,
    });
  } catch (err) {
    if (err.name == "ValidationError") {
      const message = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        succcess: false,
        error: message,
      });
    } else {
      return res.status(500).json({
        succcess: false,
        error: "Something went wrong :(",
      });
    }
  }
}

// @desc    Delete a transactions
// @route   /api/v1/transactions/:id
// @access public
async function deleteTransaction(req, res, next) {
  try {
    const { id } = req.params;
    const transaction = await TransactionModel.findOne({ _id: id });
    if (!transaction) {
      return res.status(404).json({
        succcess: false,
        error: "Transaction not found",
      });
    }
    await transaction.remove();
    return res.status(200).json({
      succcess: true,
      data: [],
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      succcess: false,
      error: "Something went wrong :(",
    });
  }
}

module.exports = { getTransactions, addTransaction, deleteTransaction };
