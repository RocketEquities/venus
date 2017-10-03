/**
 * middleware: headers
 *
 */

module.exports = headers;


//==============================================================================

function headers(sails) {

  return function(req, res, next) {
    //-- override default powered-by header
    res.set("X-Powered-By", "Rocket Equities");

    //-- prevent browser from loading page within an iframe
    res.set("X-Frame-Options", "DENY");

    //-- Prevent content sniffing where no mimetype is sent
    res.set("X-Content-Type-Options", "nosniff");

    //-- Enables the Cross-site scripting (XSS) filter built into most recent web browsers
    res.set("X-XSS-Protection", "1; mode=block");

    //-- Redirect all HTTP traffic to HTTPS
    // res.set("Strict-Transport-Security", "max-age=31536000");
    // res.set("Strict-Transport-Security", "max-age=86400; includeSubDomains");

    //-- Reduce XSS risks on modern browsers by declaring what dynamic resources are allowed to load
    var assets = _.get(sails, "config.assets.baseUrl", "");
    res.set("Content-Security-Policy", "default-src 'self' 'unsafe-inline' " + assets + "; img-src * data:");

    //-- Force all request to not generate cache (not applicable to assets)
    res.set("Cache-Control", "no-cache, no-store, must-revalidate, private");
    res.set("Pragma", "no-cache");

    next();
  };

}

//==============================================================================
