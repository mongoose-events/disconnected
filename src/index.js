/* eslint consistent-this: off */
/* eslint no-invalid-this: off */
/* eslint no-param-reassign: off */

'use strict';

/**
 * @param {object} logger
 * @returns {undefined}
 */
function disconnectedEvent( logger ) {
  var db = this;

  logger = logger || console;

  if ( db.base.options.debug ) {
    logger.log( '[debug]', new Date(), 'disconnected from mongodb://%host:%port/%database'
      .replace( '%host', db.host )
      .replace( '%port', db.port )
      .replace( '%database', db.name )
    );
  }
}

module.exports = disconnectedEvent;
