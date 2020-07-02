//Group Exercise Tom and Jessica - written by Jess 

// Build a single page app that shows:
// a. - whatever country the user inserts printed on the page;
// b. - the capital of this country;
// c. - population of this country:
// d. - any other information that seems interesting to you
// e. - the flag of this country

//_________ This is what I tried:

//let wrapper = document.getElementById('wrapper')

// let input = document.getElementById("input");

// $(document).ready(function(){
// 	$.ajax({
// 			url: "https://restcountries.eu/rest/v2/name/united",
// 			success: function(response){
// 			console.log(response)
// 		}
// 	})
// })


// let country = document.createElement("div")

// submit.addEventListener("click", getCountryInfo)

// function getCountryInfo() {
// 	$.ajax({
// 		url: "https://restcountries.eu/rest/v2/name/" + input.value,
// 			success: function(response){
// 			country.innerText = input.value
// 			console.log(response)
// 		}
// 	})	
// }

//_______________

// This is Oggi's code from class (not working for me)

$(document).ready(function(){
	let submit = document.getElementById("submit-country")
	let inputCountry = document.getElementById("country")

	submit.addEventListener("click", countryAjaxCall)

	function countryAjaxCall (){
		$.ajax({
			url: "https://restcountries.eu/rest/v2/name/" + inputCountry.value,
			success: function(response){
				//console.log(response)
			displayCountryData(response)
		}
	})
}

function displayCountryData(countries){
	$("#country-name").html("Name of the country: " + countries[0].name)
	// console.log(countries)
}

})


