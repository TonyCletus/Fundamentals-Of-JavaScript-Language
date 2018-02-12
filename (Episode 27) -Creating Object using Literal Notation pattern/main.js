/*
Title: Program for employees of a company
Topic: Literal Notation pattern or Object Initializer
*/

var john = {
	name: "John Halt",
	salary: 5000,
	bonus: 500.5,

	totalpay: function(){
		console.log("The Total pay for " + john.name + " is $" + (john.salary + john.bonus));
	}
}
john.totalpay()

var jane = {
	name: "Jane Smith",
	salary: 4000,
	bonus: 400,
	loan: 1000,

	totalpay: function(){
		console.log("The Total pay for " + jane.name + " is $" + (jane.salary + jane.bonus));
	},
	afterLoan: function(total){
		total = (jane.salary + jane.bonus) - jane.loan
		console.log("The total pay for " + jane.name + " after Loan has been deducted is $" + total)
	}
}
jane.totalpay();
jane.afterLoan();