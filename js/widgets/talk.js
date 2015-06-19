var greetings = [
	'Hello there!',
	'Yo!',
	'What\'s good?',
	'Sup.',
	'Hola!',
	'Bonjour!',
	'Oh, hey hey!',
	'Buongiorno!'
];

var byes = [
	'Peace out!',
	'Cya later.',
	'Au revoir!',
	'I won\'t miss you.',
	'Get off my lawn.'
];

var TALK = {
	hello: function() {
		$('#talk .container').show();
		var greeting = greetings[Math.floor(Math.random() * greetings.length)];
		$('#talk .container').html(greeting);
	},
	bye: function() {
		$('#talk .container').show();
		var bye = byes[Math.floor(Math.random() * byes.length)];
		$('#talk .container').html(bye);
	}
};