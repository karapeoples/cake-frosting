import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCompanyPR } from '../../../redux/actions'

const typeOptions = [
	'Choose an Option',
	'Sativa',
	'Indica',
	'Sativa Dominant Hybrid',
	'Indica Dominant Hybrid',
	'50/50 Hybrid',
]


const AddCompanyPreRoll = ({ setToggle }) => {
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
  const dispatch = useDispatch()

const handleChange = (e) => {
	setNewPR({ ...pr, [e.target.name]: e.target.value })
}
const handleSubmit = (e) => {
	e.preventDefault()
	dispatch(addCompanyPR(pr))
	setNewPR(prObject)
}

const toggle = () => {
	setToggle(false)
}

  return (
			<div>
				<form onSubmit={handleSubmit}>
					<label htmlFor='image'>Image</label>
					<input type='url' placeholder='Enter an Image URL' name='image' value={pr.image} onChange={handleChange} />
					<label htmlFor='name'>Pre-Roll Name</label>
					<input type='text' name='name' value={pr.name} onChange={handleChange} placeholder='Enter Strain Name' />
					<label htmlFor='company'>Company Name</label>
					<input type='text' name='company' value={pr.company} onChange={handleChange} placeholder='Enter Company Name' />
					<label htmlFor='type'>Type</label>
					<select type='select' name='type' value={pr.type} onChange={handleChange}>
						{typeOptions.map((option, index) => (
							<option key={index}>{option}</option>
						))}
					</select>
					<label htmlFor='thc'>THC %</label>
					<input type='number' name='thc' value={pr.thc} onChange={handleChange} />
					<label htmlFor='cbd'>CBD %</label>
					<input type='number' name='cbd' value={pr.cbd} onChange={handleChange} />
					<label htmlFor='terps'>Terps</label>
					<input type='text' name='terps' value={pr.terps} onChange={handleChange} placeholder='Enter Terps' />
					<label htmlFor='price'>Price</label>
					<input type='number' name='price' value={pr.price} onChange={handleChange} />
					<button>Submit</button>
				</form>
				<button onClick={toggle}>Cancel</button>
			</div>
		)
}

export default AddCompanyPreRoll
