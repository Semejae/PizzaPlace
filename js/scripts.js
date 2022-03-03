'strict mode';

  // business logic
function Pizza (size,topping) {
  this.size = size;
  this.topping = topping;
  this.price = 0
};

Pizza.prototype.setPrice = function() {

  if (this.size === 'small'){
  this.price += 10
  } else if (this.size === 'medium'){
    this.price += 12
  } else {
    this.price += 14
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
    console.log(customer.price)

    $('#results').text(customer.price)

  });
});