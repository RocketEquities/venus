/**
 * `webpack`
 *
 * ---------------------------------------------------------------
 *
 * Webpack bundle
 *
 * For usage docs see:
 *   https://github.com/webpack/grunt-webpack
 *
 */
module.exports = function(grunt) {

  grunt.config.set("webpack", {
    dev: {
      devtool: "source-map",
      entry: "./assets/js/app.js",
      output: {
        path: ".tmp/public/js/",
        filename: "main.js"
      },
      watch: true,
      hot: true,
      module: {
        loaders: [{
          test: /\.js$/,
          loaders: ["babel"],
          include: "./assets/js/"
        }]
      }
    }
  });

  grunt.loadNpmTasks("grunt-webpack");
};