/*
 * Passport
 *
 */

const _ = require("lodash");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;


module.exports = new Passport({usernameField: "email"});

//==============================================================================
//-- constructor

function Passport(options) {
  const _options = {
    usernameField: _.get(options, "usernameField", "username"),
    passwordField: _.get(options, "passwordField", "password"),
    passReqToCallback: true
  };

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  passport.use(new LocalStrategy(_options,
    (req, username, password, done) => {
      process.nextTick(() => {
        const credentials = {};
        _.set(credentials, _options.usernameField, username);
        _.set(credentials, _options.passwordField, password);

        authenticateUser(credentials, done);
      });
    }
  ));
}

//------------------------------------------------------------------------------
//-- instance methods

Passport.prototype.authenticate = (done) => {
  return (req, res) => {
    passport.authenticate("local", (err, user, info, status) => {
      done(err, user);
    })(req, res);
  }
}

//==============================================================================
//-- helpers

function serializeUser(user, done) {
  return done(null, user);
}

//------------------------------------------------------------------------------

function deserializeUser(user, done) {
  //-- return user if serialized value is a user object
  if (_.isObject(user)) {
    return done(null, user);
  }

  //-- otherwise, assume serialized user is a user id
  User.findById(user).exec((err, user) => {
    done(err, user);
  });
}

//------------------------------------------------------------------------------

function authenticateUser(credentials, done) {
  User.authenticate(credentials, (err, user) => {
    done(err, user);
  });
}

//==============================================================================
