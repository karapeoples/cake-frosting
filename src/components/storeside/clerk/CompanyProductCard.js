import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EditCompanyPR from '../../forms/storeforms/EditCompanyPR'
import AddCurrentCompanyPR from '../../forms/storeforms/AddCurrentCompanyPR'
import {
	removeCurrentCompanyPR,
	getCurrentCompanyPRById,
	pickCompanyPR,
} from '../../../redux/actions'
import {
	Modal,
	ModalBody,
	Alert,
	Col,
	ButtonDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	ButtonGroup,
	Button,
	Card,
	CardImg,
	CardBody,
} from 'reactstrap'

const CompanyProductCard = () => {
  const singlePR = useSelector((state) => state.companyPR)
  const currentPR = useSelector((state) => state.companyStock)
  const dispatch = useDispatch()
  const [pr, setNewPR] = useState(singlePR)
  const [stock, setStock] = useState(false)
  const [edit, setEdit] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [addPreRoll, setAddPreRoll] = useState(false)

  const editDDToggle = () => {
        setEdit(!false)
				setStock(false)
  }
  const editToggle = () => {
    setEdit(!false)
    setStock(false)
    setNewPR(singlePR)
  }

  const stockOpen = () => {
			setStock(!false)
			setEdit(false)
		}
  const stockToggle = () => {
    setStock(!false)
    setEdit(false)
    dispatch(pickCompanyPR(singlePR.id))
  }
  const addPreRollToggle = () => {
    setAddPreRoll(!false)
    if (currentPR[0] === undefined) {
      return
    }
    dispatch(getCurrentCompanyPRById(currentPR[0].currentPR_id))
  }
  const setOpenDelete = () => {
    setConfirm(!false)
  }
  const setDelete = () => {
    if (currentPR.length === 0) {
        alert('That PreRoll is Not in Stock')
    }
   else{
        setOpenDelete()
    }
  }
  const submit = () => {
    dispatch(removeCurrentCompanyPR(currentPR[0].currentPR_id))
    setConfirm(false)
    setStock(false)
  }
  const no = () => {
    setConfirm(false)
  }
  return (
			<Col lg='12'>
				<Card outline color='success' style={{ color: '#28A745', backgroundColor: 'whitesmoke' }}>
					<div style={{ margin: '0 auto' }}>
						<CardImg
							src={singlePR.image}
							alt='Company Pre-Roll'
							style={{ display: 'block', width: '75%', height: '50%', margin: '0 auto' }}
						/>
					</div>
					<h3>
						PreRoll Name:
						<br />
						{singlePR.name}
					</h3>
					<h3>
						Company:
						<br />
						{singlePR.company}
					</h3>
					<CardBody>
						<span>
							THC: {singlePR.thc}% | CBD: {singlePR.cbd}% | TERPS: {singlePR.terps}%
						</span>
						<p>Type:{singlePR.type}</p>
						<p> ${singlePR.price}</p>
						<ButtonGroup size='sm' style={{ margin: '3% auto' }}>
							<ButtonDropdown isOpen={edit} toggle={editDDToggle}>
								<Button color='success' size='sm' onClick={editToggle}>
									Edit Info
								</Button>
								<DropdownToggle onClick={editToggle} split color='success' size='sm' />
								<EditCompanyPR open={edit} setToggle={setEdit} pr={pr} setNewPR={setNewPR} />
							</ButtonDropdown>
							<ButtonDropdown isOpen={stock} toggle={stockOpen}>
								<Button color='success' size='sm' onClick={stockToggle}>
									Current Stock
								</Button>
								<DropdownToggle onClick={stockToggle} split color='success' size='sm' />
								<DropdownMenu>
									<DropdownItem onClick={addPreRollToggle}>Add</DropdownItem>
									<AddCurrentCompanyPR open={addPreRoll} setStockToggle={setStock} setToggle={setAddPreRoll} />
									<DropdownItem onClick={setDelete}>Delete</DropdownItem>
									<Modal isOpen={confirm} toggle={setOpenDelete}>
										<ModalBody>
											<Alert color='warning'>
												<b>
													You are removing {singlePR.name} from stock!
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
						</ButtonGroup>
					</CardBody>
				</Card>
			</Col>
		)
}



export default CompanyProductCard
