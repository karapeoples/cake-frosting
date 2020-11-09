import React from 'react'
import { Route, Switch } from 'react-router'
import StoreRoute from '../utils/StoreRoute'
import PatientRoute from '../utils/PatientRoute'
import AdminRoute from '../utils/AdminRoute'
import LandingPage from '../components/LandingPage'
import AdminDash from '../components/storeside/admin/AdminDash'
import Order from '../components/patientside/Order'
import PatientRegister from '../components/forms/PatientRegister'
import ClerkRegister from '../components/forms/ClerkRegister'
import AdminRegister from '../components/forms/AdminRegister'
import Login from '../components/forms/Login'
import placeholder from '../components/storeside/placeholder'

const Routes = () => {
	return (
		<div>
			<Switch>
				<AdminRoute  path='/admin-tools' component={AdminDash} />
				<AdminRoute path='/clerk' component={ClerkRegister} />
				<StoreRoute path='/store' component={placeholder} />
				<PatientRoute path='/cart' component={Order} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={PatientRegister} />
				<Route path='/admin' component={AdminRegister} />
				<Route exact path='/' component={LandingPage} />
			</Switch>
		</div>
	)
}

export default Routes
