import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ClerkEdit from '../../forms/userforms/ClerkEdit'
import { getUserById } from '../../../redux/actions'
import ClerkRemove from './ClerkRemove'

const ClerkCard = ({ name, email, user_id, role_id }) => {
	const users = useSelector((state) => state.users)
	const dispatch = useDispatch()
	const [editClerk, setEditClerk] = useState({})
	const [toggleEdit, setToggleEdit] = useState(false)
	const [toggleRemove, setToggleRemove] = useState(false)
	const [toggleTools, setToggleTools] = useState(false)

	const toolToggle = () => {
		dispatch(getUserById(user_id))
		setToggleTools(!false)
	}

	const toggleEditClick = () => {
		setEditClerk(users)
		setToggleEdit(!false)
	}
	const verify = () => {
		setToggleRemove(!false)
	}

	return (
		<section>
			<div>
				<p>
					{name} <br /> {email} <br /> Clerk Id:{role_id}
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
				<ClerkEdit
					editClerk={editClerk}
					setEditClerk={setEditClerk}
					setToggleEdit={setToggleEdit}
					user_id={user_id}
					setToggleTools={setToggleTools}
				/>
			) : null}

			{toggleRemove === !false ? (
				<ClerkRemove
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

export default ClerkCard
