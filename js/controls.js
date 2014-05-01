var controls = {
	key: function(value) {
		game.numbers.click(value);
	}, 
	reset: function() {

	}, 
	play: function() {
		view.animate.move_screen(-960);
		game.reset();
	}, 
	about: function() {
		view.animate.move_screen(0);
		game.timer.pause();
	}, 
	back: function() {
		view.animate.move_screen(-480);
		game.timer.pause();
	},
	highscores: function() {
		view.animate.move_screen(-1440);
		game.timer.pause();
	}, 
}