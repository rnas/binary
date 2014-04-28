/*
	Parameters:

	time 		- remaining time
	playing 	- is user playing?
	paused 		- FLAG
	record 		
	score 		
	goal
	done
	level
	challange
*/

var game = {
	reset: function() {
		game.level.reset();
		game.timer.reset();
	},
	timer: {
		reset: function() {
			console.log('timer');

			game.time = 60;
			game.paused=false;
			game.timer.update();
		}, 
		pause: function() {
			game.paused=true;
		}, 
		update: function() {
			console.log(game.time);

			if (game.paused==false) {
				if (game.time > 0) {
					setTimeout(game.timer.update, 1000);

					game.time = game.time - 1; 
					game.timer.display(game.time);		
				} else {
					return false;
				}
			}
		},
		display: function(time) {
			// updates the time display
		}
	},
	numbers: {
		easy_numbers: [3, 6, 12, 16, 32],
		generate: function() {
			if (game.level == 1) {
				return (Math.ceil(Math.random() * 253) + 2);
			} else {
				return game.number.easy();
			}
		}, 
		easy: function() {
			return game.number.easy_numbers[Math.ceil(Math.random() * 5) - 1] ;
		}, 
		click: function(value) {
			var checked = ((game.done % value) == 0);
			if (checked) {
				game.done = game.done + value;
			} else {
				game.done = game.done - value;
			}

			if (game.done == game.goal) {

			}
		}
	},
	level: {
		reset: function() {
			game.level = 1;
			game.chalange = 1;
			game.chalanges = 5;
		}, 
		next: function() {
			if (game.chalange < game.chalanges) {
				game.chalange ++;
			} else {
				game.level ++;
				game.challanges++;
				game.challange = 1;
			}
		}
	}


};


game.reset();