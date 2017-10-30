/**
 * middleware: passport
 *
 */

module.exports = passport;


var async = require("async");
var passport = require("passport");

//==============================================================================

function passport(sails) {

  var middlewares = [
    passport.initialize(),
    passport.session()
  ];

  return (req, res, next) => {
    async.applyEachSeries(middlewares, req, res, next);
  }

}

//==============================================================================
