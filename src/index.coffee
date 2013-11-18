###
protect-resource primary entry point
###

digitalOceanHelper = require './digital-ocean-helper'
dnsimpleHelper = require './dnssimple-helper'
mongohqHelper = require './mongohq-helper'
client = require './client'

module.exports =
  digitalOceanHelper : digitalOceanHelper
  mongohqHelper : mongohqHelper
  dnsimpleHelper : dnsimpleHelper
  
  ###
  The actual provisioner. 
  To be invoked like this:
  @example
    ```coffeescript
    provisioner = require 'provisioner'
    client = provisioner.client 
      digitalOcean:
        apiKey: 'xxx'

    client.createServer ...
    ```

  ###
  client : client
