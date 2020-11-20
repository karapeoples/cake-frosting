import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PatientEdit from '../../forms/userforms/PatientEdit'
import { getUserById, getPatientCard } from '../../../redux/actions'
import PatientRemove from './PatientRemove'
import {
	Col,
	Card,
	ButtonDropdown,
	CardText,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Modal,
	ModalBody,
} from 'reactstrap'

const PatientCard = ({ name, phone, email, user_id, role_id, card }) => {
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
		setToggleTools(!toggleTools)
	}

	const toggleEditClick = (e) => {
		e.preventDefault()
    setEditPatient(users)
    setEditCard(cards)
		setToggleEdit(!false)
	}
	const verify = () => {
		setToggleRemove(!false)
	}

	return (
		<Col sm='12' lg='4'>
			<Card body outline color='success' style={{ margin: '5%', backgroundColor: 'whitesmoke' }}>
				<ButtonDropdown
					direction='right'
					size='sm'
					style={{ width: '5%', marginLeft: '90%' }}
					isOpen={toggleTools}
					toggle={toolToggle}>
					<DropdownToggle color='success' style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<i className='fas fa-ellipsis-h' style={{ color: 'whitesmoke' }}></i>
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem onClick={toggleEditClick}>Edit</DropdownItem>
						{role === 'admin'?
						<DropdownItem onClick={verify}>Delete</DropdownItem>: null}
					</DropdownMenu>
				</ButtonDropdown>
				<CardText style={{ color: '#28A745' }}>
					{name} <br /> {email} <br /> {phone} <br /> Patient Id:{role_id} <br /> OMMA #:{card}
				</CardText>
			</Card>

			<Modal isOpen={toggleEdit} toggle={toggleEditClick}>
				<ModalBody>
					<PatientEdit
						editPatient={editPatient}
						setEditPatient={setEditPatient}
						editCard={editCard}
						setEditCard={setEditCard}
						setToggleEdit={setToggleEdit}
						user_id={user_id}
						role_id={role_id}
					/>
				</ModalBody>
			</Modal>

			<Modal isOpen={toggleRemove} toggle={verify}>
				<ModalBody>
					<PatientRemove
						name={name}
						setToggleRemove={setToggleRemove}
						user_id={user_id}
						role_id={role_id}
					/>
				</ModalBody>
			</Modal>
		</Col>
	)
}

export default PatientCard
