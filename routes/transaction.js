const express = require('express');
const router = express.Router();

const { requestValidator } = require('../utils/requestValidator');
const { transactionSchema, getTransactionsSchema } = require('../schemas/transaction');
const { makeTransaction, getTransactions, downloadTransactions } = require("../controllers/transaction");

router.get('/download/:walletId', downloadTransactions);

router.post('/:walletId', requestValidator(transactionSchema), makeTransaction);

router.get('/', requestValidator(getTransactionsSchema), getTransactions);


module.exports = router;
