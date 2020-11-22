import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { preRollByName } from '../../../redux/actions'
import CompanyProductCard from './CompanyProductCard'
import { Button, Input } from 'reactstrap'

const CompanyPRCard = ({setToggle}) => {
	const preRollName = useSelector((state) => state.companyPRS)
	const dispatch = useDispatch()
	const [toggleProduct, setToggleProduct] = useState(false)
	const [search, setSearch] = useState('')

	const cancel = () => {
		setToggle(false)
		setToggleProduct(false)
	}

	const handleChange = async (e) => {
		await setSearch(e.target.value)
	}
	const select = (e) => {
		e.preventDefault()
		if (search !== '') {
			dispatch(preRollByName(search))
			setToggleProduct(!false)
		} else if (search === '') {
			alert('Choose A PreRoll')
		}
	}

	return (
		<div>
			<section>
				<form onSubmit={select}>
					<Input bsSize='sm' onClick={handleChange} onChange={handleChange} type='select' name='search' value={search}>
						{preRollName.map((pr, i) => {
							return <option key={i}>{pr.name}</option>
						})}
					</Input>
					<div style={{ margin: '3% auto' }}>
						<Button color='success' size='sm'>
							Select
						</Button>
						<Button color='danger' size='sm' onClick={cancel}>
							Cancel
						</Button>
					</div>
				</form>
			</section>
			{toggleProduct === !false ?
				<section>
					<CompanyProductCard />
				</section>
			 : null}
		</div>
	)
}

export default CompanyPRCard
