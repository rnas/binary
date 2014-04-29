/*

	Storage: storage settings

*/
var storage = {
	set_record: function(record) {
		var record = localStorage.setItem('record', record);
		if (record == undefined) {
			return 0;
		} else {
			return record;
		}
	}, 
	get_record: function() {
		localStorage.getItem('record');
	}
}