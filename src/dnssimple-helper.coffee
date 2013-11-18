_ = require 'underscore'
async = require 'async'
dnsimple = require 'dnsimple'

module.exports = class DnsimpleHelper

  constructor: (@settings = {}) ->
    throw new Error("settings requires a dnsimpleEmail field with a key.") unless @settings.dnsimpleEmail and @settings.dnsimpleEmail.length > 0
    throw new Error("settings requires a dnsimpleToken field with a key.") unless @settings.dnsimpleToken and @settings.dnsimpleToken.length > 0
    dnsimple.api.email = @settings.dnsimpleEmail
    dnsimple.api.token =  @settings.dnsimpleToken

    _.defaults @settings, {}

  ###
  @param domainRoot 'openb.net'
  @param recordName : 'customer1'
  @param recordType : 'A'
  @param content: '1.2.3.4'
  ###
  addRecord: (domainRoot,recordName,recordType,content,opts = {}, cb = ->) =>
    return cb new Error("A domainRoot is required") unless domainRoot and domainRoot.length > 0
    return cb new Error("A recordName is required") unless recordName and recordName.length > 0
    return cb new Error("A recordType is required") unless recordType and recordType.length > 0
    return cb new Error("A content is required") unless content and content.length > 0

    record = 
      name: recordName
      record_type: recordType
      content: content     

    dnsimple.dns.add domainRoot,record,cb

