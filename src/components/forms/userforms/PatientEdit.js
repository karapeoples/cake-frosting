import React from 'react'
import { updateUsers, updateCard, getPatients } from '../../../redux/actions'
import { useDispatch } from 'react-redux'

const PatientEdit = ({ editPatient, setEditPatient, editCard, setEditCard, setToggleEdit, setToggleTools, role_id }) => {
	const dispatch = useDispatch()

	const handleToggleClose = () => {
		setToggleEdit(false)
	}

	const handleSubmit = (e) => {
		e.persist()
    dispatch(updateUsers(editPatient))
    dispatch(updateCard(editCard, role_id))
		dispatch(getPatients())
		setToggleEdit(false)
		setToggleTools(false)
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
				<label htmlFor='fullName'>Full Name</label>
				<input type='text' name='fullName' value={editPatient.fullName} placeholder='Enter Name' onChange={handleChange} />
				<label htmlFor='email'>Email</label>
				<input type='email' name='email' value={editPatient.email} placeholder='Enter Email' onChange={handleChange} />
				<label htmlFor='phone'>Phone</label>
				<input type='tel' name='phone' value={editPatient.phone} placeholder='Enter Phone' onChange={handleChange} />
				<label htmlFor='card'>Card</label>
				<input type='text' name='card' value={editCard.card} placeholder='Enter Email' onChange={handleCard} />
				<button>Submit</button>
				<button onClick={handleToggleClose}>Cancel</button>
			</form>
		</div>
	)
}

export default PatientEdit
