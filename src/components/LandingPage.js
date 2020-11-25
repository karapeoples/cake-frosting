import React, { useState, useEffect } from 'react'
import { history } from '../index'
import LandingPic from '../images/open_landing.webp'
import {Modal, ModalBody, Button} from 'reactstrap'

const LandingPage = () => {
  const [legal, setLegal]= useState(false)
	const yes = async(e) => {
		e.preventDefault()
		await localStorage.setItem('is_Legal', true)
    history.push('/products')
    setLegal(true)
	}

	const no = (e) => {
    alert('You must be over 21 to view this site')
    localStorage.setItem('is_Legal', false)
	}


	useEffect(() => {
		setLegal(!legal)
		//eslint-disable-next-line
	}, [setLegal])
	return (
		<div>

			<div>
				<div>
					<img
						src={LandingPic}
						alt='store'
					/>
				</div>
				<div className='App-header'><h1>WELCOME TO STORE NAME HERE</h1></div>
				<Modal isOpen={legal}>
				<ModalBody style={{ margin: '3% auto' }}>
					<h3>Are you 21 or Over?</h3>
					<div style={{ margin: '3% auto' }}>
						<Button color='success' size='sm' onClick={yes}>
							Yes
						</Button>
						<Button color='danger' size='sm' onClick={no}>
							No
						</Button>
					</div>
				</ModalBody>
			</Modal>
			</div>
		</div>
	)
}

export default LandingPage
