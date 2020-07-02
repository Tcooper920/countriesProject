

$(document).ready(function (){

let submit = document.getElementById("submit-country");
let inputCountry = document.getElementById("country");

submit.addEventListener("click", countryAjaxCall)

function countryAjaxCall () {
	$.ajax({
		url: "https://restcountries.eu/rest/v2/name/" + inputCountry.value,
		success: function(response) {
			displayCountryData(response);
			// console.log(response)
		}
	})
}

function displayCountryData(countries) {
	for (let i = 0; i < countries.length; i++) {
		if (countries[i].name == inputCountry.value) {
			$("#country-name").html("Name of the country: " + countries[0].name);
			$("#capital").html("Capital: " + countries[i].capital);
			$("#population").html("Population: " + countries[i].population);
			$("#timezones").html("Timezones: " + countries[i].timezones);
			$("#flag").html("<img class='flagImg' src='" + countries[i].flag + "'/>");
			$(".flagImg").css({
				width: "15rem",
				marginTop: "1rem"
			});
		}
	}

	

}


});