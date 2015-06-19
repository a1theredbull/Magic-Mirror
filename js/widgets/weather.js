function showWeather(position) {
  //open weather map API
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" +
                    position.coords.latitude +
                    "&lon=" +
                    position.coords.longitude +
                    "&units=imperial";

  $.get(weatherUrl, function( data ) {
    var temp = Math.round(data.main.temp);
    var forecast = data.weather[0].description;

    $('#weather').html(temp + " : " + forecast);

    $('#weather').fadeIn();
    setTimeout(function() {
      $('#weather').fadeOut();
    }, 5000);
  });
}

var WEATHER = {
  getWeather: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showWeather);
    } else {
        console.log("NO GEOLOCATION");
    }
  }
};