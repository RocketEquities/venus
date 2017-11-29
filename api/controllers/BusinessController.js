/**
 * BusinessController
 *
 */

module.exports = {
  index: index,
  show: show
};

//==============================================================================

function index(req, res) {
  if (!req.wantsJSON) {
    return res.view("index");
  }

  Business.find().limit(10).exec((err, businesses) => {
    if (err) {
      return res.apiError(err);
    }

    res.apiSuccess({ businesses: businesses });
  });
}

//------------------------------------------------------------------------------

function show(req, res) {
  if (!req.wantsJSON) {
    return res.view("index");
  }

  const id = _.toInteger(req.param("id"));

  if (!id) {
    return res.apiError(new Exception.NotFound());
  }

  Business.findOne().where({ id: id }).exec((err, business) => {
    if (err) {
      return res.apiError(err);
    }
    if (_.isEmpty(business)) {
      return res.apiError(new Exception.NotFound());
    }

    res.apiSuccess({ business: business });
  });
}

//==============================================================================
