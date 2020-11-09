import React from 'react'
import {Link} from 'react-router-dom'
import { history } from '../../../index'

const AdminNav = () => {
  const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('role')
    localStorage.removeItem('user_id')
    history.push('/login')
}
  return (
    <div className='App-header'>
      <div>
      <button onClick={logout}> Log Out</button>
      </div>
      <div>
        <Link to='/clerk'><button>Make Clerk</button></Link>
      </div>
    </div>
  )
}

export default AdminNav
