import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='App-header'>
      <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
    </div>
  )
}

export default LandingPage
