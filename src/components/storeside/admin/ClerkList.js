import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClerks } from '../../../redux/actions'
import ClerkCard from './ClerkCard'

const ClerkList = () => {
	const users = useSelector((state) => state.clerks)
	const dispatch = useDispatch()
	const [search, setSearch] = useState('')

	useEffect(() => {
		dispatch(getClerks())
	}, [dispatch])

	const filteredUsers = users.filter((info) => {
		return (
			info.fullName.toLowerCase().includes(search.toLowerCase()) ||
			info.email.toLowerCase().includes(search.toLowerCase()) ||
			info.role.toLowerCase().includes(search.toLowerCase())
		)
  })

  const handleChange = (e) => {
			setSearch(e.target.value)
  }


	return (
		<div>
			<form>
				<input placeholder='Search...' onChange={handleChange} type='text' name='search' value={search} />
			</form>
			{filteredUsers.map((info, index) => {
				return (
					<ClerkCard
						key={index}
						name={info.fullName}
						email={info.email}
						role={info.role}
						user_id={info.user_id}
						role_id={info.clerk_id}
					/>
				)
			})}
		</div>
	)
}

export default ClerkList
