var timer;
var timerTime;

var commands = {
  'hello': function() { 
    alert('Hello world!'); 
  },
  'bye': function() {
    alert('Goodbye!');
  },
  ':placeholder weather': function(placeholder) {
    WEATHER.getWeather();
  },
  'I am testing the word :test': function(test) {
    alert(test);
  },
  'tell me a joke': function() {
    JOKE.getJoke();
  },
  'find me a video of *something': function(something) {

  },
  'remind me to *something': function(something) {
    REMINDERS.addReminder(something);
  },
  'remove reminder *something': function(reminderNo) {
    REMINDERS.removeReminder(reminderNo);
  },
  'reset reminders': function() {
    REMINDERS.clearReminders();
  }
};