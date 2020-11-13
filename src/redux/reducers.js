import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { POST_SUCCESS, SET_ERROR, GET_SINGLE_USER, GET_CLERKS, UPDATE_USERS, REMOVE_USER, REMOVE_CLERK, GET_PATIENTS, GET_PATIENT_CARD, UPDATE_CARD, REMOVE_PATIENT, GET_ADMINS, REMOVE_ADMIN, GET_ALL_FLOWER, GET_FLOWER_BY_ID, GET_FLOWER_BY_NAME, UPDATE_FLOWER, GET_STOCK, GRAB_FLOWER_TO_REMOVE, DELETE_STOCK_FLOWER } from './actions';

const initialState = {
	users: [],
	clerks: [],
	admins: [],
	patients: [],
	addSuccess: [],
	allFlowers: [],
	flower: [],
	stockFlower:[],
	changes: [],
	error: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			}
		case POST_SUCCESS:
			return {
				...state,
				addSuccess: action.payload,
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
		case GET_ALL_FLOWER:
			return {
				...state,
				allFlowers: action.payload,
			}
		case GET_FLOWER_BY_ID:
			return {
				...state,
				changes: action.payload,
			}
		case GET_FLOWER_BY_NAME:
			return {
				...state,
				flower: action.payload,
			}
		case UPDATE_FLOWER:
			return {
				...state,
				flower: action.payload,
			}
			case GET_STOCK:
				return{
					...state,
					stockFlower: action.payload
				}
		case GRAB_FLOWER_TO_REMOVE:
			return {
				...state,
				stockFlower: action.payload
			}
		case DELETE_STOCK_FLOWER:
			return {
				...state,
				stockFlower: action.payload
			}
		default:
			return state
	}
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(()=>console.log('THIS IS THE STORE!', store.getState()))
export default store