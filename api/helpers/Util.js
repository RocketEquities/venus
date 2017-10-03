/*
 * Util
 *
 */

module.exports = {

  toAssetsUrl: function(path) {
    var assetsBaseUrl = sails.config.assets.baseUrl || "";
    var assetsUrl = assetsBaseUrl + (path || "/");
    return assetsUrl;
  }

};
