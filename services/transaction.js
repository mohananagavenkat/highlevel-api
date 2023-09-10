const Transaction = require('../models/transaction');
const Wallet = require('../models/wallet');
const asyncHandler = require('express-async-handler');
const { runInTransaction } = require('../utils/runTransaction');
const { createExcel } = require('../utils/excel');
const { head } = require('../app');

const makeTransaction = asyncHandler(async ({ walletId, amount, description }) => {
  const wallet = await Wallet.findOne({ _id: walletId });
  if(!wallet){
    throw new Error('Wallet does not exist')
  }
  if(amount < 0 && Number(wallet.balance) < Math.abs(amount)){
    throw new Error('Insufficient Amount');
  }
  let transactionType = amount < 0 ? 'DEBIT': 'CREDIT';
  await runInTransaction(async (session) => {
    wallet.balance = parseFloat((wallet.balance + amount).toFixed(4));
    await wallet.save({ session });
    await Transaction.create([{ wallet: wallet.id, amount, type: transactionType, balance: wallet.balance, description }], { session });
  })
  return wallet.toObject();
});

const getTransactions = asyncHandler(async ({ walletId, limit, offset, sortBy, sortDirection }) => {


  const total = await Transaction.count({ wallet: walletId });

  const query = Transaction.find({ wallet: walletId })

  if(sortBy && sortDirection){
    query.sort({ [sortBy]: sortDirection });
  } else {
    query.sort({ _id: sortDirection });
  }

  if (offset) {
    query.skip(offset);
  }
  if (limit) {
    query.limit(limit);
  }

  const transactions = await query.lean();

  return {
    transactions,
    total
  };
});

const downloadTransactions = asyncHandler(async ({ walletId }) => {

  const transactions = await Transaction.find({ wallet: walletId }).lean();

  const header = [
    {
      header: 'Id',
      key: '_id',
    },
    {
      header: 'Transaction Type',
      key: 'type',
    },
    {
      header: 'Amount',
      key: 'amount',
    },
    {
      header: 'Balance Left',
      key: 'balance',
    },
    {
      header: 'Description',
      key: 'description',
    },
    {
      header: 'Date',
      key: 'createdAt',
    },
  ];

  const body = transactions.map(({ _id, type, amount, balance, description, createdAt }) => ({
    _id, type, amount, balance, description, createdAt
  }))

  return createExcel({ serviceName: 'transactions', excelHeader: header, excelBody: body })

});

module.exports = {
  makeTransaction,
  getTransactions,
  downloadTransactions
}