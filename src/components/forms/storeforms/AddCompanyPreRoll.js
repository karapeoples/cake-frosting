import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCompanyPR } from '../../../redux/actions'
import { Button, Modal, ModalBody, Input, Label, Spinner } from 'reactstrap'

const typeOptions = [
	'Choose an Option',
	'Sativa',
	'Indica',
	'Sativa Dominant Hybrid',
	'Indica Dominant Hybrid',
	'50/50 Hybrid',
]


const AddCompanyPreRoll = ({open, setToggle }) => {
  const prObject = {
			image: '',
      name: '',
      company:'',
			type: '',
			thc: 0,
			cbd: 0,
			terps: '',
			price: 0,
  }
	const [pr, setNewPR] = useState(prObject)
	const [success, setSuccess]= useState(false)
  const dispatch = useDispatch()

const handleChange = (e) => {
	setNewPR({ ...pr, [e.target.name]: e.target.value })
}
const handleSubmit = (e) => {
	e.preventDefault()
	setSuccess(true)
	setTimeout(() =>{
		dispatch(addCompanyPR(pr))
	}, 1500)
	setNewPR(prObject)
}

const toggle = () => {
	setToggle(false)
}

  return (
			<Modal isOpen={open} toggle={setToggle}>
				<ModalBody>
					<h3 style={{ marginLeft: '25%' }}>Add a New PreRoll</h3>
					<form onSubmit={handleSubmit}>
						<Label htmlFor='image'>Image</Label>
						<Input
							bsSize='sm'
							type='url'
							placeholder='Enter an Image URL'
							name='image'
							value={pr.image}
							onChange={handleChange}
						/>
						<Label htmlFor='name'>Pre-Roll Name</Label>
						<Input
							bsSize='sm'
							type='text'
							name='name'
							value={pr.name}
							onChange={handleChange}
							placeholder='Enter Strain Name'
						/>
						<Label htmlFor='company'>Company Name</Label>
						<Input
							bsSize='sm'
							type='text'
							name='company'
							value={pr.company}
							onChange={handleChange}
							placeholder='Enter Company Name'
						/>
						<Label htmlFor='type'>Type</Label>
						<Input bsSize='sm' type='select' name='type' value={pr.type} onChange={handleChange}>
							{typeOptions.map((option, index) => (
								<option key={index}>{option}</option>
							))}
						</Input>
						<Label htmlFor='thc'>THC %</Label>
						<Input bsSize='sm' type='number' name='thc' value={pr.thc} onChange={handleChange} />
						<Label htmlFor='cbd'>CBD %</Label>
						<Input bsSize='sm' type='number' name='cbd' value={pr.cbd} onChange={handleChange} />
						<Label htmlFor='terps'>Terps</Label>
						<Input bsSize='sm' type='text' name='terps' value={pr.terps} onChange={handleChange} placeholder='Enter Terps' />
						<Label htmlFor='price'>Price</Label>
						<Input bsSize='sm' type='number' name='price' value={pr.price} onChange={handleChange} />
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
				</ModalBody>
			</Modal>
		)
}

export default AddCompanyPreRoll
