/*
1. toString()
2. valueOf()
3. shift()
4. unshift()
5. delete
6. sort() = ascending
7. reverse() = descending
8. sort() method of Numbers
*/

var stateInNigeria = ['Lagos', 'Port Harcourt', 'Kogi', 'Enugu', 'Kano'];

//Converts an array to string
console.log(stateInNigeria.toString());

//Converts an array to a primitive value (raw format)
console.log(stateInNigeria.valueOf());

//Removes the first element of an array
console.log(stateInNigeria.shift());
console.log(stateInNigeria) //to confirm

//Add an element to an array from the beginning
//inditcates the Number of elements in an array
console.log(stateInNigeria.unshift("Abuja"));
console.log(stateInNigeria.unshift());
console.log(stateInNigeria)// to confirm Abuja has been added to the array

//Deletes an element from an array
delete stateInNigeria[3];
console.log(stateInNigeria);


//Rearranges an array Alphabetically
console.log(stateInNigeria.sort());


//Rearranges an array from behind
console.log(stateInNigeria.reverse());



//Sorting Numbers
var scores = [585, 864, 1013, 3289, 7693, 3423, 3289]

//Rearranges the elements of an array in a Descending Order
scores.sort(function (a, b) {
		return b - a
});
console.log(scores);

//Rearranges the elements of an array in an Ascending Order
scores.sort(function (a, b) {
		return a- b
});
console.log(scores);







