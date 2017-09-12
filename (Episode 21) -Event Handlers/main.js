function spitName(){
  var sayIt = document.getElementById('display');
  sayIt.innerHTML = "Name: Nelson Mandela <br> Country: South Africa <br> Age: 95"
}


function change() {
	var num = document.getElementById('number').value;
	document.getElementById('display').innerHTML = "Square = " + (num * num);
}