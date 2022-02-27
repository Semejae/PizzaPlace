'use strict';
// business logic

function Pizza (pizza_Size,pizza_Topping,pizza_Price) {
  this.size = pizza_Size;
  this.topping = pizza_Topping;
  this.price = pizza_Price;
  this.updatePrice = function() {
    return ++this.price
  };
}

let customerPizza1 = new Pizza('cheese','Small',10);
let customerPizza2 = new Pizza('pepperoni','medium',12);
let customerPizza3 = new Pizza('pineapple','large',14);

Pizza.prototype.topping = function() {
  this.topping = 'cheese' || 'pepperoni' || 'pineapple';
}
Pizza.prototype.size = function() {
  this.size = 'Small' || 'Medium' || 'Large';
}
Pizza.prototype.price = function() {
  this.price = 10 || 12 || 14;
}

console.log(customerPizza1.updatePrice,customerPizza2.updatePrice,customerPizza3.updatePrice)

