import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {  SET_ERROR, GET_ALL_USERS, GET_SINGLE_USER, GET_CLERKS, UPDATE_USERS, REMOVE_USER, REMOVE_CLERK, GET_CLERK_INFO } from './actions';

const initialState = {
	users: [],
	clerks: [],
	error: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			}
		case GET_ALL_USERS:
			return {
				...state,
				users: action.payload,
			}
		case GET_SINGLE_USER:
			return {
				...state,
				users: action.payload,
			}
		case GET_CLERKS:
			return {
				...state,
				clerks: action.payload,
			}
		case UPDATE_USERS:
			return {
				...state,
				users: [action.payload],
			}
		case REMOVE_USER:
			return {
				...state,
				users: [action.payload],
			}
		case REMOVE_CLERK:
			return {
				...state,
				clerk: [action.payload],
			}
		case GET_CLERK_INFO:
			return {
				...state,
				clerks: action.payload,
			}
		default:
			return state
	}
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(()=>console.log('THIS IS THE STORE!', store.getState()))
export default store