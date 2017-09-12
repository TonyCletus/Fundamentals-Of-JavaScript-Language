//Calling functions from another function

//first question
function question () {
	document.write("What is your favourite food? <br>");
}

//second question
function answer() {
	document.write("Yam and Egg Sauce!");
}

/*The Function's Caller 
first and second function being called from the display function.*/
function display() {
	question();
	answer();
}
display(); 