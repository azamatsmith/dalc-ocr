// Actions - index.js

export const HANDLE_DATA = 'HANDLE_DATA';
export const FILE_LOADED = 'FILE_LOADED';
export const OCR_STARTED = 'OCR_STARTED';
export const DONE_LOADING = 'DONE_LOADING';
export const INCREMENT_INDEX = 'INCREMENT_INDEX';
export const DECREMENT_INDEX = 'DECREMENT_INDEX';

export function handleData(data) {
	return {
		type: HANDLE_DATA,
		payload: data 
	};
}

export function fileLoaded(data) {
	return {
		type: FILE_LOADED,
		payload: data 
	};
}

export function ocrStarted(count) {
	return {
		type: OCR_STARTED,	
		payload: count
	};	
}

export function doneLoading() {
	return {
		type: DONE_LOADING,	
		payload: ''
	};	
}

export function handleIncrement(selectedIndex, endCount) {
	if (selectedIndex >= endCount - 1 || !endCount || selectedIndex === null) { return {type: null}; }  
	return {
		type: INCREMENT_INDEX,	
		payload: ''
	};	
}

export function handleDecrement(selectedIndex) {
	if (selectedIndex <= 0 || selectedIndex === null) { return {type: null}; }  
	return {
		type: DECREMENT_INDEX,	
		payload: ''
	};	
}
