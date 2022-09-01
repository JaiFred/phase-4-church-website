import Login from './Login'
import NavBar from './NavBar'
import Homepage from './Homepage'
import {Route, Routes, Navigate} from "react-router-dom"
import AboutPage from './AboutPage'

function UnauthenticatedApp({setCurrentMember}){

    console.log(setCurrentMember)
    return(
        <div>
            <NavBar/>
            
            <Routes>
      {/* <Route path="/bulletins" element={<BulletinContainer showBulletins={showBulletins} setShowBulletins={setShowBulletins}/>}/> */}
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/login" element={<Login setCurrentMember={setCurrentMember}/>}/>
      </Routes>
        </div>
    )
}
export default UnauthenticatedApp