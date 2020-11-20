import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ClerkEdit from '../../forms/userforms/ClerkEdit'
import { getUserById } from '../../../redux/actions'
import ClerkRemove from './ClerkRemove'
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

const ClerkCard = ({ name, email, user_id, role_id, phone}) => {
	const users = useSelector((state) => state.users)
	const dispatch = useDispatch()
	const [editClerk, setEditClerk] = useState({})
	const [toggleEdit, setToggleEdit] = useState(false)
	const [toggleRemove, setToggleRemove] = useState(false)
	const [toggleTools, setToggleTools] = useState(false)

	const toolToggle = () => {
		dispatch(getUserById(user_id))
		setToggleTools(!toggleTools)
	}

	const toggleEditClick = () => {
		setEditClerk(users)
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
						<DropdownItem onClick={verify}>Delete</DropdownItem>
					</DropdownMenu>
				</ButtonDropdown>
				<CardText style={{ color: '#28A745' }}>
					{name} <br /> {email} <br /> {phone} <br/>Clerk Id:{role_id}
				</CardText>
			</Card>

			<Modal isOpen={toggleEdit} toggle={toggleEditClick}>
				<ModalBody>
				<ClerkEdit
					editClerk={editClerk}
					setEditClerk={setEditClerk}
					user_id={user_id}
					setToggleEdit={setToggleEdit}
					/>
				</ModalBody>
			</Modal>

		<Modal isOpen={toggleRemove} toggle={verify}>
		<ModalBody>
				<ClerkRemove
					name={name}
					user_id={user_id}
					role_id={role_id}
					setToggleRemove={setToggleRemove}
				/>
</ModalBody>
</Modal>
		</Col>
	)
}

export default ClerkCard
