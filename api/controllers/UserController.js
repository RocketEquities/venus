/**
 * UserController
 *
 */

module.exports = {
  login: login,
  logout: logout,

  //----------------------------------------------------------------------------
  //-- !!! temporarily exposed !!!

  create: create,
  update: update,
  destroy: destroy
};

//==============================================================================

function login(req, res) {
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
}

//------------------------------------------------------------------------------

function logout(req, res) {
  req.logout();
  req.session.destroy();
  res.apiSuccess({redirectUri: "/"});
}

//------------------------------------------------------------------------------

function create(req, res) {
  let params = {
    email: req.param("email"),
    password: req.param("password"),
    firstName: req.param("firstName"),
    lastName: req.param("lastName"),
    picture: req.param("picture")
  };
  let attrs = _.omitBy(params, _.isNil);

  User.create(attrs).exec((err, user) => {
    if (err) {
      return res.apiError(err);
    }

    res.apiSuccess({user: user});
  });
}

//------------------------------------------------------------------------------

function update(req, res) {
  let params = {
    email: req.param("email"),
    password: req.param("password"),
    firstName: req.param("firstName"),
    lastName: req.param("lastName"),
    picture: req.param("picture")
  };
  let id = req.param("id") || 0;
  let attrs = _.omitBy(params, _.isNil);

  User.update(id, attrs).exec((err, user) => {
    if (err) {
      return res.apiError(err);
    }
    res.apiSuccess({user: user});
  });
}

//------------------------------------------------------------------------------

function destroy(req, res) {
  let criteria = {
    id: req.param("id") || 0
  };

  User.destroy(criteria).exec((err, user) => {
    if (err) {
      return res.apiError(err);
    }

    res.apiSuccess({deleted: _.size(user)});
  });
}

//==============================================================================
