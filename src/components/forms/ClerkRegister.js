import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerClerk } from '../../redux/actions'

const ClerkRegister = () => {
  const dispatch = useDispatch()
	const [clerk, setClerk] = useState({
		fullName: '',
		email: '',
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
    e.preventDEfault()
    dispatch(registerClerk(clerk))
    setClerk({
      fullName: '',
      email: '',
      password: '',
      role: 'clerk',
    })
  }
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Full Name</label>
				<input type='text' name='name' value={clerk.fullName} placeholder='Enter Name' onChange={handleChange} />
				<label htmlFor='email'>Email</label>
				<input type='text' name='email' value={clerk.email} placeholder='Enter Email' onChange={handleChange} />
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					value={clerk.password}
					placeholder='Enter A Password'
					onChange={handleChange}
				/>
        <button>Submit</button>
			</form>
			f
		</div>
	)
}

export default ClerkRegister
