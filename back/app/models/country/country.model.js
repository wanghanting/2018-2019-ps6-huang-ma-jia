const Joi = require('joi');
const BaseModel = require('../../utils/base-model.js');

module.exports = new BaseModel('Country', {
  id: Joi.string().required(),
  name: Joi.string().required(),
  flagPath: Joi.string().required(),
  photoPath: Joi.string().required(),
  information: Joi.string().required(),
  someInformation: Joi.string().required(),
  visaDifficulty: Joi.number().required(),
  visaInformation: Joi.string().required(),
  hiringOpportunities: Joi.string().required(),
  continent: Joi.string().required(),
  nbCompany: Joi.string().required(),
  nbIntership: Joi.string().required(),
});
