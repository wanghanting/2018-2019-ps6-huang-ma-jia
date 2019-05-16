const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('Student', studentSchema, 'student');
