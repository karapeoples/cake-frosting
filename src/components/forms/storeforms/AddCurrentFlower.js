import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentFlower} from '../../../redux/actions'
import {Modal, ModalBody, Input, Label, Button, Alert, Spinner} from 'reactstrap'

const AddCurrentFlower = ({open, setStockToggle, setToggle }) => {
  const currentFlower = useSelector(state => state.flower)
	const stockedFlower = useSelector((state) => state.stockFlower)
	const [success, setSuccess]= useState(false)
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
		setSuccess(true)
		setTimeout(() =>{
			dispatch(addCurrentFlower(infused))
		}, 1500)
    setToggle(false)
    setStockToggle(false)
  }

  return (
			<Modal isOpen={open}>
				<ModalBody>
					{stockedFlower.in_stock === true ? (
						<div>
							<Button onClick={toggle} color='danger' size='sm' style={{ marginLeft: '90%' }}>
								X
							</Button>
							<Alert color='success' style={{ width: '75%', margin: '0 auto' }}>
								<b>
									The Flower <em style={{ fontSize: '125%' }}>{stockedFlower.name}</em> is Already In Stock!!
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

export default AddCurrentFlower
