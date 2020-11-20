import React from 'react'
import {Link} from 'react-router-dom'
import { history } from '../../../index'
import {Button} from 'reactstrap'

const AdminNav = () => {
  const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('role')
  history.push('/login')
}
  return (
    <div className='App-header'>
      <Link to='/patientRegister'><Button color='success' size='sm'>Add Patient</Button></Link>
      <Link to='/clerk'><Button color='success' size='sm'>Make Clerk</Button></Link>
      <Link to='/store-dash'><Button color='success' size='sm'>Store</Button></Link>
      <Button onClick={logout} color='danger' size='sm'> Log Out</Button>
    </div>
  )
}

export default AdminNav
