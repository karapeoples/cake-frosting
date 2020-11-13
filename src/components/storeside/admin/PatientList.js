import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPatients } from '../../../redux/actions'
import PatientCard from './PatientCard'

const PatientList = () => {
	const patients = useSelector((state) => state.patients)
	const dispatch = useDispatch()
	const [search, setSearch] = useState('')

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
			<form>
				<input placeholder='Search...' onChange={handleChange} type='search' name='search' value={search} />
			</form>
			{filteredPatients.map((info, index) => {
				return (
					<PatientCard
						key={index}
						name={info.fullName}
						email={info.email}
            role={info.role}
            card={info.card}
						user_id={info.user_id}
						role_id={info.patient_id}
					/>
				)
			})}
		</div>
	)
}

export default PatientList
