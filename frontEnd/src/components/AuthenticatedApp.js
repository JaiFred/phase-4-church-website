import './App.css';
import NavBar from './NavBar';
import BulletinContainer from './BulletinContainer';

import { useEffect } from 'react'
import { Switch, Route, Redirect, useNavigate } from 'react-router-dom'

function AuthenticatedApp({ currentMember, setCurrentMember }){
    const navigate = useNavigate()

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
            
        </div>
    )

}

export default AuthenticatedApp