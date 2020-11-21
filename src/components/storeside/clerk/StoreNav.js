import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../../../index'
import { Button } from 'reactstrap'

const StoreNav = () => {
  const role = localStorage.getItem('role')

  const logOut = () => {
			localStorage.removeItem('token')
			localStorage.removeItem('role')
			history.push('/login')
		}
  return (
    <div className='App-header'>
      <Link to='/patientRegister'><Button color='success' size='sm'>Add New Patient</Button></Link>
      <Link to='/patientList'><Button color='success' size='sm'>Existing Patients</Button></Link>

      <Link to='/form_center'><Button color='success' size='sm'>Form Center</Button></Link>
      {role === 'admin' ? <Link to='/admin-tools'><Button color='success' size='sm'>Admin Tools</Button></Link> :
      <Button color='danger' size='sm' onClick={logOut}>LogOut</Button>
      }
    </div>
  )
}

export default StoreNav
