const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  interviewlist: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model('List', listSchema, 'list');
