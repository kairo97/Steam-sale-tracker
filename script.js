// Games Data API Connection

const optionX = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de',
		'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
	}
};

fetch('https://steam-special-offers.p.rapidapi.com/games_data/?app_id=1593503', optionX)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


// Games List API Connection
const optionY = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de',
		'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
	}
};

fetch('https://steam-special-offers.p.rapidapi.com/games_list/?start=0&count=10&region=IN', optionY)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// Recent Gaming News API Connection
const optionZ = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de',
		'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
	}
};

fetch('https://videogames-news2.p.rapidapi.com/videogames_news/recent', optionZ)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



