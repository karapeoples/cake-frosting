import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import ProductFlower from './ProductFlower'
import ProductInHouse from './ProductInHouse'
import ProductPreRoll from './ProductPreRoll'

const Products = () => {
  return (
    <div>
      <nav>
      <NavLink to='/products/flowers'>  Flowers  </NavLink>
      <NavLink to='/products/inHouse'>  In House Pre Rolls  </NavLink>
      <NavLink to='/products/preRoll'>  Company Pre Rolls  </NavLink>
      </nav>
    <div>
      <Route  path='/products/flowers' component={ProductFlower} />
			<Route path='/products/inHouse' component={ProductInHouse} />
			<Route path='/products/preRoll' component={ProductPreRoll} />
      </div>
    </div>
  )
}

export default Products