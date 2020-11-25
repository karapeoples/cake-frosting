import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFlower } from '../../../redux/actions'
import {Button, Modal, ModalBody, Input, Label, Spinner} from 'reactstrap'

const typeOptions = ['Choose an Option','Sativa', 'Indica', 'Sativa Dominant Hybrid', 'Indica Dominant Hybrid', '50/50 Hybrid']

const AddFlower = ({ open, setToggle }) => {
	const [success, setSuccess]= useState(false)
	const flowerObject = {
		image:'' ,
		name: '',
		type: '',
		thc: 0,
		cbd: 0,
		terps: '',
		pricePerGram: 0,
	}

	const [newFlower, setNewFlower] = useState(flowerObject)
	const dispatch = useDispatch()

	const handleChange = (e) => {
		setNewFlower({ ...newFlower, [e.target.name]: e.target.value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		setSuccess(true)
		setTimeout(() =>{
		dispatch(addFlower(newFlower))
		setNewFlower(flowerObject)
		}, 1500)
		setToggle(false)
  }

  const cancel = () => {
    setToggle(false)
  }

	return (
		<Modal isOpen={open}>
			<ModalBody>
				<h3 style={{ marginLeft: '25%' }}>Add a New Flower</h3>
				<form onSubmit={handleSubmit}>
					<Label htmlFor='image'>Image</Label>
					<Input
						bsSize='sm'
						type='url'
						placeholder='Enter an Image URL'
						name='image'
						value={newFlower.image}
						onChange={handleChange}
					/>
					<Label htmlFor='name'>Strain Name</Label>
					<Input
						bsSize='sm'
						type='text'
						name='name'
						value={newFlower.name}
						onChange={handleChange}
						placeholder='Enter Strain Name'
					/>
					<Label htmlFor='type'>Type</Label>
					<Input bsSize='sm' type='select' name='type' value={newFlower.type} onChange={handleChange}>
						{typeOptions.map((option, index) => (
							<option key={index}>{option}</option>
						))}
					</Input>
					<Label htmlFor='thc'>THC %</Label>
					<Input bsSize='sm' type='number' name='thc' value={newFlower.thc} onChange={handleChange} />
					<Label htmlFor='cbd'>CBD %</Label>
					<Input bsSize='sm' type='number' name='cbd' value={newFlower.cbd} onChange={handleChange} />
					<Label htmlFor='terps'>Terps</Label>
					<Input
						bsSize='sm'
						type='text'
						name='terps'
						value={newFlower.terps}
						onChange={handleChange}
						placeholder='Enter Terps'
					/>
					<Label htmlFor='pricePerGram'>Price Per Gram</Label>
					<Input bsSize='sm' type='number' name='pricePerGram' value={newFlower.pricePerGram} onChange={handleChange} />
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
						<Button color='danger' size='sm' onClick={cancel}>
							Cancel
						</Button>
					</div>
				</form>
			</ModalBody>
		</Modal>
	)
}

export default AddFlower
