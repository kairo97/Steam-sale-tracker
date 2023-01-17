//jQuery selectors

// Games Data API Connection
var game1 = document.querySelector("#game1");
var controllers = document.querySelector('#controllers')
var card1 = document.querySelector("#placeholder1");
var card2 = document.querySelector("#placeholder2");
var card3 = document.querySelector("#placeholder3");
var card4 = document.querySelector("#placeholder4");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de",
    "X-RapidAPI-Host": "steam-special-offers.p.rapidapi.com",
  },
};
// function getRandomNumber(max){
// return Math.floor(Math.random()*max);
// }
var startBtn = document.querySelector("#get-games");

startBtn.addEventListener("click", function () {
  // fetchsteam();
  // fetchNews();
  startBtn.classList.add("hide");
  controllers.classList.add("hide");
  game1.classList.remove("hide");
  card1.classList.remove("hide");
  card2.classList.remove("hide");
  card3.classList.remove("hide");
  card4.classList.remove("hide");

  var addCoins = document.createElement('i');
  addCoins.classList.add('nes-icon', 'coin', 'is-large');
  var coins = document.getElementById('get-game-container');
  coins.appendChild(addCoins);
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
  coins.appendChild(addCoins.cloneNode(true));
});

var steamList =
  "https://steam-special-offers.p.rapidapi.com/games_list/?start=0&count=100&region=US";
  var fetchsteam = function (response) {
    fetch(steamList, options)
    .then(response => 
      response.json()
      )
      .then(data => {
        var json2string = JSON.stringify(data.games_list);
        var gameList = json2string.split()
        console.log(gameList);
        for (var i = 0; i < gameList.length; i ++) {
          var randomGame = gameList[i]
       var gameId = "https://steam-special-offers.p.rapidapi.com/games_list/?" + randomGame;
      var fetchGame = function(data) {
        fetch(gameId, options)
        .then(data => data.json()
        .then(completedata => console.log(completedata)))
        printGame();
      }
    
     }
  })
    }
    // )
// }
    
      
    // var fetchGame = function(data) {
    //   fetch(gameId, options)
    //   .then(data => data.json()
    //   .then(completedata => console.log(completedata)))
    //   printGame();
    // }

// function getGames(completedata){
//   for (var i = 0; i < completedata.length; i++){

//   }
// }

function printGame(completedata) {
  console.log(completedata);
  var gameCard = document.createElement("div");
  var resultBody = document.createElement("div");
  gameCard.append(resultBody);
  var titleEl = document.createElement("h3");
  titleEl.textContent = completedata.title;
  var bodyText = document.createElement("p");
  bodyText.textContent = completedata.price;
  var linkButtonEl = document.createElement("a");
  linkButtonEl.textContent = "Go to game";
  linkButtonEl.setAttribute("href", completedata.url);

  resultBody.append(titleEl, bodyText, linkButtonEl);
  game1.append(gameCard);
}

// Recent Gaming News API Connection
const optionZ = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de",
    "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com",
  },
};
function fetchNews() {
  fetch(
    "https://videogames-news2.p.rapidapi.com/videogames_news/recent",
    optionZ
  )
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      console.log(completedata);
      printNews(completedata);
    });
}

//  Games List API Connection
//  const optionY = {
// method: 'GET',
// headers: {
// 'X-RapidAPI-Key': 'fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de',
// 'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
// }
//  };
//  fetch('https://steam-special-offers.p.rapidapi.com/games_list/?start=0&count=4&region=IN', optionY)

// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err));
var footer = document.querySelector("#gaming-news-header");
function printNews(completedata) {
  var newsCard = document.createElement("div");
  var resultBody = document.createElement("div");
  newsCard.append(resultBody);
  var titleEl = document.createElement("h4");
  titleEl.textContent = completedata[0].title;
  var bodyText = document.createElement("img");
  bodyText.textContent = completedata[0].img;
  var linkButtonEl = document.createElement("a");
  linkButtonEl.textContent = "Read story";
  linkButtonEl.setAttribute("href", completedata[0].link);

  resultBody.append(titleEl, bodyText, linkButtonEl);
  footer.append(newsCard);
}