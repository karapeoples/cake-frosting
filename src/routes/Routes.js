import React from 'react'
import { Route, Switch } from 'react-router'
import StoreRoute from '../utils/StoreRoute'
import PatientRoute from '../utils/PatientRoute'
import AdminRoute from '../utils/AdminRoute'
import LandingPage from '../components/LandingPage'
import AdminDash from '../components/storeside/admin/AdminDash'
import Order from '../components/patientside/Order'
import PatientRegister from '../components/forms/userforms/PatientRegister'
import ClerkRegister from '../components/forms/userforms/ClerkRegister'
import AdminRegister from '../components/forms/userforms/AdminRegister'
import Login from '../components/forms/userforms/Login'
import StoreDash from '../components/storeside/clerk/StoreDash'
import PatientList from '../components/storeside/admin/PatientList'
import FormCenter from '../components/storeside/clerk/FormCenter'

const Routes = () => {
	return (
		<div>
			<Switch>
				<AdminRoute  path='/admin-tools' component={AdminDash} />
				<AdminRoute path='/clerk' component={ClerkRegister} />
				<StoreRoute path='/store-dash' component={StoreDash} />
				<StoreRoute path='/patients' component={PatientList}/>
				<StoreRoute path='/form_center' component={FormCenter}/>
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
