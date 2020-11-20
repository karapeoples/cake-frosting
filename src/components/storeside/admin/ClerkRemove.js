import React from 'react'
import { useDispatch } from 'react-redux'
import {removeUser, removeClerk, getClerks} from '../../../redux/actions'
import { Button, Alert } from 'reactstrap'

const ClerkRemove = ({ name, setToggleRemove, user_id, role_id}) => {
  const dispatch = useDispatch()

  const yes = (e) => {
    e.preventDefault()
    dispatch(removeUser(user_id))
    dispatch(removeClerk(role_id))
    dispatch(getClerks())
		setToggleRemove(false)
  }

  const no = () => {
  setToggleRemove(false)
}
  return (
			<div>
				<Alert color='warning'>
					<b>
						Warning!!
						<br /> You are about to remove {name} from the store database forever...
					</b>
				</Alert>
				Are you sure you wish to remove {name}?
				<div>
					<Button color='success' size='sm' onClick={yes}>
						Yes
					</Button>
					<Button color='danger' size='sm' onClick={no}>
						No
					</Button>
				</div>
			</div>
		)
}

export default ClerkRemove
