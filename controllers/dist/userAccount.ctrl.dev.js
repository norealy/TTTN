"use strict";

var models = require('../models/');

var user_profile = models.Categories;
module.exports = {
  getAllUsers: function getAllUsers(req, res) {
    var users;
    return regeneratorRuntime.async(function getAllUsers$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(user_profile.create(null, 'Thiet bi thong minh'));

          case 3:
            _context.next = 5;
            return regeneratorRuntime.awrap(user_profile.findAll());

          case 5:
            users = _context.sent;

            if (users) {
              res.status(201).send(users);
            } else {
              re.status(404).send("User Not Found");
            }

            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(500).send(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 9]]);
  }
};