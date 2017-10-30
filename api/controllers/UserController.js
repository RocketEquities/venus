/**
 * UserController
 *
 */

module.exports = {

  login: (req, res) => {
    let PassportHelper = sails.helpers.Passport;

    PassportHelper.authenticate(done)(req, res);

    function done(err, user) {
      if (err) {
        return res.apiError(err);
      }

      req.login(user, (err) => {
        (err) ? res.apiError(err) : res.apiSuccess({user: user});
      });
    }
  },

  //----------------------------------------------------------------------------

  logout: (req, res) => {
    req.logout();
    req.session.destroy();
    res.apiSuccess({redirectUri: "/"});
  },

  //----------------------------------------------------------------------------

  "reset-password": (req, res) => {
    res.apiSuccess();
  }

};
