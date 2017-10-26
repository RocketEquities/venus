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
      alphanumeric: true
    },
    lastName: {
      columnName: "last_name",
      type: "string",
      required: true,
      minLength: 2,
      maxLength: 64,
      alphanumeric: true
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

    toJSON: () => {
      const obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  //----------------------------------------------------------------------------
  //-- static method

  authenticate: (credentials, done) => {
    const email = _.get(credentials, "email") || "";
    const clearPassword = _.get(credentials, "password") || "";
    const hashedPassword = sails.helpers.Util.toHash(clearPassword);

    if (!validator.isEmail(email) || _.isEmpty(clearPassword)) {
      return done(Exception.ValidationError("Invalid email or password."));
    }

    User.findByEmail(email).exec((err, user) => {
      if (err) {
        sails.log.error("User.authenticate:", err);
        return done(Exception.UnknownError());
      }
      if (user.password !== hashedPassword) {
        return done(Exception.ValidationError("Invalid email or password."));
      }
      done(null, user);
    });
  },

  //----------------------------------------------------------------------------
  //-- lifecycle callback

  afterValidate: (values, next) => {
    if (values.password) {
      values.password = sails.helpers.Util.toHash(values.password);
    }
    next();
  }

};
