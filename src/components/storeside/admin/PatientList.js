import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPatients } from '../../../redux/actions'
import PatientCard from './PatientCard'
import AdminNav from './AdminNav'
import StoreNav from '../clerk/StoreNav'
import { Row, Input } from 'reactstrap'

const PatientList = () => {
	const role = localStorage.getItem('role')
	const patients = useSelector((state) => state.patients)
	const dispatch = useDispatch()
	const [search, setSearch] = useState('')
	const url = window.location.href

	useEffect(() => {
		dispatch(getPatients())
	}, [dispatch])

	const filteredPatients = patients.filter((info) => {
		return info.fullName.toLowerCase().includes(search.toLowerCase())
	})

	const handleChange = (e) => {
		setSearch(e.target.value)
	}

	return (
		<div>
			{role === 'admin'? url.match(/admin-tools/gi)? null : <AdminNav/> : <StoreNav/>}
			<form>
				<Input bsSize='sm' placeholder='Search...' onChange={handleChange} type='search' name='search' value={search} />
			</form>
			<Row>
			{filteredPatients.map((info, index) => {
				return (
					<PatientCard
						key={index}
						name={info.fullName}
						email={info.email}
						phone={info.phone}
            role={info.role}
            card={info.card}
						user_id={info.user_id}
						role_id={info.patient_id}
					/>
				)
			})}
			</Row>
		</div>
	)
}

export default PatientList
