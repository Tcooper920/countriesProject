

$(document).ready(function (){

let submit = document.getElementById("submit-country");
let inputCountry = document.getElementById("country");

submit.addEventListener("click", countryAjaxCall)

function countryAjaxCall () {
	$.ajax({
		url: "https://restcountries.eu/rest/v2/name/" + inputCountry.value,
		success: function(response) {
			displayCountryData(response);
			translateFrench(response);
			// console.log(response)
		}
	})
}

function displayCountryData(countries) {
	for (let i = 0; i < countries.length; i++) {
		if (countries[i].name.toLowerCase() == inputCountry.value.toLowerCase()) {
			$("#country-name").html("Name of the country: " + countries[0].name);
			$("#capital").html("Capital: " + countries[i].capital);
	
			let currentPopulation = countries[i].population;

			function formatNumber(num) {
				var str = num.toString().split('.');
    			if (str[0].length >= 5) {
       				str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    			}
    			$("#population").html("Population: " + str.join('.'));
			}

			formatNumber (currentPopulation);

			$("#timezones").html("Timezones: " + countries[i].timezones);
			$("#flag").html("<img class='flagImg' src='" + countries[i].flag + "'/>");
			$(".flagImg").css({
				width: "15rem",
				marginTop: "1rem"
			});
		}
	}
}

function translateFrench(countries) {
	let frenchButton = document.getElementById("French");

	frenchButton.addEventListener("click", function () {
		console.log(countries[0].translations.fr);
	});
}


});