import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClerks } from '../../../redux/actions'
import ClerkCard from './ClerkCard'
import { Row, Input } from 'reactstrap'

const ClerkList = () => {
	const clerks = useSelector((state) => state.clerks)
	const dispatch = useDispatch()
	const [search, setSearch] = useState('')

	useEffect(() => {
		dispatch(getClerks())
	}, [dispatch])

	const filteredClerks = clerks.filter((info) => {
		return (
			info.fullName.toLowerCase().includes(search.toLowerCase())
		)
  })

  const handleChange = (e) => {
			setSearch(e.target.value)
  }


	return (
		<div>
			<form>
				<Input bsSize='sm' placeholder='Search...' onChange={handleChange} type='search' name='search' value={search} />
			</form>
			<Row>
			{filteredClerks.map((info, index) => {
				return (
					<ClerkCard
						key={index}
						name={info.fullName}
						email={info.email}
						phone={info.phone}
						role={info.role}
						user_id={info.user_id}
						role_id={info.clerk_id}
					/>
				)
			})}
			</Row>
		</div>
	)
}

export default ClerkList
