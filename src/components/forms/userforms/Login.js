import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../../../redux/actions'
import {Label, Button, Input} from 'reactstrap'

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
			<h3>LogIn</h3>
				<form onSubmit={handleSubmit}>
					<Label htmlFor='email'>Email</Label>
					<Input bsSize='sm' type='text' name='email' value={creds.email} placeholder='Enter Email' onChange={handleChange} />
					<Label htmlFor='password'>Password</Label>
					<Input
					bsSize='sm'
						type='password'
						name='password'
						value={creds.password}
						placeholder='Enter A Password'
						onChange={handleChange}
				/>
				<div style={{margin: '3% auto'}}>
					<Button color='success' size='sm'>Submit</Button>
				</div>
				</form>
			</div>
		)
}

export default Login
