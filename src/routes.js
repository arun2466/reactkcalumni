import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import MyProfile from './Containers/MyProfile'
import MyBatchmates from './Containers/MyBatchmates'
import NotFound from './Containers/NotFound'

export const routes = (
  <Switch>
    <Redirect exact from="/" to="/my-profile" />
    <Route exact path="/my-profile" component={MyProfile} />
    <Route exact path="/my-batchmates" component={MyBatchmates} />
    <Route component={NotFound} />
  </Switch>
)

export default routes