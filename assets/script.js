//jQuery selectors

// Games Data API Connection
var game1 = document.querySelector('#game1');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de',
		'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
	}
};

fetch('https://steam-special-offers.p.rapidapi.com/games_data/?app_id=1593500', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

// console.log(completedata[0].children[3]);
fetchsteam();
/*function getTitle(completedata){
  do{ fetchsteam()} while (completedata.title === null);}*/



// Recent Gaming News API Connection
const optionZ = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de',
		'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
	}
};

fetch('https://videogames-news2.p.rapidapi.com/videogames_news/recent', optionZ)
	.then((data) => {
		return data.json();
	}).then((data)=>{
		console.log(data)
    console.log(data[0].title)

})
function printNews(data) {
  console.log(data)
  var gameNews = document.createElement('div')
  var resultBody = document.createElement('div')
  gameNews.append(resultBody)
  var titleEl = document.createElement('h3')
  titleEl.textContent = data[0].title
  var bodyText = document.createElement('p')
  bodyText.textContent = data[0].link
  var linkButtonEl = document.createElement('a')
  linkButtonEl.textContent = 'Go to game'
  linkButtonEl.setAttribute('href', data[0].link)

  resultBody.append(titleEl, bodyText, linkButtonEl)
  gaming-news.append(gameNews)
}
// // Games List API Connection
// const optionY = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de',
// 		'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
// 	}
// };

// fetch('https://steam-special-offers.p.rapidapi.com/games_list/?start=0&count=10&region=IN', optionY)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));