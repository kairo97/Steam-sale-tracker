//jQuery selectors

// Games Data API Connection
var game1 = document.querySelector('#game1');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de',
    'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com',
  },
}
// function getRandomNumber(max){
  // return Math.floor(Math.random()*max);
// }

var steamOffers = "https://steam-special-offers.p.rapidapi.com/games_data/?app_id=271590"
// +(getRandomNumber(1000)+1);
var fetchsteam = function (data) {
  
  fetch(
    steamOffers,
    options,
  )
    .then((data) => {
      return data.json()
    })
    .then((completedata) => {
		console.log(completedata);
    //   for (var i = 0; i < completedata.length; i++) {
    //     var gameName = json.stringify(completedata.results[i]);
    //     console.log(gameName);
	// 	printGame(completedata[i]);
    //   }
    getTitle(completedata);
	  printGame(completedata);
    });

  // console.log(completedata[0].title);

  // console.log(completedata[0].link);
}
// console.log(completedata[0].children[3]);

//  function getTitle(completedata){
  // do{ fetchsteam()} while (completedata.title === null);}

function printGame(completedata) {
  console.log(completedata)
  var gameCard = document.createElement('div')
  var resultBody = document.createElement('div')
  gameCard.append(resultBody)
  var titleEl = document.createElement('h3')
  titleEl.textContent = completedata.title
  var bodyText = document.createElement('p')
  bodyText.textContent = completedata.price
  var linkButtonEl = document.createElement('a')
  linkButtonEl.textContent = 'Go to game'
  linkButtonEl.setAttribute('href', completedata.url)

  resultBody.append(titleEl, bodyText, linkButtonEl)
  game1.append(gameCard)
}

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
	}).then((completedata)=>{
		console.log(completedata)
    
})

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