(function() {
  var DnsimpleHelper, async, dnsimple, _,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  _ = require('underscore');

  async = require('async');

  dnsimple = require('dnsimple');

  module.exports = DnsimpleHelper = (function() {
    function DnsimpleHelper(settings) {
      this.settings = settings != null ? settings : {};
      this.addRecord = __bind(this.addRecord, this);
      if (!(this.settings.dnsimpleEmail && this.settings.dnsimpleEmail.length > 0)) {
        throw new Error("settings requires a dnsimpleEmail field with a key.");
      }
      if (!(this.settings.dnsimpleToken && this.settings.dnsimpleToken.length > 0)) {
        throw new Error("settings requires a dnsimpleToken field with a key.");
      }
      dnsimple.api.email = this.settings.dnsimpleEmail;
      dnsimple.api.token = this.settings.dnsimpleToken;
      _.defaults(this.settings, {});
    }

    /*
    @param domainRoot 'openb.net'
    @param recordName : 'customer1'
    @param recordType : 'A'
    @param content: '1.2.3.4'
    */


    DnsimpleHelper.prototype.addRecord = function(domainRoot, recordName, recordType, content, opts, cb) {
      var record;
      if (opts == null) {
        opts = {};
      }
      if (cb == null) {
        cb = function() {};
      }
      if (!(domainRoot && domainRoot.length > 0)) {
        return cb(new Error("A domainRoot is required"));
      }
      if (!(recordName && recordName.length > 0)) {
        return cb(new Error("A recordName is required"));
      }
      if (!(recordType && recordType.length > 0)) {
        return cb(new Error("A recordType is required"));
      }
      if (!(content && content.length > 0)) {
        return cb(new Error("A content is required"));
      }
      record = {
        name: recordName,
        record_type: recordType,
        content: content
      };
      return dnsimple.dns.add(domainRoot, record, cb);
    };

    return DnsimpleHelper;

  })();

}).call(this);

/*
//@ sourceMappingURL=dnssimple-helper.js.map
*/