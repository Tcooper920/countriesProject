// $(document).ready(function (){

// let input = document.getElementById("input");
// let button = document.getElementById("searchButton");

// button.addEventListener("click", function () {
// $.ajax({
// url: "https://restcountries.eu/rest/v2/name/" + input.value,
// success: function(response) {
// console.log(response);
// }
// });
// });
// let wrapper = document.createElement("DIV");
// wrapper.innerHTML = input.value;
// wrapper.innerHTML += "<br>Capital: " + ;
// document.getElementById("content").appendChild(wrapper);
// });


$(document).ready(function (){

let submit = document.getElementById("submit-country");
let inputCountry = document.getElementById("country");

submit.addEventListener("click", countryAjaxCall)

function countryAjaxCall () {
	$.ajax({
		url: "https://restcountries.eu/rest/v2/name/" + inputCountry.value,
		success: function(response) {
			displayCountryData(response);
		}
	})
}

function displayCountryData(countries) {
	$("#country-name").html("Name of the country: " + countries[0].name);
}


});