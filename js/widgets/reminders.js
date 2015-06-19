var nums = {
	'1': '1',
	'one': '1',
	'2': '2',
	'to': '2',
	'two': '2',
	'3': '3',
	'three': '3',
	'4': '4',
	'four': '4',
	'5': '5',
	'five': '5',
	'6': '6',
	'six': '6',
	'7': '7',
	'seven': '7',
	'8': '8',
	'eight': '8',
	'9': '9',
	'nine': '9',
	'10': '10',
	'ten': '10'
}

var REMINDERS = {
	addReminder: function(something) {
		if($('#reminders ol').children().length < 10) {
			$('#reminders .container').show();
			$('#reminders ol').append('<li class="fadeInRight animated">' + something + '</li>');
		}

		$('#reminders .icon').fadeIn();
	},
	removeReminder: function(number) {
		var reminderIndex = nums[number];
		if(reminderIndex) {
			$("#reminders ol > li:nth-child(" + reminderIndex + ")").remove();
		}

		if($('#reminders ol').children().length == 0) {
			$('#reminders .icon').fadeOut();
		}
	},
	resetReminders: function() {
		$('#reminders ol').html('');

		$('#reminders .icon').fadeOut();
	},
	hideReminders: function() {
		$('#reminders .container').fadeOut();
	},
	showReminders: function() {
		$('#reminders .container').fadeIn();
	}
}