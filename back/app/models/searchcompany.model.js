const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('SearchCompany', {
  filiere: Joi.string().required(),
  specialite: Joi.string().required(),
  continent: Joi.string().required(),
  secteur: Joi.string().required(),
  taile: Joi.string().required(),
});
