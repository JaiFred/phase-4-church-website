import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'

function UnauthenticatedApp({ setCurrentMember }) {
  return (
    <div className="App max-w-5xl">
    <Navbar
        setCurrentMember={setCurrentMember}
      />
    <Switch>
      <Route exact path="/">
        <Login setCurrentMember={setCurrentMember} />
      </Route>
      <Route exact path="/signup">
        <Signup setCurrentMember={setCurrentMember}/>
      </Route>
      <Redirect to="/" />
    </Switch>
    </div>
  )
}

export default UnauthenticatedApp