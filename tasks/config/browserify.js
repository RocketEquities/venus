/**
 * Runs browserify.
 *
 * ---------------------------------------------------------------
 */

var fs = require("fs");
var path = require("path");
var pathmodify = require("pathmodify");

module.exports = function(grunt) {

  grunt.config.set("browserify", {
    dev: {
      src: "assets/js/!(dependencies)/*.js",
      dest: ".tmp/public/js/main.js",
      options: {
        plugin: [[pathmodify, {
          mods: expose("assets/js")
        }]]
      }
    }
  });

  grunt.loadNpmTasks("grunt-browserify");
};

//==============================================================================

function expose(rootDir) {
  var dirPath = path.join(process.cwd(), rootDir);
  var folders = fs.readdirSync(dirPath).filter(function(f) {
    return /^[^.].*$/.test(f) && fs.statSync(path.join(dirPath, f)).isDirectory();
  });

  return folders.map(function(folder) {
    return pathmodify.mod.dir(folder, path.join(dirPath, folder));
  });
}

//==============================================================================
