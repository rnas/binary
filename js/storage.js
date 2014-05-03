/*

	Storage: storage settings

*/
var storage = {
	get_record: function(record) {
		var record = localStorage.getItem('record');
		if (record === null) {
			return 0;
		} else {
			return record;
		}
	}, 
	set_record: function(record) {
		localStorage.setItem('record', record);
	}
}