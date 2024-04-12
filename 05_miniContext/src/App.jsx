import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    
    <UserContextProvider>
        {/* accessing the `UserContextProvider` method */}
        {/* in this place written every component will have access to the variable `UserContextProvider`*/}

      <Login/>
      <Profile/>
          
      </UserContextProvider>

    
  )
}

export default App
