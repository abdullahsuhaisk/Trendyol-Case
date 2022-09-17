const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  comment: {
    type: String,
    require: true
  },
  company: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: () => Date.now() + 7 * 24 * 60 * 60 * 1000
  }
});

module.exports = mongoose.model('Comments', CommentSchema);