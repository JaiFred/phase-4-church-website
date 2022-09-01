import './App.css';
import AuthNavBar from './AuthNavBar';
import react, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes, Navigate } from 'react-router-dom'

import BulletinContainer from './BulletinContainer';
import Homepage from './Homepage';
import AboutPage from './AboutPage';


function AuthenticatedApp({ currentMember, setCurrentMember }){

  const [showBulletins, setShowBulletins] = useState ([])

  console.log(setCurrentMember)
  

    const navigate = useNavigate()


    useEffect(() => {
      fetch(`/bulletins`, {
        credentials: 'include'
      })
      .then(res => res.json())
      .then((bulletins) => setShowBulletins(bulletins))
    },[])

    function handleDeleteBulletin(deletedID) {
      // console.log(deletedID)
      const updatedBulletinArray = showBulletins.filter(
        (bulletin) => bulletin.id !== deletedID
        
      );
      setShowBulletins(updatedBulletinArray);
    }


    // console log to test whether we're inside member session
    console.log("made it")  

  const handleLogout = () => {
      fetch(`http://localhost:3000/logout`, {
        method: 'DELETE',
        credentials: 'include'
      })
      .then(res => {
        if (res.ok) {
          setCurrentMember(null)
          navigate('http://localhost:3000/', {replace:false})
        }
      })
    }

  return(
    <div>
      <AuthNavBar 
      setCurrentUser={setCurrentMember}
      currentUser={currentMember}
      handleLogout={handleLogout}/>
      <Routes>
      <Route path="/bulletins" element={<BulletinContainer showBulletins={showBulletins} setShowBulletins={setShowBulletins}/>}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/login" element={<Navigate replace to="/"/>}/>
      </Routes>

    </div>
  )

}

export default AuthenticatedApp