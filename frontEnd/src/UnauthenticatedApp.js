import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function UnauthenticatedApp({ setCurrentMember }) {
  return (
    <Switch>
      <Route exact path="/">
        <Login setCurrentMember={setCurrentMember} />
      </Route>
      <Route exact path="/signup">
        <Signup setCurrentMember={setCurrentMember}/>
      </Route>
      <Redirect to="/" />
    </Switch>
  )
}

export default UnauthenticatedApp