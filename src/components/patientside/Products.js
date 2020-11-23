import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import ProductFlower from './ProductFlower'
import ProductInHouse from './ProductInHouse'
import ProductPreRoll from './ProductPreRoll'

const Products = () => {
  return (
			<div>
				<div className='App-header'><h1>WELCOME TO STORE NAME HERE</h1></div>
				<div className='nav'>
					<NavLink to='/products/flowers' className='n-link'>
						Flowers
					</NavLink>
					<NavLink to='/products/inHouse' className='n-link'>
						In House Pre Rolls
					</NavLink>
					<NavLink to='/products/preRoll' className='n-link'>
						Company Pre Rolls
					</NavLink>
				</div>
				<div>
					<Route path='/products/flowers' component={ProductFlower} />
					<Route path='/products/inHouse' component={ProductInHouse} />
					<Route path='/products/preRoll' component={ProductPreRoll} />
				</div>
			</div>
		)
}

export default Products
