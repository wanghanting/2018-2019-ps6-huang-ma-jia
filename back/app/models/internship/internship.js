const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  studentId: {
    type: Number,
    required: true,
  },
  companyId: {
    type: Number,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  contractRenewed: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  residence: {
    type: String,
    required: true,
  },
  hasCompanyCar: {
    type: Boolean,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  tuteur: {
    type: String,
    required: true,
  },
  stuProfile: {
    type: String,
    required: true,
  },
  stuName: {
    type: String,
    required: true,
  },
  iconImage: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Internship', internshipSchema, 'internship');
