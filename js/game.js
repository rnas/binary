/*

	Game: providing game logic for user actions


	Parameters:

	time 		- remaining time
	playing 	- is user playing?
	paused 		- FLAG
	record 		
	score 		
	goal
	done
	current_level
	challange
*/

var game = {
	reset: function() {
		game.level.reset();
		game.level.play();
		game.timer.reset();
	},
	timer: {
		reset: function() {
			game.timer.restart();
			game.timer.update();
		}, 
		restart: function() {
			game.time = 60;
			game.paused=false;
			view.update.timer(60);
		},
		pause: function() {
			game.paused=true;
		}, 
		update: function() {
			if (game.paused==false) {
				if (game.time > 0) {
					setTimeout(game.timer.update, 1000);
					game.time = game.time - 1; 
					view.update.timer(game.time);	
				} else {
					// you loose
					game.paused = true;
					view.animate.move_screen(-1440);

					// checks for record
					if (game.record <= game.score) {
						storage.set_record(game.score);
					}

					view.update.final_score(game.score);
					view.update.best_score(game.record);
					view.update.record(game.record);
				}
			}
		}
	},
	numbers: {
		easy_numbers: [3, 6, 12, 16, 32],
		generate: function() {
			var random;

			do {
				if (game.current_level == 1) {
					random = game.numbers.easy();
				} else {
					random = (Math.ceil(Math.random() * 253) + 2);
				}
			} while (game.goal == random);

			return random;
		}, 
		easy: function() {
			return game.numbers.easy_numbers 
			[Math.ceil(Math.random() * game.numbers.easy_numbers.length) - 1];
		}, 
		click: function(value) {
			var checked = (game.done % (2*value) < value);

			if (checked) {
				game.done = game.done + value;
			} else {
				game.done = game.done - value;
			}

			view.update.key(value, checked);
			view.update.done(game.done);
			// update da view

			if (game.done == game.goal) {
				game.level.next();
			}
		}, 
		done_reset: function() {
			game.done = 0;
			view.update.done(0);
			view.update.reset_keys();
		}
	},
	level: {
		reset: function() {
			game.current_level = 1;
			game.chalange = 1;
			game.chalanges = 5;
			game.score = 0;
			game.record = storage.get_record();

			view.update.record(game.record);
		}, 
		next: function() {
			if (game.chalange < game.chalanges) {
				game.chalange ++;
			} else {
				game.current_level ++;
				game.chalanges++;
				game.chalange = 1;

				game.timer.restart();
			}

			game.level.play();
		}, 
		play: function() {
			view.update.score(game.score);
			game.numbers.done_reset();
			game.goal = game.numbers.generate();
			game.score = game.score + game.current_level * 10;

			view.update.goal(game.goal);
			view.update.status(game.chalange+"/"+game.chalanges);
			view.update.level(game.current_level);
		}
	}
};