var JOKE = {
	getJoke: function() {
		$.get("https://api.incdb.com/jokes/random", function(data) {
			var joke = data.value.joke;

			$('#joke').html(joke);
			});
	}
}