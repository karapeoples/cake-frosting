import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../../../redux/actions'
import {Label, Button, Input, Spinner} from 'reactstrap'

const Login = () => {
  const dispatch = useDispatch()
	const [success, setSuccess] = useState(false)
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
		setSuccess(true)
		setTimeout(() =>{
			dispatch(login(creds))
		}, 1500)
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
					<Input
						required
						bsSize='sm'
						type='text'
						name='email'
						value={creds.email}
						placeholder='Enter Email'
						onChange={handleChange}
					/>
					<Label htmlFor='password'>Password</Label>
					<Input
						required
						bsSize='sm'
						type='password'
						name='password'
						value={creds.password}
						placeholder='Enter A Password'
						onChange={handleChange}
					/>
					<div style={{ margin: '3% auto' }}>
						{success === false ? (
							<Button color='success' size='sm'>
								Submit
								</Button>
						) : (
							<Button color='success' size='sm'>
								Submit <Spinner size='sm' style={{color: 'whitesmoke'}}/>
							</Button>

						)}
					</div>
				</form>
			</div>
		)
}

export default Login
