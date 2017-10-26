/*
 * Util
 *
 */

const _ = require("lodash");
const crypto = require("crypto");

module.exports = {

  toAssetsUrl: function(path) {
    const assetsBaseUrl = _.get(sails.config, "assets.baseUrl") || "";
    const assetsUrl = assetsBaseUrl + (path || "/");
    return assetsUrl;
  },

  //----------------------------------------------------------------------------

  toHash: function(data, encoding) {
    const hash = crypto.createHmac("sha256", "venus")
                       .update(data)
                       .digest(encoding || "hex");
    return hash;
  },

  //----------------------------------------------------------------------------

  toInstanceKey: function(value) {
    const self = this;
    let key = "";

    if (_.isPlainObject(value)) {
      _.forEach(_.keys(value).sort(), function(k) {
          key && (key += ",");
          key += (k + ":" + self.toInstanceKey(value[k]));
      });
    } else {
      key = _.toString(value);
    }

    return key;
  }

};
