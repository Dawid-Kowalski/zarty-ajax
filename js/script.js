const jokeUrl = 'http://api.icndb.com/jokes/random';

let jokeButton = document.getElementById("joke-button");
let resultParagraph = document.getElementById("joke-button");

function getJoke() {
	let request = new XMLHttpRequest();
	request.open("GET", jokeurl);
	request.addEventListener("load", function() {
		let response = JSON.parse(request.response);
		resultParagraph.innerHTML = response.value.joke;
	});
	request.send();
}