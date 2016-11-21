// events/events.js


module.exports = { 
	dispatchLoad: function(json, fileName) {
		var event = new CustomEvent('loadNew', { 'detail': { json: json, fileName: fileName } } );	
		document.dispatchEvent(event);
	},

	dispatchSave: function() {
		console.log('dispatching save');
		var event = new CustomEvent('didSave');	
		document.dispatchEvent(event);
	},

	dispatchDir: function(data) {
		console.log('dispatching dir');
		// console.log(data);
		var event = new CustomEvent('loadedDirectory', { 'detail': data });	
		document.dispatchEvent(event);
	},
	
	// dispatchFileResult: function(data) {
	// 	console.log('dispatching a loaded file');
	// 	var event = new CustomEvent('loadedFile', { 'detail': data });	
	// 	document.dispatchEvent(event);
	// },

}

