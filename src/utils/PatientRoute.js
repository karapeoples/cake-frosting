import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PatientRoute = ({ component: Component, ...props }) => {
  const is_Legal = localStorage.getItem('is_Legal')
	return (
		<Route
			{...props}
			render={() => {
				if (is_Legal === 'true') {
					return <Component />
				} else {
					return <Redirect to='/' />
				}
			}}
		/>
	)
}

export default PatientRoute
