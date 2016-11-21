// menu.js
const {remote, ipcRenderer} = require('electron');
const {Menu,MenuItem,dialog} = remote;
const {openFile, openFolder} = require('../process-main/functions.js');

const menu = new Menu();
menu.append(new MenuItem({ label: 'MenuItem1', click(){console.log('item 1 clicked')} }));
menu.append(new MenuItem({ type: 'separator' }) );
menu.append(new MenuItem({ label: 'MenuItem2', type: 'checkbox', checked: true} ));


const template = [
	{
		label: 'File',
		submenu: [
			{
				label: 'Open File',
				click() {
					// return openFile();
					return openFile();
				}
			},	
			{
				label: 'Open Folder',
				click() {
					return openFolder();
				}
			},	
			// {
			// 	label: 'Save',
			// 	click() {
			// 		saveFile();
			// 	}
			// },	
			// {
			// 	label: 'Something',
			// }	
		]	
	}
];

const menu2 = Menu.buildFromTemplate(template);
// menu2.append(new MenuItem({ label: 'Menu2Item1', click(){console.log('item 1 clicked from menu2')} }));
Menu.setApplicationMenu(menu2);




// function saveFile() {
// 	dialog.showSaveDialog(null, saveOptions, (path) => {
// 		if (!path) {return;}
// 		const fileName = path;
// 		fs.writeFile(fileName, JSON.stringify(GLOBAL_OBJ), (err,data) => {
// 			if (err) throw err;	
// 			dispatchSave();
// 		});	
// 	});
// }

// This is to add a right click menu
// window.addEventListener('contextmenu', (e) => {
// 	e.preventDefault();
// 	menu.popup(remote.getCurrentWindow());
// }, false);

