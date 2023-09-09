const express = require('express');
const router = express.Router();

const { requestValidator } = require('../utils/requestValidator');
const { walletRegisterSchema } = require('../schemas/wallet');
const { registerWallet, getWalletById } = require("../controllers/wallet");

router.post('/', requestValidator(walletRegisterSchema), registerWallet);

router.get('/:id', getWalletById);


module.exports = router;
