import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {registerPatient} from '../../../redux/actions'

const PatientRegister = () => {
  const dispatch = useDispatch()
	const [patient, setPatient] = useState({
		fullName: '',
		email: '',
		password: '',
		phone:'',
		card:'',
		role: 'patient',
	})

	const handleChange = (e) => {
		setPatient({
			...patient,
			[e.target.name]: e.target.value,
		})
	}

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerPatient(patient))
    setPatient({
					fullName: '',
					email: '',
					password: '',
					phone:'',
					card:'',
					role: 'patient',
				})
  }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='fullName'>Full Name</label>
				<input type='text' name='fullName' value={patient.fullName} placeholder='Enter Name' onChange={handleChange} />
				<label htmlFor='email'>Email</label>
				<label htmlFor='phone'>Phone</label>
				<input type='text' name='phone' value={patient.phone} placeholder='Enter Phone' onChange={handleChange} />
				<input type='text' name='email' value={patient.email} placeholder='Enter Email' onChange={handleChange} />
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					value={patient.password}
					placeholder='Enter A Password'
					onChange={handleChange}
				/>
				<label htmlFor='card'>Patient Card Number</label>
				<input type='text' name='card' value={patient.card} placeholder='Enter your OMMA Number' onChange={handleChange} />
				<button>Submit</button>
			</form>
		</div>
	)
}

export default PatientRegister
