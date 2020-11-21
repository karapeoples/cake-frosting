import React from 'react'
import { updateUsers, getClerks } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import { Button, Label, Input } from 'reactstrap'

const ClerkEdit = ({editClerk, setEditClerk, setToggleEdit}) => {
  const dispatch = useDispatch()

  const handleToggleClose = (e) => {
    e.preventDefault()
    setToggleEdit(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUsers(editClerk))
    dispatch(getClerks())
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
						<Button color='success' size='sm'>
							Submit
						</Button>
						<Button color='danger' size='sm' onClick={handleToggleClose}>
							Cancel
						</Button>
					</div>
				</form>
			</div>
		)
}

export default ClerkEdit