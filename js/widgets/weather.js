var weatherIcons = {
  '01d': 'images/clear sky d.png',
  '02d': 'images/few clouds d.png',
  '03d': 'images/scattered d.png',
  '04d': 'images/broken clouds d.png',
  '09d': 'images/shower rain d.png',
  '10d': 'images/rain d.png',
  '11d': 'images/thunderstorm d.png',
  '13d': 'images/snow d.png',
  '50d': 'images/mist d.png'
};

function getWeather(position) {
  //open weather map API
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=" +
                    position.coords.latitude +
                    "&lon=" +
                    position.coords.longitude +
                    "&units=imperial";

  $.get(weatherUrl, function( data ) {
    console.log(data);
    var temp = Math.round(data.main.temp);
    var forecast = data.weather[0].description;
    var icon = weatherIcons[data.weather[0].icon];

    $('#weather #temperature').html(temp);
    $('#weather #forecast img').attr({ 'src': icon});
    $('#weather #forecast span').html(forecast);
    $('#weather .container').fadeIn();
  });
}

var WEATHER = {
  showWeather: function() {
    $('#weather').fadeIn();
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