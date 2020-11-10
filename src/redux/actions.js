import { axiosWithAuth } from '../utils/axiosWithAuth'
import { history } from '../index'


export const SET_ERROR = 'SET_ERROR'
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



//REGISTRATION & LOGIN
export const registerPatient = (userObj) => dispatch => {
  axiosWithAuth()
    .post('/auth/register', userObj)
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('role', res.data.createdUser.role)
      history.push('/login')
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
        history.push('/cart')
      }
      else if (res.data.user.role === 'admin') {
        history.push('/admin-tools')
      }
      else if (res.data.user.role === 'clerk') {
        history.push('/')
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