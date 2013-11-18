/*
protect-resource primary entry point
*/


(function() {
  var digitalOceanHelper, dnsimpleHelper, mongohqHelper, provision;

  digitalOceanHelper = require('./digital-ocean-helper');

  dnsimpleHelper = require('./dnssimple-helper');

  mongohqHelper = require('./mongohq-helper');

  provision = require('./provision');

  module.exports = {
    digitalOceanHelper: digitalOceanHelper,
    mongohqHelper: mongohqHelper,
    dnsimpleHelper: dnsimpleHelper
  };

}).call(this);

/*
//@ sourceMappingURL=index.js.map
*/