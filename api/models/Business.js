/**
 * Business.js
 *
 */


module.exports = {

  tableName: "businesses",

  attributes: {
    name: {
      columnName: "name",
      type: "string",
      required: true,
      maxLength: 64
    },
    description: {
      columnName: "description",
      type: "string",
      maxLength: 256
    },
    overview: {
      columnName: "overview",
      type: "string",
      maxLength: 1024
    },
    createdAt: {
      columnName: "created_at",
      type: "datetime"
    },
    updatedAt: {
      columnName: "updated_at",
      type: "datetime"
    }
  }

};
