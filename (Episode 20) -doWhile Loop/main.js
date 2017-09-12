/*
Unlike the while loop statement which will not execute any code block if the value
is not true for the condition (given value).
The do-while loop statement will atleast run ones even though the value
is not true for the condition (given value).
*/ 


//To prove that the while loop will not run atleast ones for any false value with the condition.
//Uncomment this code block below and comment the do-while loop code block to confirm.

/*   
   var x = 10;

   while (x <= 0) {
	 document.write("X = " + x + "<br>")

	 x++;
   }
 */



var x = 10; 

do{

	document.write("X = " + x + "<br>");

	x--;
}while(x > 0)