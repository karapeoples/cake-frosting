import React from 'react'
import { Route, Switch } from 'react-router'
import PrivateRoute from '../utils/PrivateRoute'
import LandingPage from '../components/LandingPage'
import Placement from '../components/storeside/admin/Placement'
import Order from '../components/patientside//Order'
import PatientRegister from '../components/forms/PatientRegister'
import ClerkRegister from '../components/forms/ClerkRegister'
import AdminRegister from '../components/forms/AdminRegister'
import Login from '../components/forms/Login'

const Routes = () => {
	return (
		<div>
			<Switch>
				<PrivateRoute path='/admin-tools' component={Placement} />
				<PrivateRoute path='/clerk' component={ClerkRegister} />
				<Route path='/cart' component={Order} />
				<Route path='/register' component={PatientRegister} />
				<Route path='/admin' component={AdminRegister} />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={LandingPage} />
			</Switch>
		</div>
	)
}

export default Routes
