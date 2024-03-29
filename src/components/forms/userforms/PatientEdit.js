import React,{useState} from 'react'
import { updateUsers, updateCard, getPatients } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import { Button, Label, Input, Spinner } from 'reactstrap'

const PatientEdit = ({ editPatient, setEditPatient, editCard, setEditCard, setToggleEdit, role_id }) => {
	const [success, setSuccess]= useState(false)
	const dispatch = useDispatch()

	const handleToggleClose = (e) => {
		e.preventDefault()
		setToggleEdit(false)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setSuccess(true)
		setTimeout(() => {
		dispatch(updateUsers(editPatient))
			dispatch(updateCard(editCard, role_id))
		}, 1500)
		dispatch(getPatients())
		setToggleEdit(false)
	}

	const handleChange = (e) => {
		setEditPatient({ ...editPatient, [e.target.name]: e.target.value })
  }

  const handleCard = (e) => {
			setEditCard({ ...editCard, [e.target.name]: e.target.value })
		}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Label htmlFor='fullName'>Full Name</Label>
				<Input
					bsSize='sm'
					type='text'
					name='fullName'
					value={editPatient.fullName}
					placeholder='Enter Name'
					onChange={handleChange}
				/>
				<Label htmlFor='email'>Email</Label>
				<Input
					bsSize='sm'
					type='email'
					name='email'
					value={editPatient.email}
					placeholder='Enter Email'
					onChange={handleChange}
				/>
				<Label htmlFor='phone'>Phone</Label>
				<Input
					bsSize='sm'
					type='tel'
					name='phone'
					value={editPatient.phone}
					placeholder='Enter Phone'
					onChange={handleChange}
				/>
				<Label htmlFor='card'>Card</Label>
				<Input bsSize='sm' type='text' name='card' value={editCard.card} placeholder='Enter Email' onChange={handleCard} />
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
					<Button color='danger' size='sm' onClick={handleToggleClose}>
						Cancel
					</Button>
				</div>
			</form>
		</div>
	)
}

export default PatientEdit
