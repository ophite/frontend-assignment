import types from '../actions/types/demo.types';
import defaultValues from '../constants/defaultValues.constant';

const DEFAULT_STATE = {
    grid: defaultValues.grid,
    markers: defaultValues.markers,
    droppedMarkers: [],
    disabledColors: [],
    ready: false,
    checked: false,
    valid: false
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {

		case types.DROP_MARKER:
			return reduceDropMarker(state, action);

		case types.CHECK_MARKERS:
			return reduceCheckMarkers(state, action);

		default:
			return state;
	}
}


/************** reducers **************/

const reduceDropMarker = (state, action) => {
	if(state.droppedMarkers.length === state.markers.length) {
		return state;
	}

    return {
        ...state,
        disabledColors: [...state.disabledColors, action.payload.color], 
        droppedMarkers: [...state.droppedMarkers, action.payload],
        ready: state.droppedMarkers.length === state.markers.length - 1
    };
};

const reduceCheckMarkers = (state, action) => {
	let length = state.droppedMarkers.filter((marker) => {
        return marker.x !== marker.col || marker.y !== marker.row;
    }).length;        
  
    return {
    	...state, 
    	checked: true, 
    	valid: length == 0
    };
};

