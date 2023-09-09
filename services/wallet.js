const Wallet = require('../models/wallet');
const asyncHandler = require('express-async-handler');

const registerWallet = asyncHandler(async ({ name, balance }) => {
  const existingWallet = await Wallet.findOne({ name }).lean();
  if(existingWallet) return existingWallet;
  const newWallet = await Wallet.create({
    name, balance
  }).lean();
  return newWallet;
});

const getWalletById = asyncHandler(async ({ id }) => {
  const wallet = await Wallet.findById(id).lean();
  return wallet;
});

module.exports = {
  registerWallet,
  getWalletById
}