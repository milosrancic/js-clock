document.addEventListener("DOMContentLoaded", function(event) {

// analog clock
function updateClock(now) {
	let secHand = document.getElementById("seconds").style;
	let minHand = document.getElementById("minutes").style;
	let hrHand = document.getElementById("hours").style;

	secHand.transform = "rotate(" + now.getSeconds() * 6 + "deg)";
	minHand.transform = "rotate(" + now.getMinutes() * 6 + "deg)";
	hrHand.transform = "rotate(" + (now.getHours() * 30 + now.getMinutes() * 0.5) + "deg)";
}

// digital clock
function updateTime(now) {
	let timeDiv = document.getElementById("digital");

	let time = now.getHours() + " : " + now.getMinutes() + " : " + now.getSeconds();
	timeDiv.innerHTML = time;
}

// date
function updateDate(now) {
	let months = [	"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let dateDiv = document.getElementById('date');

	let date = now.getDate() + " / " + months[now.getMonth()] + " / " + now.getFullYear();
	dateDiv.innerHTML = date;
}

// start everything
setInterval(function() {
	let now = new Date();
	
	updateTime(now);
	updateClock(now);
	updateDate(now);
}, 1000);


});