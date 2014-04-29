/*
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
					return false;
				}
			}
		}
	},
	numbers: {
		easy_numbers: [3, 6, 12, 16, 32],
		generate: function() {
			if (game.current_level == 1) {
				return (Math.ceil(Math.random() * 253) + 2);
			} else {
				return game.number.easy();
			}
		}, 
		easy: function() {
			return game.number.easy_numbers[Math.ceil(Math.random() * 5) - 1] ;
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
				//console.log('xxxx');
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
		}, 
		next: function() {
			if (game.chalange < game.chalanges) {
				game.chalange ++;
			} else {
				game.current_level ++;
				game.challanges++;
				game.challange = 1;
			}

			game.timer.restart();
			game.level.play();
		}, 
		play: function() {
			game.numbers.done_reset();
			game.goal = game.numbers.generate();
			view.update.goal(game.goal);
		}
	}
};

game.reset();