var timer;
var timerTime;

function hideAll() {
  $('.container').hide();
  $('#video .container').html('');
}

var commands = {
  'hello': function() {
    hideAll();
    TALK.hello();
  },
  'bye': function() {
    hideAll();
    TALK.bye();
  },
  'show (me the) weather': function() {
    hideAll();
    WEATHER.showWeather();
  },
  'hide weather': function() {
    WEATHER.hideWeather();
  },
  'tell me a joke': function() {
    JOKE.getJoke();
  },
  'play me a video': function(something) {
    hideAll();
    $("#video .container").show();
    $("#video .container").html('<iframe width="854" height="510" src="https://www.youtube.com/embed/RniS7qoXN24?autoplay=1&loop=1&rel=0" frameborder="0" allowfullscreen></iframe>');
  
    setTimeout(function() {
      $("#video .container").html('');
    }, 17000);
  },
  'remind me to *something': function(something) {
    hideAll();
    REMINDERS.addReminder(something);
  },
  'remove reminder *something': function(reminderNo) {
    REMINDERS.removeReminder(reminderNo);
  },
  'reset reminders': function() {
    REMINDERS.resetReminders();
  },
  'hide reminders': function() {
    REMINDERS.hideReminders();
  },
  'show reminders': function() {
    hideAll();
    REMINDERS.showReminders();
  }
};