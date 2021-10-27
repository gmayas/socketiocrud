"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UsersSchema = new Schema({
  title: String,
  note: String,
  updated: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('Notes', UsersSchema);