import React, { useState } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { registerClerk } from '../../../redux/actions'
import { Label, Input, Button, Spinner } from 'reactstrap'

const ClerkRegister = () => {
	const success = useSelector((state) => state.addSuccess)
  const dispatch = useDispatch()
	const [clerk, setClerk] = useState({
		fullName: '',
		email: '',
		phone:'',
		password: '',
		role: 'clerk',
	})

	const handleChange = (e) => {
		setClerk({
			...clerk,
			[e.target.name]: e.target.value,
		})
	}
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerClerk(clerk))
    setClerk({
      fullName: '',
			email: '',
			phone: '',
      password: '',
      role: 'clerk',
    })
  }
	return (
		<div>
			<h3>Register a New Clerk</h3>
			<form onSubmit={handleSubmit}>
				<Label htmlFor='fullName'>Full Name</Label>
				<Input
					required
					bsSize='sm'
					type='text'
					name='fullName'
					value={clerk.fullName}
					placeholder='Enter Name'
					onChange={handleChange}
				/>
				<Label htmlFor='email'>Email</Label>
				<Input
					required
					bsSize='sm'
					type='email'
					name='email'
					value={clerk.email}
					placeholder='Enter Email'
					onChange={handleChange}
				/>
				<Label htmlFor='phone'>Phone</Label>
				<Input required bsSize='sm' type='tel' name='phone' value={clerk.phone} placeholder='Enter Phone' onChange={handleChange} />
				<Label htmlFor='password'>Password</Label>
				<Input
					required
					bsSize='sm'
					type='password'
					name='password'
					value={clerk.password}
					placeholder='Enter A Password'
					onChange={handleChange}
				/>
				<div style={{ margin: '3% auto' }}>
						<Button color='success' size='sm'>
						Submit
					</Button>
				</div>
			</form>
		</div>
	)
}

export default ClerkRegister
