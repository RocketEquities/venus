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
    investmentPeriod: {
      columnName: "investment_period",
      type: "integer"
    },
    paybackPeriod: {
      columnName: "payback_period",
      type: "integer"
    },
    irr: {
      columnName: "irr",
      type: "float"
    },
    image: {
      columnName: "image",
      type: "string",
      maxLength: 256
    },
    video: {
      columnName: "video",
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
    }
  }

};
