import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
import Login from './Login'

import React, { useState, useEffect } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

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
        }
        // } else {
        //   setAuthChecked(true)
        // }
        // console.log(authChecked)
     })
  }, [])
  
  //{return <div></div>}

  if(!currentMember) return <Login setCurrentMember={setCurrentMember} />
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="*" element={currentMember == null ? <Navigate to="/login" replace/> : <Navigate to="/" replace/>} />
      <Route path="/" element={<Login currentMember={currentMember} setCurrentMember={setCurrentMember}/>} />
      <Route path="/home"/>
    </Routes>
    </BrowserRouter>
      
      {/* { currentMember ? (
      
      <AuthenticatedApp
          setCurrentMember={setCurrentMember}
          currentMember={currentMember}
          />
    
        ):(

          
      <UnauthenticatedApp
          setCurrentMember={setCurrentMember}
          />
          
        )
      } */}
    </div>
  )
}

export default App