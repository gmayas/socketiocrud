"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _socket = require("socket.io");

var _http = _interopRequireDefault(require("http"));

var _sockets = _interopRequireDefault(require("./sockets.js"));

var path = require('path');

_dotenv["default"].config();

// Server configuration
var app = (0, _express["default"])();

var server = _http["default"].createServer(app);

var io = new _socket.Server(server); // static files

app.use(_express["default"]["static"](path.join(__dirname, 'public'))); // Database

require('./public/js/database'); // listening the Server


server.listen(5000);
console.log("Server on http://localhost:5000"); // Importa eventos

(0, _sockets["default"])(io);