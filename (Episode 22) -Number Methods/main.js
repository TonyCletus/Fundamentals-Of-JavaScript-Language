/*
*******CONTENT***********
1. toString() Method
2. toExponential() Method
3. toFixed() Method
4. toPrecision() Method
5. parseInt() Method
6. Number() Method
*/
//The rest examples are in comments since they just make use of one variable.

document.write("toString() Method <p>")
var number = 100;  
/* var boolean = true;  //returns true as string */
var convert = number.toString();
document.write(convert + "<p>"); 



document.write("toExponential() Method <p>")
var  number = 3.147;
var convert = number.toExponential() //returns 3.147e+0
/*var convert = number.toExponential(2) //returns 3.15e+0 */
/*var convert = number.toExponential(5) // returns 3.14700e+0 */
document.write(convert + "<p>")



document.write("toFixed() Method <p>")
var number = 99.9;
var round = number.toFixed(0); //returns 100;
/* var round = number.toFixed(1); //returns 99.9 */
/* var round = number.toFixed(3); //returns 99.900 */
document.write(round + "<p>");



document.write("toPrecision() Method <p>")
var number = 59.73;
var roundup = number.toPrecision(2); //returns  60
/* var roundup = number.toPrecision(3); //returns  59.7 */
document.write(roundup + "<p>");


document.write("parseInt() Method <p>")
var x = "1000000"; //returns 1000000
/* var x2 = "20.33"; //returns 20       */
/* var x3 = "2, 3, 4"; //returns 2      */
/* var x4 = "2 3, 4"; //returns 2       */
/* var x5 = "23, 4"; //returns 23       */
/* var x6 = "10 * 3"; //returns 10      */
/* var x7 = "20 years old"; //returns   */
/* var x8 = "Episode 20"; //returns NaN */
document.write(parseInt(x) + "<p>");



document.write("Number() Method <p>")
var x = "10 + 20"; //returns NaN
/* var x = true; //returns 1 */
/* var x = false; //returns 0 */
/* var x = 3.22; //returns 3.22 */
document.write(Number(x)); 