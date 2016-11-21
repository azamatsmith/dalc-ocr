// Reducer - main_reducer.js
import { 
	HANDLE_DATA, 
	FILE_LOADED, 
	OCR_STARTED,
	DONE_LOADING, 
	INCREMENT_INDEX, 
	DECREMENT_INDEX, 
} from '../actions/index';

const INITIAL_STATE = { 
	files: [], 
	loading: false, 
	currentCount: 0, 
	endCount: null,
	selectedIndex: null,
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case HANDLE_DATA: 
			if (_.isEmpty(action.payload)) { return { ...state, data: [] }; }
			return { ...state, data: action.payload }; 
		case FILE_LOADED: 
			let newFiles = [...state.files];
			newFiles.push(action.payload);
			return  {...state, files: newFiles, currentCount: state.currentCount + 1};
		case OCR_STARTED: 
			return  { 
				...state, 
				loading: true, 
				endCount: action.payload, 
				currentCount: 0, 
				files: [], 
				selectedIndex: null
			};
		case DONE_LOADING: 
			return { ...state, loading: false, selectedIndex: 0};
		case INCREMENT_INDEX: 
			return { ...state, selectedIndex: state.selectedIndex + 1 };
		case DECREMENT_INDEX: 
			return { ...state, selectedIndex: state.selectedIndex - 1 };
		default:
			return state;
	}
}


