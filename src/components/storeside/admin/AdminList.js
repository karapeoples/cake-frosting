import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdmins } from '../../../redux/actions'
import AdminCard from './AdminCard'

const AdminList = () => {
	const admins = useSelector((state) => state.admins)
	const dispatch = useDispatch()
	const [search, setSearch] = useState('')

	useEffect(() => {
		dispatch(getAdmins())
	}, [dispatch])

	const filteredAdmins = admins.filter((info) => {
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
				<input placeholder='Search...' onChange={handleChange} type='search' name='search' value={search} />
			</form>
			{filteredAdmins.map((info, index) => {
				return (
					<AdminCard
						key={index}
						name={info.fullName}
						email={info.email}
						role={info.role}
						user_id={info.user_id}
						role_id={info.admin_id}
					/>
				)
			})}
		</div>
	)
}

export default AdminList
