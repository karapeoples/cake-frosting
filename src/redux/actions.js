import { axiosWithAuth } from '../utils/axiosWithAuth'
import { history } from '../index'
import axios from 'axios'


export const SET_ERROR = 'SET_ERROR'
export const POST_SUCCESS = 'POST_SUCCESS'
//ALL USERS
export const GET_SINGLE_USER = 'GET_SINGLE_USER'
export const UPDATE_USERS = 'UPDATE_USERS'
export const REMOVE_USER = 'REMOVE_USER'
//CLERKS
export const GET_CLERKS = 'GET_CLERKS'
export const REMOVE_CLERK = 'REMOVE_CLERK'
//PATIENTS
export const GET_PATIENTS = 'GET_PATIENTS'
export const GET_PATIENT_CARD = 'GET_PATIENT_CARD'
export const UPDATE_CARD = 'UPDATE_CARD'
export const REMOVE_PATIENT = 'REMOVE_PATIENT'
//ADMINS
export const GET_ADMINS = 'GET_ADMINS'
export const REMOVE_ADMIN = 'REMOVE_ADMIN'
//ALL FLOWER
export const GET_ALL_FLOWER = 'GET_ALL_FLOWER'
export const GET_FLOWER_BY_ID = 'GET_FLOWER_BY_ID'
export const GET_FLOWER_BY_NAME = 'GET_FLOWER_BY_NAME'
export const UPDATE_FLOWER = 'UPDATE_FLOWER'
//CURRENT FLOWER
export const GET_STOCK = 'GET_STOCK'
export const GET_CURRENT_BY_ID = 'GET_CURRENT_BY_ID'
export const GRAB_FLOWER_TO_REMOVE= 'GRAB_FLOWER_TO_REMOVE'
export const DELETE_STOCK_FLOWER = 'DELETE_STOCK_FLOWER'
//INHOUSE PRE_ROLL
export const GET_STOCK_PR = 'GET_STOCK_PR'
export const GET_CURRENT_PR_BY_ID = 'GET_CURRENT_PR_BY_ID'
export const GRAB_PR_TO_REMOVE = 'GRAB_PR_TO_REMOVE'
export const DELETE_STOCK_PR = 'DELETE_STOCK_PR'
//COMPANY PRE_ROLL
export const GET_COMPANY_PR = 'GET_COMPANY_PR'
export const GET_COMPANY_PR_BY_ID = 'GET_COMPANY_PR_BY_ID'
export const GET_COMPANY_PR_BY_NAME = 'GET_COMPANY_PR_BY_NAME'
export const UPDATE_PR = 'UPDATE_PR'
//STOCK COMPANY PRE_ROLL
export const GET_PR_STOCK = 'GET_PR_STOCK'
export const GET_CURRENT_COMPANY_PR_BY_ID = 'GET_CURRENT_COMPANY_PR_BY_ID'
export const GRAB_COMPANY_PR_TO_REMOVE = 'GRAB_COMPANY_PR_TO_REMOVE'
export const DELETE_STOCK_COMPANY_PR = 'DELETE_STOCK_COMPANY_PR'

// const baseUrl= 'http://localhost:4994/api'
const baseUrl = 'https://cake-base-be.openode.io/api'
//REGISTRATION & LOGIN
export const registerPatient = (userObj) => dispatch => {
  axiosWithAuth()
    .post('/auth/register', userObj)
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('role', res.data.createdUser.role)
			history.push('/login')
			dispatch({ type: POST_SUCCESS, payload: res.data.createdUser })
    })
    .catch(err => {
    dispatch({type: SET_ERROR, payload: err})
  })
}

export const registerClerk = (userObj) => dispatch => {
  axiosWithAuth()
    .post('/auth/register', userObj)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('role', res.data.createdUser.role)
			history.push('/login')
			dispatch({ type: POST_SUCCESS, payload: res.data.createdUser })
    })
  .catch(err => {
    dispatch({type: SET_ERROR, payload: err})
  })
}

export const registerAdmin = (userObj) => dispatch => {
  axiosWithAuth()
			.post('/auth/register', userObj)
			.then((res) => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('role', res.data.createdUser.role)
				history.push('/admin-tools')
				dispatch({ type: POST_SUCCESS, payload: res.data.createdUser })
			})
			.catch((err) => {
				dispatch({ type: SET_ERROR, payload: err })
			})
}

export const login = (credentials) => dispatch => {
  axiosWithAuth()
    .post('/auth/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('role', res.data.user.role)
      if (res.data.user.role === 'patient') {
        localStorage.setItem('card', res.data.roleInfo.card)
				history.push('/products')
				dispatch({type: POST_SUCCESS, payload: res.data.user.role})
      }
      else if (res.data.user.role === 'admin') {
				history.push('/admin-tools')
				dispatch({type: POST_SUCCESS, payload: res.data.user.role})
      }
      else if (res.data.user.role === 'clerk') {
				history.push('/store-dash')
				dispatch({ type: POST_SUCCESS, payload: res.data.user.role })
      }
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err })
    })
}

