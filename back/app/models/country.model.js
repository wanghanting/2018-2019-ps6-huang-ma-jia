const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Country', {
  id: Joi.number().required(),
  name: Joi.string().required(),
  flagPath: Joi.string().required(),
  photoPath: Joi.string().required(),
  information: Joi.string().required(),
  someInformation: Joi.string().required(),
});