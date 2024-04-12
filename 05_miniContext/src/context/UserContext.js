import React from 'react'

//this method works like useState() method. Every createContext() method returns a `provider`
const UserContext = React.createContext()

//we'll wrap up every components with this `UserContext` so that every components get access to that.
export default UserContext;