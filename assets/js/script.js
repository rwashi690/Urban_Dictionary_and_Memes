// Currently to test these functions use the console : example -> urbanDictionary('EnterWord_as_String')
// Creates a function that uses the fetch request to obtain a word from Urban Dictionary Api

function urbanDictionary(wordRequested){
fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term="+wordRequested, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
		"x-rapidapi-key": "dee04f3e4cmsh1ab069023581ac1p1e6822jsn32dcb02e5412"
	}
})
.then(response => {
	return response.json();
})
.then(data =>{
    console.log(data);
})
.catch(err => {
	console.error(err);
});
}

// Creates a function that uses the fetch request to obtain a word from Giphy Api

function giphyRequest(memeRequested){
fetch("https://giphy.p.rapidapi.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="+memeRequested, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "giphy.p.rapidapi.com",
		"x-rapidapi-key": "dee04f3e4cmsh1ab069023581ac1p1e6822jsn32dcb02e5412"
	}
})
.then(response => {
	return response.json();
})
.then(data =>{
    console.log(data);
})
.catch(err => {
	console.error(err);
});
}
