const mongoose = require('mongoose');
const wallet = require('./wallet');

const { ObjectId } = mongoose.Schema

const transactionSchema = mongoose.Schema({
  wallet: { type: ObjectId, required:true, ref:wallet },
  amount: { type: Number, required: true },
  balance: { type: Number, required: true },
  description: { type: String },
  type: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('transaction', transactionSchema);

