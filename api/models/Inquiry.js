/**
 * Inquiry.js
 *
 */


module.exports = {

  tableName: "inquiries",

  attributes: {
    userId: {
      columnName: "user_id",
      type: "integer",
      required: true
    },
    businessId: {
      columnName: "business_id",
      type: "integer",
      required: true
    },
    amount: {
      columnName: "amount",
      type: "float",
      required: true
    },
    message: {
      columnName: "message",
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
