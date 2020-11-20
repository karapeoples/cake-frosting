import React, { useState } from 'react'
import { history } from '../index'

const LandingPage = () => {
  const [legal, setLegal]= useState(false)
	const yes = (e) => {
		e.preventDefault()
		localStorage.setItem('is_Legal', true)
    history.push('/products')
    setLegal(true)
	}

	const no = (e) => {
    alert('You must be over 18 to view this site')
    localStorage.setItem('is_Legal', false)
	}


	return (
		<div>
			<div className='App-header'>WELCOME TO STORE NAME HERE</div>
			{legal === false ? (
				<div>
				<div>
					<h3>Are you 18 or Over?</h3>
					<button onClick={yes}>Yes</button>
					<button onClick={no}>No</button>
				</div>
				<div>
					<div>
						<img src='https://i.cbc.ca/1.4083484.1541030505!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/pot-shop.JPG' alt='store' />
					</div>
					</div>
				</div>) : null
		}
		</div>
	)
}

export default LandingPage
