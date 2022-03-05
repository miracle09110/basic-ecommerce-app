const THRESHOLD_OPERATOR = {
  greaterThanEqual : "GREATER THAN OR EQUAL",
  greaterThan: "GREATER THAN"
}

const ACTIONS = {
  subtractPrice : "SUBTRACT_PRICE",
  addProduct : "ADD_PRODUCT",
  priceChange: "PRICE_CHANGE"
}

const PROMOS = [ 
  {
    _id: "1",
    product_id: "1",
    rules: [
      {
        name: "3 for 2 Deal",
        threshold_operator: THRESHOLD_OPERATOR.greaterThanEqual,
        threshold: 3,
        action: ACTIONS.subtractPrice,
        value: 24.9
      }
    ]
  },
  {
    _id: "2",
    product_id: "3",
    rules: [
      {
        name: "Bulk 5GB Purchase",
        threshold_operator: THRESHOLD_OPERATOR.greaterThan,
        threshold: 3,
        action: ACTIONS.priceChange,
        value: 39.9
      }
    ]
  },
  {
    _id: "3",
    product_id: "2",
    rules: [
      {
        name: "1 GB Data-pack free-of-charge",
        threshold_operator: THRESHOLD_OPERATOR.greaterThanEqual,
        threshold: 1,
        action: ACTIONS.addProduct,
        value: "4"
      }
    ]
  }

]

module.exports = {
  THRESHOLD_OPERATOR,
  ACTIONS,
  PROMOS
}