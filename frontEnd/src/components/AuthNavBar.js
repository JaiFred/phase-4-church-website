import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import "./styles/navBar.css"

function AuthNavBar({setCurrentMember, currentMember, handleLogout}){

  
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleUpload = (result) => {
      const body = {
        profile_picture_url: result.info.secure_url,
        profile_picture_thumbnail_url: result.info.eager[0].secure_url
      }
      fetch('/me', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then(member => {
          console.log(member);
          setCurrentMember(member)
        })
    }
    const profilePic = () => {
      if (currentMember.profile_picture_thumbnail_url) {
        return (
          <img
            src={currentMember.profile_picture_thumbnail_url}
            alt={currentMember.username}
            className="rounded-full ml-auto"
          />
        )
      } else {
        return `Logged in as ${currentMember.username}`
      }
      
    }
  
    return (
      <nav className="flex items-center justify-between text-2xl border-black border-b-2 pb-2 mb-4">
        <div className="navContainer">
          <NavLink className="pr-6 py-6" to="/">Home</NavLink>
          <NavLink className="pr-2 py-6" to="/bulletins">Bulletin</NavLink>
          <NavLink className="pr-2 py-6" to="/about">About</NavLink>
          
          <button  onClick={handleLogout}>Logout</button>
        </div>
        
      </nav>
    )
  
}

export default AuthNavBar