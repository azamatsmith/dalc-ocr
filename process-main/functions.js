const {ipcRenderer, remote} = require('electron');
const {dialog} = remote;
const fs = remote.require('fs');
const path = require('path');

module.exports = {
	openFile: function() {
		dialog.showOpenDialog(null,openOptions,(file) => {
			if (!file) {return;}
			const thisFile = file[0];
			// let redux know that ocr has started
			var event = new CustomEvent('ocrStarted', { 'detail': file.length });	
			document.dispatchEvent(event);
			// send to main process
			ipcRenderer.send('loadedSingle', thisFile);
		});
	},

	openFolder: function() {
		dialog.showOpenDialog(null,openFolderOptions,(dir) => {
			if (!dir) {return;}
			const thisPath = dir[0];
			getFilesFromDir(thisPath, function(data){
				var event = new CustomEvent('ocrStarted', { 'detail': data.length });	
				document.dispatchEvent(event);
				ipcRenderer.send('loadDirectory', data);
			});
		});
	},
};

// helper function
function getFilesFromDir(dirName,cb) {
	fs.readdir(dirName, (err,files) => {
		if (err) { 
			console.log('there was an error getting files from directory'); 
			return [];
		}
		var fileArr = [];
		for ( var i = 0; i < files.length; i++ ) {
			const thisFile  = path.join(dirName, files[i]);
			if ( fs.statSync(thisFile).isFile() ) {
				fileArr.push(thisFile);
			} 
		}
		cb(fileArr);
	});
}

// options
const openOptions = {
	title: 'Open File',	
	filters: [
		{ name: 'Select a .jpg, or .png file', extensions: ['jpg', 'png'] }	
	]
};

const openFolderOptions = {
	title: 'Open Folder',
	properties: [ 'openDirectory']
};
