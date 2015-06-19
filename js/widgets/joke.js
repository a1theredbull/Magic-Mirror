var JOKE = {
	getJoke: function() {
		$.get("http://api.incdb.com/jokes/random", function(data) {
			var joke = data.value.joke;

			$('#joke').html(joke);
			});
	}
}