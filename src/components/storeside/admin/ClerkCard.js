import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ClerkEdit from '../../forms/ClerkEdit'
import { getUserById } from '../../../redux/actions'
import ClerkRemove from './ClerkRemove'

const ClerkCard = ({ name, email, user_id, role_id }) => {
	const users = useSelector((state) => state.users)
	const dispatch = useDispatch()
	const [editClerk, setEditClerk] = useState({})
	const [toggleEdit, setToggleEdit] = useState(false)
	const [toggleRemove, setToggleRemove] = useState(false)


	useEffect(() => {
		dispatch(getUserById(user_id))
	// eslint-disable-next-line
	}, [dispatch])

	/* const toggleClick = (e) => {
		e.preventDefault()
		toggle === false ? setToggle(!false) : setToggle(false)
	} */

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
				<button onClick={toggleEditClick}>Edit</button>
				<button onClick={verify}>Delete</button>

			</div>

			{toggleEdit === !false ? (
				<ClerkEdit editClerk={editClerk} setEditClerk={setEditClerk} setToggleEdit={setToggleEdit} />
			) : null}

			{toggleRemove === !false ? <ClerkRemove name={name} setToggleRemove={setToggleRemove} user_id={user_id} role_id={role_id}/> : null }
		</section>
	)
}

export default ClerkCard
