import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../../redux/actions'

const Login = () => {
  const dispatch = useDispatch()

  const [creds, setCreds]=useState({
    email:'',
    password:''
  })


	const handleChange = (e) => {
		setCreds({
			...creds,
			[e.target.name]: e.target.value,
		})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(creds))
    setCreds({
      email: '',
      password: '',
    })
  }

  return (
			<div>
				<form onSubmit={handleSubmit}>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' value={creds.email} placeholder='Enter Email' onChange={handleChange} />
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						value={creds.password}
						placeholder='Enter A Password'
						onChange={handleChange}
					/>
					<button>Submit</button>
				</form>
			</div>
		)
}

export default Login
