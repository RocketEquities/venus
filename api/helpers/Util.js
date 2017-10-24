/*
 * Util
 *
 */

const crypto = require("crypto");

module.exports = {

  toAssetsUrl: function(path) {
    const assetsBaseUrl = _.get(sails.config, "assets.baseUrl") || "";
    const assetsUrl = assetsBaseUrl + (path || "/");
    return assetsUrl;
  },

  //----------------------------------------------------------------------------

  toHash: function(value) {
    const hash = crypto.createHmac("sha256", "venus")
                       .update(value)
                       .digest("hex");
    return hash;
  }


};
