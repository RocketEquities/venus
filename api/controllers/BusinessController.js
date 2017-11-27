/**
 * BusinessController
 *
 */

module.exports = {
  index: index
};

//==============================================================================

function index(req, res) {
  function getBusinesses(next) {
    Business.find().limit(10).exec(next);
  }

  function done(err, result) {
    const businesses = _.get(result, "businesses") || [];

    if (err) {
      return res.apiError(err);
    }

    res.apiSuccess({ businesses: businesses });
  }

  //-- execute
  async.series({ businesses: getBusinesses }, done);
}

//==============================================================================
