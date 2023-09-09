const Joi = require('joi');

const transactionSchema = Joi.object({
  body: {
    walletId: Joi.string().required(),
    description: Joi.string(),
    amount: Joi.number().required()
  },
});

const getTransactionsSchema = Joi.object({
  query: {
    walletId: Joi.string().required(),
    limit: Joi.number(),
    offset: Joi.number(),
    sortBy: Joi.string(),
    sortDirection: Joi.number()
  },
  body: {}
});

module.exports = {
  transactionSchema,
  getTransactionsSchema
};
