import React from 'react'
import { useDispatch } from 'react-redux'
import {removeUser, removeClerk, getClerks} from '../../../redux/actions'

const ClerkRemove = ({ name, setToggleRemove, user_id, role_id }) => {
  const dispatch = useDispatch()

  const yes = () => {
    dispatch(removeUser(user_id))
    dispatch(removeClerk(role_id))
    dispatch(getClerks())
  }

  const no = () => {
  setToggleRemove(false)
}
  return (
    <div>
      <h6>Are you sure you wish to remove {name}?</h6>
      <button onClick={yes}>Yes</button>
      <button onClick={no}>No</button>
    </div>
  )
}

export default ClerkRemove
