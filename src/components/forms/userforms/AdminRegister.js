import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerAdmin } from '../../../redux/actions'
import {Label, Input, Button} from 'reactstrap'

const AdminRegister = () => {
  const dispatch = useDispatch()
	const [admin, setAdmin] = useState({
		fullName: '',
		email: '',
		phone:'',
		password: '',
		role: 'admin',
	})

	const handleChange = (e) => {
		setAdmin({
			...admin,
			[e.target.name]: e.target.value,
		})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerAdmin(admin))
    setAdmin({
      fullName: '',
			email: '',
			phone: '',
      password: '',
      role: 'admin',
    })
  }
	return (
		<div>
			<h3>Register a New Admin</h3>
			<form onSubmit={handleSubmit}>
				<Label htmlFor='fullName'>Full Name</Label>
				<Input
					required
					bsSize='sm'
					type='text'
					name='fullName'
					value={admin.fullName}
					placeholder='Enter Name'
					onChange={handleChange}
				/>
				<Label htmlFor='email'>Email</Label>
				<Input
					required
					bsSize='sm'
					type='email'
					name='email'
					value={admin.email}
					placeholder='Enter Email'
					onChange={handleChange}
				/>
				<Label htmlFor='tel'>Phone</Label>
				<Input
					required
					bsSize='sm'
					type='text'
					name='phone'
					value={admin.phone}
					placeholder='Enter Phone'
					onChange={handleChange}
				/>
				<Label htmlFor='password'>Password</Label>
				<Input
					required
					bsSize='sm'
					type='password'
					name='password'
					value={admin.password}
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

export default AdminRegister
