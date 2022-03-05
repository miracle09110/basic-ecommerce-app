//passing in ID because I can't use Id generator
class Product{
  constructor(_id, product_code, product_name, price) {
    this._id = _id;
    this.product_code = product_code;   
    this.product_name = product_name; 
    this.price = price; 
    this.currency = "$"; 
  }
}

module.exports = Product;