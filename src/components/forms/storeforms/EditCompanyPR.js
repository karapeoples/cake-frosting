import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCompanyPR, preRollByName } from '../../../redux/actions'

const typeOptions = [
	'Choose an Option',
	'Sativa',
	'Indica',
	'Sativa Dominant Hybrid',
	'Indica Dominant Hybrid',
	'50/50 Hybrid',
]

const EditCompanyPR = ({ setToggle }) => {
  const singlePR = useSelector((state) => state.companyPR)
		const [pr, setNewPR] = useState(singlePR)
		const dispatch = useDispatch()

		const handleChange = (e) => {
			setNewPR({ ...pr, [e.target.name]: e.target.value })
		}
		const handleSubmit = (e) => {
			e.persist()
			e.preventDefault()
			dispatch(updateCompanyPR(pr))
			dispatch(preRollByName(pr.name))
			setToggle(false)
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

export default EditCompanyPR
