/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  "GET    /"        : "Home.index",
  "GET    /login"   : "Home.login",

  "POST   /login"   : "User.login",
  "POST   /logout"  : "User.logout",
  "GET    /logout"  : "User.logout",

  //----------------------------------------------------------------------------

  "GET    /profile"          : "Profile.show",
  "PUT    /profile"          : "Profile.update",
  "PATCH  /profile"          : "Profile.update",
  "PATCH  /profile/password" : "Profile.updatePassword",

  //----------------------------------------------------------------------------

  "GET    /businesses"                          : "Business.index",
  "GET    /businesses/:id"                      : "Business.show",
  "GET    /businesses/:business_id/projections" : "Projection.index",

  //----------------------------------------------------------------------------

  "GET    /portfolio"     : "Portfolio.index",
  "GET    /portfolio/:id" : "Portfolio.show",

  "GET    /settings"      : "Settings.index",
  "POST   /inquiries"     : "Inquiry.create",

  //----------------------------------------------------------------------------
  //-- health check

  "GET    /ycbb/ruok"     : { response: "ok" },


  //----------------------------------------------------------------------------
  //-- temporary routes

  "POST   /users"     : "User.create",
  "PUT    /users/:id" : "User.update",
  "DELETE /users/:id" : "User.destroy"

  //----------------------------------------------------------------------------


};
