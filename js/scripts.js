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

let customerPizza = new Pizza(['cheese','pepperoni','pineapple'],['Small','Medium','large'],[10,12,14]);


Pizza.prototype.topping = function() {
  this.topping = ['cheese','pepperoni','pineapple'];
}
Pizza.prototype.size = function() {
  this.size = ['Small','Medium','large'];
}
Pizza.prototype.price = function() {
  this.price = [10,12,14];
}
if (customerPizza === 'cheese') {
  
}

console.log(customerPizza)

// UI logic
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
  
  const pizzaToppings = $('#toppings').val();
  const pizzasSizes = $('#size')
  


  });
});
