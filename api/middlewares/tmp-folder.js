/**
 * Middleware: tmp-folder
 */

module.exports = function() {
  var express = require("sails/node_modules/express");
  return express.static(process.cwd() + "/tmp");
};
