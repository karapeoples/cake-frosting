import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AdminEdit from '../../forms/userforms/AdminEdit'
import { getUserById } from '../../../redux/actions'
import AdminRemove from './AdminRemove'
import {Col, Card, ButtonDropdown, CardText, DropdownItem, DropdownMenu, DropdownToggle, Modal, ModalBody} from 'reactstrap'

const AdminCard = ({ name, email, user_id, role_id, phone }) => {
	const users = useSelector((state) => state.users)
	const dispatch = useDispatch()
	const [editAdmin, setEditAdmin] = useState({})
	const [toggleEdit, setToggleEdit] = useState(false)
	const [toggleRemove, setToggleRemove] = useState(false)
	const [toggleTools, setToggleTools] = useState(false)



	const toolToggle = () => {
		dispatch(getUserById(user_id))
		setToggleTools(!toggleTools)
	}

	const toggleEditClick = (e) => {
		e.preventDefault()
		setEditAdmin(users)
		setToggleEdit(!false)
	}
	const verify = () => {
		setToggleRemove(!false)
	}

	return (
		<Col sm='12' lg='4'>
			<Card body outline color='success' style={{ margin: '5%', backgroundColor: 'whitesmoke' }}>
				<ButtonDropdown direction='right' size='sm' style={{ width: '5%', marginLeft:'90%'}} isOpen={toggleTools} toggle={toolToggle}>
					<DropdownToggle color='success' style={{ display: 'flex', justifyContent: 'flex-end' }}>
						<i className='fas fa-ellipsis-h' style={{ color: 'whitesmoke' }}></i>
					</DropdownToggle>
					<DropdownMenu>
						<DropdownItem onClick={toggleEditClick}>Edit</DropdownItem>
						<DropdownItem onClick={verify}>Delete</DropdownItem>
					</DropdownMenu>
				</ButtonDropdown>
				<CardText style={{ color: '#28A745' }}>
					{name} <br /> {email} <br /> {phone} <br /> Admin Id:{role_id}
				</CardText>
			</Card>

			<Modal isOpen={toggleEdit} toggle={toggleEditClick}>
				<ModalBody>
					<AdminEdit editAdmin={editAdmin} setEditAdmin={setEditAdmin} user_id={user_id} setToggleEdit={setToggleEdit} />
				</ModalBody>
			</Modal>

			<Modal isOpen={toggleRemove} toggle={verify}>
				<ModalBody>
					<AdminRemove name={name} user_id={user_id} role_id={role_id} setToggleRemove={setToggleRemove} />
				</ModalBody>
			</Modal>
		</Col>
	)
}

export default AdminCard
