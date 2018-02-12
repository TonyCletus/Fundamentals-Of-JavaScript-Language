//Demo on how to use the length property.
//this is in comment so we won't get a redefined variable value down the workflow.
var strr = "I love Lagos";

var thelength = strr.length; // returns the total number of charactrer in a string

console.log(thelength);


//We want to learn how to use the escape charater to break long code lines
document.write("Be nice\
				Stay Hungery\
                Stay Foolish");


//We want to learn how to extracts some portions of a string value.
//String part extractors or String Methods
var str = "Mac, Linux, Windows";

var slicer = str.slice(12,19); //slice(start, end): returns Windows

var sub = str.substr(5, 5); //substr(start, lenght): returns Linux

var subS = str.substring(12, 15) //substring(start, end): returns Win
console.log(slicer); 
console.log(sub); 
console.log(subS); 



var str1 = "find hugo in the hole";

var pos = str1.indexOf('hugo'); //indexOf(the portion to find the index): returns 5

//this method searches a string for a specified value and returns the postion of the match
var find = str1.search('hole'); //returns 17

console.log(pos);
console.log(find);