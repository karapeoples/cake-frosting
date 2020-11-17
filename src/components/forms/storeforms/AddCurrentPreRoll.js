import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCurrentPR } from '../../../redux/actions'

const AddCurrentPreRoll = ({ setPRStockToggle, setToggle }) => {

const currentFlower = useSelector((state) => state.flower)
const inStockPR = useSelector((state) => state.inHouse)
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
			dispatch(addCurrentPR(pr))
			setToggle(false)
			setPRStockToggle(false)
		}
  return (
			<div>
				{inStockPR.in_stock === 'true' ? (
					<h1>This PreRoll is Already In Stock</h1>
				) : (
					<form onSubmit={submit}>
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

export default AddCurrentPreRoll
