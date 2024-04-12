import React , {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

//useContext hook helps to fetch data form the UserContext

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    //to set the username through setUsername function(sending data)
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
          e.preventDefault()
          setUser({username,password})
    }
  return (
    <div>

        <h2>Login</h2>

        <input type="text" 
         value={username}
         //here, onChange event handle to update the `username` variable after it changes
         onChange={(e) => setUsername(e.target.value)}
         placeholder='username' />
        {" "}
        <input type="text" 
         value={password}
         //here, onChange event handles to update the `password` variable after it changes
         onChange={(e) => setPassword(e.target.value)}
         placeholder='password' />

        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login
