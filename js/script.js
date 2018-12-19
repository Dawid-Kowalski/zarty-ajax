const jokeUrl = 'http://api.icndb.com/jokes/random';

let jokeButton = document.getElementById("joke-button");
let resultParagraph = document.getElementById("joke-text");

function getJoke() {
	let request = new XMLHttpRequest();
	request.open("POST", jokeUrl);
	request.addEventListener("load", function() {
		let response = JSON.parse(request.response);
		resultParagraph.innerHTML = response.value.id + ". ";
		resultParagraph.innerHTML += response.value.joke;
	});
	request.send();
}

jokeButton.addEventListener("click", function() {
	getJoke();
});

getJoke();