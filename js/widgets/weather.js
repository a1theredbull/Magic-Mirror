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
  $.simpleWeather({
    location: 'Grand Rapids, MI',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      $('#weather #temperature').html(weather.temp);
      $('#weather #forecast i').attr({ 'class': "icon-" + weather.code })
      $('#weather #forecast span').html(weather.currently);
      $('#weather .container').fadeIn();
    }
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