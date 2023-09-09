const asyncHandler = require('express-async-handler');
const transactionService = require('../services/transaction');

const makeTransaction = asyncHandler(async (req, res) => {

  const { amount, description } = req.body;
  const { walletId } = req.params;

  const updateWallet = await transactionService.makeTransaction({ walletId, amount: parseFloat(Number(amount).toFixed(4)), description });

  return res.json({ ...updateWallet });

});

const getTransactions = asyncHandler(async (req, res) => {

  const { walletId, limit, offset, sortBy, sortDirection } = req.query;

  const transactionsData = await transactionService.getTransactions({ walletId, limit, offset, sortBy, sortDirection });

  return res.json({ ...transactionsData });

});

module.exports = {
  makeTransaction,
  getTransactions
};
