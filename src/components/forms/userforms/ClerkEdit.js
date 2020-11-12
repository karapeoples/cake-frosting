import React from 'react'
import { updateUsers, getClerks } from '../../../redux/actions'
import {useDispatch} from 'react-redux'

const ClerkEdit = ({editClerk, setEditClerk, setToggleEdit, setToggleTools}) => {
  const dispatch = useDispatch()

  const handleToggleClose = () => {
    setToggleEdit(false)
  }

  const handleSubmit = (e) => {
    e.persist()
    dispatch(updateUsers(editClerk))
    dispatch(getClerks())
    setToggleEdit(false)
    setToggleTools(false)
  }

  const handleChange = (e) => {
    setEditClerk({...editClerk, [e.target.name]:e.target.value})
  }

  return (
			<div>
				<form onSubmit={handleSubmit}>
					<label htmlFor='fullName'>Full Name</label>
					<input type='text' name='fullName' value={editClerk.fullName} placeholder='Enter Name' onChange={handleChange} />
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' value={editClerk.email} placeholder='Enter Email' onChange={handleChange} />
					<label htmlFor='phone'>Phone</label>
					<input type='text' name='phone' value={editClerk.phone} placeholder='Enter Phone' onChange={handleChange} />
					<button>Submit</button>
					<button onClick={handleToggleClose}>Cancel</button>
				</form>
			</div>
		)
}

export default ClerkEdit
