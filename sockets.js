"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _notesService = require("./public/js/notesService");

var _default = function _default(io) {
  io.on("connection", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(socket) {
      var notesList;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              // console.log(socket.handshake.url);
              console.log("Se conecto socket, id::", socket.id);
              _context5.next = 3;
              return (0, _notesService.getNotes)();

            case 3:
              notesList = _context5.sent;
              socket.emit('server:loadNotes', notesList); // Escucha desde cliente client:sends_message

              socket.on('client:sendNewNote', /*#__PURE__*/function () {
                var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(noteSend) {
                  var newNote;
                  return _regenerator["default"].wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return (0, _notesService.addNewNote)(noteSend);

                        case 2:
                          newNote = _context.sent;
                          io.emit('server:newNote', newNote);

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }()); //

              socket.on('client:getNote', /*#__PURE__*/function () {
                var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
                  var getMote;
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return (0, _notesService.getNote)(id);

                        case 2:
                          getMote = _context2.sent;
                          socket.emit('server:getNote', getMote);

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x3) {
                  return _ref3.apply(this, arguments);
                };
              }()); //

              socket.on('client:deleteNote', /*#__PURE__*/function () {
                var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
                  var delNote, notesList;
                  return _regenerator["default"].wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return (0, _notesService.deleteNote)(id);

                        case 2:
                          delNote = _context3.sent;
                          _context3.next = 5;
                          return (0, _notesService.getNotes)();

                        case 5:
                          notesList = _context3.sent;
                          io.emit('server:loadNotes', notesList);

                        case 7:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x4) {
                  return _ref4.apply(this, arguments);
                };
              }()); //

              socket.on('client:modifyNote', /*#__PURE__*/function () {
                var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(note) {
                  var upNote, notesList;
                  return _regenerator["default"].wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return (0, _notesService.modifyNote)(note);

                        case 2:
                          upNote = _context4.sent;
                          _context4.next = 5;
                          return (0, _notesService.getNotes)();

                        case 5:
                          notesList = _context4.sent;
                          io.emit('server:loadNotes', notesList);

                        case 7:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x5) {
                  return _ref5.apply(this, arguments);
                };
              }()); //

              socket.on("disconnect", function () {
                console.log("Se desconecto socket, id:", socket.id);
              });

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
};

exports["default"] = _default;