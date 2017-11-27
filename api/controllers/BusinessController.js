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
  Business.find().limit(10).exec((err, businesses) => {
    if (err) {
      return res.apiError(err);
    }

    res.apiSuccess({ businesses: businesses });
  });
}

//------------------------------------------------------------------------------

function show(req, res) {
  const id = req.param("id");
  const where = { id: id };

  if (!req.wantsJSON) {
    return res.view("index");
  }

  if (!id) {
    return res.apiError(new Exception.NotFound());
  }

  Business.findOne().where(where).exec((err, business) => {
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
