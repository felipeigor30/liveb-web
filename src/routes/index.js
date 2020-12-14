import React from 'react'


import Dashboard from '../components/dashboard'
import SignUp from '../components/signup'
import ChoosePlan from '../components/choosePlan'
import BuyShares from '../components/buyShares'
import Login from '../components/login'
import NotFound from '../components/notfound'
import Profile from '../components/profile'
import Contract from '../components/contract'
import Support from '../components/support'
import { AuthProvider } from '../context/authContext.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import PrivateRoute from './privateRoute'
import './styles.css'



export default function RouterProvider() {




  return (
    <>
      <Router>

        <AuthProvider>



          <Switch>

            <PrivateRoute path="/" component={Dashboard} exact />
            <PrivateRoute path="/dashboard" component={Dashboard} exact />
            <PrivateRoute path="/profile" component={Profile} exact />
            <Route path="/signup" component={SignUp} exact />
            <PrivateRoute path="/plan" component={ChoosePlan} exact />
            <PrivateRoute path="/shares" component={BuyShares} exact />
            <PrivateRoute path="/contract" component={Contract} exact />
            <PrivateRoute path="/support" component={Support} exact />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />

          </Switch>
        </AuthProvider>
      </Router>
    </>
  )
}
