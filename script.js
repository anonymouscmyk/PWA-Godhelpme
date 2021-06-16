



// get country from rest countries api
function fetchCountry() {  
  fetch('https://restcountries.eu/rest/v2/all')
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
      })
  	  .then(response => response.json())
	  .then(data => changeCountry(data))
	 // .catch(err => console.log("error")

	//  );
} 
function searchCountry() {
	document.getElementById("country").innerHTML;
	
	let search = document.getElementById("search").value;  

	fetch('https://restcountries.eu/rest/v2/name/' + search)
	  .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
      })
  	  .then(response => response.json())
	  .then(data => changeCountrySearch(data))
	  .catch(err => console.log("error")

	  );
	
  } // window.onload search by country name
  function searchBloc() {
	document.getElementById("country").innerHTML;
	
	let search = document.getElementById("search").value;  

	fetch('https://restcountries.eu/rest/v2/regionalbloc/' + search)
	  .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
      })
  	  .then(response => response.json())
	  .then(data => changeCountrySearch(data))
	  .catch(err => console.log("error")

	  );
	
  } // window.onload
  
  

//random number generator
function randomNumber(){
let i = Math.floor(Math.random()*(250-0)); 

return i; 

}



// change the Country  displayed for Random
function changeCountry(data) {
let i = randomNumber();
console.log("in change country");
	 console.log(data); 
	 if( data[i].gini != null){
		
		country.innerHTML = "<img src='" + data[i].flag + "' alt ='flag' >" +    "<h2>" + data[i].name + "</h2><h4> Capital: " + data[i].capital + "</h4><h4> Subregion: " + data[i].subregion + "</h4><h4>  Main Language: " + data[i].languages[0].name + "</h4><h4> GINI Index: " + data[i].gini + "</h4><h4> Population: " + data[i].population + "</h4><h4> Main Currency in usage: " + data[i].currencies[0].name + "</h4><h4> demonym: " + data[i].demonym + "</h4><h4> Calling Code: " + data[i].callingCodes[0] + "</h4>";
	 }else{
		
		 country.innerHTML =  "<img src='" + data[i].flag + "' alt ='flag' >" +   "<h2>" + data[i].name + "</h2><h4> Capital: " + data[i].capital + "</h4><h4> Subregion: " + data[i].subregion + "</h4><h4>  Main Language: " + data[i].languages[0].name + "</h4><h4> GINI Index: Currently there is no data available for this section" + "<h4> Population: " + data[i].population + "</h4><h4> Main Currency in usage: " + data[i].currencies[0].name + "</h4><h4> Demonym: " + data[i].demonym + "</h4><h4> Calling Code: " + data[i].callingCodes[0] + "</h4>";
	 }

}
// change the Country  displayed for Search
function changeCountrySearch(data) {
	deleteChildren(country);
	let i = 0;

	let div = document.getElementById("country");
	 for( i=0; i < data.length; i++){

	let country = document.createElement("div");
	//if(data.status != null){
	//	country.innerHTML = "Sorry, but what you have searched has yielded no results, try again after checking for any spelling or punctuation errors";
	//}else{
	 	if( data[i].gini != null){
	 		country.innerHTML =   "<img src='" + data[i].flag + "' alt ='flag' >" + "<h2>" + data[i].name + "</h2><h4> Capital: " + data[i].capital + "</h4><h4> Subregion: " + data[i].subregion + "</h4><h4>  Main Language: " + data[i].languages[0].name + "</h4><h4> GINI Index: " + data[i].gini + "</h4><h4> Population: " + data[i].population + "</h4><h4> Main Currency in usage: " + data[i].currencies[0].name + "</h4><h4> Demonyn: " + data[i].demonym + "</h4><h4> Calling Code: " + data[i].callingCodes[0] + "</h4>";
	 	}else{
			 country.innerHTML =  "<img src='" + data[i].flag + "' alt ='flag' >" +   "<h2>" + data[i].name + "</h2><h4> Capital: " + data[i].capital + "</h4><h4> Subregion: " + data[i].subregion + "</h4><h4>  Main Language: " + data[i].languages[0].name + "</h4><h4> GINI Index: Currently there is no data available for this section" + "<h4> Population: " + data[i].population + "</h4><h4> Main Currency in usage: " + data[i].currencies[0].name + "</h4><h4> Demonyn: " + data[i].demonym + "</h4><h4> Calling Code: " + data[i].callingCodes[0] + "</h4>";
	 	}	
	

	 div.appendChild(country);
	 } //bracket for 404 error code
	}
		
	  

  

//} // change the Country  displayed for Search

//Delete Children
  function deleteChildren(e) {
        //e.firstElementChild can be used.
        let child = e.lastElementChild; 
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    }

//	if ('serviceWorker' in navigator) {
//  navigator.serviceWorker.register('/sw.js');
//}       


