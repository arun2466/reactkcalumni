import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './Containers/Home'
import Login from './Containers/Login'
import SignUp from './Containers/SignUp'

import MyProfile from './Containers/MyProfile'
import MyBatchmates from './Containers/MyBatchmates'
import NotFound from './Containers/NotFound'

export const routes = (
  <Switch>
    <Redirect exact from="/" to="/home" />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/my-profile" component={MyProfile} />
    <Route exact path="/my-batchmates" component={MyBatchmates} />
    <Route component={NotFound} />
  </Switch>
)

export default routes