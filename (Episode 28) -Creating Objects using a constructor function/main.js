
function Employee(name, salary, bonus, loan) {
	this.name = name;
	this.salary = salary;
	this.bonus = bonus;
	this.loan = loan;

	this.getTotalPay = function(totalpay){
		totalpay = this.salary + this.bonus;
		document.write("<li> The Total pay for " + this.name + " is $" + totalpay);
	}

	this.afterLoan = function(totalpay) {
		totalpay = (this.salary + this.bonus)  - this.loan;
		document.write("<li> The Tolal pay for " +this.name+ " after loan is $" + totalpay);
	}
}

var john = new Employee("John Halt", 5000, 500.5);
john.getTotalPay();

var jane = new Employee("Jane Smith", 4000, 400, 200);
jane.getTotalPay();

jane.afterLoan();