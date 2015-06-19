var timer;
var timerTime;

var commands = {
  'hello': function() {
    $('.container').hide();
    TALK.hello();
  },
  'bye': function() {
    $('.container').hide();
    TALK.bye();
  },
  'show weather': function() {
    $('.container').hide();
    WEATHER.showWeather();
  },
  'hide weather': function() {
    WEATHER.hideWeather();
  },
  'tell me a joke': function() {
    JOKE.getJoke();
  },
  'find me a video of *something': function(something) {

  },
  'remind me to *something': function(something) {
    $('.container').hide();
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
    $('.container').hide();
    REMINDERS.showReminders();
  }
};