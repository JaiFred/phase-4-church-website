import React, { useState, useEffect } from 'react'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

import { BrowserRouter, Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './Login'

function App() {
  const [currentMember, setCurrentMember] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3000/me')
      .then(res => {
        if (res.ok) {
          res.json().then((member) => {
            setCurrentMember(member)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [])

  if(!authChecked) { return <Login onLogin={setCurrentMember} />}
  return (
    <BrowserRouter> 
    <Router>
    <Route path="/" element={<App/>} />
      
    </Router>
    
    </BrowserRouter>
   
  )
}

export default App