const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('SearchInternship', {
  hasCDIouCDD: Joi.boolean().required(),
  hasVoiture: Joi.boolean().required(),
});
