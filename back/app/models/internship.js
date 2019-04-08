const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Internship', {
  id: Joi.number().required(),
  name: Joi.string().required(),
  student: Joi.number.required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
});
