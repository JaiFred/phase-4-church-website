import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'

import React, { useState, useEffect } from 'react'

function App() {
  const [currentMember, setCurrentMember] = useState("")
  const [authChecked, setAuthChecked] = useState(false)

  console.log(currentMember)
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
        console.log(authChecked)
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