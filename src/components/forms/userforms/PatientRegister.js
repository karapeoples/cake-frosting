import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerPatient } from '../../../redux/actions'
import { Label, Input, Button, Spinner } from 'reactstrap'

const PatientRegister = () => {
	const [success, setSuccess]= useState(false)
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
		setSuccess(true)
		setTimeout(() =>{
			dispatch(registerPatient(patient))
		}, 1500)
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
			<h3>Add A New Patient</h3>
			<form onSubmit={handleSubmit}>
				<Label htmlFor='fullName'>Full Name</Label>
				<Input
					required
					bsSize='sm'
					type='text'
					name='fullName'
					value={patient.fullName}
					placeholder='Enter Name'
					onChange={handleChange}
				/>
				<Label htmlFor='email'>Email</Label>
				<Input
					required
					bsSize='sm'
					type='email'
					name='email'
					value={patient.email}
					placeholder='Enter Email'
					onChange={handleChange}
				/>
				<Label htmlFor='phone'>Phone</Label>
				<Input
					required
					bsSize='sm'
					type='tel'
					name='phone'
					value={patient.phone}
					placeholder='Enter Phone'
					onChange={handleChange}
				/>
				<Label htmlFor='password'>Password</Label>
				<Input
					required
					bsSize='sm'
					type='password'
					name='password'
					value={patient.password}
					placeholder='Enter A Password'
					onChange={handleChange}
				/>
				<Label htmlFor='card'>Patient Card Number</Label>
				<Input
					required
					bsSize='sm'
					type='text'
					name='card'
					value={patient.card}
					placeholder='Enter your OMMA Number'
					onChange={handleChange}
				/>
				<div style={{ margin: '3% auto' }}>
					{success === false ? (
						<Button color='success' size='sm'>
							Submit
						</Button>
					) : (
						<Button color='success' size='sm'>
							Submit <Spinner size='sm' style={{ color: 'whitesmoke' }} />
						</Button>
					)}
				</div>
			</form>
		</div>
	)
}

export default PatientRegister
