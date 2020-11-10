import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser, removePatient, getPatients } from '../../../redux/actions'

const PatientRemove = ({ name, setToggleRemove, user_id, role_id, setToggleTools }) => {
	const dispatch = useDispatch()

	const yes = () => {
		dispatch(removeUser(user_id))
		dispatch(removePatient(role_id))
		dispatch(getPatients())
		setToggleTools(false)
		setToggleRemove(false)
	}

	const no = () => {
		setToggleRemove(false)
	}
	return (
		<div>
			<h6>Are you sure you wish to remove {name}?</h6>
			<button onClick={yes}>Yes</button>
			<button onClick={no}>No</button>
		</div>
	)
}

export default PatientRemove
