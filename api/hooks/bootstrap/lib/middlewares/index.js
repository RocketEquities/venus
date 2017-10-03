/**
 * middleware: index
 *
 */

module.exports = index;


var async = require("async");

//==============================================================================

function index(sails) {
  var middlewares = [
    require("./locals")(sails),
    require("./headers")(sails),
    require("./misc")(sails)
  ];

  return function(req, res, next) {
    async.applyEachSeries(middlewares, req, res, next);
  }
}

//==============================================================================
