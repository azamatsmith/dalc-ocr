// ipc_main process

const { ipcMain } = require('electron');

const Tesseract = require('tesseract.js');
const fs = require('fs');

ipcMain.on('loadDirectory', (event,data) => {
	console.log('need to load directory: ', data);
	for ( var i = 0; i < data.length; i++ ) {
		readImage(data[i], event);
	}
	// readImage(data, event);
	// use readNumbers function for numbers only
	// readNumbers(data, event);
});

ipcMain.on('loadedSingle', (event,data) => {
	readImage(data, event);
	// use readNumbers function for numbers only
	// readNumbers(data, event);
});

function readImage(path, event) {
	fs.readFile(path, (err,data) => {
		Tesseract.recognize(data, {lang: 'eng'}) 
			.then((result) => {
				const newObj = { 
					text: result.text, 
					html: result.html, 
					fileName: path, 
					image: data,
					// paragraphs: result.paragraphs[0],
					// words: result.words,
					confidence: result.confidence,
				};
				event.sender.send('fileResult', newObj);
			}); 
			// .finally( (resultOrError) => {
			// 	console.log('finally done with this', resultOrError.confidence);	
			// });
	});
}

function readNumbers(path, event) {
	console.log('reading numbers');
	fs.readFile(path, (err,data) => {
		Tesseract.recognize(data, {
			lang: 'eng', 
			tessedit_char_whitelist: '0123456789',
			// tessedit_char_blacklist: '0123456789',
		}) 
			.then((result) => {
				const newObj = { 
					text: result.text, 
					html: result.html, 
					fileName: path, 
					image: data,
					confidence: result.confidence,
				};
				event.sender.send('fileResult', newObj);
			}); 
	});
}



