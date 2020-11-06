import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PatientRoute = ({ component: Component, ...props }) => {
  const role = localStorage.getItem('role')
  const token = localStorage.getItem('token')
	return (
		<Route
			{...props}
			render={() => {
				if (token && (role === 'patient')) {
					return <Component />
				} else {
					return <Redirect to='/' />
				}
			}}
		/>
	)
}

export default PatientRoute
