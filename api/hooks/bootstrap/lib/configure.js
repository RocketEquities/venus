/**
 * configure
 *
 */

module.exports = configure;


var _ = require("lodash");

//==============================================================================

function configure(sails) {

  return function() {
    var envvars = sails.config.envvars;

    //-- merge env variables
    if (_.isObject(envvars)) {
      _.merge(process.env, envvars);
    }
  };

}

//==============================================================================
