import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerAdmin } from '../../../redux/actions'

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
			<form onSubmit={handleSubmit}>
				<label htmlFor='fullName'>Full Name</label>
				<input type='text' name='fullName' value={admin.fullName} placeholder='Enter Name' onChange={handleChange} />
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' value={admin.email} placeholder='Enter Email' onChange={handleChange} />
				<label htmlFor='tel'>Phone</label>
				<input type='text' name='phone' value={admin.phone} placeholder='Enter Phone' onChange={handleChange} />
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					value={admin.password}
					placeholder='Enter A Password'
					onChange={handleChange}
				/>
        <button>Submit</button>
			</form>
		</div>
	)
}

export default AdminRegister
