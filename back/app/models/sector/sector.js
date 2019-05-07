const mongoose = require('mongoose');

const sectorSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model('sector', sectorSchema);
