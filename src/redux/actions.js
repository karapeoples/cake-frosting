import { axiosWithAuth } from '../utils/axiosWithAuth'
import { history } from '../index'


export const SET_ERROR = 'SET_ERROR'
export const LOGIN = 'STORE_LOGIN'



export const registerPatient = (userObj) => dispatch => {
  axiosWithAuth()
    .post('/auth/register', userObj)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user_id', res.data.roleId.user_id)
      localStorage.setItem('card', res.data.roleId.card)
      history.push('/cart')
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
				localStorage.setItem('user_id', res.data.roleId.user_id)
				history.push('/admin-tools')
			})
			.catch((err) => {
				dispatch({ type: SET_ERROR, payload: err })
			})
}