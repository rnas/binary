/*

	View part, providing view interaction, animations and effects. 

*/
var view = {
	update: {
		score: function(value) {
			document.querySelector('#game .score_info .score .value').innerHTML = value;
		},
		record: function(value) {
			document.querySelector('#game .score_info .record .value').innerHTML = value;
		}, 
		level: function(value) {
			document.querySelector('#game .score_info .level .value').innerHTML = value;
		},
		status: function(value) {
			document.querySelector('#game .score_info .status .value').innerHTML = value;
		},
		goal: function(value) {
			document.querySelector('#game .game_goal .set .value').innerHTML = value;
		},
		time: function(value) {
			document.querySelector('#game .game_goal .time .value').innerHTML = value;
		},
		done: function(value) {
			document.querySelector('#game .game_goal .done .value').innerHTML = value;
		},
		timer: function(value) {
			document.querySelector('#game .timer .time_bar').style.width = ((value/60)*300)+"px";
			view.update.time(value);
		}, 
		key: function(key, value) {
			if (value) { 
				document.querySelector('#key_'+key).className = "key active";
			} else {
				document.querySelector('#key_'+key).className = "key";
			}
		}, 
		reset_keys: function(value) {
			var keys = document.querySelectorAll('#game .keys .key');
			for (var i = 0; i < keys.length; i++) {
				keys[i].className = "key";
			};	
		},
		final_score: function(value) {
			document.querySelector('#score .final_score').innerHTML = value;
		},
		best_score: function(value) {
			document.querySelector('#score .game_record').innerHTML = value;
		}, 
		new_record: function() {
			document.querySelector('.new_record').className = "new_record";
		}, 
		hide_record: function() {
			document.querySelector('.new_record').className = "new_record hidden";
		}, 
	}, 
	animate: {
		move_screen: function(value) {
			$('#about').animate({'margin-top': value+'px'}, 300);

			//document.querySelector('#about').style.marginTop = value+"px";
		}
	}
}