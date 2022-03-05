class PromoCode{
  constructor(_id, code, percent_discount, valid) {
    this._id = _id;
    this.code = code;   
    this.percent_discount = percent_discount; 
    this.valid = valid; 
  }
}

module.exports = PromoCode;