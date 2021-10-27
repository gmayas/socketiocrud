"use strict";

var mongoose = require('mongoose');

var URIMONGODB = "mongodb+srv://adminchat:chtjsmgdb1000@cluster0.osjde.mongodb.net/Chat?retryWrites=true&w=majority";
mongoose.connect(URIMONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('db connected in Cluster0', URIMONGODB);
})["catch"](function (err) {
  return console.log('db connected error in Cluster0: ', err);
});