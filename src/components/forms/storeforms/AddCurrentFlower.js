import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addCurrentFlower} from '../../../redux/actions'

const AddCurrentFlower = ({setStockToggle, setToggle }) => {
  const currentFlower = useSelector(state => state.flower)
  const inStockFlower = useSelector((state) => state.stockFlower)
  const [infused, setInfused] = useState({
    is_infused: false,
    name: currentFlower.name,
    in_stock: false,
  })
  const dispatch = useDispatch()


  const handleChange = (e) => {
   setInfused({...infused, [e.target.name]: e.target.value})
  }



  const toggle = () => {
    setToggle(false)
    setStockToggle(false)
  }

  const submit = (e) => {
    e.preventDefault()
    dispatch(addCurrentFlower(infused))
    setToggle(false)
    setStockToggle(false)
  }

  return (
    <div>
      {inStockFlower.in_stock === "true" ? <h1>This Flower is Already In Stock</h1> :
        <form onSubmit={submit}>
          <label>
            Is this batch infused?
					<label htmlFor='yes'>
              <input type='checkbox' onChange={handleChange} name='is_infused' value={true} />
						Yes
					</label>
            <label htmlFor='yes'>
              <input type='checkbox' onClick={handleChange} name='is_infused' value={false} />
						No
					</label>
          </label>
          <label>
            Mark strain for Sale?
					<label>
              <input type='checkbox' onChange={handleChange} name='in_stock' value={true} />
						Yes
					</label>
          </label>
          <button>Add In Stock</button>
        </form>
      }
				<button onClick={toggle}>Cancel</button>
			</div>
		)
}

export default AddCurrentFlower
