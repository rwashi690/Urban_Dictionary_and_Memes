var searchList = document.getElementById('search-list')
var quoteBox = document.getElementById("quote");
var searchInput = document.getElementById('search-input');
var searchBtn = document.getElementById('search-button');

var currentHistory = [];

//The following event listener stores the search input into local storage and then calls the renderSearchHistory function.
searchBtn.addEventListener('click', function (event) {
	event.preventDefault();
	var search = searchInput.value;

	storeSearchHistory();
});

//The following function renders the search history in a list.
function storeSearchHistory() {
	currentHistory.push(searchInput.value);

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

//The following function will update the search history list.
function displayHistory() {
	// this area is for removing the duplicate searches
	if ('history' in localStorage) {
	}

	for (var i = 0; 5; i++) {

		var li = document.createElement('li');
		li.textContent = currentHistory[i];
		searchList.appendChild(li);
	}
}

searchBtn.addEventListener('click', function () {
	console.log('we clicking');
	console.log(searchInput.value)
	searchBox(searchInput.value);
});


// Currently to test these functions use the console : example -> urbanDictionary('EnterWord_as_String')
// Creates a function that uses the fetch request to obtain a word from Urban Dictionary Api and display it on the page

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
				var definitionTag = document.createElement("li");
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

// Modified from https://stackoverflow.com/questions/10982913/javascript-how-to-show-each-element-of-array-on-a-new-line

function splitDefinitions(dates) {
	if (dates != null) {
		var dates = dates.split(',');
		var xxx = dates.length;
		console.log(xxx);
		for (var i = 0; i < xxx; i++) {
			dates[i] = dates[i];
		}
	}
	console.log(dates.join('\r\n'));
	return dates.join('\r\n');
}


// Creates a function that uses the fetch request to obtain a word from Giphy Api

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

// Had to remove this functionality for now so it only takes the input from the form
// urbanDictionary("run")
// giphyRequest("run");

function searchBox(searchInput) {
	urbanDictionary(searchInput);
	giphyRequest(searchInput);
};