/* 
The const statement is used to declare a variable with a constant value.
Unlike the "var" method of declaring variables in JavScript which can
permit us to change the value of a declared identifier over and over again
the const statement permits only one time declaration for a legal identifier. (value can't be changed.)
*/

//Main example (Simple Area of A Circle program)

const pi = 3.142; //constant variable with identifier name as "pi"


//To prove "const law" uncomment "var pi = 7.777;" below, save and check for the error in your browser console.

//var pi = 7.777; //Uncaught SyntaxError: Identifier 'pi' has already been declared.

function areaCircle() {
	var r = 10; 

	var result = (pi * (r * r)).toFixed(0); 
	document.write("Area of Circle = " + result + "cm" );
}
areaCircle();