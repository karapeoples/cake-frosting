import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentCompanyPR } from '../../../redux/actions'
import { Modal, ModalBody, Input, Label, Button, Alert, Spinner } from 'reactstrap'

const AddCurrentCompanyPR = ({open, setStockToggle, setToggle }) => {

const currentPR = useSelector((state) => state.companyPR)
	const inStockPR = useSelector((state) => state.companyStock)
	const [success, setSuccess]= useState(false)
const [pr, setPR] = useState({
	name: currentPR.name,
  in_stock: false,
  is_infused: false,
})
const dispatch = useDispatch()

const handleChange = (e) => {
	setPR({ ...pr, [e.target.name]: e.target.value })
}

const toggle = () => {
	setToggle(false)
	setStockToggle(false)
}

const submit = (e) => {
	e.preventDefault()
	setSuccess(true)
	setTimeout(() =>{
		dispatch(addCurrentCompanyPR(pr))
	}, 1500)
	setToggle(false)
	setStockToggle(false)
}

  return (
			<Modal isOpen={open} toggle={stockToggle}>
			<ModalBody>
					{inStockPR.in_stock === 'true' ? (
						<div>
							<Button onClick={toggle} color='danger' size='sm' style={{ marginLeft: '90%' }}>
								X
							</Button>
							<Alert color='success' style={{ width: '75%', margin: '0 auto' }}>
								<b>
									The PreRoll <em style={{ fontSize: '125%' }}>{inStockPR.name}</em> is Already In Stock!!
								</b>
							</Alert>
						</div>
					) : (
						<form onSubmit={submit}>
							<h3> Is this batch infused? </h3>
							<span style={{ display: 'flex' }}>
								<Label htmlFor='is_infused' style={{ margin: '0 auto', display: 'flex', alignItems: 'center' }}>
									Yes
									<Input bsSize='sm' type='radio' onChange={handleChange} name='is_infused' value={true} />
								</Label>

								<Label htmlFor='is_infused' style={{ margin: '0 auto', display: 'flex', alignItems: 'center' }}>
									No
									<Input bsSize='sm' type='radio' onClick={handleChange} name='is_infused' value={false} />
								</Label>
							</span>
							<h3> Mark strain for Sale?</h3>
							<Label htmlFor='in_stock' style={{ margin: '0 auto', display: 'flex', alignItems: 'center' }}>
								Yes
								<Input bsSize='sm' type='checkbox' onChange={handleChange} name='in_stock' value={true} />
							</Label>

							<div style={{ margin: '3% auto' }}>
								{success === false ? (
									<Button color='success' size='sm'>
										Submit
									</Button>
								) : (
									<Button color='success' size='sm'>
										Submit <Spinner size='sm' style={{ color: 'whitesmoke' }} />
									</Button>
								)}
								<Button color='danger' size='sm' onClick={toggle}>
									Cancel
								</Button>
							</div>
						</form>
					)}
				</ModalBody>
			</Modal>
		)
}

export default AddCurrentCompanyPR
