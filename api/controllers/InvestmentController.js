/**
 * InvestmentController
 *
 */

module.exports = {
  index: (req, res) => {
    res.apiSuccess({investments: []});
  }
};
