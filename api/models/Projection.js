/**
 * Projection.js
 *
 */


module.exports = {

  tableName: "projections",

  attributes: {
    businessId: {
      columnName: "business_id",
      type: "integer",
      required: true
    },
    expectedProfit: {
      columnName: "expected_profit",
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
