provisioner
===========================

npm install provisioner

Collection of useful utilities when you programmatically need to provision sites on digital ocean, do some dns magic with dnsimple.com and host some data on mongohq.com.
This is not intended as a general purpose library, and it might change at will, although we honor semantic versioning. Use at your own risk.


### 0.2.0
* First version

## Internal Stuff

docs
test
watch --> compiles, triggers test
remove unused grunts
release compiles first


## Stuff

npm test
npm run-script docs

node_modules/.bin/grunt                   # Starts the watch & test run
node_modules/.bin/grunt coffee            # Compiles the coffeescript

node_modules/.bin/grunt release
node_modules/.bin/grunt release:minor
node_modules/.bin/grunt release:major


## Contributing to node-provisioner
 
* Check out the latest master to make sure the feature hasn't been implemented or the bug hasn't been fixed yet
* Check out the issue tracker to make sure someone already hasn't requested it and/or contributed it
* Fork the project
* Start a feature/bugfix branch
* Commit and push until you are happy with your contribution
* Make sure to add tests for it. This is important so I don't break it in a future version unintentionally.
* Please try not to mess with the package.json, version, or history. If you want to have your own version, or is otherwise necessary, that is fine, but please isolate to its own commit so I can cherry-pick around it.

## Copyright

Copyright (c) 2013 Martin Wawrusch and Francisco Ramos. See LICENSE for
further details.

