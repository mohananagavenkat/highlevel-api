const Joi = require('joi');

const walletRegisterSchema = Joi.object({
  body: {
    name: Joi.string().required(),
    balance: Joi.number().optional()
  },
});

module.exports = {
  walletRegisterSchema,
};
