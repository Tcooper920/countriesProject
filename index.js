$(document).ready(function (){
	$.ajax({
		url: "http://restcountries.eu/rest/v2/name/estonia",
		success: function(response) {
			console.log(response);
		}
	});
});

