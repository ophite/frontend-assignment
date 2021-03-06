import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import demo from '../reducers/demo.reducer';

export const makeRootReducer = (asyncReducers) => {
	return combineReducers({
		// Add sync reducers here
		router,
		demo,
		...asyncReducers
	})
};

export const injectReducer = (store, { key, reducer }) => {
	store.asyncReducers[key] = reducer
	store.replaceReducer(makeRootReducer(store.asyncReducers))
};

export default makeRootReducer
