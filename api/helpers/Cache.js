/*
 * Cache
 *
 */

const Memori = require("memori");
const Util = require("./Util");


module.exports = Cache;

//==============================================================================

//-- protected variable
const _instanceMap = {};

//------------------------------------------------------------------------------
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

  //-- super
  Memori.call(self, _options);
}

//------------------------------------------------------------------------------
//-- inherit from Memori

Cache.prototype = Object.create(Memori.prototype);

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
