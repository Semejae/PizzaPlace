'strict mode';

  // business logic
function Pizza (size,topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0
};

Pizza.prototype.setPrice = function() {

  if (this.size === 'small'){
  this.price += 9
  } else if (this.size === 'medium'){
    this.price += 11
  } else {
    this.price += 13
  }
};
Pizza.prototype.setToppingPrice = function() {

  if (this.topping === 'blank'){
    this.price 
  } else if (this.topping === 'cheese'){
    this.price = this.price * 3 
  } else if (this.topping === 'pepperoni'){
    this.price = this.price * 4
  } else {
    this.price = this.price * 2
  }
};

// ui logic
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();

    const pizzaTopping = $('#toppings').val();
    const pizzaSize = $('#size').val();
    const customer = new Pizza(pizzaSize,pizzaTopping)
    customer.setPrice(); 
    customer.setToppingPrice();

    $('#results').text('$'+ customer.price + '.00')

  });
});