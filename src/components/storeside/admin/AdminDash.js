import React from 'react'
import { Link } from 'react-router-dom'
import ClerkList from './ClerkList'

const AdminDash = () => {
  return (
    <div>
      <Link to='/clerk_list'><button>Clerks</button></Link>
      {/* <ClerkList/> */}
    </div>
  )
}

export default AdminDash
