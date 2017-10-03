/**
 * sails-hook-bootstrap
 *
 */

module.exports = hook;


var configure = require("./lib/configure");
var initialize = require("./lib/initialize");
var routes = require("./lib/routes");

//==============================================================================

function hook(sails) {

  return {
    configure: configure(sails),
    initialize: initialize(sails),
    routes: routes(sails)
  };

}

//==============================================================================
