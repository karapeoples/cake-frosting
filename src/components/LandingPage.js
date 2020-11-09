import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('role')
  localStorage.removeItem('user_id')
}

  return (
    <div>
    <div className='App-header'>
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
      </div>
      <button onClick={logout}>LogOut</button>
    </div>
  )
}

export default LandingPage
