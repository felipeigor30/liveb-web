import React from 'react'
import { Button } from 'react-bootstrap'

import Dashboard from '../components/dashboard'
import SignUp from '../components/signup'
import ChoosePlan from '../components/choosePlan'
import PlanDetail from '../components/choosePlan/planDetail'
import PlanDetail500 from '../components/choosePlan/planDetail500k'

import Login from '../components/login'
import ForgotPass from '../components/forgotPass'
import NotFound from '../components/notfound'
import Profile from '../components/profile'
import Contract from '../components/contract'
import Support from '../components/support'
import { AuthProvider } from '../context/authContext.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { RiWhatsappFill } from 'react-icons/ri'

import PrivateRoute from './privateRoute'
import './styles.css'



export default function RouterProvider() {




  return (
    <>
      <a href='https://web.whatsapp.com/send?phone=5516997040044' className="float" >
        <RiWhatsappFill style={{ fontSize: '2rem', marginLeft: '10px', marginRight: '10px' }} />
      </a>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/" component={Dashboard} exact />
            <PrivateRoute path="/dashboard" component={Dashboard} exact />
            <PrivateRoute path="/profile" component={Profile} exact />
            <Route path="/signup" component={SignUp} exact />
            <Route path="/forgot-pass" component={ForgotPass} exact />
            <PrivateRoute path="/plan" component={ChoosePlan} exact />
            <PrivateRoute path="/plan/ZQpjks7iBMhDtDwPLiuY" component={PlanDetail} exact />
            <PrivateRoute path="/plan/ZQpjks7iBMhDtDwPLiuY/contract" component={Contract} exact />
            <PrivateRoute path="/plan/ZQpjks7iBM" component={PlanDetail500} exact />
            <PrivateRoute path="/plan/ZQpjks7iBM/contract" component={Contract} exact />

            <PrivateRoute path="/support" component={Support} exact />
            <Route path="/login" component={Login} />
            <PrivateRoute component={NotFound} />

          </Switch>
        </AuthProvider>
      </Router>
    </>
  )
}
