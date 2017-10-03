/*
 * Exception
 *
 */

var stderror = require("stderror");
var Exception = stderror.extend("Exception");

module.exports = Exception;

//==============================================================================
//-- define exceptions here...

Exception.define({name: "UnknownError", message: "Unknown error"});
Exception.define({name: "SystemError", message: "System error"});
Exception.define({name: "TimeoutError", message: "Timeout error"});
Exception.define({name: "ValidationError", message: "Validation error"});

//-- http specific
Exception.define({code: 400, name: "BadRequest", message: "Bad request"});
Exception.define({code: 401, name: "Unauthorized", message: "Unauthorized"});
Exception.define({code: 403, name: "Forbidden", message: "Forbidden"});
Exception.define({code: 404, name: "NotFound", message: "Not found"});
Exception.define({code: 500, name: "ServerError", message: "Server error"});
