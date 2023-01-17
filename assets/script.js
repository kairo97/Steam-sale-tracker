// jQuery selectors

// Games Data API Connection
var game1 = document.querySelector(".nes-container");
var controllers = document.querySelector("#controllers");
var card1 = document.querySelector("#placeholder");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de",
    "X-RapidAPI-Host": "steam-special-offers.p.rapidapi.com",
  },
};
var civ6 = document.getElementById('civ6');
var borderlands = document.getElementById('borderlands');
var mafia = document.getElementById('mafia-img');
var nba = document.getElementById('nba-img')
var truck = document.getElementById('truck-img');
var charles = document.getElementById('choochoo');
var canada = document.getElementById('deathroad');
var backroom = document.getElementById('backroom');
var skul = document.getElementById('skul');
var forza = document.getElementById('forza');
var scum = document.getElementById('scum');
var startBtn = document.querySelector("#get-games");
var newBtn = document.querySelector("#load-new-game");
var newBtn1 = document.querySelector("#load-new-game1");
var newBtn2 = document.querySelector("#load-new-game2");
var newBtn3 = document.querySelector("#load-new-game3");
var newBtn4 = document.querySelector("#load-new-game4");
var newBtn5 = document.querySelector("#load-new-game5");
var newBtn6 = document.querySelector("#load-new-game6");
var newBtn7 = document.querySelector("#load-new-game7");
var newBtn8 = document.querySelector("#load-new-game8");
var newBtn9 = document.querySelector("#load-new-game9");
var newBtn10 = document.querySelector("#load-new-game10");
var gamingNews = document.querySelector("#gaming-news");
startBtn.addEventListener("click", function () {
  fetchGame();
  fetchNews();
  startBtn.classList.add("hide");
  game1.classList.remove("hide");
  // card1.classList.remove("hide");
  newBtn.classList.remove("hide");
  gamingNews.classList.remove("hide");
  mafia.classList.remove('hide')
});
newBtn.addEventListener("click", function () {
  fetchNewgame1();
  fetchNews();
  newBtn.classList.add("hide");
  newBtn1.classList.remove("hide");
  game1.innerHTML = "";
  footer.innerHTML = "";
  nba.classList.remove('hide');
  mafia.classList.add('hide');
});
newBtn1.addEventListener("click", function () {
  fetchNewgame2();
  fetchNews();
  newBtn1.classList.add("hide");
  newBtn2.classList.remove("hide");
  game1.innerHTML = "";
  footer.innerHTML = "";
  nba.classList.add('hide');
  civ6.classList.remove('hide');
});
newBtn2.addEventListener("click", function () {
  fetchNewgame3();
  fetchNews();
  newBtn2.classList.add("hide");
  newBtn3.classList.remove("hide");
  game1.innerHTML = "";
  footer.innerHTML = "";
  civ6.classList.add('hide');
  borderlands.classList.remove('hide');
});
newBtn3.addEventListener("click", function () {
  fetchNewgame4();
  fetchNews();
  newBtn3.classList.add("hide");
  newBtn4.classList.remove("hide");
  game1.innerHTML = "";
  footer.innerHTML = "";
  borderlands.classList.add('hide');
  charles.classList.remove('hide');
});
newBtn4.addEventListener("click", function () {
  fetchNewgame5();
  fetchNews();
  newBtn4.classList.add("hide");
  newBtn5.classList.remove("hide");
  game1.innerHTML = "";
  footer.innerHTML = "";
  charles.classList.add('hide');
  truck.classList.remove('hide');
});
newBtn5.addEventListener("click", function () {
  fetchNewgame6();
  fetchNews();
  newBtn5.classList.add("hide");
  newBtn6.classList.remove("hide");
  game1.innerHTML = "";
  footer.innerHTML = "";
  truck.classList.add('hide');
  canada.classList.remove('hide');
});
newBtn6.addEventListener("click", function () {
  fetchNewgame7();
  fetchNews();
  newBtn6.classList.add("hide");
  newBtn7.classList.remove("hide");
  game1.innerHTML = "";
  footer.innerHTML = "";
  canada.classList.add('hide');
  backroom.classList.remove('hide');
});
newBtn7.addEventListener("click", function () {
  fetchNewgame8();
  fetchNews();
  newBtn7.classList.add("hide");
  newBtn8.classList.remove("hide");
  game1.innerHTML = "";
  footer.innerHTML = "";
  backroom.classList.add('hide');
  skul.classList.remove('hide');
});
newBtn8.addEventListener("click", function () {
  fetchNewgame9();
  fetchNews();
  newBtn8.classList.add("hide");
  newBtn9.classList.remove("hide");
  game1.innerHTML = "";
  footer.innerHTML = "";
  skul.classList.add('hide');
  forza.classList.remove('hide');
});
newBtn9.addEventListener("click", function () {
  fetchNewgame10();
  fetchNews();
  newBtn9.classList.add("hide");
  newBtn10.classList.remove("hide");
  game1.innerHTML = "";
  footer.innerHTML = "";
  forza.classList.add('hide');

});
newBtn10.addEventListener("click", function () {
  fetchGame();
  fetchNews();
  newBtn10.classList.add("hide");
  game1.innerHTML = "";
  footer.innerHTML = "";
});
var fetchNewgame1 = function (data) {
  gameData =
    "https://steam-special-offers.p.rapidapi.com/games_data/?app_id=" +
    appId[1];
  fetch(gameData, options)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      printGame(data);
    });
};
var fetchNewgame2 = function (data) {
  gameData =
    "https://steam-special-offers.p.rapidapi.com/games_data/?app_id=" +
    appId[2];
  fetch(gameData, options)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      printGame(data);
    });
};
var fetchNewgame3 = function (data) {
  gameData =
    "https://steam-special-offers.p.rapidapi.com/games_data/?app_id=" +
    appId[3];
  fetch(gameData, options)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      printGame(data);
    });
};
var fetchNewgame4 = function (data) {
  gameData =
    "https://steam-special-offers.p.rapidapi.com/games_data/?app_id=" +
    appId[4];
  fetch(gameData, options)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      printGame(data);
    });
};
var fetchNewgame5 = function (data) {
  gameData =
    "https://steam-special-offers.p.rapidapi.com/games_data/?app_id=" +
    appId[5];
  fetch(gameData, options)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      printGame(data);
    });
};
var fetchNewgame6 = function (data) {
  gameData =
    "https://steam-special-offers.p.rapidapi.com/games_data/?app_id=" +
    appId[6];
  fetch(gameData, options)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      printGame(data);
    });
};
var fetchNewgame7 = function (data) {
  gameData =
    "https://steam-special-offers.p.rapidapi.com/games_data/?app_id=" +
    appId[7];
  fetch(gameData, options)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      printGame(data);
    });
};
var fetchNewgame8 = function (data) {
  gameData =
    "https://steam-special-offers.p.rapidapi.com/games_data/?app_id=" +
    appId[8];
  fetch(gameData, options)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      printGame(data);
    });
};
var fetchNewgame9 = function (data) {
  gameData =
    "https://steam-special-offers.p.rapidapi.com/games_data/?app_id=" +
    appId[9];
  fetch(gameData, options)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      printGame(data);
    });
};
var fetchNewgame10 = function (data) {
  gameData =
    "https://steam-special-offers.p.rapidapi.com/games_data/?app_id=" +
    appId[10];
  fetch(gameData, options)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      printGame(data);
    });
};
var appId = [
  "1030840",
  "1919590",
  "289070",
  "397540",
  "1766740",
  "227300",
  "252610",
  "1943950",
  "1147560",
  "1293830",
  "119776",
];

var fetchGame = function (data) {
  gameData =
    "https://steam-special-offers.p.rapidapi.com/games_data/?app_id=" +
    appId[0];
  fetch(gameData, options)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      printGame(data);
    });
};

function printGame(data) {
  var gameCard = document.createElement("div");
  var resultBody = document.createElement("div");

  var titleEl = document.createElement("h3");
  titleEl.textContent = data.title;
  var bodyText = document.createElement("p");
  bodyText.textContent = data.price;
  var origPrice = document.createElement("p");
  origPrice.textContent = data.original_price;
  var linkButtonEl = document.createElement("a");

  linkButtonEl.textContent = "Go to game";
  linkButtonEl.setAttribute("href", data.url);
  resultBody.append(titleEl, bodyText, linkButtonEl, origPrice);
  gameCard.append(resultBody);
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
