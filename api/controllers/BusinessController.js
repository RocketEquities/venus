/**
 * BusinessController
 *
 */

module.exports = {
  index: (req, res) => {
    res.apiSuccess({businesses: []});
  }
};
