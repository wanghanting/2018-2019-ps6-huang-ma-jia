const mongoose = require('mongoose')

const logeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rent: {
    type: String,
    required: true,
  },
  landload: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  }
})
module.exports = mongoose.model('Loge', logeSchema, 'loge');
