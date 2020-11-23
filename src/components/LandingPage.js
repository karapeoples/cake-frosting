import React, { useState, useEffect } from 'react'
import { history } from '../index'
import {Modal, ModalBody, Button} from 'reactstrap'

const LandingPage = async() => {
  const [legal, setLegal]= useState(false)
	const yes = (e) => {
		e.preventDefault()
		await localStorage.setItem('is_Legal', true)
    history.push('/products')
    setLegal(true)
	}

	const no = (e) => {
    alert('You must be over 18 to view this site')
    localStorage.setItem('is_Legal', false)
	}

	const toggle = () => {
		setLegal(!legal)
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
						src='https://i.cbc.ca/1.4083484.1541030505!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/pot-shop.JPG'
						alt='store'
					/>
				</div>
				<div className='App-header'>WELCOME TO STORE NAME HERE</div>
				<Modal isOpen={legal} toggle={toggle}>
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
