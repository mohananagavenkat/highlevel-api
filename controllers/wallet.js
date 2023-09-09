const asyncHandler = require('express-async-handler');
const walletService = require('../services/wallet');

const registerWallet = asyncHandler(async (req, res) => {

  const { name, balance } = req.body;

  const wallet = await walletService.registerWallet({ name, balance });

  return res.json({ ...wallet });

});

const getWalletById = asyncHandler(async (req, res) => {

  const { id } = req.params;

  const wallet = await walletService.getWalletById({ id });

  return res.json({ ...wallet });

});

module.exports = {
  registerWallet,
  getWalletById
};
