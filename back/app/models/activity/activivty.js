const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  enrollment: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model('Activity', activitySchema, 'activity');
