const jokeBtn = document.getElementById('joke-btn');
const jokeDiv = document.getElementById('joke');

jokeBtn.addEventListener('click', jokeHandler);

jokeHandler();

async function jokeHandler() {
	const jokeResult = await fetch('https://icanhazdadjoke.com/', {
		headers: {
			Accept: 'application/json'
		}
	});

	const joke = await jokeResult.json();

	jokeDiv.textContent = joke.joke;
}
