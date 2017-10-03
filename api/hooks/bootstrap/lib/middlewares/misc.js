/**
 * middleware: misc
 *
 */

module.exports = misc;


var _ = require("lodash");

//==============================================================================

function misc(sails) {

  return function(req, res, next) {
    //-- set usingSSL
    var xForwardedProto = req.headers["x-forwarded-proto"];
    req.usingSSL = !!(xForwardedProto === "https" || !_.isEmpty(sails.config.ssl));

    next();
  };

}

//==============================================================================
