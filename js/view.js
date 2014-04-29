var view = {
	update: {
		score: function(value) {
			document.querySelector('#game .score_info .score').innerHTML = value;
		},
		record: function(value) {
			document.querySelector('#game .score_info .record').innerHTML = value;
		}, 
		level: function(value) {
			document.querySelector('#game .score_info .level').innerHTML = value;
		},
		status: function(value) {
			document.querySelector('#game .score_info .status').innerHTML = value;
		},
		goal: function(value) {
			document.querySelector('#game .game_goal .set .value').innerHTML = '122';
		},
		done: function(value) {
			document.querySelector('#game .game_goal .done .value').innerHTML = value;
		},
		timer: function(value) {
			value = (value/60)*300;
			document.querySelector('#game .timer .time_bar').style.width = value+"px";
		}, 
		key: function() {
			//document.querySelector('#game .key_'+value).innerHTML = value;
		}, 
		reset_keys: function(value) {
			var keys = document.querySelectorAll('#game .keys .key');
			for (var i = 0; i < keys.length; i++) {
				//keys[i];;
			};
			
		},



	}
}