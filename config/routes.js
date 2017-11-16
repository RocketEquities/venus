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

  //-- commenting this out for now...
  //-- "/*": function(req, res, next) {
  //--    if (req.path.match(/\..*/g)) {
  //--       return next();
  //--    } else {
  //--       return res.view("Home/index");
  //--    }
  //-- }

  "GET    /"        : "Home.index",
  "GET    /login"   : "Home.login",

  "POST   /login"   : "User.login",
  "POST   /logout"  : "User.logout",

  "GET    /profile" : "Profile.show",
  "PUT    /profile" : "Profile.update",
  "PATCH  /profile" : "Profile.update",

  //----------------------------------------------------------------------------

  "GET    /businesses" : "Business.index",
  /**
  {
    data: {
      businesses: [
        {
          id: <id>,
          name: <name>,
          description: <description>,
          overview: <overview>,
          createdAt: <date>,
          updatedAt: <date>
        }
      ]
    }
  }
  */

  //----------------------------------------------------------------------------

  "GET    /investments" : "Investment.index",
  /**
  {
    data: {
      investments: [
        {
          id: <id>,
          business: {
            id: <id>,
            name: <name>
          },
          amount: <amount>,
          createdAt: <date>,
          updatedAt: <date>
        }
      ]
    }
  }
  */

  //----------------------------------------------------------------------------

  "GET    /profits" : "Profit.index",
  /**
  {
    data: {
      profits: [
        {
          id: <id>,
          business: {
            id: <id>,
            name: <name>
          },
          actualAmount: <amount>,
          expectedAmount: <amount>,
          expectedAt: <date>,
          createdAt: <date>,
          updatedAt: <date>
        }
      ]
    }
  }
  */

  //----------------------------------------------------------------------------

  "GET    /portfolio"   : "Portfolio.index",
  "GET    /settings"    : "Settings.index",


  //-- temporary routes
  "POST   /users"     : "User.create",
  "PUT    /users/:id" : "User.update",
  "DELETE /users/:id" : "User.destroy"



};
