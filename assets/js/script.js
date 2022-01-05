function urbanDictionary(wordrequested){
fetch("https://mashape-community-urban-dictionary.p.rapidapi.com/define?term="+wordrequested, {
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


