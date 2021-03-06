var orm = require('../config/orm.js');

var burger = {

  all: function(cb) {
    orm.selectAll('burgers', function(result) {
      cb(result);
    });
  },

  insert: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(result) {
      cb(result);
    });
  },

  update: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(result) {
      cb(result)
    });
  },

  delete: function(condition, cb) {
    orm.delete('burgers', condition, function(result) {
      cb(result);
    });
  }
}

module.exports = burger;
