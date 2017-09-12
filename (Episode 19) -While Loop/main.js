/*
  Basic syntax for the "while loop statement"

  while(condition) {
	//code block to executed

	increment/decrement
  }

  
*/

var x = -10;

while (x <= 0) {
	document.write("X = " + x + "<br>");

	x++;
    
    /*
    
    //Other ways of incrementing (same as x++;)
	//x = x + 1;
	//x =+ 2 // this way permits specifying the loop steps incase case, it will loop by 2 for; 

	*/
}