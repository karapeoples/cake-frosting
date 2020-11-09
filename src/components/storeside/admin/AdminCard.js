import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AdminEdit from '../../forms/AdminEdit'
import { getUserById } from '../../../redux/actions'
import AdminRemove from './AdminRemove'

const AdminCard = ({ name, email, user_id, role_id }) => {
	const users = useSelector((state) => state.users)
	const dispatch = useDispatch()
	const [editAdmin, setEditAdmin] = useState({})
	const [toggleEdit, setToggleEdit] = useState(false)
	const [toggleRemove, setToggleRemove] = useState(false)
	const [toggleTools, setToggleTools] = useState(false)


	const toolToggle = () => {
		dispatch(getUserById(user_id))
		setToggleTools(!false)
}

	const toggleEditClick = () => {
		setEditAdmin(users)
		setToggleEdit(!false)
	}
	const verify = () => {
		setToggleRemove(!false)
	}

	return (
		<section>
			<div>
				<p>
					{name} <br /> {email} <br /> Admin Id:{role_id}
				</p>
				<button onClick={toolToggle}>Tools</button>
				{toggleTools === !false ? (
					<div>
						<button onClick={toggleEditClick}>Edit</button>
						<button onClick={verify}>Delete</button>
					</div>
				) : null}
			</div>

			{toggleEdit === !false ? (
				<AdminEdit
					editAdmin={editAdmin}
					setEditAdmin={setEditAdmin}
					setToggleEdit={setToggleEdit}
					user_id={user_id}
					setToggleTools={setToggleTools}
				/>
			) : null}

			{toggleRemove === !false ? (
				<AdminRemove
					name={name}
					setToggleRemove={setToggleRemove}
					user_id={user_id}
					role_id={role_id}
					setToggleTools={setToggleTools}
				/>
			) : null}
		</section>
	)
}

export default AdminCard
