(function() {
  var MongoHQHelper, async, mongohq, _,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  _ = require('underscore');

  async = require('async');

  mongohq = require('mongohq');

  module.exports = MongoHQHelper = (function() {
    function MongoHQHelper(settings) {
      this.settings = settings != null ? settings : {};
      this.getTiers = __bind(this.getTiers, this);
      this.getStatus = __bind(this.getStatus, this);
      this["delete"] = __bind(this["delete"], this);
      this.create = __bind(this.create, this);
      if (!(this.settings.mongohqKey && this.settings.mongohqKey.length > 0)) {
        throw new Error("settings requires a mongohqKey field with a key.");
      }
      mongohq.authenticate({
        apikey: this.settings.mongohqKey
      });
      _.defaults(this.settings, {});
    }

    MongoHQHelper.prototype.create = function(name, tier, opts, cb) {
      if (opts == null) {
        opts = {};
      }
      if (cb == null) {
        cb = function() {};
      }
      if (!(name && name.length > 0)) {
        return cb(new Error("A name is required"));
      }
      return mongohq.database.create({
        name: name,
        slug: tier
      }, cb);
    };

    MongoHQHelper.prototype["delete"] = function(name, opts, cb) {
      if (opts == null) {
        opts = {};
      }
      if (cb == null) {
        cb = function() {};
      }
      if (!(name && name.length > 0)) {
        return cb(new Error("A name is required"));
      }
      return mongohq.database["delete"](name, null, cb);
    };

    MongoHQHelper.prototype.getStatus = function(name, opts, cb) {
      if (opts == null) {
        opts = {};
      }
      if (cb == null) {
        cb = function() {};
      }
      if (!(name && name.length > 0)) {
        return cb(new Error("A name is required"));
      }
      return mongohq.databases.stats(name, null, cb);
    };

    MongoHQHelper.prototype.getTiers = function(opts, cb) {
      var _this = this;
      if (opts == null) {
        opts = {};
      }
      if (cb == null) {
        cb = function() {};
      }
      return mongohq.plans.all(function(err, plans) {
        var result;
        if (err) {
          return cb(err);
        }
        result = {};
        _.each(plans, function(x) {
          return result[x.name] = x;
        });
        return cb(null, result);
      });
    };

    return MongoHQHelper;

  })();

}).call(this);

/*
//@ sourceMappingURL=mongohq-helper.js.map
*/