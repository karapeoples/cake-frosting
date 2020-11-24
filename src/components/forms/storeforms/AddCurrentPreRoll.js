import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentPR } from '../../../redux/actions'
import {Modal, ModalBody, Button, Label, Input, Alert, Spinner} from 'reactstrap'

const AddCurrentPreRoll = ({ open, setPRStockToggle, setToggle }) => {

const currentFlower = useSelector((state) => state.flower)
	const inStockPR = useSelector((state) => state.inHouse)
	const [success, setSuccess]= useState(false)
const [pr, setPR] = useState({
	name: currentFlower.name,
	in_stock: false,
})
const dispatch = useDispatch()

const handleChange = (e) => {
	setPR({ ...pr, [e.target.name]: e.target.value })
}

   const toggle = () => {
				setToggle(false)
				setPRStockToggle(false)
			}

  const submit = (e) => {
		e.preventDefault()
		setSuccess(true)
		setTimeout(() =>{
			dispatch(addCurrentPR(pr))
		}, 1500)
			setToggle(false)
			setPRStockToggle(false)
		}
  return (
			<Modal isOpen={open}>
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

export default AddCurrentPreRoll
