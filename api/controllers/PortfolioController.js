/**
 * PortfolioController
 *
 */

module.exports = {
  index: index,
  show: show
};

//==============================================================================

function index(req, res) {
  const userId = _.toInteger(_.get(req, "user.id"));

  function validate(next) {
    const err = (!userId) ? new Exception.NotFound() : null;
    next(err);
  }

  function getInvestments(next) {
    Investment.find().where({ userId: userId })
                     .sort("businessId ASC").sort("updatedAt DESC")
                     .exec(next);
  }

  function getBusinesses(investments, next) {
    const businessIds = _.uniq(_.map(investments, "businessId"));
    if (_.isEmpty(businessIds)) {
      return next(null, []);
    }

    Business.find().where({ id: businessIds }).exec(next);
  }

  function getProfits(businesses, next) {
    const businessIds = _.map(businesses, "id");
    if (_.isEmpty(businessIds)) {
      return next(null, []);
    }

    Profit.find().where({ userId: userId, businessId: businessIds })
                 .sort("expectedAt ASC")
                 .exec(next);
  }


  function done(err, result) {
    const investments = _.get(result, "investments") || [];
    const businesses = _.get(result, "businesses") || [];
    const profits = _.get(result, "profits") || [];

    if (err) {
      return res.apiError(err);
    }

    const investmentSummary = _.reduce(businesses, (acc, business) => {
      const transactions = _.filter(investments, { businessId: _.get(business, "id") });
      const _profits = _.filter(profits, { businessId: _.get(business, "id") });

      let businessSummary = _.pick(business, ["id", "name", "investmentPeriod", "paybackPeriod", "irr"]);

      _.set(businessSummary, "investedAmount", _.sumBy(transactions, "amount"));
      _.set(businessSummary, "transactions", transactions);
      _.set(businessSummary, "profits", _profits);

      acc.push(businessSummary);
      return acc;
    }, []);

    const portfolio = {
      totalInvestedAmount: _.sumBy(investmentSummary, "investedAmount"),
      investments: investmentSummary
    };

    res.apiSuccess(portfolio);
  }

  //-- response...
  res.format({
    html: () => {
      res.view("index");
    },
    json: () => {
      async.autoInject({
        validate: validate,
        investments: getInvestments,
        businesses: getBusinesses,
        profits: getProfits
      }, done);
    }
  });
}

//------------------------------------------------------------------------------

function show(req, res) {
  res.view("index");
}

//==============================================================================
