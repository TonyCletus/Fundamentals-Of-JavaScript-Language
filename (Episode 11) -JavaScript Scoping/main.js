//Example to prove that functions and objects are also referred to as variables.
var game = function () {
	document.write("Catch me if you can! <br>");
}
game();

/*
1. JavaScript was first designed in respect to function scope.
2. Variables declared within a function block can only be accessible inside the function scope. 
3. variables declared within a function scope becomes local to the function.
4. varibles declared outside a function becomes a global variable and can be accessible by any legal block of code.
*/


//To test for "When a variable is Local to the function scope" line 18 - 32, uncomment the code block bellow.
//But make sure you comment the code block for "When a variable is Global to the entire file" line 35 - 50"

/*
//-------- When a variable is Local to the function scope ---------
function khan() {
	var  country = "India"; //local variable
	document.write("Khan is from: " + country + "<br>");
}
khan();


function priya () {
	//can't access the variable "Country" because it is local to the function "Khan"
	document.write("priya is from: " + country + "<br>"); 
}
priya();
*/


//--------When a variable is Global to the entire file.---------
var country = "India"; //global varibale

function khan() {

	
	document.write("Khan is from: " + country + "<br>"); //Can access the varaible "country" coz its global
}
khan();


function priya () {
	
	document.write("priya is from: " + country + "<br>"); //Can access the varaible "country" coz its global
}
priya();




/********************************
Automatic Global Variable
1. We can make a variable become an automatic global variable even inside a function scope
   by taking advantage of the JavaScript variable definition without a decalaration 
   with the "var" keyword 
*********************************/
function myFunction () {
	carName = "Venza "; //Automatic Global Variable
	document.write(carName);
}
myFunction();

function myFunc() {
	document.write(carName); 
}
myFunc();

