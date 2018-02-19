/*   
PROTOTYPE PATTERN
------------------
Helps to create a lightweight Object

Problem: 1. You cannot create properties and methods on one line.
         2. It Creates confusion when you have properties as an object create with many Objects.
*/

function employeeProto () {}

employeeProto.prototype.name = "no name";
employeeProto.prototype.salary = 0;
employeeProto.prototype.bonus = 0;

employeeProto.prototype.getTotalPay = function(totalpay) {
	totalpay = this.salary + this.bonus;
	document.write("<li> The Total pay for " + this.name + " is $" + totalpay);
}

var staff1 = new employeeProto();
staff1.name = "John Halt";
staff1.salary = 5000;
staff1.bonus = 500.5;
staff1.getTotalPay();

var staff2 = new employeeProto();
staff2.name = "Jane Smith";
staff2.salary = 4000;
staff2.bonus = 400;
staff2.getTotalPay();

//To check if property exist either in object or prototype space
console.log('name' in staff1);
//To check if property exist only in the object
console.log(staff1.hasOwnProperty('name'));
//Check the Specs of the Blue-print for our object
console.dir(employeeProto);



/*
 DYNAMIC PROTOTYPE PATTERN 
 -------------------------
 Helps to write more efficient, reusable and clean code.
*/

function employeeDynamic (name, salary, bonus) {
	this.name = name;
	this.salary = salary;
	this.bonus = bonus;

	if (this.getTotalPay !== 'function') {
		employeeDynamic.prototype.getTotalPay = function(totalpay) {
	    totalpay = this.salary + this.bonus;
	    document.write("<li> The Total pay for " + this.name + " is $" + totalpay);
       }
	}
}

var staff1 = new employeeDynamic("Jane", 4000, 400.50);
staff1.getTotalPay();

var staff2 = new employeeDynamic("John", 5000, 500.50);
staff2.getTotalPay();