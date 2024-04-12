import { useState , useCallback , useEffect , useRef} from 'react'
import './App.css'

function App() {

  //setting up the `useStates` hooks for `State Management`
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");
  //setting up the `useRef` hook
  const passwordRef = useRef(null);
  
  // In React, when a component renders, its function components are 
  // called, and all the functions declared inside those components 
  // are created again. This happens even if the component re-renders 
  // due to state or prop changes.
  // For instance, if you don't use useCallback(), a new instance of 
  // the function is created every time the component renders, even if
  // the component's state or props haven't changed. This can lead to 
  // performance issues, especially if you're passing these functions 
  // as props to child components, as it might trigger unnecessary 
  // re-renders in those child components.
  // By using useCallback(), you ensure that the function is only recreated 
  // if its dependencies change, thus optimizing performance by preventing 
  // unnecessary re-renders caused by the recreation of the function.
  // In summary, useCallback() is used to memoize functions in React, preventing 
  // unnecessary recreations of those functions on each render, thus optimizing 
  // performance.
 

  const passwordGenerator = useCallback( () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numberAllowed) str+= "0123456789";
      if(charAllowed) str+= "!@#$%^&*-_+=[]()~`";

      for (let i = 1 ; i <= length; i++) {
          let char = Math.floor(Math.random() * str.length + 1 );
           pass += str.charAt(char);
      }

      setPassword(pass);

     

  },[ length ,numberAllowed , charAllowed , setPassword]);

const copyPasswordToClipboard = useCallback(() => {
  //to let the user know what is they're coping
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,100);

  //So, when window.navigator.clipboard.writeText(password) 
  //is executed, it will attempt to copy the contents of the 
  //password variable to the user's clipboard. 
  
   window.navigator.clipboard.writeText(password);
} , [password])

//`useEffect` used for to run the `passwordGenerator` function each time 
//depending changes on its dependencies

 useEffect( ()=>{
 
      passwordGenerator();
    
 } , [length , numberAllowed , charAllowed , setPassword])

  return (
    <>
       <div className="w-full max-w-md min-h-32 mx-auto shadow-md rounded-lg
        px-4 py-3 my-8 text-orange-500 bg-gray-700">

          <h1 className="text-white text-center mb-3">Password Generator</h1>

          <div className="flex shadow rounded-lg overflow-hidden mb-4">

                <input 
                  type="text" 
                  value={password}
                  className="outline-none w-full py-1 px-3"
                  placeholder="Password"
                  readOnly
                  ref = {passwordRef}
                />

                <button 
                onClick={copyPasswordToClipboard}
                className="outline-none bg-blue-700 text-white
                px-3 py-1 shrink-0">
                  copy
                </button>

          </div>

          <div className="flex text-sm gap-x-3">

            <div className="flex items-center gap-x-1">

                <input 
                type="range" 
                min={6}
                max={100}
                value={length} 
                className="cursor-pointer"
                onChange = { (e) => {setLength(e.target.value)}}
                />
                <label>Length: {length}</label>

            </div>
          
            <div className='flex items-center gap-x-1'>
                <input 
                  type="checkbox" 
                  //  defaultChecked = {numberAllowed} 
                  id = "numberInput" 
                  onChange={ () => {
                    setNumberAllowed( (prev) => 
                      !prev)
                  }}
                />
                <label htmlFor="numberInput"> Numbers </label>
            </div>

            <div className='flex items-center gap-x-1'>
                <input 
                  type="checkbox" 
                  // defaultChecked = {charAllowed} 
                  id = "characterInput" 
                  onChange={ () => {
                    setCharAllowed( (prev) => 
                      !prev)
                  }}
                />
                <label htmlFor="characterInput"> Character </label>
            </div>

          </div>

       </div>

    </>
  )
}

export default App
