import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
import Login from './Login'

import React, { useState, useEffect } from 'react'

function App() {
  const [currentMember, setCurrentMember] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  console.log(currentMember)
  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then(member => {
            setCurrentMember(member)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
        console.log(authChecked)
     })
  }, [])
  
  //{return <div></div>}

  if(!currentMember) <Login setCurrentMember={setCurrentMember} />
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