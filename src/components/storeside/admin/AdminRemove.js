import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser, removeAdmin, getAdmins } from '../../../redux/actions'

const AdminRemove = ({ name, setToggleRemove, user_id, role_id, setToggleTools }) => {
	const dispatch = useDispatch()

	const yes = () => {
		dispatch(removeUser(user_id))
		dispatch(removeAdmin(role_id))
		dispatch(getAdmins())
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

export default AdminRemove
