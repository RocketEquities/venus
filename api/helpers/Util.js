/*
 * Util
 *
 */

module.exports = {

  toAssetsUrl: function(path) {
    const assetsBaseUrl = _.get(sails.config, "assets.baseUrl") || "";
    const assetsUrl = assetsBaseUrl + (path || "/");
    return assetsUrl;
  }

};
