/*
  1. Aside declaring a variable in respect to the function scope
  we can also declare a variable in respect to other code blocks
  like the "if statement block", "switch case statement block", "objects" etc.

  2. Declaring a variable in respect to block scope is made possible with
  the Keyword word "let". 

  3. Variables declared with the LET keyword can only be accessible inside 
  the block of code its been declared in.

  4. The LET statement declares a block scope local variable optionally initializing it
  to a value.

  5. With the LET statement you can use a particular identifier(name of the variable) 
  multiple times in different block of codes in file.
*/

function bestGame() {
	let game = "call of duty"; //local to both the "function block" & "the if block"

	if(true) {
		let game = "Game of war"; //local to the "if block" alone" 
		console.log(game);  
	}

	console.log(game); 
}
bestGame();

/*
PRECAUTIONS TO SAVE YOU FROM SOME HEADACHES(BUGS)
1. Do not use LET statement in the switch case statement 
as this is just one block of code.

2. In ECMAScript 2015,The LET Bindings are not subjected to
 Variable Hoisting. (ECMA-262).
*/