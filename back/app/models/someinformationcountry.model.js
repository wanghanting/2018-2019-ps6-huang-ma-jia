const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('SomeInformationCountry', {
  id: Joi.string().required(),
  name: Joi.string().required(),
  pathFlag: Joi.string().required(),
  visaStar: Joi.number().required(),
  nbStudent: Joi.number().required(),
  nbCompagny: Joi.number().required(),
});
