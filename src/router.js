import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import LoginPage from './containers/LoginPage'
import HomePage from './containers/HomePage'

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route component={HomePage} />
      </Switch>
    </Router>
  )
}
