
var quoteBox = document.getElementById("quote");
var searchInput = document.getElementById('search-input');
var searchBtn = document.getElementById('search-button')

searchBtn.addEventListener('click', function() {
	console.log('we clicking');
	});


// Currently to test these functions use the console : example -> urbanDictionary('EnterWord_as_String')
// Creates a function that uses the fetch request to obtain a word from Urban Dictionary Api and display it on the page

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
	console.log(data.list[0].definition);

	// Create an empty list of definitions
	var definitions =[]

	for (let i=0; i < 2; i++){
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

urbanDictionary("run")


// Modified from https://stackoverflow.com/questions/10982913/javascript-how-to-show-each-element-of-array-on-a-new-line

function splitDefinitions(dates) {
    if (dates != null)
    {
        var dates = dates.split(',');
        var xxx = dates.length;
        console.log(xxx);
        for (var i=0; i<xxx; i++)
        {
            dates[i] = dates[i];                    
        }
    }
    console.log(dates.join('\r\n'));
    return dates.join('\r\n');        
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
	var memeBox = document.getElementById("meme");
    memeBox.setAttribute("src", data.data[0].images.original.url);
})
.catch(err => {
	console.error(err);
});
}


giphyRequest("run");