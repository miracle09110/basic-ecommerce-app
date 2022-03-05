const { ACTIONS, THRESHOLD_OPERATOR } = require('../data/promos');

class ShoppingCart{
  #products;
  #promoCodes;
  #selectedProducts;
  #addedProducts;
  #discounts;

  constructor(pricingRules) {
    const { products, promoCodes, discounts } = pricingRules;
    this.pricingRules = pricingRules;
    this.total = 0;
    this.items = [];
    this.#products = products;
    this.#promoCodes = promoCodes;
    this.#discounts = discounts;
    this.#selectedProducts = [];
    this.#addedProducts = [];
  }

  add(item, code){
    this.#selectedProducts.push(item);
    this.#recomputeTotal(code);
  }

  #recomputeTotal(code){
    this.#addedProducts = [];
   
    const productMap = this.#generateProductNMap();
    
    //Total price
    const details = Object.keys(productMap).reduce((details, productId ) => {
     
      
      //default price
      let productCount = productMap[productId].count;
      let productPrice = productMap[productId].details.price;
      let currentProductTotal = productPrice * productCount;
      const discounts = this.#discounts.find(discount => discount.product_id === productId);

      let newTotal = !discounts? currentProductTotal : discounts.rules.reduce((newTotal, rule ) => {
       
        if(this.#satisfiesThreshold(productCount, rule.threshold_operator, rule.threshold)){
          switch(rule.action){
            case ACTIONS.subtractPrice:
              const instanceOfPromo = Math.floor(productCount / rule.threshold);
              newTotal += currentProductTotal - (instanceOfPromo * rule.value); 
              break;

            case ACTIONS.priceChange:
              newTotal += productCount * rule.value;
              break;

            case ACTIONS.addProduct:
              const productToAdd = this.#products.find(product => product._id === rule.value);
              this.#addedProducts = [...this.#addedProducts, ...Array(productCount).fill(productToAdd)];
              newTotal += currentProductTotal;
              break;   
          }
          return newTotal;
        }else {
          return currentProductTotal;
        }
      }, 0);


      details.total = details.total + newTotal

      return details;
    }, {
      total: 0,
      items: []
    });

    this.total = this.#applyPromoCode(details.total, code);
    this.items = [...this.#selectedProducts, ...this.#addedProducts]
    
  }

  #applyPromoCode(total, code){
    if(!code) return total;

    let promoCode = this.#promoCodes.find(promo => promo.code === code);

    if(!promoCode) return total;

    return total - (total * promoCode.percent_discount);
  }

  #satisfiesThreshold(a, operator, b){
    switch(operator){
      case THRESHOLD_OPERATOR.greaterThanEqual:
        return a >= b;
      case THRESHOLD_OPERATOR.greaterThan:
        return a > b;
    }
  }

  #generateProductNMap(){
    const productMap = this.#selectedProducts.reduce((map, item) => {
      if(!map[`${item._id}`]){
        map[`${item._id}`] = {
          details: item,
          count: 1
        };
      }else {
        map[`${item._id}`].count += 1;
      }
      return map;
    }, {});

    return productMap
  }
  
}

module.exports = ShoppingCart;