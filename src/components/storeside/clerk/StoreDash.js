import React, { useState } from 'react'
import StoreNav from './StoreNav'

const StoreDash = () => {
  const [openNav, setOpenNav] = useState(false)

  const toggleNav = () => {
    openNav === false ? setOpenNav(!false): setOpenNav(false)
  }
   
  return (
    <div>
      <button onClick={toggleNav}>Tools</button>
      {openNav === !false ?
      <div>
        <StoreNav/>
      </div>
      :null}
    </div>
  )
}

export default StoreDash
