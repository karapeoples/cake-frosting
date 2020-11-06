import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const StoreRoute = ({ component: Component, ...props }) => {
	const token = localStorage.getItem('token')
	const role = localStorage.getItem('role')
	return (
		<Route
			{...props}
			render={() => {
				if (token && (role === 'admin' || role === 'clerk')) {
					return <Component />
				} else {
					return <Redirect to='/' />
				}
			}}
		/>
	)
}

export default StoreRoute
