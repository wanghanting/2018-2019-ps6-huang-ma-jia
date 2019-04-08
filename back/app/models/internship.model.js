const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Internship', {
  id: Joi.number().required(),
  name: Joi.string().required(),
  studentId: Joi.number().required(),
  companyId: Joi.number().required(),
});