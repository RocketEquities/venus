/**
 * User.js
 *
 */

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

    //-- instance method -------------------------------------------------------

    toJSON: function() {
      const obj = this.toObject();
      delete obj.password;
      return obj;
    }
  },

  //-- lifecycle callback ------------------------------------------------------

  afterValidate: function(values, next) {
    if (values.password) {
      values.password = sails.helpers.Util.toHash(values.password);
    }
    next();
  }

};
