import './App.css';
import NavBar from './NavBar';
import react, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import BulletinContainer from './BulletinContainer';


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
        <BulletinContainer showBulletins={showBulletins} setShowBulletins={setShowBulletins} handleDeleteBulletin={handleDeleteBulletin}/>
      </div>
    )

}

export default AuthenticatedApp