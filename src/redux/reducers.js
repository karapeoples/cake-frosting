import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {  SET_ERROR, GET_SINGLE_USER, GET_CLERKS, UPDATE_USERS, REMOVE_USER, REMOVE_CLERK, GET_PATIENTS, GET_PATIENT_CARD, UPDATE_CARD, REMOVE_PATIENT, GET_ADMINS, REMOVE_ADMIN } from './actions';

const initialState = {
	users: [],
	clerks: [],
	admins: [],
	patients: [],
	error: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			}
		case GET_SINGLE_USER:
			return {
				...state,
				users: action.payload,
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
		case GET_CLERKS:
			return {
				...state,
				clerks: action.payload,
			}
		case REMOVE_CLERK:
			return {
				...state,
				clerks: [action.payload],
			}
		case GET_PATIENTS:
			return {
				...state,
				patients: action.payload,
			}
		case GET_PATIENT_CARD:
			return {
				...state,
				cards: action.payload,
			}
		case UPDATE_CARD:
			return {
				...state,
				cards: [action.payload],
			}
		case REMOVE_PATIENT:
			return {
				...state,
				patients: [action.payload],
			}
		case GET_ADMINS:
			return {
				...state,
				admins: action.payload,
			}
		case REMOVE_ADMIN:
			return {
				...state,
				admins: [action.payload],
			}
		default:
			return state
	}
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(()=>console.log('THIS IS THE STORE!', store.getState()))
export default store