/* eslint prefer-rest-params: off */

'use strict';

var connecting = require( '../src/index' )
var db = require( './fixture/db' )
var sinon = require( 'sinon' )
var spy = sinon.spy( console, 'log' )
var tap = require( 'tap' )

tap.test( 'disconnectedEvent without debug output',
  function ( t ) {
    var connectingEvent

    db.base.options.debug = false
    connectingEvent = connecting.bind( db )
    connectingEvent()

    t.same( spy.notCalled, true, 'should not output a console.log message' )
    t.end()
  }
)

tap.test( 'disconnectedEvent with debug output',
  function ( t ) {
    var connectingEvent

    db.base.options.debug = true
    connectingEvent = connecting.bind( db )
    connectingEvent()

    t.same(
      spy.calledWith(
        '[debug]',
        spy.getCall( 0 ).args[ 1 ],
        'disconnected from mongodb://localhost:27017/mydb'
      ),
      true,
      'should output a console.log message'
    )

    t.end()
  }
)

tap.test( 'disconnectedEvent with custom logger',
  function ( t ) {
    var connectingEvent

    var logger = {
      log: function () {
        var args = Array.from( arguments );

        console.log( args.join( ' ' ) )
      }
    }

    db.base.options.debug = true
    connectingEvent = connecting.bind( db, logger )
    connectingEvent()

    t.same(
      spy.calledWith(
        '[debug]',
        spy.getCall( 0 ).args[ 1 ],
        'disconnected from mongodb://localhost:27017/mydb'
      ),
      true,
      'should output a console.log message using a custom logger'
    )

    t.end()
  }
)
