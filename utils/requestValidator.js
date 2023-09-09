const Joi = require('joi');

exports.requestValidator = (reqValidationSchema, ...fieldsToCheck) => {
  if (!Joi.isSchema(reqValidationSchema)) {
    throw new Error('Not a valid Joi Schema!');
  }
  if (!fieldsToCheck || fieldsToCheck.length === 0) {
    fieldsToCheck = ['body'];
  }
  return (req, res, next) => {
    let partialReq = {};

    fieldsToCheck.forEach(field => {
      if (req[field]) partialReq[field] = req[field];
    });

    const {value, error} = reqValidationSchema.validate(partialReq);
    if (error) {
      return next(error);
    }
    return next();
  };
};
