import React from 'react'
import { updateUsers, getAdmins } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const AdminEdit = ({ editAdmin, setEditAdmin, setToggleEdit, setToggleTools }) => {
	const dispatch = useDispatch()


	const handleToggleClose = () => {
		setToggleEdit(false)
	}

	const handleSubmit = (e) => {
		e.persist()
		dispatch(updateUsers(editAdmin))
		dispatch(getAdmins())
		setToggleEdit(false)
		setToggleTools(false)
	}

	const handleChange = (e) => {
		setEditAdmin({ ...editAdmin, [e.target.name]: e.target.value })
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='fullName'>Full Name</label>
				<input type='text' name='fullName' value={editAdmin.fullName} placeholder='Enter Name' onChange={handleChange} />
				<label htmlFor='email'>Email</label>
				<input type='text' name='email' value={editAdmin.email} placeholder='Enter Email' onChange={handleChange} />
				<button>Submit</button>
				<button onClick={handleToggleClose}>Cancel</button>
			</form>
		</div>
	)
}

export default AdminEdit
