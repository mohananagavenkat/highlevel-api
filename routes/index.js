const walletRouter = require('./wallet');
const transactionRouter = require('./transaction');

function initRoutes(app) {
  app.use('/wallet', walletRouter);
  app.use('/transaction', transactionRouter);
}

module.exports = initRoutes;