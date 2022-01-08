var searchList = document.getElementById('search-list')
var quoteBox = document.getElementById("quote");
var searchInput = document.getElementById('search-input');
var searchBtn = document.getElementById('search-button');

var currentHistory = [];

//The following event listener stores the search input into local storage.
//and calls the searchBox function to retrieve information from the two API's based on the input in the search bar.
searchBtn.addEventListener('click', function (event) {
	event.preventDefault();
	var search = searchInput.value;
	storeSearchHistory(search);
	searchBox(search)
});

//The following function stores the search history and then calls the displayHistory function.
function storeSearchHistory(search) {
	currentHistory.push(search);
	// console.log('am i inside of store Search History?')
	if ('history' in localStorage) {
		let recentSearches = JSON.parse(localStorage.getItem('history'));
		recentSearches.push(currentHistory);

		localStorage.setItem('history', JSON.stringify(currentHistory));
	} else {
		const tempArray = currentHistory;
		localStorage.setItem('history', JSON.stringify(tempArray));
	}
	displayHistory();
}

//The following function will update the Recent Searches list with previous search inputs.
function displayHistory() {
	//this area is for removing the duplicate searches
	if ('history' in localStorage) {
	}
	for (var i = 0; i < currentHistory.length; i++) {
		var li = document.createElement('li');
		li.textContent = currentHistory[i];
		searchList.appendChild(li);
	}
}

//The following function uses the fetch request to obtain a word from Urban Dictionary's API.
function urbanDictionary(wordRequested) {
	fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=" + wordRequested, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
			"x-rapidapi-key": "dee04f3e4cmsh1ab069023581ac1p1e6822jsn32dcb02e5412"
		}
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
			console.log(data.list[0].definition);

			// Create an empty list of definitions
			var definitions = []

			for (let i = 0; i < 2; i++) {
				definitions += data.list[i].definition;
				var definitionTag = document.getElementById("definition-list");
				definitionTag.textContent = data.list[i].definition;
				quoteBox.appendChild(definitionTag);
			}
			
			// to display the word requested above its definition
			var displayWord = document.getElementById("word-requested");
			displayWord.textContent = wordRequested;
		})
		.catch(err => {
			console.error(err);
		});
}

//The following function uses the fetch request to obtain a word from Giphy's API.
function giphyRequest(memeRequested) {
	fetch("https://giphy.p.rapidapi.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + memeRequested, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "giphy.p.rapidapi.com",
			"x-rapidapi-key": "dee04f3e4cmsh1ab069023581ac1p1e6822jsn32dcb02e5412"
		}
	})
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
			var memeBox = document.getElementById("meme");
			memeBox.setAttribute("src", data.data[0].images.original.url);
		})
		.catch(err => {
			console.error(err);
		});
}

//The following function calls the two api functions.
function searchBox(searchInput) {
	urbanDictionary(searchInput);
	giphyRequest(searchInput);
};