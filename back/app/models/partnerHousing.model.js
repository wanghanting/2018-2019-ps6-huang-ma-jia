const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('PartnerHousing', {
  id: Joi.number().required(),
  countryId: Joi.string().required(),
  name: Joi.string().required(),
  webSite: Joi.string().required(),
});