// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron');

ipcRenderer.on('fileResult', (event, arg) => {
	// console.log('got fileResult: ', arg);
	var event = new CustomEvent('fileResult', { 'detail': arg });	
	document.dispatchEvent(event);
});

ipcRenderer.on('ocrStarted', (event, arg) => {
	var event = new CustomEvent('ocrStarted', { 'detail': arg });	
	document.dispatchEvent(event);
});
