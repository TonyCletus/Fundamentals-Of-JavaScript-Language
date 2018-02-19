/*
	This is A Take Home Exercise that you can work on aside 
	the examples used in the video tutorial. 
	a. Study it and advance.
	b. Try to convert this code to Dynamic Prototype Pattern

	Note: THIS EXAMPLE IS AN OBJECT ORIENTED APPROACH TO MIMICKING 
		  A PIZZA DELIVERY PROGRAM. (PROTOTYPE PATTERN IS USED HERE.)

*/


var orderCounter = 0;

var pizza = function() {};

pizza.prototype.customer = "empty";
pizza.prototype.topping = "empty";
pizza.prototype.crustType = "empty";

pizza.prototype.takeOrder = function() {
	document.write("<p> <li>");
	document.write("Hello " + this.customer + ", Here is \
	  your order of " + this.crustType + " topped\
	   with " + this.topping);
	orderCounter = orderCounter + 1;
};

var ann = new pizza();
ann.customer = "Ann";
ann.topping = "Thin";
ann.crustType = "Pesto";
ann.takeOrder();

var tony = new pizza();
tony.customer = "Tony";
tony.topping = "Crust";
tony.crustType = "Pepperoni";
tony.takeOrder();

var getSumOrder = function(itemCount) {
document.write("<p> Total Sold = " + itemCount * 7.5);
}

getSumOrder(orderCounter);
