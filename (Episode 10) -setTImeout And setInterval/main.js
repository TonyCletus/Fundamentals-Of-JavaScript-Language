//setTimeOut allows an action just ones when it reaches the time set for it to perform the action.

//setInterval allows an action concurrently according to the time set for to perform each action.

function countDown() {
	var x = "Count me down right now" + "<p>";
	document.write(x);
}
setTimeout(countDown, 5000);

/* To test for the setInterval Method: Uncomment the "setInterval(countDown, 2000);" on line 14 below.
  And make sure to comment the "setTimeout(countDown, 5000);" on line 9 above when doing so.......*/

//setInterval(countDown, 2000);