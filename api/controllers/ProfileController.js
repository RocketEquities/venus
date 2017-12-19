/**
 * ProfileController
 *
 */

module.exports = {
  show: show,
  update: update,
  updatePassword: updatePassword
};

//==============================================================================

function show(req, res) {
  res.apiSuccess({ profile: req.user });
}

//------------------------------------------------------------------------------

function update(req, res) {
  let params = {
    email: req.param("email"),
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
    const profile = _.isArray(user) ? _.first(user) : user;
    req.login(profile, (err) => {
      (err) ? res.apiError(err) : res.apiSuccess({profile: profile});
    });
  });
}

//------------------------------------------------------------------------------

function updatePassword(req, res) {
  let params = {
    oldPassword: req.param("oldPassword"),
    newPassword: req.param("newPassword")
  };
  let id = _.get(req.user, "id") || 0;
  let attrs = _.omitBy(params, _.isNil);

  User.updatePassword(id, attrs, (err) => {
    if (err) {
      return res.apiError(err);
    }
    res.apiSuccess();
  });
}

//==============================================================================
