/**
 * ProfileController
 *
 */

module.exports = {
  show: show,
  update: update
};

//==============================================================================

function show(req, res) {
  res.apiSuccess({ profile: req.user });
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
  let id = _.get(req.user, "id") || 0;
  let attrs = _.omitBy(params, _.isNil);

  User.update(id, attrs).exec((err, user) => {
    if (err) {
      return res.apiError(err);
    }
    res.apiSuccess({profile: user});
  });
}

//==============================================================================
