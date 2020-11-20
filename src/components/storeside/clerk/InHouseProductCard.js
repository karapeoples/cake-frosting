import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditFlower from '../../forms/storeforms/EditFlower'
import AddCurrentFlower from '../../forms/storeforms/AddCurrentFlower'
import AddCurrentPreRoll from '../../forms/storeforms/AddCurrentPreRoll'
import {removeCurrentFlower, getCurrentById,getCurrentPRById, removeCurrentPR, pickFlower, pickPreRoll} from '../../../redux/actions'

const InHouseProductCard = () => {
  const singleFlower = useSelector((state) => state.flower)
  const currentFlower = useSelector((state) => state.stockFlower)
  const currentPR = useSelector((state) => state.inHouse)
  const dispatch = useDispatch()
  const [tools, setTools] = useState(false)
  const [stock, setStock] = useState(false)
  const [preRoll, setPreRoll] = useState(false)
  const [edit, setEdit]= useState(false)
  const [confirm, setConfirm]= useState(false)
  const [confirmPR, setConfirmPR]= useState(false)
  const [addPreRoll, setAddPreRoll]= useState(false)
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
   dispatch(pickFlower(singleFlower.id))
 }
  const preRollToggle =()=>{
   setPreRoll(!false)
   setStock(false)
   setEdit(false)
   dispatch(pickPreRoll(singleFlower.id))
  }

  const addFlowerToggle = () => {
    setAddFlower(!false)
    if (currentFlower[0] === undefined) {
      return
    }
    dispatch(getCurrentById(currentFlower[0].currentFlower_id))
  }
  const addPreRollToggle = () => {
    setAddPreRoll(!false)
    if (currentPR[0] === undefined) {
      return
    }
    dispatch(getCurrentPRById(currentPR[0].preRoll_id))
  }

  const setDelete = () => {
    setConfirm(!false)
  }
  const setDeletePR = () => {
    setConfirmPR(!false)
  }

  const submit = () => {
    dispatch(removeCurrentFlower(currentFlower[0].currentFlower_id))
    setConfirm(false)
    setStock(false)
  }
  const submitPR = () => {
    dispatch(removeCurrentPR(currentPR[0].preRoll_id))
    setConfirmPR(false)
    setPreRoll(false)
  }

  const no = () => {
    setConfirm(false)
  }
  const noPR = () => {
    setConfirmPR(false)
  }

	return (
		<div>
			<img src={singleFlower.image} alt='Strain Bud' style={{ width: '50%', height: '250px' }} />
			<h3>{singleFlower.name}</h3>
			<span>
				THC: {singleFlower.thc}% | CBD: {singleFlower.cbd}% | TERPS: {singleFlower.terps}%
			</span>
			<p>Type:{singleFlower.type}</p>
			<p> ${singleFlower.pricePerGram} per Gram</p>
			<button onClick={toggleTools}>Tools</button>
			<button onClick={closeTools}>Close Tools</button>
			{tools === false ? null : (
				<section>
					<button onClick={editToggle}>Edit Info</button>
					{edit === false ? null : <EditFlower setToggle={setEdit} />}
					<button onClick={stockToggle}>Current Stock</button>
					{stock === false ? null : (
						<div>
							<button onClick={addFlowerToggle}>Add</button>
							{addFlower === false ? null : <AddCurrentFlower setStockToggle={setStock} setToggle={setAddFlower} />}
							<button onClick={setDelete}>Delete</button>
							{confirm === false ? null : (
								<div>
									<button onClick={submit}>Yes</button>
									<button onClick={no}>No</button>
								</div>
							)}
						</div>
					)}
					<button onClick={preRollToggle}>InHouse PreRoll</button>
					{preRoll === false ? null : (
							<div>
								<button onClick={addPreRollToggle}>Add</button>
								{addPreRoll === false ? null : <AddCurrentPreRoll setPRStockToggle={setPreRoll} setToggle={setAddPreRoll} />}
								<button onClick={setDeletePR}>Delete</button>
								{confirmPR === false ? null : (
									<div>
										<button onClick={submitPR}>Yes</button>
										<button onClick={noPR}>No</button>
									</div>
								)}
							</div>
					)}
				</section>
			)}
		</div>
	)
}

export default InHouseProductCard
