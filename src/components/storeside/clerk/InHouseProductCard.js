import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditFlower from '../../forms/storeforms/EditFlower'
import AddCurrentFlower from '../../forms/storeforms/AddCurrentFlower'
import {removeCurrentFlower, pickFlower} from '../../../redux/actions'

const InHouseProductCard = () => {
  const singleFlower = useSelector((state) => state.flower)
  const currentFlower = useSelector((state) => state.stockFlower)
  const dispatch = useDispatch()
  const [tools, setTools] = useState(false)
  const [stock, setStock] = useState(false)
  const [preRoll, setPreRoll] = useState(false)
  const [edit, setEdit]= useState(false)
  const [confirm, setConfirm]= useState(false)
  const [addFlower, setAddFlower]= useState(false)

	const toggleTools = () => {
    setTools(!false)

	}
	const closeTools = () => {
		setTools(false)
  }
	const editToggle = () => {
    setEdit(!false)
    setPreRoll(false)
    setStock(false)
  }
 const stockToggle =()=>{
   setStock(!false)
   setPreRoll(false)
   setEdit(false)
 }
  const preRollToggle =()=>{
   setPreRoll(!false)
   setStock(false)
   setEdit(false)
  }

  const addFlowerToggle = () => {
    setAddFlower(!false)
  }

  const setDelete = () => {
    dispatch(pickFlower(singleFlower.id))
    setConfirm(!false)
  }

  const submit = () => {
    dispatch(removeCurrentFlower(currentFlower[0].currentFlower_id))
    setConfirm(false)
  }

  const no = () => {
    setConfirm(false)
  }

	return (
		<div>
			<img src={singleFlower.image} alt='Strain Bud' style={{width: '50%', height: '250px'}}/>
			<h3>{singleFlower.name}</h3>
			<span>
				THC: {singleFlower.thc}% | CBD: {singleFlower.cbd}% | TERPS: {singleFlower.terps}%
			</span>
      <p>Type:{singleFlower.type}</p>
			<p> ${singleFlower.pricePerOz} per OZ</p>
			<button onClick={toggleTools}>Tools</button>
			<button onClick={closeTools}>Close Tools</button>
			{tools === false ? null : (
				<section>
          <button onClick={editToggle}>Edit Info</button>
          {edit === false ? null : <EditFlower setToggle={setEdit}/>}
					<button onClick={stockToggle}>Current Stock</button>
					{stock === false ? null : (
						<div>
              <button onClick={addFlowerToggle}>Add</button>
          {addFlower === false ? null : <AddCurrentFlower setToggle={setAddFlower}/>}
              <button onClick={setDelete}>Delete</button>
            {confirm === false ? null : (<div><button onClick={submit}>Yes</button><button onClick={no}>No</button></div>)}
						</div>
					)}
					<button onClick={preRollToggle}>InHouse PreRoll</button>
					{preRoll === false ? null : (
						<div>
							<button>Add</button>
							<button>Delete</button>
						</div>
					)}
				</section>
			)}
		</div>
	)
}

export default InHouseProductCard
