function getWeather(position) {
  //open weather map API
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" +
                    position.coords.latitude +
                    "&lon=" +
                    position.coords.longitude +
                    "&units=imperial";

  $.get(weatherUrl, function( data ) {
    var temp = Math.round(data.main.temp);
    var forecast = data.weather[0].description;

    $('#weather #temperature').html(temp);
    $('#weather #forecast span').html(forecast);
    $('#weather .container').fadeIn();
  });
}

var WEATHER = {
  showWeather: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather);
    } else {
        console.log("NO GEOLOCATION");
    }
  },
  hideWeather: function() {
    $('#weather .container').fadeOut();
  }
};