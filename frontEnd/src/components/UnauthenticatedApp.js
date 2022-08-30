import Login from './Login'


function UnauthenticatedApp({setCurrentMember}){
    return(
        <div>
            <Login setCurrentMember={setCurrentMember}></Login>
            
        </div>
    )
}
export default UnauthenticatedApp