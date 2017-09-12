var x; //x is declared but not defined.
console.log(x); //check your console to prove that x is undefined.

var y = 10; //y is both declared and defined.


var user = "Tony Cletus"; // declare "user" as a global variable and you still get "undefined".

var profile = function() {

    document.write(user); // undefined: identifier "user", has been used before being defined below
    
	var user = "Sharon Jones"; 	// variable user will be hoisted (lifted up as undefined)
}
profile()