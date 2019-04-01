const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('MiniCountry', {
  id: Joi.number().required(),
  name: Joi.string().required(),
  flagPath: Joi.string().required(),
  someInformation: Joi.string().required(),
});