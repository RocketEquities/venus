/**
 * User.js
 *
 */

const validator = require("validator");


module.exports = {

  tableName: "users",

  attributes: {
    email: {
      columnName: "email",
      type: "email",
      required: true,
      unique: true,
      maxLength: 128
    },
    password: {
      columnName: "password",
      type: "string",
      minLength: 8,
      maxLength: 32
    },
    firstName: {
      columnName: "first_name",
      type: "string",
      required: true,
      minLength: 2,
      maxLength: 64,
      is: /^[a-zA-Z0-9\-\s]+$/
    },
    lastName: {
      columnName: "last_name",
      type: "string",
      required: true,
      minLength: 2,
      maxLength: 64,
      is: /^[a-zA-Z0-9\-\s]+$/
    },
    picture: {
      columnName: "picture",
      type: "string",
      maxLength: 256
    },
    createdAt: {
      columnName: "created_at",
      type: "datetime"
    },
    updatedAt: {
      columnName: "updated_at",
      type: "datetime"
    },

    //--------------------------------------------------------------------------
    //-- instance method

    toJSON: function() {
      const obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  //----------------------------------------------------------------------------
  //-- static method

  authenticate: function(credentials, done) {
    const email = _.get(credentials, "email") || "";
    const clearPassword = _.get(credentials, "password") || "";
    const hashedPassword = sails.helpers.Util.toHash(clearPassword);

    if (!validator.isEmail(email) || _.isEmpty(clearPassword)) {
      return done(Exception.Unauthorized("Invalid email or password."));
    }

    User.findOneByEmail(email).exec((err, user) => {
      if (err) {
        sails.log.error("User.authenticate:", err);
        return done(Exception.UnknownError());
      }
      if (_.isEmpty(user) || user.password !== hashedPassword) {
        return done(Exception.Unauthorized("Invalid email or password."));
      }
      done(null, user.toJSON());
    });
  },

  //----------------------------------------------------------------------------

  updatePassword: function(id, values, done) {
    const newPassword = _.get(values, "newPassword") || "";
    const oldPassword = _.get(values, "oldPassword") || "";
    const hashedPassword = sails.helpers.Util.toHash(oldPassword);

    const where = {
      id: id,
      password: hashedPassword
    };
    const attrs = {
      password: newPassword
    };

    User.update(where, attrs).exec((err, user) => {
      if (err) {
        sails.log.error("User.updatePassword:", err);
        return done(Exception.UnknownError());
      }
      if (_.isEmpty(user)) {
        return done(Exception.Unauthorized("Password mismatch."));
      }
      done();
    });
  },

  //----------------------------------------------------------------------------
  //-- lifecycle callback

  afterValidate: function(values, next) {
    if (values.password) {
      values.password = sails.helpers.Util.toHash(values.password);
    }
    next();
  }

};
