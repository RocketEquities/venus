/**
 * ProjectionController
 *
 */

module.exports = {
  index: index
};

//==============================================================================

function index(req, res) {
  if (!req.wantsJSON) {
    return res.view("index");
  }

  const businessId = req.param("business_id");

  if (!_.toInteger(businessId)) {
    return res.apiError(new Exception.NotFound());
  }

  Projection.find().where({ businessId: businessId })
                   .sort("expectedAt ASC")
                   .exec((err, projections) => {
    if (err) {
      return res.apiError(err);
    }

    res.apiSuccess({ projections: projections || [] });
  });
}

//==============================================================================
