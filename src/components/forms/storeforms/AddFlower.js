import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFlower } from '../../../redux/actions'

const typeOptions = ['Choose an Option','Sativa', 'Indica', 'Sativa Dominant Hybrid', 'Indica Dominant Hybrid', '50/50 Hybrid']

const AddFlower = ({setToggle}) => {
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
		dispatch(addFlower(newFlower))
		setNewFlower(flowerObject)
  }

  const toggle = () => {
    setToggle(false)
  }

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='image'>Image</label>
				<input type='url' placeholder='Enter an Image URL' name='image' value={newFlower.image} onChange={handleChange} />
				<label htmlFor='name'>Strain Name</label>
				<input type='text' name='name' value={newFlower.name} onChange={handleChange} placeholder='Enter Strain Name' />
				<label htmlFor='type'>Type</label>
				<select type='select' name='type' value={newFlower.type} onChange={handleChange}>
					{typeOptions.map((option, index) => (
						<option key={index}>{option}</option>
					))}
				</select>
				<label htmlFor='thc'>THC %</label>
				<input type='number' name='thc' value={newFlower.thc} onChange={handleChange} />
				<label htmlFor='cbd'>CBD %</label>
				<input type='number' name='cbd' value={newFlower.cbd} onChange={handleChange} />
				<label htmlFor='terps'>Terps</label>
				<input type='text' name='terps' value={newFlower.terps} onChange={handleChange} placeholder='Enter Terps' />
				<label htmlFor='pricePerGram'>Price</label>
				<input type='number' name='pricePerGram' value={newFlower.pricePerGram} onChange={handleChange} />
				<button>Submit</button>
			</form>
			<button onClick={toggle}>Cancel</button>
		</div>
	)
}

export default AddFlower
