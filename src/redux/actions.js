import { axiosWithAuth } from '../utils/axiosWithAuth'
import { history } from '../index'


export const SET_ERROR = 'SET_ERROR'
//ALL USERS
export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_SINGLE_USER = 'GET_SINGLE_USER'
export const UPDATE_USERS = 'UPDATE_USERS'
//CLERKS
export const GET_CLERKS = 'GET_CLERKS'



//REGISTRATION & LOGIN
export const registerPatient = (userObj) => dispatch => {
  axiosWithAuth()
    .post('/auth/register', userObj)
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('role', res.data.createdUser.role)
      localStorage.setItem('user_id', res.data.roleId.user_id)
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
      localStorage.setItem('user_id', res.data.roleId.user_id)
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
				localStorage.setItem('user_id', res.data.roleId.user_id)
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
      localStorage.setItem('user_id', res.data.roleInfo.user_id)
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
export const getUsers = () => dispatch => {
  axiosWithAuth()
			.get('/user/all_user')
			.then((res) => {
				dispatch({ type: GET_ALL_USERS, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: SET_ERROR, payload: err })
			})
}
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
  getUsers()
  axiosWithAuth()
			.put(`/user/all_user/${changes.id}`, changes)
			.then((res) => {
				dispatch({ type: UPDATE_USERS, payload: [res.data] })
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

