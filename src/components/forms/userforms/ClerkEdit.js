import React, {useState} from 'react'
import { updateUsers, getClerks } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import { Button, Label, Input, Spinner} from 'reactstrap'

const ClerkEdit = ({ editClerk, setEditClerk, setToggleEdit }) => {
	const [success, setSuccess]= useState(false)
  const dispatch = useDispatch()

  const handleToggleClose = (e) => {
    e.preventDefault()
    setToggleEdit(false)
  }

  const handleSubmit = (e) => {
		e.preventDefault()
		setSuccess(true)
		setTimeout(() => {
			dispatch(updateUsers(editClerk))
    dispatch(getClerks())}, 1500)

    setToggleEdit(false)
  }

  const handleChange = (e) => {
    setEditClerk({...editClerk, [e.target.name]:e.target.value})
  }

  return (
			<div>
				<form onSubmit={handleSubmit}>
					<Label htmlFor='fullName'>Full Name</Label>
					<Input
						bsSize='sm'
						type='text'
						name='fullName'
						value={editClerk.fullName}
						placeholder='Enter Name'
						onChange={handleChange}
					/>
					<Label htmlFor='email'>Email</Label>
					<Input
						bsSize='sm'
						type='email'
						name='email'
						value={editClerk.email}
						placeholder='Enter Email'
						onChange={handleChange}
					/>
					<Label htmlFor='phone'>Phone</Label>
					<Input
						bsSize='sm'
						type='tel'
						name='phone'
						value={editClerk.phone}
						placeholder='Enter Phone'
						onChange={handleChange}
					/>
					<div style={{ margin: '3% auto' }}>
						{success === false ? (
							<Button color='success' size='sm'>
								Submit
							</Button>
						) : (
							<Button color='success' size='sm'>
								Submit <Spinner size='sm' style={{ color: 'whitesmoke' }} />
							</Button>
						)}
						<Button color='danger' size='sm' onClick={handleToggleClose}>
							Cancel
						</Button>
					</div>
				</form>
			</div>
		)
}

export default ClerkEdit
