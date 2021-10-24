const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({
  title: String,
  note: String,
  updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notes', UsersSchema);