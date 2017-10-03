/**
 * middleware: locals
 *
 */

module.exports = locals;


var _ = require("lodash");
var async = require("async");

//==============================================================================

function locals(sails) {

  return function(req, res, next) {
    //-- set title
    var title = sails.config.appTitle;
    if (title) {
      res.locals.title = title;
    }

    //-- expose some non-overridable helpers to views :)
    Object.defineProperty(res.locals, "_", {
      get: function() { return _; },
      enumerable: true
    });
    Object.defineProperty(res.locals, "async", {
      get: function() { return async; },
      enumerable: true
    });
    Object.defineProperty(res.locals, "Exception", {
      get: function() { return sails.helpers.Exception; },
      enumerable: true
    });
    Object.defineProperty(res.locals, "Util", {
      get: function() { return sails.helpers.Util; },
      enumerable: true
    });

    //-- override toString
    Object.defineProperty(res.locals, "toString", {
      get: function() { return toString; }
    });

    next();
  };

}

//==============================================================================

var excludedAttrs = [
  "sails", "req", "res", "session", "layout", "view", "util",
  "__dirname", "_layoutFile", "_", "async", "flash", "Util"
];

//------------------------------------------------------------------------------

function toString() {
  var locals = _.omitBy(this, function(val, key) {
    return _.isFunction(val) || _.includes(excludedAttrs, key);
  });

  return JSON.stringify(locals);
}

//==============================================================================
