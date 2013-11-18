_ = require 'underscore'
async = require 'async'
mongohq = require 'mongohq'


module.exports = class MongoHQHelper
  constructor: (@settings = {}) ->
    throw new Error("settings requires a mongohqKey field with a key.") unless @settings.mongohqKey and @settings.mongohqKey.length > 0
    mongohq.authenticate(apikey : @settings.mongohqKey)
    _.defaults @settings, {}

  create: (name,tier,opts = {}, cb = ->) =>
    return cb new Error("A name is required") unless name and name.length > 0
    mongohq.database.create {name : name, slug: tier},cb

  delete: (name,opts = {}, cb = ->) =>
    return cb new Error("A name is required") unless name and name.length > 0
    mongohq.database.delete name,null,cb

  getStatus: (name,opts = {},cb = ->) =>
    return cb new Error("A name is required") unless name and name.length > 0
    mongohq.databases.stats name,null,cb

  getTiers: (opts = {},cb = ->) =>
    mongohq.plans.all (err,plans) =>
      return cb err if err
      result = {}
      _.each plans, (x) -> result[x.name] = x
      cb null,result