const ShoppingCart = require('./classes/shopping-cart');
const Product = require('./classes/product');
const PromoCode = require('./classes/promo-code');
const Promo = require('./classes/promo');

const productData = require('./data/products');
const promoCodeData = require('./data/promo-codes');
const { PROMOS } = require('./data/promos');

const products = productData.map(data => {
  return new Product(data._id, data.product_code, data.product_name, data.price)
});

const pricingRules = {
  products,
  promoCodes: promoCodeData.map(data => {
    return new PromoCode(data._id, data.code, data.percent_discount, data.valid)
  }),
  discounts: PROMOS.map(data => {
    return new Promo(data._id, data.product_id, data.rules)
  })
}

const cart = new ShoppingCart(pricingRules);

//------------ADD INTENDED CART BELOW-----------

//case 1
cart.add(products[0]);
cart.add(products[0]);
cart.add(products[0]);
cart.add(products[2]);


//case 2
// cart.add(products[0]);
// cart.add(products[0]);
// cart.add(products[2]);
// cart.add(products[2]);
// cart.add(products[2]);
// cart.add(products[2]);


//case 3
// cart.add(products[0]);
// cart.add(products[1]);
// cart.add(products[1]);

//case 4
// cart.add(products[0]);
// cart.add(products[3], 'I<3AMAYSIM');


//------------END ADDING HERE-----------
console.log(cart.total);
console.log(cart.items);