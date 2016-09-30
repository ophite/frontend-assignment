import types from './types/demo.types';

/************** action creators **************/

export const dropMarker = (value) => {
	return {
		type: types.DROP_MARKER,
		payload: value
	};
};

export const checkMarkers = () => {
	return {
		type: types.CHECK_MARKERS,
		payload: null
	};
};
