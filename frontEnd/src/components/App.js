import Login from './Login'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

import { BrowserRouter, Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import React, { useState, useEffect } from 'react'


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
          setAuthChecked(false)
        }
      })
  }, [])

  if(!authChecked) { return <Login onLogin={setCurrentMember} />}
  return (
    <BrowserRouter> 
      <Router>
        { currentMember ?(
        
        <AuthenticatedApp
            setCurrentMember={setCurrentMember}
            currentMember={currentMember}
            />
          
          ):(
        <UnauthenticatedApp
            setCurrentMember={setCurrentMember}
            />
          )
        }
      </Router>
    </BrowserRouter>
   
  )
}

export default App