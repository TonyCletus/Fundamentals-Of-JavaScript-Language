/*

//Example (1) on return statement

function calc (x, y) {
	var z = x + y;
	return document.write(z);
}
calc(10, 20);

*/


//Example (2) on return statement

function toCelsius (fahrenheit) {
    return (5/9) * (fahrenheit - 32)
}
document.write(toCelsius(77) + "<br>");
document.write(toCelsius(17));