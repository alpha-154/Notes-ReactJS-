import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    //to access the username through (accessing data)
    const {user} = useContext(UserContext)

   if(!user) return <div>Please Login</div>

   return <div>Welcome {user.username}</div>
}

export default Profile
