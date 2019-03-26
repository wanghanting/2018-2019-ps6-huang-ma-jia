const Joi = require('joi');
const BaseModel = require('../utils/base-model.js');

module.exports = new BaseModel('Ticket', {
  title: Joi.string().required(),
  description: Joi.string().required(),
  major: Joi.string().required(),
  studentId: Joi.array().required(),
  date: Joi.date().required(),
  archived: Joi.boolean().required(),
});
