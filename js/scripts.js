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

let customerPizza = new Pizza

console.log(pizza.topping);

Pizza.prototype.topping = function() {
  this.topping = 'cheese' || 'pepperoni' || 'pineapple';
}
Pizza.prototype.size = function() {
  this.size = 'Small' || 'Medium' || 'Large';
}
Pizza.prototype.price = function() {
  this.price = 10 || 12 || 14;
}
