/*
 * Cache
 *
 */

module.exports = Cache;


var Memori = require("memori");
Cache.prototype = Object.create(Memori.prototype);

//==============================================================================

var _cacheMap = {};

//-- constructor
function Cache(options) {
  var self = this;

  if (! (self instanceof Cache)) {
    var _cacheKey = toCacheKey(options);
    var _cacheInstance = _cacheMap[_cacheKey];
    if (!_cacheInstance) {
      _cacheInstance = _cacheMap[_cacheKey] = new Cache(options);
    }

    return _cacheInstance;
  }

  var _options = _.merge({}, sails.config.cache, options);

  Object.defineProperty(self, "options", {
    get: function() { return _options; }
  });

  Memori.call(self, _options);
}

//==============================================================================

function toCacheKey(obj) {
  var key = "default";

  _.forEach(_.keys(obj).sort(), function(k) {
    key += "," + k + ":" + obj[k];
  });

  return key;
}

//==============================================================================