//USER ENDPOINTS ACTIONS

//ALL USER
export const getUserById = (id) => (dispatch) => {
	axiosWithAuth()
		.get(`/user/all_user/${id}`)
		.then((res) => {
			dispatch({ type: GET_SINGLE_USER, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}
export const updateUsers = (changes) => dispatch => {
  axiosWithAuth()
			.put(`/user/all_user/${changes.id}`, changes)
			.then((res) => {
				dispatch({ type: UPDATE_USERS, payload: [res.data] })
			})
			.catch((err) => {
				dispatch({ type: SET_ERROR, payload: err })
			})
}
export const removeUser = (id) => dispatch => {
  axiosWithAuth()
			.delete(`/user/all_user/${id}`)
			.then((res) => {
				dispatch({ type: REMOVE_USER, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: SET_ERROR, payload: err })
			})
}
//CLERKS
export const getClerks = () => (dispatch) => {
	axiosWithAuth()
		.get('/user/clerk')
		.then((res) => {
			dispatch({ type: GET_CLERKS, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const removeClerk = (id) => (dispatch) => {
	axiosWithAuth()
		.delete(`/user/del_clerk/${id}`)
		.then((res) => {
			dispatch({ type: REMOVE_CLERK, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

//PATIENTS
export const getPatients = () => (dispatch) => {
	axiosWithAuth()
		.get('/user/patient')
		.then((res) => {
			dispatch({ type: GET_PATIENTS, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const getPatientCard = (id) => (dispatch) => {
	axiosWithAuth()
		.get(`/user/card/${id}`)
		.then((res) => {
			dispatch({ type: GET_PATIENT_CARD, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}
export const updateCard = (changes, id) => (dispatch) => {
	axiosWithAuth()
		.put(`/user/card/${id}`, changes)
		.then((res) => {
			dispatch({ type: UPDATE_CARD, payload: [res.data] })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const removePatient = (id) => (dispatch) => {
	axiosWithAuth()
		.delete(`/user/card/${id}`)
		.then((res) => {
			dispatch({ type: REMOVE_PATIENT, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}
//ADMIN
export const getAdmins = () => (dispatch) => {
	axiosWithAuth()
		.get('/user/admin')
		.then((res) => {
			dispatch({ type: GET_ADMINS, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const removeAdmin = (id) => (dispatch) => {
	axiosWithAuth()
		.delete(`/user/del_admin/${id}`)
		.then((res) => {
			dispatch({ type: REMOVE_ADMIN, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}


//STORE ENDPOINTS/////////////////////

//Flower Database
export const getAllFlowers = () => (dispatch) => {
	axiosWithAuth()
		.get('/strain/flower')
		.then((res) => {
			dispatch({ type: GET_ALL_FLOWER, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const flowerById = (id) => (dispatch) => {
	axiosWithAuth()
		.get(`/strain/flower/${id}`)
		.then((res) => {
			dispatch({ type: GET_FLOWER_BY_ID, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const flowerByName = (name) => (dispatch) => {
	axiosWithAuth()
		.get(`/strain/flower/name/${name}`)
		.then((res) => {
			dispatch({ type: GET_FLOWER_BY_NAME, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}
export const addFlower = (flowerObject) => (dispatch) => {
	axiosWithAuth()
		.post('/strain/flower', flowerObject)
		.then((res) => {
			dispatch({type: POST_SUCCESS, payload: res.data.info})
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const updateFlower = (changes) => dispatch => {
	axiosWithAuth()
		.put(`/strain/flower/${changes.id}`, changes)
		.then((res) => {
			dispatch({ type: UPDATE_FLOWER, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

//IN STOCK FLOWERS
export const getCurrentFlower = () => dispatch => {
	axios
		.get(`${baseUrl}/stock/flower_stock`)
		.then((res) => {
			dispatch({ type: GET_STOCK, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const getCurrentById = (id) => (dispatch) => {
	axiosWithAuth()
		.get(`/strain/flower_stock/${id}`)
		.then((res) => {
			dispatch({ type: GET_CURRENT_BY_ID, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}
export const addCurrentFlower =(flowerObject) => dispatch =>{
	axiosWithAuth()
		.post('/strain/flower_stock', flowerObject)
		.then((res) => {
			dispatch({ type: POST_SUCCESS, payload: res.data.info })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err})
		})
}

export const pickFlower = (id) => async dispatch => {
	let flowerToRemove
	try {
		try {
			var currentFlowers = await axiosWithAuth().get('/strain/flower_stock')
			var flower = await axiosWithAuth().get(`/strain/flower/${id}`)
			flowerToRemove = currentFlowers.data.filter((flowers) => flowers.flower_id === flower.data.id
			)
		}
		catch (err) {
			dispatch({ type: SET_ERROR, payload: err })
		}
		finally {
			return dispatch({ type: GRAB_FLOWER_TO_REMOVE, payload:[...flowerToRemove] })
		}
	}
	catch (err) {
		dispatch({ type: SET_ERROR, payload: err })
	}
}

export const removeCurrentFlower = (id) => dispatch => {
  axiosWithAuth()
			.delete(`/strain/flower_stock/${id}`)
			.then((res) => {
				dispatch({ type: DELETE_STOCK_FLOWER, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: SET_ERROR, payload: err })
			})
}

//IN HOUSE PRE ROLLS

export const getCurrentPR = () => (dispatch) => {
	axios
		.get(`${baseUrl}/stock/preRoll`)
		.then((res) => {
			dispatch({ type: GET_STOCK_PR, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}
export const getCurrentPRById = (id) => (dispatch) => {
	axiosWithAuth()
		.get(`/strain/preRoll/${id}`)
		.then((res) => {
			dispatch({ type: GET_CURRENT_PR_BY_ID, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const pickPreRoll = (id) => async (dispatch) => {
	let preRollToRemove
	try {
		try {
			var currentPR = await axiosWithAuth().get('/strain/preRoll')
			var flower = await axiosWithAuth().get(`/strain/flower/${id}`)
			preRollToRemove = currentPR.data.filter((flowers) => flowers.flower_id === flower.data.id)
		} catch (err) {
			dispatch({ type: SET_ERROR, payload: err })
		} finally {
			return dispatch({ type: GRAB_PR_TO_REMOVE, payload: [...preRollToRemove] })
		}
	} catch (err) {
		dispatch({ type: SET_ERROR, payload: err })
	}
}

export const addCurrentPR = (prObject) => (dispatch) => {
	axiosWithAuth()
		.post('/strain/preRoll', prObject)
		.then((res) => {
			dispatch({ type: POST_SUCCESS, payload: res.data.info })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}
export const removeCurrentPR = (id) => (dispatch) => {
	axiosWithAuth()
		.delete(`/strain/preRoll/${id}`)
		.then((res) => {
			dispatch({ type: DELETE_STOCK_PR, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

//COMPANY PRE ROLLS

//Company PreRoll Database

export const getCompanyPR = () => (dispatch) => {
	axiosWithAuth()
		.get('/pr/companyPR')
		.then((res) => {
			dispatch({ type: GET_COMPANY_PR, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const preRollById = (id) => (dispatch) => {
	axiosWithAuth()
		.get(`/pr/companyPR/${id}`)
		.then((res) => {
			dispatch({ type: GET_COMPANY_PR_BY_ID, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const preRollByName = (name) => (dispatch) => {
	axiosWithAuth()
		.get(`/pr/companyPR/name/${name}`)
		.then((res) => {
			dispatch({ type: GET_COMPANY_PR_BY_NAME, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}
export const addCompanyPR = (prObject) => (dispatch) => {
	axiosWithAuth()
		.post('/pr/companyPR', prObject)
		.then((res) => {
			dispatch({ type: POST_SUCCESS, payload: res.data.info })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const updateCompanyPR = (changes) => (dispatch) => {
	axiosWithAuth()
		.put(`/pr/companyPR/${changes.id}`, changes)
		.then((res) => {
			dispatch({ type: UPDATE_PR, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

//IN STOCK Company PreRolls
export const getCurrentCompanyPR = () => (dispatch) => {
	axios
		.get(`${baseUrl}/stock/pr_stock`)
		.then((res) => {
			dispatch({ type: GET_PR_STOCK, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const getCurrentCompanyPRById = (id) => (dispatch) => {
	axiosWithAuth()
		.get(`/pr/pr_stock/${id}`)
		.then((res) => {
			dispatch({ type: GET_CURRENT_COMPANY_PR_BY_ID, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}
export const addCurrentCompanyPR = (prObject) => (dispatch) => {
	axiosWithAuth()
		.post('/pr/pr_stock', prObject)
		.then((res) => {
			dispatch({ type: POST_SUCCESS, payload: res.data.info })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}

export const pickCompanyPR = (id) => async (dispatch) => {
	let preRollToRemove
	try {
		try {
			var currentPRs = await axiosWithAuth().get('/pr/pr_stock')
			var PR = await axiosWithAuth().get(`/pr/companyPR/${id}`)
			preRollToRemove = currentPRs.data.filter((prs) => prs.preRoll_id === PR.data.id)
		} catch (err) {
			dispatch({ type: SET_ERROR, payload: err })
		} finally {
			return dispatch({ type: GRAB_COMPANY_PR_TO_REMOVE, payload: [...preRollToRemove] })
		}
	} catch (err) {
		dispatch({ type: SET_ERROR, payload: err })
	}
}

export const removeCurrentCompanyPR = (id) => (dispatch) => {
	axiosWithAuth()
		.delete(`/pr/pr_stock/${id}`)
		.then((res) => {
			dispatch({ type: DELETE_STOCK_COMPANY_PR, payload: res.data })
		})
		.catch((err) => {
			dispatch({ type: SET_ERROR, payload: err })
		})
}