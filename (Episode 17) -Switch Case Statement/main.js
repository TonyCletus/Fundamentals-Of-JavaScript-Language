/*
//Syntax for the Switch case statement

Switch(set expression) {	
    case n;    //where n stands for the case scenerio being tested for
    code block //runs if this case scenerio is true for the expression
	break;     //halts futher execution only if this case is true for the set expression

	case n;    //where n stands for the case scenerio being tested for
	code block //runs if this case scenerio is true for the set expression
	break;     //halts futher execution only if this case is true for the set expression


    case n;    //where n stands for the case scenerio being tested for
    code block //runs if this case scenerio is true for the expression
	break;     //halts futher execution only if this case is true for the expression

    default:            
    default code block //runs if all the case scenera are false for the set expression.
}
*/

var day = "Monday"; //Go through the cases to check which is true for the expression "Monday".

switch (day) {

	case "Sunday":
	document.write("Have a nice day at the office!");
	break;

	case "Monday":
	document.write("Have a nice day at the office!");
	break;

	case "Friday":
	document.write("Have a nice weekend!");
	break;

	default:
	document.write("Whatever");
}