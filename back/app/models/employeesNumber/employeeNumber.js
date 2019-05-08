const mongoose = require('mongoose');

const employeesNumberSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  num: {
    type: String,
    required: true,
  },
})
module.exports = mongoose.model('EmploeesNumber', employeesNumberSchema,'employeenumber');
