/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.http.html
 */

var middlewares = require("../api/middlewares");

module.exports.http = {

  middleware: {

  /***************************************************************************
  *                                                                          *
  * Using the conventional defaults excluding favicon.                       *
  *                                                                          *
  ***************************************************************************/

    order: [
      "cookieParser",
      "session",
      "bodyParser",
      "handleBodyParserError",
      "compress",
      "methodOverride",
      "$custom",
      "router",
      "www",
      "404",
      "500"
    ]

  },


  /***************************************************************************
  *                                                                          *
  * Intended for other middleware that doesn't follow 'app.use(middleware)'  *
  * convention.                                                              *
  *                                                                          *
  ***************************************************************************/

  // customMiddleware: function(app){
  //   require('other-middleware').initialize(app);
  // },

  /***************************************************************************
  *                                                                          *
  * The number of seconds to cache flat files on disk being served by        *
  * Express static middleware (by default, these files are in `.tmp/public`) *
  *                                                                          *
  * The HTTP static cache is only active in a 'production' environment,      *
  * since that's the only time Express will cache flat-files.                *
  *                                                                          *
  ***************************************************************************/

  // cache: 31557600000
};
