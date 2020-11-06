import { axiosWithAuth } from '../utils/axiosWithAuth'
import { history } from '../index'


export const SET_ERROR = 'SET_ERROR'
export const LOGIN = 'LOGIN'



export const registerPatient = (userObj) => dispatch => {
  axiosWithAuth()
    .post('/auth/register', userObj)
    .then(res => {
      console.log(res.data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('role', res.data.createdUser.role)
      localStorage.setItem('user_id', res.data.roleId.user_id)
      localStorage.setItem('card', res.data.roleId.card)
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