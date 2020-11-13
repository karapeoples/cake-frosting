import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateFlower, flowerByName } from '../../../redux/actions'

const typeOptions = [
	'Choose an Option',
	'Sativa',
	'Indica',
	'Sativa Dominant Hybrid',
	'Indica Dominant Hybrid',
	'50/50 Hybrid',
]

const EditFlower = ({ setToggle }) => {
  const singleFlower = useSelector((state) => state.flower)
  const [newFlower, setNewFlower] = useState(singleFlower)
	const dispatch = useDispatch()


		const handleChange = (e) => {
			setNewFlower({ ...newFlower, [e.target.name]: e.target.value })
		}
		const handleSubmit = (e) => {
      e.persist()
      e.preventDefault()
      dispatch(updateFlower(newFlower))
      dispatch(flowerByName(newFlower.name))
      setToggle(false)
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
					<label htmlFor='pricePerOz'>Price</label>
					<input type='number' name='pricePerOz' value={newFlower.pricePerOz} onChange={handleChange} />
					<button>Submit</button>
				</form>
				<button onClick={toggle}>Cancel</button>
			</div>
		)
}

export default EditFlower
