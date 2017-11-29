/**
 * Profit.js
 *
 */


module.exports = {

  tableName: "profits",

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
    actualAmount: {
      columnName: "actual_amount",
      type: "float"
    },
    expectedAmount: {
      columnName: "expected_amount",
      type: "float",
      required: true
    },
    expectedAt: {
      columnName: "expected_at",
      type: "datetime",
      required: true
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
