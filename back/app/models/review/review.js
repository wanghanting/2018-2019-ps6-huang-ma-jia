const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  countryId: {
    type: Number,
    required: true,
  },
  student: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Review', reviewSchema, 'review');
