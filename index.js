// Class Workshop with Tom: Build a single page app that shows:
// a. - whatever country the user inserts printed on the page;
// b. - the capital of this country;
// c. - population of this country:
// d. - any other information that seems interesting to you
// e. the flag of this country

// 1.  try to convert the population into normal decimal numbers; please take a look at this:
// 	// https://stackoverflow.com/questions/6784894/add-commas-or-spaces-to-group-every-three-digits
// 2. - create 3 language buttons for french, german and japanese and when you click on them you get
// the corresponding translation of the country


$(document).ready(function (){

let submit = document.getElementById("submit-country");
let inputCountry = document.getElementById("country");


submit.addEventListener("click", countryAjaxCall)

function countryAjaxCall () {
	$.ajax({
		url: "https://restcountries.eu/rest/v2/name/" + inputCountry.value,
		success: function(response) {
			displayCountryData(response);
			console.log(response)
		}
	})
}

function displayCountryData(countries) {
	for (let i = 0; i < countries.length; i++) {
		if (countries[i].name.toLowerCase() == inputCountry.value.toLowerCase()) {
			$("#country-name").html("Name of the country: " + countries[0].name);
			$("#capital").html("Capital: " + countries[i].capital);
			//$("#population").html("Population: " + formatNumber(countries[i].population));
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


});


            
