/**
 * InquiryController
 *
 */

module.exports = {
  create: create
};

//==============================================================================

function create(req, res) {
  let params = {
    userId: _.get(req, "user.id"),
    businessId: req.param("businessId"),
    amount: req.param("amount"),
    message: req.param("message")
  };
  let attrs = _.omitBy(params, _.isNil);

  Inquiry.create(attrs).exec((err, inquiry) => {
    if (err) {
      return res.apiError(err);
    }

    res.apiSuccess({inquiry: inquiry});
  });
}

//==============================================================================
