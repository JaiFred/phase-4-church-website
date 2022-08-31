import './App.css';
import NavBar from './NavBar';
import react, { useState } from 'react';


import BulletinContainer from './BulletinContainer';

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthenticatedApp({ currentMember, setCurrentMember }){

  const [showBulletins, setShowBulletins] = useState ([])
  

    const navigate = useNavigate()


    useEffect(() => {
      fetch(`/bulletins`, {
        credentials: 'include'
      })
      .then(res => res.json())
      .then((bulletins) => setShowBulletins(bulletins))
    },[])

    // function handleDeleteBulletin(deletedID) {
    //   // console.log(deletedID)
    //   const updatedBulletinArray = bulletins.filter(
    //     (bulletins) => bulletin.id !== deletedID
        
    //   );
    //   setShowBulletins(updatedBulletinsArray);
    // }


    // console log to test whether we're inside member session
    console.log("made it")  

    const handleLogout = () => {
        fetch(`/logout`, {
          method: 'DELETE',
          credentials: 'include'
        })
        .then(res => {
          if (res.ok) {
            setCurrentMember(null)
            navigate('/', {replace:false})
          }
        })
      }
    
    return(
      <div>
        <NavBar />
        <BulletinContainer showBulletins={showBulletins} setShowBulletins={setShowBulletins}/>
      </div>
    )

}

export default AuthenticatedApp