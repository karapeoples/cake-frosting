import React from 'react'
import { Link } from 'react-router-dom'
import {history} from '../../../index'

const StoreNav = () => {
  const role = localStorage.getItem('role')

  const logOut = () => {
			localStorage.removeItem('token')
			localStorage.removeItem('role')
			history.push('/login')
		}
  return (
    <div style={{display: 'flex', flexDirection:'column'}}>
      <Link to='/patients'><button>Patients</button></Link>
      <Link to='/form_center'><button>Form Center</button></Link>
      <button>Transactions</button>
      {role === 'admin' ? <Link to='/admin-tools'><button>Admin Board</button></Link> :
        <button onClick={logOut}>LogOut</button>
      }
    </div>
  )
}

export default StoreNav
