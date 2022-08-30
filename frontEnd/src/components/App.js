import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

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
          setAuthChecked(true)
        }
      })
  }, [])

  if(!authChecked) { return <div></div>} //<Login onLogin={setCurrentMember} />}
  return (
      <div>
        { currentMember ? (
        
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
      </div>
   
  )
}

export default App