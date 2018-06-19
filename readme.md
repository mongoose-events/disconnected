# mongoose-events-disconnected
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

a mongoose event handler that handles the disconnected event

## table of contents
* [installation](#installation)
* [usage](#usage)
    * [basic](#basic)
    * [with a logging service](#with-a-logging-service)
* [license](#license)

## installation
```javascript
npm install mongoose-events-disconnected
```

## usage
### basic
```javascript
var disconnectedEvent = require( 'mongoose-events-disconnected' )
var db

db = mongoose.connection
db.on( 'disconnected', disconnectedEvent.bind( db ) )
```

### with a logging service
```javascript
var disconnectedEvent = require( 'mongoose-events-disconnected' )
var db

// logging service needs to have a .log( arg1[, arg2[, ...] ] ) method
var logger = require( 'your-logger' )

db = mongoose.connection
db.on( 'disconnected', disconnectedEvent.bind( db, logger ) )
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/mongoose-events/disconnected/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/mongoose-events/disconnected?branch=master
[mit-license]: https://raw.githubusercontent.com/mongoose-events/disconnected/master/license.txt
[npm-image]: https://img.shields.io/npm/v/mongoose-events-disconnected.svg
[npm-url]: https://www.npmjs.com/package/mongoose-events-disconnected
[nsp-image]: https://nodesecurity.io/orgs/mongoose-events/projects/b6fb28be-a278-42e4-a7ac-94c22fce6789/badge
[nsp-url]: https://nodesecurity.io/orgs/mongoose-events/projects/b6fb28be-a278-42e4-a7ac-94c22fce6789
[travis-image]: https://travis-ci.org/mongoose-events/disconnected.svg?branch=master
[travis-url]: https://travis-ci.org/mongoose-events/disconnected
