$(document).ready(function () {
var APIKey = "582be6ca98b5cdbb344133dbf8bba753";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Atlanta,Georgia&units=imperial&appid=" + APIKey;
console.log("now")
    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);
        console.log(response.weather[0].main)
        
        var wID = response.weather[0].icon

    $("#weather").append(`
    <img src="http://openweathermap.org/img/w/${wID}.png" alt="W3Schools.com" id="weatherPic" class="center">
    <h4> ${response.name} </h4>
    <h5>Temperature (F) ${response.main.temp}</h5>
    <h5>${response.weather[0].main}</h5>
    <h5>${response.weather[0].description}</h5>
    `);

      });
    });