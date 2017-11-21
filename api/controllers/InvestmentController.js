/**
 * InvestmentController
 *
 */

module.exports = {
  index: index
};

//==============================================================================

function index(req, res) {
  const userId = _.get(req, "user.id");
  const businessId = req.param("business_id");

  if (!userId || !businessId) {
    return res.apiError(new Exception.NotFound());
  }

  function getBusiness(next) {
    const where = { id: businessId };
    Business.findOne().where(where).exec(next);
  }

  function getInvestments(next) {
    const where = { userId: userId, businessId: businessId };
    const sort = "createdAt DESC";
    Investment.find().where(where).sort(sort).exec(next);
  }

  function done(err, result) {
    const business = _.get(result, "business") || {};
    const investments = _.get(result, "investments") || [];

    if (err) {
      return res.apiError(err);
    }
    if (_.isEmpty(business)) {
      return res.apiError(new Exception.NotFound());
    }

    res.apiSuccess({ business: business, investments: investments });
  }

  //-- execute
  async.series({ business: getBusiness, investments: getInvestments }, done);
}

//==============================================================================
