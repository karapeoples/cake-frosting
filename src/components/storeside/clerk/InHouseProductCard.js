import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditFlower from '../../forms/storeforms/EditFlower'
import AddCurrentFlower from '../../forms/storeforms/AddCurrentFlower'
import AddCurrentPreRoll from '../../forms/storeforms/AddCurrentPreRoll'
import { removeCurrentFlower, getCurrentById, getCurrentPRById, removeCurrentPR, pickFlower, pickPreRoll } from '../../../redux/actions'
import {  Modal, ModalBody, Alert, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonGroup, Button, Card, CardImg, CardBody } from 'reactstrap'

const InHouseProductCard = () => {
  const singleFlower = useSelector((state) => state.flower)
  const currentFlower = useSelector((state) => state.stockFlower)
  const currentPR = useSelector((state) => state.inHouse)
  const dispatch = useDispatch()
  const [newFlower, setNewFlower] = useState(singleFlower)
  const [stock, setStock] = useState(false)
  const [preRoll, setPreRoll] = useState(false)
  const [edit, setEdit]= useState(false)
  const [confirm, setConfirm]= useState(false)
  const [confirmPR, setConfirmPR]= useState(false)
  const [addPreRoll, setAddPreRoll]= useState(false)
  const [addFlower, setAddFlower]= useState(false)


  const editDDToggle = () => {
    setEdit(!false)
    setPreRoll(false)
    setStock(false)
  }
  const editToggle = () => {
    setEdit(!false)
    setPreRoll(false)
    setStock(false)
    setNewFlower(singleFlower)
  }
 const stockToggle =()=>{
   setStock(!false)
   setPreRoll(false)
   setEdit(false)
   dispatch(pickFlower(singleFlower.id))
 }
 const stockOpen = ()=>{
   setStock(!false)
   setPreRoll(false)
   setEdit(false)
 }

  const openPreRollToggle = () => {
  setPreRoll(!false)
  setStock(false)
  setEdit(false)
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
    if (currentPR[0] === undefined) {
      return
    }
    dispatch(getCurrentPRById(currentPR[0].preRoll_id))
    setAddPreRoll(!false)
  }

  const setOpenDelete = () => {
    setConfirm(!false)
  }
  const setDelete = () => {
    if (currentFlower.length === 0)
      alert('That Flower is not in Stock')
    else {
      setOpenDelete()
    }

  }
  const setOpenDeletePR = ()=>{
    setConfirmPR(!false)
  }
  const setDeletePR = () => {
    if (currentPR.length === 0) {
      alert('That PreRoll is not in Stock')
    }
    else {
      setOpenDeletePR()
    }
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
		<Col lg='12'>
			<Card outline color='success' style={{ color: '#28A745', backgroundColor: 'whitesmoke' }}>
				<div style={{ margin: '2%' }}>
					<CardImg
						src={singleFlower.image}
						alt='Strain Bud'
						style={{ display: 'block', width: '318px', height: '180px', margin: '0% auto' }}
					/>
				</div>
				<h3>{singleFlower.name}</h3>
				<CardBody>
					<span>
						THC: {singleFlower.thc}% | CBD: {singleFlower.cbd}% | TERPS: {singleFlower.terps}%
					</span>
					<p>
						Type:{singleFlower.type}
						<br />${singleFlower.pricePerGram} per Gram
					</p>
					<ButtonGroup size='sm' style={{ margin: '3% auto' }}>
						<ButtonDropdown isOpen={edit} toggle={editDDToggle}>
							<Button color='success' size='sm' onClick={editToggle}>
								Edit Info
							</Button>
							<DropdownToggle onClick={editToggle} split color='success' size='sm' />
							<EditFlower open={edit} setToggle={setEdit} newFlower={newFlower} setNewFlower={setNewFlower} />
						</ButtonDropdown>

						<ButtonDropdown isOpen={stock} toggle={stockOpen}>
							<Button onClick={stockToggle} color='success' size='sm'>
								Current Stock
							</Button>
							<DropdownToggle onClick={stockToggle} split color='success' size='sm' />
							<DropdownMenu>
								<DropdownItem onClick={addFlowerToggle}>Add</DropdownItem>
								<AddCurrentFlower open={addFlower} setStockToggle={setStock} setToggle={setAddFlower} />
								<DropdownItem onClick={setDelete}>Delete</DropdownItem>
								<Modal isOpen={confirm} toggle={setOpenDelete}>
									<ModalBody>
										<Alert color='warning'>
											<b>
												You are removing {singleFlower.name} from stock!
												<br />
												Are you sure?
											</b>
										</Alert>
										<Button color='success' size='sm' onClick={submit}>
											Yes
										</Button>
										<Button color='danger' size='sm' onClick={no}>
											No
										</Button>
									</ModalBody>
								</Modal>
							</DropdownMenu>
						</ButtonDropdown>

						<ButtonDropdown isOpen={preRoll} toggle={openPreRollToggle}>
							<Button color='success' size='sm' onClick={preRollToggle}>
								InHouse PreRoll
							</Button>
							<DropdownToggle split color='success' onClick={preRollToggle} />
							<DropdownMenu>
								<DropdownItem onClick={addPreRollToggle}>Add</DropdownItem>
								<AddCurrentPreRoll open={addPreRoll} setPRStockToggle={setPreRoll} setToggle={setAddPreRoll} />
								<DropdownItem onClick={setDeletePR}>Delete</DropdownItem>
								<Modal isOpen={confirmPR} toggle={setOpenDeletePR}>
									<ModalBody>
										<Alert color='warning'>
											<b>
												You are removing {singleFlower.name} from InHouse PreRolls!
												<br />
												Are you sure?
											</b>
										</Alert>
										<Button color='success' size='sm' onClick={submitPR}>
											Yes
										</Button>
										<Button color='danger' size='sm' onClick={noPR}>
											No
										</Button>
									</ModalBody>
								</Modal>
							</DropdownMenu>
						</ButtonDropdown>
					</ButtonGroup>
				</CardBody>
			</Card>
		</Col>
	)
}

export default InHouseProductCard
