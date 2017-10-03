/**
 * initialize
 *
 */

module.exports = initialize;


var path = require("path");
var includeAll = require("include-all");

var _ = require("lodash");
var async = require("async");

//==============================================================================

function initialize(sails) {

  return function(done) {
    var appPath = sails.config.appPath;

    //-- load helpers
    var helpers = includeAll({
      dirname     : path.resolve(appPath, "api", "helpers"),
      filter      : /(.+)\.js$/,
      excludeDirs : /^\.(git|svn)$/,
      optional    : true
    });

    //-- wait for orm hook to be loaded... (orm hook somehow loads last)
    sails.after(["hook:http:loaded", "hook:orm:loaded"], function() {
      //-- expose helpers
      Object.defineProperty(sails, "helpers", {
        get: function() { return helpers; }
      });

      //-- expose some globals
      Object.defineProperty(global, "Exception", {
        get: function() { return helpers.Exception; }
      });
      Object.defineProperty(global, "_", {
        get: function() { return _; }
      });
      Object.defineProperty(global, "async", {
        get: function() { return async; }
      });

      //-- other settings
      sails.hooks.http.app.enable("trust proxy");

      done();
    });
  };

}

//==============================================================================
