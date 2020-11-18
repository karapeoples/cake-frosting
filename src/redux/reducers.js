import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { POST_SUCCESS, SET_ERROR, GET_SINGLE_USER, GET_CLERKS, UPDATE_USERS, REMOVE_USER, REMOVE_CLERK, GET_PATIENTS, GET_PATIENT_CARD, UPDATE_CARD, REMOVE_PATIENT, GET_ADMINS, REMOVE_ADMIN, GET_ALL_FLOWER, GET_FLOWER_BY_ID, GET_FLOWER_BY_NAME, UPDATE_FLOWER, GET_STOCK,GET_CURRENT_BY_ID, GRAB_FLOWER_TO_REMOVE, DELETE_STOCK_FLOWER, GET_STOCK_PR, GET_CURRENT_PR_BY_ID, GRAB_PR_TO_REMOVE, DELETE_STOCK_PR, GET_COMPANY_PR, GET_COMPANY_PR_BY_ID, GET_COMPANY_PR_BY_NAME, UPDATE_PR, GET_PR_STOCK, GET_CURRENT_COMPANY_PR_BY_ID, GRAB_COMPANY_PR_TO_REMOVE, DELETE_STOCK_COMPANY_PR} from './actions';

const initialState = {
	users: [],
	clerks: [],
	admins: [],
	patients: [],
	addSuccess: [],
	allFlowers: [],
	flower: [],
	stockFlower: [],
	inHouse:[],
	changes: [],
	companyPRS:[],
	companyPR: [],
	companyStock:[],
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
			return {
				...state,
				stockFlower: action.payload,
			}
		case GET_CURRENT_BY_ID:
			return {
				...state,
				stockFlower: action.payload,
			}
		case GRAB_FLOWER_TO_REMOVE:
			return {
				...state,
				stockFlower: action.payload,
			}
		case DELETE_STOCK_FLOWER:
			return {
				...state,
				stockFlower: action.payload,
			}
		case GET_STOCK_PR:
			return {
				...state,
				inHouse: action.payload,
			}
		case GET_CURRENT_PR_BY_ID:
			return {
				...state,
				inHouse: action.payload,
			}
		case GRAB_PR_TO_REMOVE:
			return {
				...state,
				inHouse: action.payload,
			}
		case DELETE_STOCK_PR:
			return {
				...state,
				inHouse: action.payload,
			}
		case GET_COMPANY_PR:
			return {
				...state,
				companyPRS: action.payload,
			}
		case GET_COMPANY_PR_BY_ID:
			return {
				...state,
				changes: action.payload,
			}
		case GET_COMPANY_PR_BY_NAME:
			return {
				...state,
				companyPR: action.payload,
			}
		case UPDATE_PR:
			return {
				...state,
				companyPR: action.payload,
			}
		case GET_PR_STOCK:
			return {
				...state,
				companyStock: action.payload,
			}
		case GET_CURRENT_COMPANY_PR_BY_ID:
			return {
				...state,
				companyStock: action.payload,
			}
		case GRAB_COMPANY_PR_TO_REMOVE:
			return {
				...state,
				companyStock: action.payload,
			}
		case DELETE_STOCK_COMPANY_PR:
			return {
				...state,
				companyStock: action.payload,
			}
		default:
			return state
	}
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(()=>console.log('THIS IS THE STORE!', store.getState()))
export default store