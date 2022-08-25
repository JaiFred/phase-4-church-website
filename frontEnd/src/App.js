import React, { useState, useEffect } from 'react'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
import { BrowserRouter as Router } from 'react-router-dom'

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

  if(!authChecked) { return <div></div>}
  return (
    <Router>
      {currentMember ? (
          <AuthenticatedApp
            setCurrentMember={setCurrentMember}
            currentMember={currentMember}
          />
        ) : (
          <UnauthenticatedApp
            setCurrentMember={setCurrentMember}
          />
        )
      }
    </Router>
  )
}

export default App