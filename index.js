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
let currentCountry;
var gdpValueArray = []
var gdpKeyArray = []


submit.addEventListener("click", countryAjaxCall)

function countryAjaxCall () {
	$.ajax({
		url: "https://restcountries.eu/rest/v2/name/" + inputCountry.value,
		success: function(response) {
			displayCountryData(response);

			translateFrench(response);
			translateSpanish(response);
			translateJapanese(response);
			// console.log(response)

		}
	})
}

/* format numbers with commas */
function formatNumber(num) {
	var str = num.toString().split('.');
    
    if (str[0].length >= 5) {
    	str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }

    return str.join('.');
}

/* print country info */
function displayCountryData(countries) {
	for (let i = 0; i < countries.length; i++) {
		if (countries[i].name.toLowerCase() == inputCountry.value.toLowerCase()) {
			$("#country-name").html("Name of the country: " + countries[0].name);
			$("#capital").html("Capital: " + countries[i].capital);

			currentCountry = countries[0].name; /* this will be used in another function */

			let currentPopulation = countries[i].population;

			$("#population").html("Population: " + formatNumber (currentPopulation));
			


			$("#timezones").html("Timezones: " + countries[i].timezones);
			$("#flag").html("<img class='flagImg' src='" + countries[i].flag + "'/>");
			$(".flagImg").css({
				width: "15rem",
				marginTop: "1rem"
			});
		}
	}
}


/* translate country buttons */
function translateFrench(countries) {
	let frenchButton = document.getElementById("French");

	frenchButton.addEventListener("click", function () {
		$("#translateCountry").html(countries[0].translations.fr)
	});
}

function translateSpanish(countries) {
	let spanishButton = document.getElementById("Spanish");

	spanishButton.addEventListener("click", function () {
		$("#translateCountry").html(countries[0].translations.es)
	});
}

function translateJapanese(countries) {
	let japaneseButton = document.getElementById("Japanese");

	japaneseButton.addEventListener("click", function () {
		$("#translateCountry").html(countries[0].translations.ja)
	});
}

/* GDP *******************************/

	$.ajax({
		url: "https://raw.githubusercontent.com/OggiDanailov/gdp-data/master/data.json",
		success: function(gdpResult) {
			// console.log(gdpResult);
			var gdpJson = JSON.parse(gdpResult);
			getGDP(gdpJson);
		}
	});

/* click button and then find GDP for current country and print to screen (use bracket notation) */
	
	let gdpButton = document.getElementById("gdp");

	function getGDP(gdpJson) {
		gdpButton.addEventListener("click", function () {
			// alert(gdpJson[1]["Country Name"]);
			
			for (let i = 0; i < gdpJson.length; i++) {
				if (gdpJson[i]["Country Name"] === currentCountry) {
					var values = Object.values(gdpJson[i])
					var keys = Object.keys(gdpJson[i])
					$(gdpContainer).html(formatNumber(gdpJson[i][2017]));
					for (let i = 0; i < values.length; i++) {
						if(values[i] !== "" && typeof values[i] === "number") {
							gdpValueArray.push(values[i])
							gdpKeyArray.push(keys[i])
						}
					}


					let TESTER = document.getElementById('gdp-graph');
					Plotly.newPlot( TESTER, [{
					x: gdpKeyArray,
					y: gdpValueArray }], {
					margin: { t: 0 } } );

				}
			}

		});
	}

});

            
