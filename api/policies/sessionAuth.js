/**
 * sessionAuth
 * @module :: Policy
 *
 */

module.exports = function(req, res, next) {

  //-- continue only if authenticated
  //-- redirect to login if unauthorized

  if (req.isAuthenticated()) {
    if (req.path === "/login") {
      return res.redirect("/");
    } else {
      return next();
    }
  }

  res.format({
    html: () => {
      res.redirect("/login");
    },
    json: () => {
      res.apiError(new Exception.Forbidden("You are not permitted to perform this action"));
    }
  });

};
