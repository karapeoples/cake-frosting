import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addCurrentFlower} from '../../../redux/actions'

const AddCurrentFlower = ({ setToggle }) => {
  const currentFlower = useSelector(state => state.flower)
  const [infused, setInfused] = useState({
    is_infused: false,
    name: currentFlower.name,
  })
 const dispatch = useDispatch()
  const yes = () => {
    setInfused(
      {
        is_infused: !false,
        name: currentFlower.name
      }
    )
 }

const no = () => {
    setInfused({
      is_infused: false,
      name: currentFlower.name
    }
  )
}

  const toggle = () => {
    setToggle(false)
  }

  const submit = (e) => {
    e.preventDefault()
    dispatch(addCurrentFlower(infused))
    setToggle(false)
  }

  return (
    <div>
        <label>Is this batch infused?
          <button onClick={yes}>Yes</button>
          <button onClick={no}>No</button>
      </label>
      <button onClick={submit}>Add In Stock</button>
      <button onClick={toggle}>Cancel</button>
    </div>
  )
}

export default AddCurrentFlower
