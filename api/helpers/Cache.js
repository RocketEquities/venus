/*
 * Cache
 *
 */

module.exports = Cache;


const Util = require("./Util");
const Memori = require("memori");
Cache.prototype = Object.create(Memori.prototype);

//==============================================================================

const _instanceMap = {};

//-- constructor
function Cache(options) {
  const self = this;

  if (! (self instanceof Cache)) {
    return getInstance(options);
  }

  let _options = _.merge({}, sails.config.cache, options);

  Object.defineProperty(self, "options", {
    get: function() { return _options; }
  });

  Memori.call(self, _options);
}

//==============================================================================
//-- helpers

function getInstance(options) {
  let instanceKey = Util.toInstanceKey(options) || "default";
  let instance = _instanceMap[instanceKey];

  if (!instance) {
    instance = _instanceMap[instanceKey] = new Cache(options);
  }

  return instance;
}

//==============================================================================
