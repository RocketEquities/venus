/*
 * Util
 *
 */

const _ = require("lodash");
const crypto = require("crypto");


module.exports = {
  toAssetsUrl: toAssetsUrl,
  toHash: toHash,
  toInstanceKey: toInstanceKey
};

//==============================================================================

function toAssetsUrl(path) {
  const assetsBaseUrl = _.get(sails.config, "assets.baseUrl") || "";
  const assetsUrl = assetsBaseUrl + (path || "/");
  return assetsUrl;
}

//------------------------------------------------------------------------------

function toHash(data, encoding) {
  const hash = crypto.createHmac("sha256", "venus")
                     .update(data)
                     .digest(encoding || "hex");
  return hash;
}

//------------------------------------------------------------------------------

function toInstanceKey(value) {
  let key = "";

  if (_.isPlainObject(value)) {
    _.forEach(_.keys(value).sort(), function(k) {
      key && (key += ",");
      key += (k + ":" + toInstanceKey(value[k]));
    });
  } else {
    key = _.toString(value);
  }

  return key;
}

//==============================================================================
