import { axiosWithAuth } from '../utils/axiosWithAuth'
import { axiosStoreAuth } from '../utils/axiosStoreAuth'
import axios from 'axios'
import { history } from '../index'


export const SET_ERROR = 'SET_ERROR'
export const STORE_LOGIN = 'STORE_LOGIN'
export const PATIENT_LOGIN = 'PATIENT_LOGIN'


export const registerPatient = (userObj) => dispatch => {
  axios
    .post('http://localhost:4994/api/auth/sign_up', userObj)
    .then(res => {
      localStorage.setItem('isLegal', res.data.isLegal)
      history.push('/cart')
    })
    .catch(err => {
    dispatch({type: SET_ERROR, payload: err})
  })
}

export const registerClerk = (userObj) => dispatch => {
  axiosStoreAuth()
    .post('/auth/register', userObj)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user_id', res.data.roleId.user_id)
      history.push('/clerk')
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
				localStorage.setItem('user_id, res.data.roleId.user_id)
				history.push('/clerk')
			})
			.catch((err) => {
				dispatch({ type: SET_ERROR, payload: err })
			})
}