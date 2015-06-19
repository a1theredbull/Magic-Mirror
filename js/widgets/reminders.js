var nums = {
	'one': '0',
	'to': '1',
	'two': '1',
	'three': '2',
	'four': '3',
	'five': '4',
	'six': '5',
	'seven': '6',
	'eight': '7',
	'nine': '8',
	'ten': '9'
}

var REMINDERS = {
	addReminder: function(something) {
		if($('#reminders ol').children().length < 10) {
			$('#reminders ol').append('<li>' + something + '</li>');
		}
	},
	removeReminder: function(number) {
		var reminderIndex = nums[number];
		if(reminderIndex) {
			$("#reminders ol > li:nth-child(" + reminderIndex + ")").remove();
		}
	},
	clearReminders: function() {
		$('#reminders ol').html('');
	}
}