const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('SearchCompany', {
  continent: Joi.string().required(),
  secteur: Joi.string().required(),
  taile: Joi.string().required(),
});
