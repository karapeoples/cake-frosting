import React from 'react'
import { Link } from 'react-router-dom'
import {history} from '../index'

const LandingPage = () => {
  const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('role')
  history.push('/login')
}

  return (
    <div>
    <div className='App-header'>
      <Link to='/'>Home</Link>
      <Link to='/register'>Patient Register</Link>
      </div>
      <button onClick={logout}>LogOut</button>
    </div>
  )
}

export default LandingPage
