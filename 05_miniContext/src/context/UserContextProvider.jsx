import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
   //whatever data gained from api,can be stored in this state & then can get pass in the `value` variable
    const [user , setUser] = React.useState(null)

    return(

        //here we're wrapping all the components within the `UserContext` variable(that's why we've taked a .jsx file for it)
        //we've to give parameters to the provider
        <UserContext.Provider value={{user , setUser}}>

            {children}
        </UserContext.Provider>
        
    )

}

export default UserContextProvider