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
			document.querySelector('#game .game_goal .set .value').innerHTML = value;
		},
		done: function(value) {
			document.querySelector('#game .game_goal .done .value').innerHTML = value;
		},
		timer: function(value) {
			value = (value/60)*300;
			document.querySelector('#game .timer .time_bar').style.width = value+"px";
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



	}
}