import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { preRollByName } from '../../../redux/actions'
import CompanyProductCard from './CompanyProductCard'
import { Button, Input, Modal, ModalBody, Alert } from 'reactstrap'

const CompanyPRCard = ({setToggle}) => {
	const preRollName = useSelector((state) => state.companyPRS)
	const dispatch = useDispatch()
	const [toggleProduct, setToggleProduct] = useState(false)
	const [search, setSearch] = useState('')
	const [alertOpen, setAlertOpen] = useState(false)

	const cancel = () => {
		setToggle(false)
		setToggleProduct(false)
	}

	const handleChange = async (e) => {
		await setSearch(e.target.value)
	}
	const alertToggle = () => {
		setAlertOpen(true)
	}
	const select = (e) => {
		e.preventDefault()
		if (search !== '') {
			dispatch(preRollByName(search))
			setToggleProduct(!false)
		} else if (search === '') {
			alertToggle()
		}
	}

	return (
		<div>
			<section>
				<Modal isOpen={alertOpen} toggle={alertToggle}>
					<ModalBody>
						<div style={{ margin: '0 auto' }}>
							<Button onClick={() => setAlertOpen(false)} color='danger' size='sm' style={{ marginLeft: '90%' }}>
								X
							</Button>
							<Alert color='warning'>
								<h1>Choose a PreRoll</h1>
							</Alert>
						</div>
					</ModalBody>
				</Modal>
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
			{toggleProduct === !false ? (
				<section>
					<CompanyProductCard />
				</section>
			) : null}
		</div>
	)
}

export default CompanyPRCard
