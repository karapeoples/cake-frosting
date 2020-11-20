import React from 'react'
import {NavLink, Route} from 'react-router-dom'
import AdminNav from './AdminNav'
import ClerkList from './ClerkList'
import PatientList from './PatientList'
import AdminList from './AdminList'

const AdminDash = () => {


  return (
			<div>
				<AdminNav />
				<div className='nav'>
					<NavLink to='/admin-tools/clerks' className='n-link'>
						Clerks
					</NavLink>
					<NavLink to='/admin-tools/patientList' className='n-link'>
						Patients
					</NavLink>
					<NavLink to='/admin-tools/admins' className='n-link'>
						Admins
					</NavLink>
				</div>
				<div>
					<Route path='/admin-tools/clerks' component={ClerkList} />
					<Route path='/admin-tools/patientList' component={PatientList} />
					<Route path='/admin-tools/admins' component={AdminList} />
				</div>
			</div>
		)
}

export default AdminDash
