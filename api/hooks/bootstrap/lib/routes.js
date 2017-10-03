/**
 * routes
 *
 */

module.exports = routes;


//==============================================================================

function routes(sails) {

  var middlewares = require("./middlewares")(sails);

  return {
    before: {
      "all /*": middlewares
    }
  };

}

//==============================================================================
