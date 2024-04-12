import { useEffect } from "react";
import { Navigate , useNavigate } from "react-router-dom";

//useNavigate() hook is usually used to redirect the user to his selected webpage after submit a form 
//below will simulate something like that with the use of setInterval() function
// 'Navigate' component instantly direct to the route declare in its 'to' component 
//if user enters this page then it'll navigate the user directly to the home page

export function NotFound(){
  const navigate = useNavigate()
  //this hook will return a function to the navigate variable
  
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/')
    }, 1000)
  }, [])
    return (
        <>
           {/* <Navigate to={'/'} /> */}
           <h1>Error-404!!!</h1>
        </>
         
    )
}