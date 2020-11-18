import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentCompanyPR } from '../../../redux/actions'

const AddCurrentCompanyPR = ({ setStockToggle, setToggle }) => {

const currentPR = useSelector((state) => state.companyPR)
const inStockPR = useSelector((state) => state.companyStock)
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
	dispatch(addCurrentCompanyPR(pr))
	setToggle(false)
	setStockToggle(false)
}

  return (
			<div>
				{inStockPR.in_stock === 'true' ? (
					<h1>This PreRoll is Already In Stock</h1>
				) : (
					<form onSubmit={submit}>
						<label>
							Is this batch infused?
							<label htmlFor='yes'>
								<input type='checkbox' onChange={handleChange} name='is_infused' value={true} />
								Yes
							</label>
							<label htmlFor='yes'>
								<input type='checkbox' onClick={handleChange} name='is_infused' value={false} />
								No
							</label>
						</label>
						<label>
							Mark strain for Sale?
							<label>
								<input type='checkbox' onChange={handleChange} name='in_stock' value={true} />
								Yes
							</label>
						</label>
						<button>Add In Stock</button>
					</form>
				)}
				<button onClick={toggle}>Cancel</button>
			</div>
		)
}

export default AddCurrentCompanyPR
