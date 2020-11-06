import React from 'react'
import { Route, Switch } from 'react-router'
import PrivateRoute from '../utils/PrivateRoute'
import LandingPage from '../components/LandingPage'
import Placement from '../components/storeside/admin/Placement'
import Order from '../components/patientside//Order'
import Holder from '../components/storeside/clerk/Holder'
import PatientRegister from '../components/forms/PatientRegister'
import ClerkRegister from '../components/forms/ClerkRegister'
import AdminRegister from '../components/forms/AdminRegister'

const Routes = () => {
  return (
    <div>
      <Switch>

      <Route path='/cart' component={Order}/>
      <Route exact path='/' component={LandingPage} />
      <Route path='/register' component={PatientRegister} />

      </Switch>

      <Switch>
      <PrivateRoute path='/admin-tools' component={Placement}/>
      <PrivateRoute path='/clerk' component={ClerkRegister} />
      <Route path='/admin' component={AdminRegister} />
      <Route path='/login' component={Login} />
      </Switch>
    </div>
  )
}

export default Routes
