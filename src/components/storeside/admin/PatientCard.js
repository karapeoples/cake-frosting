import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PatientEdit from '../../forms/userforms/PatientEdit'
import { getUserById, getPatientCard } from '../../../redux/actions'
import PatientRemove from './PatientRemove'

const PatientCard = ({ name, email, user_id, role_id, card }) => {
	const users = useSelector((state) => state.users)
	const cards = useSelector((state) => state.cards)
	const dispatch = useDispatch()
  const [editPatient, setEditPatient] = useState({})
  const [editCard, setEditCard] = useState({})
	const [toggleEdit, setToggleEdit] = useState(false)
	const [toggleRemove, setToggleRemove] = useState(false)
  const [toggleTools, setToggleTools] = useState(false)
  const role = localStorage.getItem('role')

	const toolToggle = () => {
    dispatch(getUserById(user_id))
    dispatch(getPatientCard(role_id))
		setToggleTools(!false)
	}

	const toggleEditClick = () => {
    setEditPatient(users)
    setEditCard(cards)
		setToggleEdit(!false)
	}
	const verify = () => {
		setToggleRemove(!false)
	}

	return (
		<section>
			<div>
				<p>
					{name} <br /> {email} <br /> Patient Id:{role_id}<br /> {card}
				</p>
				<button onClick={toolToggle}>Tools</button>
				{toggleTools === !false ? (
					<div>
						<button onClick={toggleEditClick}>Edit</button>
						{role === 'admin' ?
							<button onClick={verify}>Delete</button>
							: null}
					</div>
				) : null}
			</div>

			{toggleEdit === !false ? (
				<PatientEdit
					editPatient={editPatient}
          setEditPatient={setEditPatient}
          editCard={editCard}
          setEditCard={setEditCard}
					setToggleEdit={setToggleEdit}
          user_id={user_id}
          role_id={role_id}
					setToggleTools={setToggleTools}
				/>
      ) : null}


			{toggleRemove === !false ? (
				<PatientRemove
					name={name}
					setToggleRemove={setToggleRemove}
					user_id={user_id}
					role_id={role_id}
					setToggleTools={setToggleTools}
				/>
			) : null
			}
		</section>
	)
}

export default PatientCard
